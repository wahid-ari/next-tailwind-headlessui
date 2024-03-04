import { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MoonIcon, PhotographIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import axios from 'axios';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';

import { supabase } from '@/utils/supabase';

import Button from '@/components/Button';
import ButtonOutline from '@/components/ButtonOutline';
import FileInput from '@/components/FileInput';
import BackToTop from '@components/BackToTop';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Section from '@components/Section';
import TocLink from '@components/TocLink';

export default function File() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const InputArrayFormSchema = z
    .array(
      z.object({
        value: z.string().min(1, { message: 'Required' }),
      }),
    )
    .optional();
  const { control, register, watch } = useForm({
    defaultValues: {
      test: [{ value: 'next' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'test',
  });
  const watchValues = watch('test');
  const [values, setValues] = useState([]);
  useEffect(() => {
    setValues(watchValues);
  }, [watchValues]);
  useEffect(() => {
    if (fields.length < 1) append({ value: 'nextsa' });
  }, [append, fields]);
  console.log(values);
  const [valid, setValid] = useState();
  function submitInputArray() {
    const result = InputArrayFormSchema.safeParse(values);
    setValid(result);
    console.log(result);
  }

  const {
    control: controlFile,
    register: registerFile,
    watch: watchFile,
  } = useForm({
    defaultValues: {
      file: [{ value: '' }],
    },
  });
  const {
    fields: fieldsFile,
    append: appendFile,
    remove: removeFile,
  } = useFieldArray({
    control: controlFile,
    name: 'file',
  });
  const watchFiles = watchFile('file');
  const [files, setFiles] = useState([]);
  useEffect(() => {
    setFiles(watchFiles);
  }, [watchFiles]);
  console.log(files);
  const [filesURL, setFilesURL] = useState([]);
  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = watchFile((value, { name, type }) => {
      // console.log(value, name, type)
      console.log(value.file);
      const newFilesURLs = [];
      value.file.forEach((file) => {
        if (file.value != '' && file.value.length != 0) {
          // handle if new field added but user not yet selecting image
          newFilesURLs.push(URL.createObjectURL(file?.value[0]));
        }
      });
      setFilesURL(newFilesURLs);
    });
    return () => subscription.unsubscribe();
  }, [watchFile]);
  console.log(filesURL);
  const InputArrayFileFormSchema = z
    .array(
      z.object({
        name: z.string().min(1, { message: 'Required Image File' }),
      }),
    )
    .optional();
  // const MAX_FILE_SIZE = 1024 * 1024 * 5;
  // const ACCEPTED_IMAGE_MIME_TYPES = [
  //   "image/jpeg",
  //   "image/jpg",
  //   "image/png",
  //   "image/webp",
  // ];
  // const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];
  // const formSchema = z.object({
  //   adImage: z
  //     .any()
  //     .refine((files) => {
  //       return files?.[0]?.size <= MAX_FILE_SIZE;
  //     }, `Max image size is 5MB.`)
  //     .refine(
  //       (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
  //       "Only .jpg, .jpeg, .png and .webp formats are supported."
  //     ),
  // });
  const [validFile, setValidFile] = useState();
  function submitInputArrayFile() {
    const filesToUpload = [];
    files.forEach((item) => {
      filesToUpload.push(item.value[0]);
    });
    console.log(filesToUpload);
    const result = InputArrayFileFormSchema.safeParse(filesToUpload);
    setValidFile(result);
    console.log(result);
  }

  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  }

  const [imageRes, setImageRes] = useState();
  async function handleImageUpload(e) {
    e.preventDefault();
    const imageToUpload = new FormData();
    imageToUpload.append('name', 'name');
    imageToUpload.append('image', image);
    try {
      const res = await axios.post(`/api/image`, imageToUpload);
      console.log(res);
      if (res.status == 200) {
        setImageRes(res.data);
        setImage(null);
        setImageURL(null);
      }
    } catch (error) {
      console.log(error);
    }
    // new Response(imageToUpload).text().then(console.log)
    // const res = await fetch('/api/image', {
    //   method: 'POST',
    //   body: imageToUpload
    // });
    // if (res.status == 200) {
    //   setImage('')
    //   setImageURL('')
    // }
    // const result = await res.json();
    // console.log(result)
  }

  const [bucket, setBucket] = useState(null);
  async function fetchBucket() {
    const { data, error } = await supabase.storage.getBucket('storage');
    console.log(data);
    setBucket(data);
  }

  const [listFile, setListFile] = useState(null);
  async function fetchData() {
    const { data, error } = await supabase.storage.from('storage').list();
    setListFile(data);
    console.log(data);
  }

  const [listFileInsideFolder, setListFileInsideFolder] = useState(null);
  async function fetchDataInsideFolder() {
    const { data, error } = await supabase.storage.from('storage').list('folder');
    setListFileInsideFolder(data);
    console.log(data);
  }

  const [media, setMedia] = useState(null);
  async function fetchMedia() {
    const { data, error } = await supabase.from('storage').select('*');
    setMedia(data);
    console.log(data);
  }

  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    if (!fetched) {
      if (bucket == null) {
        fetchBucket();
      }
      if (listFile == null) {
        fetchData();
      }
      if (listFileInsideFolder == null) {
        fetchDataInsideFolder();
      }
      if (media == null) {
        fetchMedia();
      }
    }
    setFetched(true)
  }, [fetched, bucket, listFile, listFileInsideFolder, media]);

  return (
    <div>
      <Head>
        <title>File Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:px-8'>
          <Section id='components' name='File TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#input-file' text='Input File' />
                <TocLink href='#input-image' text='Input Image' />
              </div>
              <div>
                <TocLink href='#dynamic-input-image' text='Dynamic Input Image' />
                <TocLink href='#dynamic-input' text='Dynamic Input' />
              </div>
            </div>
          </Section>

          <p>all bucket</p>
          <pre className='text-sm'>{JSON.stringify(bucket, null, 2)}</pre>
          <p className='mt-4'>all file and folder inside bucket</p>
          <pre className='text-sm'>{JSON.stringify(listFile, null, 2)}</pre>
          <p className='mt-4'>
            all file and folder inside {'"'}
            <b>folder</b>
            {'"'}
          </p>
          <pre className='text-sm'>{JSON.stringify(listFileInsideFolder, null, 2)}</pre>
          <p className='mt-4'>all Media</p>
          <pre className='text-sm'>{JSON.stringify(media, null, 2)}</pre>
          <table>
            <thead>
              <tr>
                <td className='border px-3 dark:border-neutral-600'>No</td>
                <td className='border px-3 dark:border-neutral-600'>Name</td>
                <td className='border px-3 dark:border-neutral-600'>Preview</td>
                <td className='border px-3 dark:border-neutral-600'>Type</td>
                <td className='border px-3 dark:border-neutral-600'>Path</td>
              </tr>
            </thead>
            <tbody>
              {media?.map((item, index) => (
                <tr key={item.name}>
                  <td className='border px-3 dark:border-neutral-600'>{index + 1}</td>
                  <td className='border px-3 dark:border-neutral-600'>{item.name}</td>
                  <td className='border px-3 dark:border-neutral-600'>
                    <div className='relative h-24 w-24'>
                      <Image alt='image' src={item.url} fill />
                    </div>
                  </td>
                  <td className='border px-3 dark:border-neutral-600'>{item.type}</td>
                  <td className='border px-3 dark:border-neutral-600'>{item.path}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Section id='input-file' name='Input File'></Section>

          <Section id='input-image' name='Input Image'>
            <p>this upload image to imgbb</p>
            <FileInput
              label='File Image'
              accept='.png, .jpg, .jpeg'
              name='file_image'
              inputLabel='Select image (.png, .jpg, .jpeg)'
              value={image ? image.name : ''}
              onChange={handleImageChange}
              icon={<PhotographIcon className='mr-1 h-6 w-6 text-gray-400' strokeWidth='1' />}
            />
            {imageURL && (
              <>
                <div className='relative mb-4 h-36 w-48'>
                  <Image alt='image' src={imageURL} layout='fill' className='rounded-lg' />
                </div>
                <Button onClick={handleImageUpload}>Upload</Button>
              </>
            )}
            {imageRes && (
              <>
                <pre className='mt-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-950'>
                  <code className='text-sm text-neutral-800 dark:text-white'>{JSON.stringify(imageRes, null, 2)}</code>
                </pre>
                <div className='relative mb-4 h-36 w-48'>
                  <Image alt='image' src={imageRes.display_url} layout='fill' className='rounded-lg' />
                </div>
              </>
            )}
          </Section>

          <Section id='dynamic-input-image' name='Dynamic Input Image'>
            {fieldsFile.map((field, index) => (
              <div className='mt-2 flex items-center gap-2' key={field.id}>
                <input
                  {...registerFile(`file.${index}.value`)}
                  type='file'
                  // accept='.pdf'
                  accept='.png, .jpg, .jpeg'
                  className={`
          w-sm rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 
          focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white
        `}
                />
                <ButtonOutline.red
                  // title={`Remove name ${index}`}
                  // aria-label={`Remove name ${index}`}
                  className='!px-1.5 !py-0.5'
                  type='button'
                  onClick={() => removeFile(index)}
                >
                  X
                </ButtonOutline.red>
              </div>
            ))}
            <Button
              type='button'
              variant='outline'
              size='sm'
              className='mt-2'
              onClick={() => appendFile({ value: '' })}
            >
              Add File
            </Button>
            <Button.red type='button' variant='outline' size='sm' className='mx-2 mt-2' onClick={() => removeFile()}>
              Remove All
            </Button.red>
            <Button.green type='button' variant='outline' size='sm' className='mt-2' onClick={submitInputArrayFile}>
              Submit
            </Button.green>
            <pre className='mt-2 w-[340px] rounded-md bg-neutral-100 p-2 dark:bg-neutral-950'>
              <code className='text-sm text-neutral-800 dark:text-white'>{JSON.stringify(files, null, 2)}</code>
            </pre>
            {files.map((i, index) => (
              <p key={index}>{i.value[0]?.name}</p>
            ))}
            <p>valid: {validFile?.success ? 'true' : 'false'}</p>
            {validFile?.error?.issues?.map((m, index) => (
              <p key={index} className='text-red-500'>
                {m.message}
              </p>
            ))}
            {filesURL ? (
              <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
                {filesURL.map((image, id) => (
                  <div key={id} className='relative h-36 w-full md:h-40'>
                    <Image src={image} alt='image' layout='fill' className='rounded-lg' />
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </Section>

          <Section id='dynamic-input' name='Dynamic Input'>
            {fields.map((field, index) => (
              <div className='mt-2 flex items-center gap-2' key={field.id}>
                <input
                  {...register(`test.${index}.value`)}
                  className={`
          w-sm rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-1 
          focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white
        `}
                />
                <ButtonOutline.red
                  // title={`Remove name ${index}`}
                  // aria-label={`Remove name ${index}`}
                  className='!px-1.5 !py-0.5'
                  type='button'
                  onClick={() => remove(index)}
                >
                  X
                </ButtonOutline.red>
              </div>
            ))}
            <Button type='button' variant='outline' size='sm' className='mt-2' onClick={() => append({ value: '' })}>
              Add URL
            </Button>
            <Button.red type='button' variant='outline' size='sm' className='mx-2 mt-2' onClick={() => remove()}>
              Remove All
            </Button.red>
            <Button.green type='button' variant='outline' size='sm' className='mt-2' onClick={submitInputArray}>
              Submit
            </Button.green>
            <pre className='mt-2 w-[340px] rounded-md bg-neutral-100 p-2 dark:bg-neutral-950'>
              <code className='text-sm text-neutral-800 dark:text-white'>{JSON.stringify(values, null, 2)}</code>
            </pre>
            <p>valid: {valid?.success ? 'true' : 'false'}</p>
            {valid?.error?.issues?.map((m, index) => (
              <p key={index} className='text-red-500'>
                {m.message}
              </p>
            ))}
          </Section>

          <div className='fixed bottom-20 right-3 z-10 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-neutral-800 dark:bg-opacity-40 md:right-10'>
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-neutral-800 p-1 text-white transition-all duration-300 ease-in hover:bg-neutral-700'
              >
                <SunIcon />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-gray-100 p-1 transition-all duration-300 ease-in hover:bg-gray-200'
              >
                <MoonIcon />
              </button>
            )}
          </div>

          <BackToTop />
        </main>

        <Footer />
      </Layout>
    </div>
  );
}
