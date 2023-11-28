import { useContext, useMemo, useState } from 'react';
import Head from 'next/head';
import BackToTop from '@components/BackToTop';
import Badge from '@components/Badge';
import ComponentProps from '@components/ComponentProps';
import Footer from '@components/Footer';
import Input from '@components/Input';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import DeleteModal from '@components/other/DeleteModal';
import ReactTableNew from '@components/ReactTableNew';
import Section from '@components/Section';
import Text from '@components/Text';
import TocLink from '@components/TocLink';
import { DownloadIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import { tabledata } from '@utils/useTableData';
import useToast from '@utils/useToast';
import { CSVLink } from 'react-csv';
import toast, { Toaster } from 'react-hot-toast';

export default function PageReactTable() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const { updateToast, pushToast, dismissToast } = useToast();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState({ id: '', name: '' });
  function showDeleteModal(id, name) {
    setDeleteModalData({ id: id, name: name });
    setOpenDeleteModal(true);
  }
  async function handleDeleteData() {
    const toastId = pushToast({
      message: `Deleting ${deleteModalData.id} - ${deleteModalData.name} Data`,
      isLoading: true,
    });
    try {
      setTimeout(() => {
        updateToast({ toastId, message: 'Success Delete Data', isError: false });
      }, 2000);
    } catch (error) {
      console.error(error);
      updateToast({ toastId, message: 'Failed Delete Data', isError: true });
    }
    setOpenDeleteModal(false);
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'age',
        header: 'Age',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        cell: (info) => {
          return info.renderValue() == 'male' ? (
            <Badge>{info.renderValue().toUpperCase()}</Badge>
          ) : (
            <Badge.red>{info.renderValue().toUpperCase()}</Badge.red>
          );
        },
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'company',
        header: 'Company',
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        footer: (info) => info.column.id,
        enableSorting: false,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        cell: (info) => convertDate(info.renderValue()),
        footer: (info) => info.column.id,
      },
      {
        header: 'Action',
        cell: (info) => {
          // console.log(info.row.original.id)
          return (
            <div className='flex space-x-2'>
              <button
                onClick={() => alert(`${info.row.original.id} - ${info.row.original.name}`)}
                className='text-sm font-medium text-blue-500 hover:text-blue-700'
              >
                Edit
              </button>
              <button
                onClick={() => showDeleteModal(info.row.original.id, info.row.original.name)}
                className='text-sm font-medium text-red-500 hover:text-red-700'
              >
                Delete
              </button>
            </div>
          );
        },
        footer: 'action',
        enableSorting: false,
      },
    ],
    [],
  );

  function convertDate(date) {
    let localeDate = new Date(date).toLocaleDateString('en-US');
    let splitDate = localeDate.split('/');
    return `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
  }

  const [selectedOriginalRows, setSelectedOriginalRows] = useState([]);
  let arraySelectedId = [];
  let arrayOriginalRows = [];
  for (let item of selectedOriginalRows) {
    arraySelectedId.push(item.original.id);
    arrayOriginalRows.push(item.original);
  }
  const columnHeader = [
    { label: 'Id', key: 'id' },
    { label: 'Email', key: 'email' },
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Gender', key: 'gender' },
    { label: 'Company', key: 'company' },
    { label: 'Phone', key: 'phone' },
    { label: 'Date', key: 'date' },
  ];

  return (
    <>
      <Head>
        <title>React Table New</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:px-8'>
          <Section id='toc' name='React Table TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#react-table-new' text='React Table New' />
              </div>
              <div></div>
              <div>
                <TocLink href='#dark-mode' text='Dark Mode' />
              </div>
            </div>
          </Section>

          <Section id='react-table-new' name='React Table New'>
            {arrayOriginalRows.length > 0 ? (
              <button>
                <CSVLink
                  data={arrayOriginalRows}
                  headers={columnHeader}
                  filename='file_export.csv'
                  className='flex items-center gap-2 rounded bg-sky-500 px-2 py-1 text-sm text-white transition-all duration-200 hover:bg-sky-600'
                >
                  <DownloadIcon className='h-4 w-4' />
                  Export to CSV
                </CSVLink>
              </button>
            ) : null}
            <ReactTableNew columns={columns} data={tabledata} setSelectedOriginalRows={setSelectedOriginalRows} />
            <p className='mt-2 text-sm dark:text-white'>
              Array of Selected Rows by Id : [{arraySelectedId.map((i) => i).join(', ')}]
            </p>
            <p className='mt-2 text-sm dark:text-white'>
              Array of Selected Original Rows : <pre>{JSON.stringify(arrayOriginalRows, null, 2)}</pre>
            </p>

            <Toaster />

            <DeleteModal
              modalTitle='Delete Data'
              isOpenModal={openDeleteModal}
              onCloseModal={() => setOpenDeleteModal(false)}
              onConfirmModal={handleDeleteData}
              danger
            >
              <Text className='pb-2 !text-sm'>
                Sure want to delete{' '}
                <span className='font-semibold'>
                  {deleteModalData.id} - {deleteModalData.name}
                </span>{' '}
                ?
              </Text>
            </DeleteModal>

            <ComponentProps name='ReactTableGrouped'>
              <Badge>columns</Badge>
              <Badge>data</Badge>
              <Badge>className</Badge>
              <Badge>bordered</Badge>
              <Badge>ref</Badge>
            </ComponentProps>
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

          <Section id='dark-mode' name='Dark Mode'>
            <div className='flex flex-wrap gap-3'>
              <div
                onClick={() => setDarkMode(!darkMode)}
                className='relative h-7 w-12 cursor-pointer rounded-full bg-neutral-200 transition-all dark:bg-blue-500'
              >
                <div className='absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-all dark:left-6'></div>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='relative flex h-7 items-center rounded-full bg-blue-500 px-1 py-0.5'
              >
                <span className='absolute left-1 h-5 w-5 rounded-full bg-white transition-all dark:left-[1.7rem]'></span>
                <span aria-hidden={true}>☀️</span>
                <span aria-hidden={true}>🌙</span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className={`${
                  darkMode ? 'bg-neutral-800' : 'bg-gray-200'
                } relative flex h-7 items-center gap-1 rounded-full px-1 py-0.5`}
              >
                <span className='absolute left-1.5 h-5 w-5 rounded-full bg-blue-500 transition-all dark:left-[1.6rem]'></span>
                <span aria-hidden={true}>
                  <SunIcon className={`${darkMode ? 'bg-white text-white' : ''}h-5 w-5`} />
                </span>
                <span aria-hidden={true}>
                  <MoonIcon className='h-5 w-5' />
                </span>
              </button>

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
                  <MoonIcon className='rotate-45 transform' />
                </button>
              )}
            </div>
          </Section>

          <BackToTop />
        </main>

        <Footer />
      </Layout>
    </>
  );
}
