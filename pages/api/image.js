import formidable from "formidable";
import axios from 'axios';
import fs from "fs";
import { File } from "buffer";

// Important for NextJS!
export const config = {
  api: {
    bodyParser: false,
  },
};

function formidablePromise(
  req
) {
  return new Promise((resolve, reject) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      return resolve({ fields, files });
    });
  });
}

const getDataFile = (files) => {
  const buffer = fs.readFileSync(files.filepath);
  const arraybuffer = Uint8Array.from(buffer).buffer;
  const file = new File([arraybuffer], files.originalFilename, {
    type: files.mimetype,
  });
  return file;
};

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ message: 'GET' });
      break;

    case 'POST':
      try {
        const data = await new Promise((resolve, reject) => {
          const form = formidable();
          form.parse(req, (err, fields, files) => {
            if (err) reject({ err });
            resolve({ err, fields, files });
          });
        });
        const { err, fields, files } = data;
        // const { fields, files } = await formidablePromise();
        // console.log(files.image[0])
        console.log(fields.name[0])
        // console.log(getDataFile(files.image[0]))
        const formData = new FormData();
        formData.append("image", getDataFile(files.image[0]));
        // new Response(formData).text().then(console.log)
        // const response = await axios.post('https://api.imgbb.com/1/upload?key=e4b903696c6e4386438680e89ba50d85', formData
        // );
        // Error: Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream
        // maybe axios cant be used in server
        // console.log(response)
        // wahiid.arii@gmail.com login with google
        const resPos = await fetch(`https://api.imgbb.com/1/upload?key=e4b903696c6e4386438680e89ba50d85`, {
          method: "POST",
          body: formData
        });
        const dataPos = await resPos.json();
        // console.log(resPos)
        // console.log(dataPos)
        if (resPos.status == 200) {
          res.status(200).json(dataPos.data);
        }
      } catch (e) {
        console.log(e)
        return res.status(500).json(e);
      }
      break;

    case 'PUT':
      res.status(200).json({ message: 'PUT' });
      break;

    case 'DELETE':
      res.status(200).json({ message: 'DELETE' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}