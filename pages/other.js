import { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LibraryIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';
import Tippy from '@tippyjs/react';
import { GlobalContext } from '@utils/GlobalContext';
import useToast from '@utils/useToast';
import clsx from 'clsx';
import { Pagination as FlowbitePagination } from 'flowbite-react';
import { motion } from 'framer-motion';
import { Pagination as HeadlessPagination } from 'react-headless-pagination';
import { useFieldArray, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import PinField from 'react-pin-field';
import Select from 'react-select';
import { Toaster as Toasters, toast as toasts } from 'sonner';
import * as z from 'zod';

import ButtonOutline from '@/components/ButtonOutline';
import Input from '@/components/Input';
import AccordionCode from '@components/AccordionCode';
import BackToTop from '@components/BackToTop';
import Badge from '@components/Badge';
import Button from '@components/Button';
import Code from '@components/Code';
import CommandMenu from '@components/CommandMenu';
import CommandMenuNested from '@components/CommandMenuNested';
import CommandsMenu from '@components/CommandsMenu';
import ComponentProps from '@components/ComponentProps';
import { File, Folder, Tree } from '@components/FileTree';
import Footer from '@components/Footer';
import Gauge from '@components/Gauge';
import Layout from '@components/Layout';
import Marquee from '@components/Marquee';
import Navbar from '@components/Navbar';
import Pagination from '@components/Pagination';
import PaginationFirstLast from '@components/PaginationFirstLast';
import RatingButton from '@components/RatingButton';
import Section from '@components/Section';
import ShowMore from '@components/ShowMore';
import Step from '@components/Step';
import TabsAnimate from '@components/TabsAnimate';
import Text from '@components/Text';
import ThemeChanger from '@components/ThemeChanger';
import ThemeSelect from '@components/ThemeSelect';
import TocLink from '@components/TocLink';

const reactMultiSelectOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'purple', label: 'Purple' },
  { value: 'orange', label: 'Orange' },
];

export default function Third() {
  const { updateToast, pushToast, dismissToast, pushCustomToast, updateCustomToast, dismissCustomToast } = useToast();
  function showCustomToast() {
    pushCustomToast({ title: 'Toast Info', message: 'Toast Info Message' });
  }
  function showSuccessCustomToast() {
    pushCustomToast({ title: 'Toast Success', message: 'Toast Success Message', isSuccess: true });
  }
  function showErrorCustomToast() {
    pushCustomToast({ title: 'Toast Error', message: 'Toast Error Message', isError: true });
  }
  function showAsyncCustomToast() {
    const toastId = pushCustomToast({
      title: 'Loading',
      message: 'Loading Toast',
      isLoading: true,
    });
    setTimeout(() => {
      updateCustomToast({ toastId, title: 'Loading Success', message: 'Loading Success Message', isError: false });
    }, 3000);
  }
  function closeCustomToast() {
    dismissCustomToast();
  }

  function showToast() {
    pushToast({ message: 'Toast', isError: false });
  }
  function showErrorToast() {
    pushToast({ message: 'Error toast', isError: true });
  }
  function closeToast() {
    dismissToast();
  }
  function showAsyncToast() {
    const toastId = pushToast({
      message: 'Loading Toast',
      isLoading: true,
    });
    setTimeout(() => {
      updateToast({ toastId, message: 'Done Toast', isError: false });
    }, 3000);
  }

  function promiseToast() {
    toasts.promise(
      async () => {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/hello`);
        if (res.status === 200) return Promise.resolve(res.json());
        if (res.status !== 200) return Promise.reject('Error Message');
      },
      {
        loading: 'Loading...',
        success: (data) => {
          return `${data.name} toast has been added`;
        },
        error: (error) => {
          return `${error} toast`;
        },
      },
    );

    // toasts.promise(
    // 	() =>
    // 		new Promise((resolve, reject) => {
    // 			return fetch(`${process.env.NEXTAUTH_URL}/api/hello`).then(res => {
    // 				console.log(res)
    // 				if (res.ok) {
    // 					resolve(res.json())
    // 				} else {
    // 					reject(new Error('error'))
    // 				}
    // 			}, error => {
    // 				reject(new Error(error.message))
    // 			})
    // 		}),
    // 	{
    // 		loading: 'Loading...',
    // 		success: (data) => {
    // 			return `${data.name} toast has been added`;
    // 		},
    // 		error: 'Error',
    // 	},
    // );

    // toasts.promise(
    // 	() =>
    // 		new Promise((resolve) => {
    // 			setTimeout(() => {
    // 				resolve({ name: 'Sonner' });
    // 			}, 2000);
    // 		}),
    // 	{
    // 		loading: 'Loading...',
    // 		success: (data) => {
    // 			return `${data.name} toast has been added`;
    // 		},
    // 		error: 'Error',
    // 	},
    // );
  }

  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const [multiSelect, setMultiSelect] = useState([reactMultiSelectOptions[0], reactMultiSelectOptions[1]]);
  function handleMultiSelectChange(e) {
    setMultiSelect(e);
  }

  const [unselectMultiSelect, setUnselectMultiSelect] = useState();
  function handleUnselectMultiSelectChange(e) {
    setUnselectMultiSelect(e);
  }

  const [pinField, setPinField] = useState();
  const [pinFieldNumeric, setPinFieldNumeric] = useState();
  const [pinFieldUppercase, setPinFieldUppercase] = useState();
  const [pinFieldComplete, setPinFieldComplete] = useState();
  const [pinFieldReset, setPinFieldReset] = useState();
  const pinFieldResetRef = useRef([]);
  const [demoCompleted, setDemoCompleted] = useState(false);
  function changePinField(e) {
    setPinField(e);
  }
  function changePinFieldNumeric(e) {
    setPinFieldNumeric(e);
  }
  function changePinFieldUppercase(e) {
    setPinFieldUppercase(e);
  }
  function changePinFieldReset(e) {
    setPinFieldReset(e);
  }
  function changePinFieldComplete(e) {
    setPinFieldComplete(e);
  }
  function resetPinField() {
    pinFieldResetRef && pinFieldResetRef.current && pinFieldResetRef.current.forEach((input) => (input.value = ''));
    setPinFieldReset('');
  }

  let tabs = [
    { id: 'world', label: 'World' },
    { id: 'ny', label: 'N.Y.' },
    { id: 'business', label: 'Business' },
    { id: 'arts', label: 'Arts' },
    { id: 'science', label: 'Science' },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState(1);
  const [page, setPage] = useState(0);
  const [flowbitePage, setFlowbitePage] = useState(1);
  const flowbitePaginationTheme = {
    pages: {
      base: 'my-0.5 inline-flex -space-x-px',
      showIcon: 'inline-flex',
      previous: {
        base: 'rounded-l-lg border p-1.5 pr-2 leading-tight hover:bg-neutral-100 text-neutral-500 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
        icon: 'h-5 w-5',
      },
      next: {
        base: 'rounded-r-lg border p-1.5 pl-2 leading-tight hover:bg-neutral-100 text-neutral-500 hover:text-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
        icon: 'h-5 w-5',
      },
      selector: {
        base: 'w-8 border py-1.5 leading-tight text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
        active:
          'font-medium bg-sky-500 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-500 text-white dark:text-white hover:text-white dark:border-neutral-700',
        disabled: 'opacity-50 cursor-not-allowed',
      },
    },
  };

  const InputArrayFormSchema = z.array(
    z.object({
      value: z.string().min(1, { message: 'Required' }),
    }),
  );
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
    setValues(watch('test'));
  }, [watchValues, watch]);
  console.log(values);

  const [valid, setValid] = useState();

  function submitInputArray() {
    const result = InputArrayFormSchema.safeParse(values);
    setValid(result);
    console.log(result);
  }

  return (
    <>
      <Head>
        <title>Other</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:px-8'>
          <Section id='toc' name='Other Components TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#dynamic-input' text='Dynamic Input' />
                <TocLink href='#gauge' text='Gauge (Progress Percentage)' />
                <TocLink href='#react-multi-select-search' text='React Multi Select Search' />
                <TocLink href='#sonner' text='Sonner (Toast)' />
                <TocLink href='#toast' text='Toast' />
                <TocLink href='#toast-custom' text='Toast Custom' />
                <TocLink href='#input-pin' text='Input PIN' />
                <TocLink href='#tippy-tooltips' text='Tippy Tooltips' />
              </div>
              <div>
                <TocLink href='#tabs-animate' text='Tabs Animate' />
                <TocLink href='#commands-menu' text='Command Menu (KMenu)' />
                <TocLink href='#command-menu' text='Command Menu (CMDK)' />
                <TocLink href='#file-tree' text='Files Tree' />
                <TocLink href='#step' text='Step' />
                <TocLink href='#marquee' text='Marquee' />
                <TocLink href='#dark-mode' text='Dark Mode' />
              </div>
              <div>
                <TocLink href='#rating-button' text='Rating Button' />
                <TocLink href='#show-more' text='Show More' />
                <TocLink href='#pagination-flowbite' text='Pagination Flowbite' />
                <TocLink href='#pagination-headless' text='Headless Pagination' />
                <TocLink href='#pagination' text='Pagination' />
                <TocLink href='#pagination-first-last' text='Pagination First Last' />
              </div>
            </div>
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

          <Section id='marquee' name='Marquee'>
            {/* <div className='flex items-center gap-4'> */}
            <Marquee>
              <div>Content 1</div>
              <div>Content 2</div>
              <div>Content 3</div>
            </Marquee>
            <Marquee fade={true} reverse={true}>
              <div>Fade Reverse 1</div>
              <div>Fade Reverse 2</div>
              <div>Fade Reverse 3</div>
            </Marquee>
            <Marquee fade={true} pauseOnHover={true}>
              <div>pauseOnHover 1</div>
              <div>pauseOnHover 2</div>
              <div>pauseOnHover 3</div>
            </Marquee>
            <Marquee fade={true} direction='up'>
              <div>direction up 1</div>
              <div>direction up 2</div>
              <div>direction up 3</div>
            </Marquee>
            <Marquee className='gap-[3rem] [--duration:5s]' innerClassName='gap-[3rem] [--gap:3rem]' fade={true}>
              <div>gap duration 1</div>
              <div>gap duration 2</div>
              <div>gap duration 3</div>
            </Marquee>
            <ComponentProps name='Marquee'>
              <Badge>className</Badge>
              <Badge>innerClassName</Badge>
              <Badge>fade</Badge>
              <Badge>reserve</Badge>
              <Badge>pauseOnHover</Badge>
              <Badge>direction</Badge>
            </ComponentProps>
          </Section>

          <Section id='gauge' name='Gauge (Progress Percentage)'>
            <div className='flex items-center gap-4'>
              <Gauge value={20} />
              <Gauge value={50} size='medium' />
              <Gauge value={80} size='large' showValue />
            </div>
            <ComponentProps name='Tippy'>
              <Badge>value</Badge>
              <Badge>size</Badge>
              <Badge>showValue</Badge>
            </ComponentProps>
          </Section>

          <Section id='rating-button' name='Rating Button'>
            <RatingButton />
            <RatingButton className='mr-1 text-2xl' activeClassName='text-red-500' />
          </Section>

          <Section id='show-more' name='Show More'>
            <ShowMore>
              Officia irure anim nostrud proident eiusmod incididunt do excepteur et minim do. Aliqua eiusmod duis id
              reprehenderit veniam ut ad do in dolore. Lorem Lorem incididunt enim enim non aute ipsum nisi adipisicing
              sint aliqua ex voluptate. Nostrud dolore eu ipsum amet anim. Sint veniam tempor culpa eu ut. Nostrud velit
              mollit et elit ipsum magna laboris.
            </ShowMore>
          </Section>

          <Section id='file-tree' name='Files Tree'>
            <Tree>
              <Folder name='pages' defaultOpen>
                <Folder name='frameworks' defaultOpen>
                  <File name='react.mdx' />
                </Folder>
                <Folder name='fruits' defaultOpen>
                  <File name='apple.mdx' />
                </Folder>
                <File name='_meta.json' />
                <File name='index.mdx' />
              </Folder>
            </Tree>
          </Section>

          <Section id='step' name='Step'>
            {/* require setup in tailwind.config.js */}
            <Step />
          </Section>

          <Section id='commands-menu' name='Command Menu (KMenu)'>
            <CommandsMenu />
          </Section>

          <Section id='command-menu' name='Command Menu (CMDK)'>
            <CommandMenuNested />
            <br />
            <CommandMenu />
          </Section>

          <Section id='tabs-animate' name='Tabs Animate'>
            <TabsAnimate items={['First', 'Second']}>
              <TabsAnimate.Item className='py-4 dark:text-white'>First</TabsAnimate.Item>
              <TabsAnimate.Item className='py-4 dark:text-white'>Second</TabsAnimate.Item>
            </TabsAnimate>
          </Section>

          <div className='flex space-x-1'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? 'text-white' : 'hover:text-neutral-900 dark:hover:text-white/60'
                } relative rounded-full px-3 py-1 text-sm font-medium text-neutral-600 outline-sky-400 transition focus-visible:outline-2 dark:text-white`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId='bubble'
                    className='absolute inset-0 z-10 bg-neutral-900 mix-blend-difference dark:bg-white'
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          <Section id='react-multi-select-search' name='React Multi Select Search'>
            <label
              htmlFor='reactselect'
              className='mb-2 mt-4 block text-sm font-medium text-neutral-800 dark:text-gray-200'
            >
              Unselected Multi Select
            </label>
            <Select
              options={reactMultiSelectOptions}
              isMulti
              value={unselectMultiSelect}
              onChange={handleUnselectMultiSelectChange}
              placeholder='Multi select..'
              name='reactselect'
              className='rounded-lg'
              classNamePrefix='react-select'
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: `#3b82f6`,
                },
              })}
            />
            <Text className='mt-2 !text-sm font-medium !text-red-500'>
              Multi Select :{' '}
              {unselectMultiSelect
                ? unselectMultiSelect.map((item, index) => <span key={index}>{item.value}, </span>)
                : ''}
            </Text>

            <label
              htmlFor='reactselect'
              className='mb-2 mt-4 block text-sm font-medium text-neutral-800 dark:text-gray-200'
            >
              Selected Multi Select
            </label>
            <Select
              options={reactMultiSelectOptions}
              value={multiSelect}
              isMulti
              placeholder='Multi select..'
              name='reactselect'
              className='rounded-lg'
              onChange={handleMultiSelectChange}
              classNamePrefix='react-select'
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: `#3b82f6`,
                },
              })}
            />

            <Text className='mt-2 !text-sm font-medium !text-red-500'>
              Multi Select :{' '}
              {multiSelect ? multiSelect.map((item, index) => <span key={index}>{item.value}, </span>) : ''}
            </Text>
          </Section>

          <Section id='sonner' name='Sonner / Toast'>
            {/* for global toast, put Toaster component below in _app.js  */}
            <Toasters theme={darkMode ? 'dark' : 'light'} richColors closeButton expand visibleToasts={5} />
            <div className='flex flex-wrap gap-2'>
              <button className='rounded bg-sky-500 px-2 py-0.5 text-white' onClick={() => toasts('My first toast')}>
                toast
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() =>
                  toasts('Event has been created', {
                    description: '',
                    icon: <LibraryIcon className='mx-8 h-5 w-5' />,
                  })
                }
              >
                icon
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() =>
                  toasts.custom((t) => (
                    <div className='flex items-center justify-center gap-4 rounded border border-neutral-50 bg-white p-4 shadow dark:border-neutral-800 dark:bg-neutral-900 dark:text-white'>
                      This is a custom component
                      <button
                        className='rounded border px-2 py-0.5 text-sm font-medium dark:border-neutral-700'
                        onClick={() => toasts.dismiss(t)}
                      >
                        X
                      </button>
                    </div>
                  ))
                }
              >
                custom dismiss
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() => {
                  const toastId = toasts.custom(() => (
                    <div className='flex items-center justify-center gap-4 rounded border border-neutral-50 bg-white p-4 shadow dark:border-neutral-800 dark:bg-neutral-900 dark:text-white'>
                      This is a custom component
                      <button
                        className='rounded border px-2 py-0.5 text-sm font-medium dark:border-neutral-700'
                        onClick={() => toasts.dismiss(toastId)}
                      >
                        X
                      </button>
                    </div>
                  ));
                }}
              >
                custom dismiss id
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() =>
                  toasts.message('Event has been created', {
                    description: 'Monday, January 3rd at 6:00pm',
                  })
                }
              >
                description
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() =>
                  toasts.message('Event has been created', {
                    description: 'Monday, January 3rd at 6:00pm',
                    style: {
                      background: `${darkMode ? '#171717' : '#fff'}`,
                    },
                    className: '!text-blue-500',
                    descriptionClassName: '!text-red-500',
                  })
                }
              >
                style
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() =>
                  toasts('Event has been created', {
                    action: {
                      label: 'Undo',
                      onClick: () => console.log('Undo'),
                    },
                  })
                }
              >
                action
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() =>
                  toasts.promise(promise, {
                    loading: 'Loading Promise...',
                    success: (data) => {
                      return `${data.name} toast has been added`;
                    },
                    error: 'Error',
                  })
                }
              >
                promise
              </button>
              <button className='rounded bg-sky-500 px-2 py-0.5 text-white' onClick={promiseToast}>
                async await
              </button>
              <button
                className='rounded bg-sky-500 px-2 py-0.5 text-white'
                onClick={() => toasts(<div>My custom toast</div>)}
              >
                custom toast
              </button>
              <button
                className='rounded bg-emerald-500 px-2 py-0.5 text-white'
                onClick={() => toasts.success(<div>My success toast</div>)}
              >
                success toast
              </button>
              <button
                className='rounded bg-red-500 px-2 py-0.5 text-white'
                onClick={() => toasts.error(<div>My error toast</div>)}
              >
                error toast
              </button>
              <button className='rounded bg-red-500 px-2 py-0.5 text-white' onClick={() => toasts.dismiss()}>
                close all toast
              </button>
            </div>
          </Section>

          <Section id='toast' name='Toast'>
            {/* for global toast, put Toaster component below in _app.js  */}
            <Toaster />
            <div className='flex flex-wrap items-center gap-2'>
              <Button.green onClick={showToast}>Show Toast</Button.green>
              <Button.red onClick={showErrorToast}>Show Error Toast</Button.red>
              <Button.orange onClick={showAsyncToast}>Show Async Toast</Button.orange>
              <Button.secondary onClick={closeToast}>Close Toast</Button.secondary>
            </div>
          </Section>

          <Section id='toast-custom' name='Toast Custom'>
            {/* for global toast, put Toaster component below in _app.js  */}
            <Toaster />
            <div className='flex flex-wrap items-center gap-2'>
              <Button onClick={showCustomToast}>Show Custom Toast</Button>
              <Button.green onClick={showSuccessCustomToast}>Show Success Custom Toast</Button.green>
              <Button.red onClick={showErrorCustomToast}>Show Error Custom Toast</Button.red>
              <Button.orange onClick={showAsyncCustomToast}>Show Async Custom Toast</Button.orange>
              <Button.secondary onClick={closeCustomToast}>Close Custom Toast</Button.secondary>
            </div>
          </Section>

          <Section id='input-pin' name='Input PIN'>
            <p className='mb-3 font-medium dark:text-white'>Alphanumeric</p>
            <PinField
              onChange={changePinField}
              length={3}
              validate={/^[a-zA-Z0-9]$/}
              className='mr-1 h-9 w-9 rounded border border-gray-300 bg-gray-50 p-0 text-center text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:focus:border-sky-500'
            />
            <p className='dark:text-white'>value : {pinField}</p>

            <p className='my-3 font-medium dark:text-white'>Numeric</p>
            <PinField
              onChange={changePinFieldNumeric}
              length={3}
              validate={/^[0-9]$/}
              className='mr-1 h-9 w-9 rounded border border-gray-300 bg-gray-50 p-0 text-center text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:focus:border-sky-500'
            />
            <p className='dark:text-white'>value : {pinFieldNumeric}</p>

            <p className='my-3 font-medium dark:text-white'>Uppercase</p>
            <PinField
              onChange={changePinFieldUppercase}
              length={3}
              autoFocus
              format={(value) => value.toUpperCase()}
              validate={/^[a-zA-Z0-9]$/}
              className='mr-1 h-9 w-9 rounded border border-gray-300 bg-gray-50 p-0 text-center text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:focus:border-sky-500'
            />
            <p className='dark:text-white'>value : {pinFieldUppercase}</p>

            <p className='my-3 font-medium dark:text-white'>Reset</p>
            <PinField
              onChange={changePinFieldReset}
              length={3}
              ref={pinFieldResetRef}
              format={(value) => value.toUpperCase()}
              validate={/^[a-zA-Z0-9]$/}
              className='mr-1 h-9 w-9 rounded border border-gray-300 bg-gray-50 p-0 text-center text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:focus:border-sky-500'
            />
            <Button.red onClick={resetPinField} className='text-sm'>
              Reset
            </Button.red>
            <p className='dark:text-white'>value : {pinFieldReset}</p>

            <p className='my-3 font-medium dark:text-white'>On Complete</p>
            <PinField
              onChange={changePinFieldComplete}
              onComplete={() => setDemoCompleted(true)}
              disabled={demoCompleted}
              length={3}
              validate={/^[a-zA-Z0-9]$/}
              className='mr-1 h-9 w-9 rounded border border-gray-300 bg-gray-50 p-0 text-center text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:focus:border-sky-500'
            />
            <p className={`${demoCompleted ? 'text-green-500' : 'text-red-500'} text-sm`}>
              {demoCompleted ? 'Completed' : 'Not Completed'}
            </p>
            <p className='dark:text-white'>value : {pinFieldComplete}</p>
            <ComponentProps name='PinField'>
              <Badge.red>className</Badge.red>
              <Badge>length</Badge>
              <Badge>validate</Badge>
              <Badge>format</Badge>
              <Badge>ref</Badge>
              <Badge>disabled</Badge>
              <Badge.orange>onChange</Badge.orange>
              <Badge.orange>onComplete</Badge.orange>
              <Badge.orange>onResolveKey</Badge.orange>
              <Badge.orange>onRejectKey</Badge.orange>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useRef } from "react";
import PinField from "react-pin-field";

const [pinField, setPinField] = useState()
const [pinFieldNumeric, setPinFieldNumeric] = useState()
const [pinFieldUppercase, setPinFieldUppercase] = useState()
const [pinFieldComplete, setPinFieldComplete] = useState()
const [pinFieldReset, setPinFieldReset] = useState()
const pinFieldResetRef = useRef([]);
const [demoCompleted, setDemoCompleted] = useState(false)
function changePinField(e) {
	setPinField(e)
}
function changePinFieldNumeric(e) {
	setPinFieldNumeric(e)
}
function changePinFieldUppercase(e) {
	setPinFieldUppercase(e)
}
function changePinFieldReset(e) {
	setPinFieldReset(e)
}
function changePinFieldComplete(e) {
	setPinFieldComplete(e)
}
function resetPinField() {
	pinFieldResetRef && pinFieldResetRef.current && pinFieldResetRef.current.forEach(input => (input.value = ""))
	setPinFieldReset("")
}

<p className="dark:text-white font-medium mb-3">Alphanumeric</p>
<PinField
	onChange={changePinField}
	length={3}
	validate={/^[a-zA-Z0-9]$/}
	className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
/>
<p className="dark:text-white">value : {pinField}</p>

<p className="dark:text-white font-medium my-3">Numeric</p>
<PinField
	onChange={changePinFieldNumeric}
	length={3}
	validate={/^[0-9]$/}
	className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
/>
<p className="dark:text-white">value : {pinFieldNumeric}</p>

<p className="dark:text-white font-medium my-3">Uppercase</p>
<PinField
	onChange={changePinFieldUppercase}
	length={3}
	autoFocus
	format={value => value.toUpperCase()}
	validate={/^[a-zA-Z0-9]$/}
	className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
/>
<p className="dark:text-white">value : {pinFieldUppercase}</p>

<p className="dark:text-white font-medium my-3">Reset</p>
<PinField
	onChange={changePinFieldReset}
	length={3}
	ref={pinFieldResetRef}
	format={value => value.toUpperCase()}
	validate={/^[a-zA-Z0-9]$/}
	className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
/>
<Button.red onClick={resetPinField} className="text-sm">Reset</Button.red>
<p className="dark:text-white">value : {pinFieldReset}</p>

<p className="dark:text-white font-medium my-3">On Complete</p>
<PinField
	onChange={changePinFieldComplete}
	onComplete={() => setDemoCompleted(true)}
	disabled={demoCompleted}
	length={3}
	validate={/^[a-zA-Z0-9]$/}
	className="w-9 h-9 rounded border border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800 dark:text-white text-sm font-medium mr-1 text-center p-0 focus:border-sky-500 dark:focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
/>
<p className={"{demoCompleted ? "text-green-500" : "text-red-500"} text-sm"}>{demoCompleted ? "Completed" : "Not Completed"}</p>
<p className="dark:text-white">value : {pinFieldComplete}</p>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='tippy-tooltips' name='Tippy Tooltips'>
            <Tippy
              content={
                <span className='rounded bg-white px-2 py-1 text-sm shadow dark:bg-neutral-800 dark:text-white'>
                  Tooltip
                </span>
              }
            >
              <span className='font-medium hover:cursor-pointer dark:text-white'>Hover Me</span>
            </Tippy>
            <ComponentProps name='Tippy'>
              <Badge>content</Badge>
              <Badge>children</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Tippy from "@tippyjs/react";

<Tippy content={
	<span className="bg-white dark:bg-neutral-800 dark:text-white rounded text-sm px-2 py-1 shadow">Tooltip</span>
}>
	<span className="dark:text-white hover:cursor-pointer font-medium">Hover Me</span>
</Tippy>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='pagination-flowbite' name='Pagination Flowbite'>
            <div className='flex overflow-x-auto sm:justify-center'>
              <FlowbitePagination
                theme={flowbitePaginationTheme}
                currentPage={flowbitePage}
                totalPages={10}
                onPageChange={setFlowbitePage}
                previousLabel='Prev'
                nextLabel='Next'
                showIcons
              />
            </div>
            <Text>{flowbitePage}</Text>
          </Section>

          <Section id='pagination-headless' name='Headless Pagination'>
            <HeadlessPagination
              currentPage={page}
              setCurrentPage={setPage}
              totalPages={10}
              edgePageCount={2}
              middlePagesSiblingCount={1}
              className='flex h-8 w-full select-none items-center space-x-1 text-sm'
              truncableText='..'
              truncableClassName='text-center px-0.5'
            >
              <button
                onClick={() => setPage(0)}
                disabled={page === 0}
                className={clsx(
                  'flex h-8 w-8 items-center justify-center rounded border px-2 transition-all hover:bg-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed dark:border-neutral-700',
                  {
                    'cursor-pointer': page !== 0,
                    'opacity-50': page === 0,
                  },
                )}
              >
                <ChevronDoubleLeftIcon className='h-4 w-4' />
              </button>
              <HeadlessPagination.PrevButton
                className={clsx(
                  'flex h-8 w-8 items-center justify-center rounded border px-2 transition-all hover:bg-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed dark:border-neutral-700',
                  {
                    'cursor-pointer': page !== 0,
                    'opacity-50': page === 0,
                  },
                )}
              >
                <ChevronLeftIcon className='h-4 w-4' />
              </HeadlessPagination.PrevButton>
              <nav className='flex'>
                <ul className='flex items-center'>
                  <HeadlessPagination.PageButton
                    activeClassName='bg-sky-500 text-white font-medium'
                    inactiveClassName='text-neutral-600 dark:text-neutral-300 hover:font-medium hover:text-neutral-800 dark:hover:text-white transition-all'
                    className={
                      'flex h-8 w-8 cursor-pointer items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
                    }
                  />
                </ul>
              </nav>
              <HeadlessPagination.NextButton
                className={clsx(
                  'flex h-8 w-8 items-center justify-center rounded border px-2 transition-all hover:bg-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed dark:border-neutral-700',
                  {
                    'cursor-pointer': page !== 10,
                    'opacity-50': page === 10,
                  },
                )}
              >
                <ChevronRightIcon className='h-4 w-4' />
              </HeadlessPagination.NextButton>
              <button
                onClick={() => setPage(9)}
                disabled={page === 9}
                className={clsx(
                  'flex h-8 w-8 items-center justify-center rounded border px-2 transition-all hover:bg-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed dark:border-neutral-700',
                  {
                    'cursor-pointer': page !== 10,
                    'opacity-50': page === 10,
                  },
                )}
              >
                <ChevronDoubleRightIcon className='h-4 w-4' />
              </button>
            </HeadlessPagination>
            <Text>{page + 1}</Text>
            <Text>https://github.com/thijssmudde/react-headless-pagination</Text>
          </Section>

          <Section id='pagination' name='Pagination'>
            <Pagination
              className='my-4'
              max={10}
              current={3}
              onChangePage={(e) => {
                console.log(e);
                setCurrentPage(e);
              }}
            />
            <Text>{currentPage}</Text>
            <Pagination className='my-4' max={10} current={5} onChangePage={(e) => console.log(e)} />
            <ComponentProps name='Pagination'>
              <Badge.red>className</Badge.red>
              <Badge>min</Badge>
              <Badge>max</Badge>
              <Badge>current</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Pagination from "@components/Pagination";

<Pagination
  className='my-4'
  max={10}
  current={3}
  onChangePage={(e) => {
    console.log(e);
    setCurrentPage(e);
  }}
/>
<Text>{currentPage}</Text>
<Pagination className='my-4' max={10} current={5} onChangePage={(e) => console.log(e)} />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='pagination-first-last' name='Pagination First Last'>
            <PaginationFirstLast
              className='my-4'
              max={5}
              onChangePage={(e) => {
                console.log(e);
                setCurrentPages(e);
              }}
            />
            <Text>{currentPages}</Text>
            <PaginationFirstLast className='my-4' max={10} current={10} onChangePage={(e) => console.log(e)} />
            <ComponentProps name='PaginationFirstLast'>
              <Badge.red>className</Badge.red>
              <Badge>min</Badge>
              <Badge>max</Badge>
              <Badge>current</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import PaginationFirstLast from "@components/PaginationFirstLast";

<PaginationFirstLast
  className='my-4'
  max={5}
  onChangePage={(e) => {
    console.log(e);
    setCurrentPages(e);
  }}
/>
<Text>{currentPages}</Text>
<PaginationFirstLast className='my-4' max={10} current={10} onChangePage={(e) => console.log(e)} />`}
              ></Code>
            </AccordionCode>
          </Section>

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

              <ThemeChanger />

              <ThemeSelect />
            </div>
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
    </>
  );
}
