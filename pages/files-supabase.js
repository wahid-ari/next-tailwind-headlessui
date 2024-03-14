import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DownloadIcon, MoonIcon, PhotographIcon, SunIcon, TrashIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import axios from 'axios';

// import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

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

export default function FilesSupabase() {
  const router = useRouter();
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  // const [windowReady, setWindowReady] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setWindowReady(true);
  //   }
  // }, []);

  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();
  function handleFileChange(e) {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      if (e.target.files[0].type == 'application/pdf') {
        setFileURL(URL.createObjectURL(e.target.files[0]));
      } else {
        setFileURL(null);
      }
    }
  }

  const [fileRes, setFileRes] = useState();
  async function handleFileUpload(e) {
    e.preventDefault();
    setIsLoading(true);
    const fileToUpload = new FormData();
    fileToUpload.append('name', 'name');
    fileToUpload.append('file', file);
    try {
      const res = await axios.post(`/api/file-supabase`, fileToUpload);
      console.log(res);
      if (res.status == 200) {
        setFileRes(res.data);
        setFile(null);
        setFileURL(null);
        setFetched(false);
      }
    } catch (error) {
      console.error(error.response);
    }
    // new Response(fileToUpload).text().then(console.log)
    // const res = await fetch('/api/file-supabase', {
    //   method: 'POST',
    //   body: fileToUpload
    // });
    // console.log(res);
    // const result = await res.json();
    // if (res.status == 200) {
    //   console.log(result)
    //   setFileRes(result);
    //   setFile(null);
    //   setFileURL(null);
    //   setFetched(false);
    // } else {
    //   console.error(result);
    // }
    setIsLoading(false);
  }

  const [fileMultiple, setFileMultiple] = useState();
  const [fileURLMultiple, setFileURLMultiple] = useState();
  function handleFileChangeMultiple(e) {
    if (e.target.files) {
      setFileMultiple([...e.target.files]);
      let temp = [...e.target.files];
      let temptFileMultipleURL = [];
      for (const item of temp) {
        if (item.type == 'application/pdf') {
          temptFileMultipleURL.push(URL.createObjectURL(item));
        }
      }
      setFileURLMultiple(temptFileMultipleURL);
    }
  }

  const [fileResMultiple, setFileResMultiple] = useState();
  async function handleFileUploadMultiple(e) {
    e.preventDefault();
    setIsLoading(true);
    const fileToUpload = new FormData();
    fileToUpload.append('name', 'name');
    for (const a of fileMultiple) {
      fileToUpload.append('file', a);
    }
    try {
      const res = await axios.post(`/api/file-supabase-multiple`, fileToUpload);
      console.log(res);
      if (res.status == 200) {
        setFileResMultiple(res.data);
        setFileMultiple(null);
        setFileURLMultiple(null);
        setFetched(false);
      }
    } catch (error) {
      console.error(error.response);
    }
    // new Response(fileToUpload).text().then(console.log)
    // const res = await fetch('/api/file-supabase-multiple', {
    //   method: 'POST',
    //   body: fileToUpload
    // });
    // console.log(res);
    // const result = await res.json();
    // if (res.status == 200) {
    //   console.log(result)
    //   setFileResMultiple(result);
    //   setFileMultiple(null);
    //   setFileURLMultiple(null);
    //   setFetched(false);
    // } else {
    //   console.error(result);
    // }
    setIsLoading(false);
  }

  async function handleDeleteFile(id, name) {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/file-supabase?id=${id}&name=${name}`);
      console.log(res);
      if (res.status == 200) {
        setFileRes(null);
        setFile(null);
        setFileURL(null);
        setFetched(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDownloadFile(name) {
    const { data } = supabase.storage.from('storage').getPublicUrl(name, {
      download: true,
    });
    router.push(data.publicUrl);
    console.log(data.publicUrl);
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
        <title>File Supabase Page</title>
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
              </div>
              <div>
                <TocLink href='#input-file-multiple' text='Input File Multiple' />
              </div>
              <div>
                <TocLink href='#react-doc-viewer' text='React Doc Viewer' />
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
                          frameBorder='0'
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
                        <Button.green
                          className='!px-2'
                          title={`Download ${item.name}`}
                          onClick={() => handleDownloadFile(item.name)}
                        >
                          <DownloadIcon className='h-4 w-4' />
                        </Button.green>
                        <Button.red
                          className='!px-2'
                          title={`Delete ${item.name}`}
                          onClick={() => handleDeleteFile(item.id, item.name)}
                        >
                          <TrashIcon className='h-4 w-4' />
                        </Button.red>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='my-2 text-center'>{isLoading && <Spinner.red small />}</div>

          <Section id='input-file' name='Input File'>
            <p>
              this upload file to <b>Supabase storage</b> via <b>/api/file-supabase</b>
            </p>
            <FileInput
              label='File'
              accept='.pdf, .doc, .docx'
              name='file'
              inputLabel='Select file (.pdf, .doc, .docx)'
              value={file ? file.name : ''}
              onChange={handleFileChange}
              icon={<PhotographIcon className='mr-1 h-6 w-6 text-gray-400' strokeWidth='1' />}
            />
            {fileURL && <embed src={fileURL} width='400' height='400' />}
            {file && (
              <Button className='flex items-center' onClick={handleFileUpload}>
                {isLoading && <Spinner small className='!h-4 !w-4' />}
                Upload
              </Button>
            )}
            {fileRes && (
              <>
                <div className='overflow-auto'>
                  <pre className='mt-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-950'>
                    <code className='text-sm text-neutral-800 dark:text-white'>{JSON.stringify(fileRes, null, 2)}</code>
                  </pre>
                </div>
                {fileRes.data.type == 'application/pdf' ? (
                  <embed src={fileRes?.data?.url} width='500' height='500' />
                ) : (
                  <iframe
                    title={fileRes?.data?.name}
                    width='500'
                    height='500'
                    src={`https://docs.google.com/gview?url=${fileRes?.data?.url}&embedded=true`}
                  />
                )}
              </>
            )}
          </Section>

          <Section id='input-file-multiple' name='Input File Multiple'>
            <p>
              this upload file to <b>Supabase storage</b> via <b>/api/file-supabase-multiple</b>
            </p>
            <FileInput
              label='File Multiple'
              accept='.pdf, .doc, .docx'
              name='file-multiple'
              inputLabel='Select file (.pdf, .doc, .docx)'
              value={
                fileMultiple
                  ? fileMultiple.map((item, index) => {
                      return (
                        <span key={item.name}>
                          {item.name}
                          {index < fileMultiple.length - 1 && ', '}
                        </span>
                      );
                    })
                  : ''
              }
              multiple
              onChange={handleFileChangeMultiple}
              icon={<PhotographIcon className='mr-1 h-6 w-6 text-gray-400' strokeWidth='1' />}
            />
            {fileURLMultiple && (
              <div className='flex flex-wrap gap-4'>
                {fileURLMultiple.map((item, index) => (
                  <embed key={index} src={item} width='200' height='200' />
                ))}
              </div>
            )}
            {fileMultiple && (
              <Button className='flex items-center' onClick={handleFileUploadMultiple}>
                {isLoading && <Spinner small className='!h-4 !w-4' />}
                Upload
              </Button>
            )}
            {fileResMultiple && (
              <>
                <div className='overflow-auto'>
                  <pre className='mt-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-950'>
                    <code className='text-sm text-neutral-800 dark:text-white'>
                      {JSON.stringify(fileResMultiple, null, 2)}
                    </code>
                  </pre>
                </div>
                {fileResMultiple.data.map((item, index) =>
                  item.type == 'application/pdf' ? (
                    <embed key={index} src={item.url} width='500' height='500' />
                  ) : (
                    <iframe
                      key={index}
                      title={fileResMultiple?.data?.name}
                      width='500'
                      height='500'
                      src={`https://docs.google.com/gview?url=${item.url}&embedded=true`}
                    />
                  ),
                )}
              </>
            )}
          </Section>

          {/* <Section id='react-doc-viewer' name='React Doc Viewer'>
            {windowReady ? (
              <DocViewer
                className='h-[500px]'
                pluginRenderers={DocViewerRenderers}
                documents={[
                  {
                    uri: 'https://wgvbxfaxfwioadqpyhmb.supabase.co/storage/v1/object/public/storage/cwcffvmybb-Sample-doc.doc',
                  },
                  {
                    uri: 'https://wgvbxfaxfwioadqpyhmb.supabase.co/storage/v1/object/public/storage/-fbevnodzj-sample.pdf',
                  },
                ]}
              />
            ) : (
              <Spinner.red small />
            )}
          </Section> */}

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
