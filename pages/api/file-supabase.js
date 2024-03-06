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
  const randomId = nanoid(10).toLowerCase();

  switch (method) {
    case 'GET':
      res.status(200).json({ message: 'GET' });
      break;

    case 'POST':
      const data = await formidableFile(req, res);
      const { err, fields, files } = data;
      // console.log(fields.name[0]);
      // console.log(files.file[0]);
      const file = getDataFile(files?.file[0]);
      // console.log(file)
      const filename = files?.file[0]?.originalFilename?.replaceAll(' ', '-');
      // console.log(filename)
      const filenameRandomId = `${randomId}-${filename}`;
      // console.log(filenameRandomId)
      const mimetype = files?.file[0]?.mimetype;
      // console.log(mimetype)
      const size = files?.file[0]?.size;
      // console.log(size)
      const { data: insertFile, error: errorInsertFile } = await supabase.storage
        .from('storage')
        .upload(filenameRandomId, file, {
          upsert: false,
        });
      // console.log(insertFile);
      // {
      //   path: 'anobgocgf6-sample.pdf',
      //   id: 'bbf7f903-89fb-40fc-8762-e33dbb95f55d',
      //   fullPath: 'storage/anobgocgf6-sample.pdf'
      // }
      // console.log(errorInsertFile);
      // {
      //   statusCode: '409',
      //   error: 'Duplicate',
      //   message: 'The resource already exists'
      // }
      let insertRecord = {};
      if (insertFile) {
        const { data: insert, error: errorInsertRecord } = await supabase
          .from('storage')
          .insert({
            name: filenameRandomId,
            url: `${SUPABASE_URL}/${filenameRandomId}`,
            type: mimetype,
            path: filenameRandomId,
            fullpath: insertFile.fullPath,
            size: size,
          })
          .select();
        // console.log(insert);
        // [
        //   {
        //     id: 37,
        //     name: 'anobgocgf6-sample.pdf',
        //     url: 'https://wgvbxfaxfwioadqpyhmb.supabase.co/storage/v1/object/public/storage/anobgocgf6-sample.pdf',
        //     type: 'application/pdf',
        //     created_at: '2024-03-06T16:00:45.198706+00:00',
        //     path: 'anobgocgf6-sample.pdf',
        //     fullpath: 'storage/anobgocgf6-sample.pdf'
        //   }
        // ]
        insertRecord = insert;
        if (errorInsertRecord) {
          res.status(422).json({ message: errorInsertRecord.message });
          return;
        }
      }
      if (errorInsertFile) {
        res.status(409).json(errorInsertFile);
        return;
      }
      res.status(200).json({ data: insertRecord[0], message: 'Success create File' });
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
        res.status(200).json({ message: 'Success delete File' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
