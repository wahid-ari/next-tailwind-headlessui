import { File } from 'buffer';
import fs from 'fs';
import formidable from 'formidable';
import { nanoid } from 'nanoid';

import { supabase } from '@/utils/supabase';

const SUPABASE_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/storage`;

// Important for NextJS!
export const config = {
  api: {
    bodyParser: false,
  },
};

function getDataFile(files) {
  const buffer = fs.readFileSync(files.filepath);
  const arraybuffer = Uint8Array.from(buffer).buffer;
  const file = new File([arraybuffer], files.originalFilename, {
    type: files.mimetype,
  });
  return file;
}

async function formidableFile(req, res) {
  try {
    const data = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });
    return data;
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
    return;
  }
}

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ message: 'GET' });
      break;

    case 'POST':
      const data = await formidableFile(req, res);
      const { err, fields, files } = data;
      // console.log(fields.name[0]);
      // console.log(files.image);
      let insertRecord = [];
      for (const image of files.image) {
        const randomId = nanoid(10).toLowerCase();
        const file = getDataFile(image);
        // console.log(file)
        const filename = image?.originalFilename?.replaceAll(' ', '-');
        // console.log(filename)
        const filenameRandomId = `${randomId}-${filename}`;
        // console.log(filenameRandomId)
        const mimetype = image?.mimetype;
        // console.log(mimetype)
        const fileExt = mimetype.split('/').pop();
        // console.log(fileExt)
        const size = image?.size;
        // console.log(size)
        const { data: insertFile, error: errorInsertFile } = await supabase.storage
          .from('storage')
          .upload(filenameRandomId, file, {
            upsert: false,
          });
        // console.log(insertFile);
        // {
        //   path: 'github-logo.jpg',
        //   id: '4b20ab60-b774-42b0-b1bf-0e4418f57dae',
        //   fullPath: 'storage/github-logo.jpg'
        // }
        // console.log(errorInsertFile);
        // {
        //   statusCode: '409',
        //   error: 'Duplicate',
        //   message: 'The resource already exists'
        // }
        if (errorInsertFile) {
          res.status(409).json(errorInsertFile);
          return;
        }
        if (insertFile) {
          const { data: insert, error: errorInsertRecord } = await supabase
            .from('storage')
            .insert({
              name: filenameRandomId,
              url: `${SUPABASE_URL}/${filenameRandomId}`,
              type: mimetype,
              filetype: fileExt,
              path: filenameRandomId,
              fullpath: insertFile.fullPath,
              size: size,
            })
            .select();
          if (errorInsertRecord) {
            res.status(422).json({ message: errorInsertRecord.message });
            return;
          }
          // console.log(insert);
          // [
          //   {
          //     id: 22,
          //     name: 'github-logo.jpg',
          //     url: 'https://wgvbxfaxfwioadqpyhmb.supabase.co/storage/v1/object/public/storage/github-logo.jpg',
          //     type: 'image/jpeg',
          //     created_at: '2024-03-06T05:55:09.898286+00:00',
          //     path: 'github-logo.jpg',
          //   fullpath: 'storage/github-logo.jpg'
          //   }
          // ]
          if (insert) {
            insertRecord.push(insert[0]);
          }
        }
      }
      res.status(200).json({ data: insertRecord, message: 'Success create Image' });
      break;

    case 'PUT':
      res.status(200).json({ message: 'PUT' });
      break;

    case 'DELETE':
      if (!query.id && !query.name) {
        res.status(422).json({ message: 'Id and Name required' });
        return;
      } else {
        const { error: errorDeleteRecord } = await supabase.from('storage').delete().eq('id', query.id);
        if (errorDeleteRecord) {
          res.status(422).json({ message: errorDeleteRecord.message, detail: errorDeleteRecord.details });
          return;
        }
        const { error: errorDeleteFile } = await supabase.storage.from('storage').remove([query.name]);
        if (errorDeleteFile) {
          res.status(422).json({ message: errorDeleteFile.message, detail: errorDeleteFile.details });
          return;
        }
        res.status(200).json({ message: 'Success delete Image' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
