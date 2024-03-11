import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MoonIcon, PhotographIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import axios from 'axios';

import { supabase } from '@/utils/supabase';

import Button from '@/components/Button';
import FileInput from '@/components/FileInput';
import Spinner from '@/components/Spinner';
import BackToTop from '@components/BackToTop';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Section from '@components/Section';
import TocLink from '@components/TocLink';

export default function FileSupabase() {
  const router = useRouter();
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  }

  const [imageMultiple, setImageMultiple] = useState();
  const [imageMultipleURL, setImageMultipleURL] = useState();
  function handleImageMultipleChange(e) {
    if (e.target.files) {
      setImageMultiple([...e.target.files]);
      let temp = [...e.target.files];
      let temptImageMultipleURL = [];
      temp.forEach((image) => temptImageMultipleURL.push(URL.createObjectURL(image)));
      setImageMultipleURL(temptImageMultipleURL);
    }
  }

  const [imageMultipleRes, setImageMultipleRes] = useState();
  async function handleImageMultipleUpload(e) {
    e.preventDefault();
    setIsLoading(true);
    const imageToUpload = new FormData();
    imageToUpload.append('name', 'name');
    imageMultiple.forEach((image) => imageToUpload.append('image', image));
    try {
      const res = await axios.post(`/api/supabase-multiple`, imageToUpload);
      // console.log(res);
      if (res.status == 200) {
        setImageMultipleRes(res.data);
        setImageMultiple(null);
        setImageMultipleURL(null);
        setFetched(false);
      }
    } catch (error) {
      console.error(error.response);
    }
    // new Response(imageToUpload).text().then(console.log)
    // const res = await fetch('/api/supabase', {
    //   method: 'POST',
    //   body: imageToUpload
    // });
    // console.log(res);
    // const result = await res.json();
    // if (res.status == 200) {
    //   console.log(result)
    //   setImageRes(result);
    //   setImage(null);
    //   setImageURL(null);
    //   setFetched(false);
    // } else {
    //   console.error(result);
    // }
    setIsLoading(false);
  }

  const [imageRes, setImageRes] = useState();
  async function handleImageUpload(e) {
    e.preventDefault();
    setIsLoading(true);
    const imageToUpload = new FormData();
    imageToUpload.append('name', 'name');
    imageToUpload.append('image', image);
    try {
      const res = await axios.post(`/api/supabase`, imageToUpload);
      // console.log(res);
      if (res.status == 200) {
        setImageRes(res.data);
        setImage(null);
        setImageURL(null);
        setFetched(false);
      }
    } catch (error) {
      console.error(error.response);
    }
    // new Response(imageToUpload).text().then(console.log)
    // const res = await fetch('/api/supabase', {
    //   method: 'POST',
    //   body: imageToUpload
    // });
    // console.log(res);
    // const result = await res.json();
    // if (res.status == 200) {
    //   console.log(result)
    //   setImageRes(result);
    //   setImage(null);
    //   setImageURL(null);
    //   setFetched(false);
    // } else {
    //   console.error(result);
    // }
    setIsLoading(false);
  }

  async function handleDeleteImage(id, name) {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/supabase?id=${id}&name=${name}`);
      // console.log(res);
      if (res.status == 200) {
        setImageRes(null);
        setImage(null);
        setImageURL(null);
        setFetched(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDownloadImage(name) {
    const { data } = supabase.storage.from('storage').getPublicUrl(name, {
      download: true,
    });
    router.push(data.publicUrl);
    // console.log(data.publicUrl);
  }

  const [bucket, setBucket] = useState(null);
  async function fetchBucket() {
    const { data, error } = await supabase.storage.getBucket('storage');
    // console.log(data);
    setBucket(data);
  }

  const [listFile, setListFile] = useState(null);
  async function fetchData() {
    const { data, error } = await supabase.storage.from('storage').list();
    setListFile(data);
    // console.log(data);
  }

  const [listFileInsideFolder, setListFileInsideFolder] = useState(null);
  async function fetchDataInsideFolder() {
    const { data, error } = await supabase.storage.from('storage').list('folder');
    setListFileInsideFolder(data);
    // console.log(data);
  }

  const [media, setMedia] = useState(null);
  async function fetchMedia() {
    const { data, error } = await supabase.from('storage').select('*');
    setMedia(data);
    // console.log(data);
  }

  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    if (!fetched) {
      fetchBucket();
      fetchData();
      fetchDataInsideFolder();
      fetchMedia();
    }
    setFetched(true);
  }, [fetched]);

  return (
    <div>
      <Head>
        <title>Image Supabase Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:px-8'>
          <Section id='components' name='File TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#input-image' text='Input Image' />
                <TocLink href='#input-image-multiple' text='Input Image Multiple' />
              </div>
            </div>
          </Section>

          <p>all bucket</p>
          <div className='overflow-auto'>
            <pre className='text-sm'>{JSON.stringify(bucket, null, 2)}</pre>
          </div>
          <p className='mt-4'>all file and folder inside bucket</p>
          <div className='overflow-auto'>
            <pre className='text-sm'>{JSON.stringify(listFile, null, 2)}</pre>
          </div>
          <p className='mt-4'>
            all file and folder inside {'"'}
            <b>folder</b>
            {'"'}
          </p>
          <div className='overflow-auto'>
            <pre className='text-sm'>{JSON.stringify(listFileInsideFolder, null, 2)}</pre>
          </div>
          <p className='mt-4'>
            all Media Record from <b>Storage</b> table
          </p>
          <div className='overflow-auto'>
            <pre className='text-sm'>{JSON.stringify(media, null, 2)}</pre>
          </div>

          <p className='mt-4'>
            Table of all Media Record from <b>Storage</b> table
          </p>
          <div className='mt-2 overflow-auto'>
            <table className='border-collapse border dark:border-neutral-600'>
              <thead>
                <tr className='border-y dark:border-neutral-600'>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>No</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>Name</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>Preview</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>Type</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>File Type</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>Path</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>Full Path</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>Size</td>
                  <td className='border-x px-3 py-2 dark:border-neutral-600'>Action</td>
                </tr>
              </thead>
              <tbody>
                {media?.map((item, index) => (
                  <tr key={item.name} className='border-y dark:border-neutral-600'>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>{index + 1}</td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>{item.name}</td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>
                      {item.type.startsWith('image') ? (
                        <div className='relative h-12 w-12'>
                          <Image alt='file' src={item.url} fill className='object-cover object-center' />
                        </div>
                      ) : item.type == 'application/pdf' ? (
                        <>
                          <embed title={item.name} src={item.url} width='150' height='150' />
                        </>
                      ) : (
                        <iframe
                          title={item.name}
                          width='150'
                          height='150'
                          frameborder='0'
                          src={`https://docs.google.com/gview?url=${item.url}&embedded=true`}
                        />
                      )}
                    </td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>{item.type}</td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>{item.filetype}</td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>{item.path}</td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>{item.fullpath}</td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>{(item.size / 1024).toFixed(2)} KB</td>
                    <td className='border-x px-3 py-2 dark:border-neutral-600'>
                      <div className='flex items-center gap-1'>
                        <Button.green className='flex items-center' onClick={() => handleDownloadImage(item.name)}>
                          Download
                        </Button.green>
                        <Button.red className='flex items-center' onClick={() => handleDeleteImage(item.id, item.name)}>
                          Delete
                        </Button.red>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='my-2 text-center'>{isLoading && <Spinner.red small />}</div>

          <Section id='input-image' name='Input Image'>
            <p>
              this upload image to <b>Supabase storage</b> via <b>/api/supabase</b>
            </p>
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
                <div className='relative mb-4 h-36 w-36'>
                  <Image alt='image' src={imageURL} layout='fill' className='rounded-lg object-cover object-center' />
                </div>
                <Button className='flex items-center' onClick={handleImageUpload}>
                  {isLoading && <Spinner small className='!h-4 !w-4' />}
                  Upload
                </Button>
              </>
            )}
            {imageRes && (
              <>
                <div className='overflow-auto'>
                  <pre className='mt-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-950'>
                    <code className='text-sm text-neutral-800 dark:text-white'>
                      {JSON.stringify(imageRes, null, 2)}
                    </code>
                  </pre>
                </div>
                <div className='relative my-4 h-36 w-36'>
                  <Image
                    alt='image'
                    src={imageRes?.data?.url}
                    layout='fill'
                    className='rounded-lg object-cover object-center'
                  />
                </div>
              </>
            )}
          </Section>

          <Section id='input-image-multiple' name='Input Image Multiple'>
            <p>
              this upload multiple image to <b>Supabase storage</b> via <b>/api/supabase-multiple</b>
            </p>
            <FileInput
              label='File Image Multiple'
              accept='.png, .jpg, .jpeg'
              name='file_image'
              inputLabel='Select image (.png, .jpg, .jpeg)'
              value={
                imageMultiple
                  ? imageMultiple.map((item, index) => {
                      return (
                        <span key={item.name}>
                          {item.name}
                          {index < imageMultiple.length - 1 && ', '}
                        </span>
                      );
                    })
                  : ''
              }
              onChange={handleImageMultipleChange}
              multiple
              icon={<PhotographIcon className='mr-1 h-6 w-6 text-gray-400' strokeWidth='1' />}
            />
            {imageMultipleURL && (
              <>
                <div className='flex gap-4'>
                  {imageMultipleURL.map((item, index) => (
                    <div key={index} className='relative mb-4 h-36 w-36'>
                      <Image alt='image' src={item} layout='fill' className='rounded-lg object-cover object-center' />
                    </div>
                  ))}
                </div>
                <Button className='flex items-center' onClick={handleImageMultipleUpload}>
                  {isLoading && <Spinner small className='!h-4 !w-4' />}
                  Upload
                </Button>
              </>
            )}
            {imageMultipleRes && (
              <>
                <div className='overflow-auto'>
                  <pre className='mt-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-950'>
                    <code className='text-sm text-neutral-800 dark:text-white'>
                      {JSON.stringify(imageMultipleRes, null, 2)}
                    </code>
                  </pre>
                </div>
                <div className='flex gap-4'>
                  {imageMultipleRes?.data?.map((item, index) => (
                    <div key={index} className='relative mb-4 h-36 w-36'>
                      <Image
                        alt='image'
                        src={item.url}
                        layout='fill'
                        className='rounded-lg object-cover object-center'
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
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
