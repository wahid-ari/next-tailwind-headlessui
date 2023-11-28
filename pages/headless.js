import { Fragment, useContext, useState } from 'react';
import Head from 'next/head';
import Accordion from '@components/Accordion';
import AccordionCode from '@components/AccordionCode';
import BackToTop from '@components/BackToTop';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Code from '@components/Code';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import MyModal from '@components/MyModal';
import Navbar from '@components/Navbar';
import RadioBox from '@components/RadioBox';
import SearchBox from '@components/SearchBox';
import Section from '@components/Section';
import SelectBox from '@components/SelectBox';
import SelectBoxCustom from '@components/SelectBoxCustom';
import Skeletons from '@components/Skeletons';
import Tabs from '@components/Tabs';
import Tabss from '@components/Tabss';
import TabsVertical from '@components/TabsVertical';
import TabsVerticall from '@components/TabsVerticall';
import Text from '@components/Text';
import TocLink from '@components/TocLink';
import { Combobox, Dialog, Disclosure, Listbox, Menu, Popover, RadioGroup, Tab, Transition } from '@headlessui/react';
import {
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
  ArrowSmUpIcon,
  ChevronUpIcon,
  ExclamationIcon,
  MinusSmIcon,
  MoonIcon,
  PlusSmIcon,
  SelectorIcon,
  SunIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { GlobalContext } from '@utils/GlobalContext';
import useToast from '@utils/useToast';
import { AnimateSharedLayout, motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';

const reactMultiSelectOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'purple', label: 'Purple' },
  { value: 'orange', label: 'Orange' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const product = {
  colors: [
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Green', class: 'bg-teal-500' },
    { name: 'Blue', class: 'bg-blue-500' },
  ],
};

const sizes = [
  { name: 'S', disabled: true },
  { name: 'M', disabled: true },
  { name: 'L', disabled: true },
  { name: 'XL', disabled: false },
];

const people = [
  { id: 1, nik: '11111', name: 'Wade Cooper' },
  { id: 2, nik: '22222', name: 'Arlene Mccoy' },
  { id: 3, nik: '33333', name: 'Devon Webb' },
  { id: 4, nik: '44444', name: 'Tom Cook' },
  { id: 5, nik: '55555', name: 'Tanya Fox' },
  { id: 6, nik: '66666', name: 'Hellen Schmidt' },
];

const persons = [
  { id: '111', value: 'Wade Cooper' },
  { id: '222', value: 'Arlene Mccoy' },
  { id: '333', value: 'Devon Webb' },
  { id: '444', value: 'Tom Cook' },
  { id: '555', value: 'Tanya Fox' },
  { id: '666', value: 'Hellen Schmidt' },
];

const colorBox = [
  { name: 'Red' },
  { name: 'Green' },
  { name: 'Blue' },
  { name: 'Orange' },
  { name: 'Yellow' },
  { name: 'Purple' },
];

const colorBoxId = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Green' },
  { id: 3, name: 'Blue' },
  { id: 4, name: 'Orange' },
  { id: 5, name: 'Yellow' },
  { id: 6, name: 'Purple' },
];

function IconOne() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#ccfbf1' />
      <path d='M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z' stroke='#0D9488' strokeWidth='2' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z'
        stroke='#0D9'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z'
        stroke='#0D9'
        strokeWidth='2'
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#ccfbf1' />
      <path
        d='M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27'
        stroke='#0D9488'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.804 30H29.1963L24.0001 21L18.804 30Z'
        stroke='#0D9'
        strokeWidth='2'
      />
    </svg>
  );
}

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
];

export default function Third() {
  const [open, setOpen] = useState(false);

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

  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const [openModal, setOpenModal] = useState(false);

  const [openDangerModal, setOpenDangerModal] = useState(false);

  const [openModalWithData, setOpenModalWithData] = useState(false);
  const [modalData, setModalData] = useState();
  // handle modal submitted
  function handleSubmitModal() {
    setOpenModalWithData(false);
    alert(`Submit Delete ${modalData}`);
  }
  // handle modal opened
  function handleShowModal(data) {
    setModalData(data);
    setOpenModalWithData(true);
  }

  const [selectedBoxId, setSelectedBoxId] = useState(colorBoxId[0]);
  function handleSelectBoxIdChange(e) {
    setSelectedBoxId(e);
  }

  const [selectedBox, setSelectedBox] = useState();
  function handleSelectBoxChange(e) {
    setSelectedBox(e);
  }

  const [selected, setSelected] = useState();
  function handleSelectChange(e) {
    setSelected(e);
  }

  const [selectedMulti, setSelectedMulti] = useState([]);
  function handleSelectMultiChange(e) {
    setSelectedMulti(e);
  }

  const [selectedMultiSelect, setSelectedMultiSelect] = useState([people[0], people[1]]);
  function handleSelectMultiSelectChange(e) {
    setSelectedMultiSelect(e);
  }

  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  function handleRadioBoxChange(e) {
    setSelectedSize(e);
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  function handleRadioColorChange(e) {
    setSelectedColor(e);
  }

  const [selectedSearchBox, setSelectedSearchBox] = useState();
  const [filteredOptions, setFilteredOptions] = useState(persons);
  function handleChangeSearchBox(e) {
    setFilteredOptions(persons.filter((person) => person.value.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  const [selectedSearchBoxID, setSelectedSearchBoxID] = useState(persons[0]);
  const [filteredOptionsID, setFilteredOptionsID] = useState(persons);
  function handleChangeSearchBoxID(e) {
    setFilteredOptionsID(persons.filter((person) => person.id.includes(e.target.value)));
  }

  const [selectedComboBox, setSelectedComboBox] = useState(people[0]);
  const [filteredPeople, setFilteredPeople] = useState(people);
  function handleChangeComboBox(e) {
    setFilteredPeople(people.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  const [selectedComboBoxMulti, setSelectedComboBoxMulti] = useState([]);
  const [filteredPeopleMulti, setFilteredPeopleMulti] = useState(people);
  function handleChangeComboBoxMulti(e) {
    setFilteredPeopleMulti(people.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  const [selectedComboBoxID, setSelectedComboBoxID] = useState();
  const [filteredOption, setFilteredOption] = useState(people);
  function handleChangeComboBoxID(e) {
    setFilteredOption(people.filter((person) => person.nik.includes(e.target.value)));
  }

  const [multiSelect, setMultiSelect] = useState([reactMultiSelectOptions[0], reactMultiSelectOptions[1]]);
  function handleMultiSelectChange(e) {
    setMultiSelect(e);
  }

  const [unselectMultiSelect, setUnselectMultiSelect] = useState();
  function handleUnselectMultiSelectChange(e) {
    setUnselectMultiSelect(e);
  }

  const [slideOver, setSlideOver] = useState(false);
  const [leftSlideOver, setLeftSlideOver] = useState(false);
  const [bottomSlideOver, setBottomSlideOver] = useState(false);

  return (
    <>
      <Head>
        <title>Headless</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:px-8'>
          <Section id='toc' name='Headless Components TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#react-multi-select-search' text='React Multi Select Search' />
                <TocLink href='#search-box' text='Search Box' />
                <TocLink href='#combo-box' text='Combo Box' />
                <TocLink href='#combo-box-multi' text='Combo Box Multi' />
                <TocLink href='#select-box' text='Select Box' />
                <TocLink href='#list-box' text='List Box' />
                <TocLink href='#list-box-multi' text='List Box Multi' />
                <TocLink href='#radio-box' text='Radio Box' />
                <TocLink href='#radio-group' text='Radio Group' />
              </div>
              <div>
                <TocLink href='#disclosure' text='Disclosure' />
                <TocLink href='#menu' text='Menu' />
                <TocLink href='#popover' text='Popover' />
                <TocLink href='#modal' text='Modal' />
                <TocLink href='#slide-over' text='Slide Over' />
                <TocLink href='#simple-tab' text='Simple Tab' />
                <TocLink href='#tab' text='Tab' />
                <TocLink href='#smooth-tab' text='Smooth Tab' />
              </div>
              <div>
                <TocLink href='#tab-style-a' text='Tab Style A' />
                <TocLink href='#tab-style-b' text='Tab Style B' />
                <TocLink href='#tab-style-c' text='Tab Style C' />
                <TocLink href='#accordion' text='Accordion' />
                <TocLink href='#toast' text='Toast' />
                <TocLink href='#toast-custom' text='Toast Custom' />
                <TocLink href='#dark-mode' text='Dark Mode' />
              </div>
            </div>
          </Section>

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

          <Section id='search-box' name='SearchBox'>
            <SearchBox
              label='Unselect Search Box, Search by Name'
              placeholder='Search by Name'
              value={selectedSearchBox}
              onChange={setSelectedSearchBox}
              onChangeInput={handleChangeSearchBox}
              options={filteredOptions}
            />
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedSearchBox ? selectedSearchBox.value : ''}{' '}
            </Text>

            <SearchBox
              label='Selected Search Box ID'
              placeholder='Search by ID'
              value={selectedSearchBoxID}
              onChange={setSelectedSearchBoxID}
              onChangeInput={handleChangeSearchBoxID}
              options={filteredOptionsID}
            />
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedSearchBoxID ? selectedSearchBoxID.id : ''}{' '}
            </Text>
          </Section>

          <Section id='combo-box' name='ComboBox'>
            <Combobox value={selectedComboBoxID} onChange={setSelectedComboBoxID}>
              <Combobox.Label className='text-sm font-medium dark:text-gray-200'>Unselected By Default:</Combobox.Label>
              <div className='relative mt-2'>
                <div className='relative w-full cursor-default overflow-hidden rounded border border-gray-200 text-left text-sm dark:border-neutral-700 '>
                  <Combobox.Input
                    className='w-full border-none bg-white py-2 text-sm text-gray-900 transition-all hover:bg-gray-100 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
                    displayValue={(option) => (option?.nik ? option.nik : '')}
                    placeholder='Search By Id'
                    type='number'
                    onChange={handleChangeComboBoxID}
                  />
                  <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <SelectorIcon className='h-5 w-5 text-gray-500 dark:text-gray-200' aria-hidden='true' />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Combobox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white py-1 text-sm shadow-lg dark:border-neutral-700 dark:bg-neutral-900'>
                    {filteredOption.length === 0 ? (
                      <div className='relative cursor-default select-none px-4 py-2 text-neutral-700 dark:text-gray-300'>
                        Nothing found.
                      </div>
                    ) : (
                      filteredOption.map((option) => (
                        <Combobox.Option
                          key={option.id}
                          className={({ active }) =>
                            `relative cursor-pointer select-none px-4 py-2 text-neutral-700 hover:text-blue-500 dark:text-gray-200
														${active ? 'bg-gray-100 text-blue-500 dark:bg-neutral-800' : 'text-gray-800 dark:text-gray-200'}`
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <span
                              className={`block truncate ${selected ? 'font-medium text-blue-500' : 'font-normal'}`}
                            >
                              {/* {`${option.nik} - ${option.name}`} */}
                              {`${option.nik} `}
                            </span>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedComboBoxID ? selectedComboBoxID.nik : ''}{' '}
            </Text>

            <Combobox value={selectedComboBox} onChange={setSelectedComboBox}>
              <Combobox.Label className='text-sm font-medium dark:text-gray-200'>Selected By Default:</Combobox.Label>
              <div className='relative mt-2'>
                <div className='relative w-full cursor-default overflow-hidden rounded border border-gray-200 text-left text-sm dark:border-neutral-700 '>
                  <Combobox.Input
                    className='w-full border-none bg-white py-2 text-sm text-gray-900 transition-all hover:bg-gray-100 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
                    displayValue={(option) => option.name || ''}
                    placeholder='Search By Name'
                    onChange={handleChangeComboBox}
                  />
                  <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <SelectorIcon className='h-5 w-5 text-gray-500 dark:text-gray-200' aria-hidden='true' />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Combobox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white py-1 text-sm shadow-lg scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:border-neutral-700 dark:bg-neutral-900 dark:scrollbar-thumb-neutral-700'>
                    {filteredPeople.length === 0 ? (
                      <div className='relative cursor-default select-none px-4 py-2 text-neutral-700 dark:text-gray-300'>
                        Nothing found.
                      </div>
                    ) : (
                      filteredPeople.map((option) => (
                        <Combobox.Option
                          key={option.id}
                          className={({ active }) =>
                            `relative cursor-pointer select-none px-4 py-2 text-neutral-700 hover:text-blue-500 dark:text-gray-200
														${active ? 'bg-gray-100 text-blue-500 dark:bg-neutral-800' : 'text-gray-800 dark:text-gray-200'}`
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <span
                              className={`block truncate ${selected ? 'font-medium text-blue-500' : 'font-normal'}`}
                            >
                              {option.name}
                            </span>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedComboBox ? selectedComboBox.name : ''}{' '}
            </Text>
          </Section>

          <Section id='combo-box-multi' name='ComboBox Multi'>
            <Combobox value={selectedComboBoxMulti} onChange={setSelectedComboBoxMulti} multiple>
              <Combobox.Label className='text-sm font-medium dark:text-gray-200'>Selected By Default:</Combobox.Label>
              <div className='relative mt-2'>
                <div className='relative w-full cursor-default overflow-hidden rounded border border-gray-200 text-left text-sm dark:border-neutral-700 '>
                  {selectedComboBoxMulti.length > 0 && (
                    <ul className='flex gap-1 p-2 dark:text-white'>
                      {selectedComboBoxMulti.map((person) => (
                        <li key={person.id}>{person.name},</li>
                      ))}
                    </ul>
                  )}
                  <Combobox.Input
                    className='w-full border-none bg-white py-2 text-sm text-gray-900 transition-all hover:bg-gray-100 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
                    placeholder='Search By Name'
                    onChange={handleChangeComboBoxMulti}
                  />
                  <Combobox.Button className='absolute bottom-2 right-0 flex items-center pr-2'>
                    <SelectorIcon className='h-5 w-5 text-gray-500 dark:text-gray-200' aria-hidden='true' />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Combobox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white py-1 text-sm shadow-lg scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:border-neutral-700 dark:bg-neutral-900 dark:scrollbar-thumb-neutral-700'>
                    {filteredPeopleMulti.length === 0 ? (
                      <div className='relative cursor-default select-none px-4 py-2 text-neutral-700 dark:text-gray-300'>
                        Nothing found.
                      </div>
                    ) : (
                      filteredPeopleMulti.map((option) => (
                        <Combobox.Option
                          key={option.id}
                          className={({ active }) =>
                            `relative cursor-pointer select-none px-4 py-2 text-neutral-700 hover:text-blue-500 dark:text-gray-200
														${active ? 'bg-gray-100 text-blue-500 dark:bg-neutral-800' : 'text-gray-800 dark:text-gray-200'}`
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <span
                              className={`block truncate ${selected ? 'font-medium text-blue-500' : 'font-normal'}`}
                            >
                              {option.name}
                            </span>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected :{' '}
              {selectedComboBoxMulti.length > 0
                ? selectedComboBoxMulti.map((person) => person.name).join(', ')
                : 'Choose Search Multi Select'}{' '}
            </Text>
          </Section>

          <Section id='select-box' name='SelectBox'>
            <SelectBox
              label='Select Color'
              value={selectedBox}
              onChange={handleSelectBoxChange}
              options={colorBox}
            ></SelectBox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedBox ? selectedBox.name : ''}{' '}
            </Text>

            <SelectBoxCustom
              label='Select Color'
              value={selectedBoxId}
              onChange={handleSelectBoxIdChange}
              options={colorBoxId}
            ></SelectBoxCustom>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedBoxId ? selectedBoxId.id + '-' + selectedBoxId.name : ''}{' '}
            </Text>
          </Section>

          <Section id='list-box' name='Listbox'>
            <Listbox value={selected} onChange={handleSelectChange}>
              <div className='relative mt-1'>
                <Listbox.Button className='relative w-full cursor-pointer rounded border border-gray-200 bg-white px-3 py-2 text-left text-sm transition-all hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'>
                  <span className='block truncate'>{selected ? selected.name : 'Choose Select'}</span>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <SelectorIcon className='h-5 w-5 text-gray-500 dark:text-gray-200' aria-hidden='true' />
                  </span>
                </Listbox.Button>
                <Listbox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white text-sm shadow-lg dark:border-neutral-700 dark:bg-neutral-900'>
                  {people.map((person, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `cursor-pointer border-b border-gray-200 px-3 py-2 text-neutral-700 hover:bg-gray-100 hover:text-blue-500 dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-800 dark:hover:text-blue-500 
												${active ? 'bg-gray-100 text-blue-600 dark:bg-neutral-800 dark:text-blue-500' : ' '}
												`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <span className={`block truncate ${selected ? 'font-semibold text-blue-500' : ' '}`}>
                          {person.name}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            <Listbox value={selected} onChange={handleSelectChange}>
              {({ open }) => (
                <div className='relative mt-4'>
                  <Listbox.Button className='relative w-full cursor-pointer rounded border border-gray-200 bg-white px-3 py-2 text-left text-sm transition-all hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'>
                    <span className='block truncate'>{selected ? selected.name : 'Choose Select'}</span>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform duration-300' : 'rotate-0 transform duration-200'
                        } h-5 w-5 text-gray-500 dark:text-gray-200`}
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white text-sm shadow-lg scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:border-neutral-700 dark:bg-neutral-900 dark:scrollbar-thumb-neutral-700'>
                    {people.map((person, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `cursor-pointer border-b border-gray-200 px-3 py-2 text-neutral-700 hover:bg-gray-100 hover:text-blue-500 dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-800 dark:hover:text-blue-500 
												${active ? 'bg-gray-100 text-blue-600 dark:bg-neutral-800 dark:text-blue-500' : ' '}
												`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <span className={`block truncate ${selected ? 'font-semibold text-blue-500' : ' '}`}>
                            {person.name}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selected ? selected.name : ''}{' '}
            </Text>
          </Section>

          <Section id='list-box-multi' name='Listbox Multi'>
            <Listbox value={selectedMulti} onChange={handleSelectMultiChange} multiple>
              <div className='relative mt-1'>
                <Listbox.Button className='relative w-full cursor-pointer rounded border border-gray-200 bg-white px-3 py-2 text-left text-sm transition-all hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'>
                  {selectedMulti.length > 0
                    ? selectedMulti.map((person) => person.name).join(', ')
                    : 'Choose Multi Select'}
                  <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <SelectorIcon className='h-5 w-5 text-gray-500 dark:text-gray-200' aria-hidden='true' />
                  </span>
                </Listbox.Button>
                <Listbox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white text-sm shadow-lg dark:border-neutral-700 dark:bg-neutral-900'>
                  {people.map((person, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `cursor-pointer border-b border-gray-200 px-3 py-2 text-neutral-700 hover:bg-gray-100 hover:text-blue-500 dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-800 dark:hover:text-blue-500 
												${active ? 'bg-gray-100 text-blue-600 dark:bg-neutral-800 dark:text-blue-500' : ' '}
												`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <span className={`block truncate ${selected ? 'font-semibold text-blue-500' : ' '}`}>
                          {person.name}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected :{' '}
              {selectedMulti.length > 0
                ? selectedMulti.map((person) => person.name).join(', ')
                : 'Choose Multi Select'}{' '}
            </Text>

            <Listbox value={selectedMultiSelect} onChange={handleSelectMultiSelectChange} multiple>
              {({ open }) => (
                <div className='relative mt-4'>
                  <Listbox.Button className='relative w-full cursor-pointer rounded border border-gray-200 bg-white px-3 py-2 text-left text-sm transition-all hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'>
                    {selectedMultiSelect.length > 0
                      ? selectedMultiSelect.map((person) => person.name).join(', ')
                      : 'Choose Selected Multi Select'}
                    <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform duration-300' : 'rotate-0 transform duration-200'
                        } h-5 w-5 text-gray-500 dark:text-gray-200`}
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white text-sm shadow-lg scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:border-neutral-700 dark:bg-neutral-900 dark:scrollbar-thumb-neutral-700'>
                    {people.map((person, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `cursor-pointer border-b border-gray-200 px-3 py-2 text-neutral-700 hover:bg-gray-100 hover:text-blue-500 dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-800 dark:hover:text-blue-500 
												${active ? 'bg-gray-100 text-blue-600 dark:bg-neutral-800 dark:text-blue-500' : ' '}
												`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <span className={`block truncate ${selected ? 'font-semibold text-blue-500' : ' '}`}>
                            {person.name}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected :{' '}
              {selectedMultiSelect.length > 0
                ? selectedMultiSelect.map((person) => person.name).join(', ')
                : 'Choose Selected Multi Select'}{' '}
            </Text>
          </Section>

          <Section id='radio-box' name='Radio Box'>
            <RadioBox label='Radio Box' value={selectedSize} onChange={handleRadioBoxChange} options={sizes}></RadioBox>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedSize ? selectedSize.name : ''}{' '}
            </Text>
          </Section>

          <Section id='radio-group' name='Radio Group'>
            <RadioGroup value={selectedSize} onChange={setSelectedSize} className='mt-4'>
              <RadioGroup.Label className='sr-only'>Choose a size</RadioGroup.Label>
              <div className='flex items-center space-x-3'>
                {sizes.map((option) => (
                  <RadioGroup.Option
                    key={option.name}
                    value={option}
                    disabled={!option.disabled}
                    className={`
												${
                          option.disabled
                            ? 'cursor-pointer bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-200'
                            : 'cursor-not-allowed bg-gray-50 text-gray-300 dark:bg-neutral-900 dark:text-gray-600'
                        }
												relative flex justify-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-gray-100 dark:border-neutral-700 dark:hover:bg-neutral-800
										`}
                  >
                    {({ checked }) => (
                      <>
                        <RadioGroup.Label as='p'>{option.name}</RadioGroup.Label>
                        {option.disabled ? (
                          <div
                            className={`${
                              checked && 'border-2 border-blue-500'
                            } pointer-events-none absolute -inset-px rounded-md`}
                            aria-hidden='true'
                          />
                        ) : (
                          <div aria-hidden='true' className='pointer-events-none absolute inset-px rounded-md'>
                            <svg
                              className='absolute inset-0 h-full w-full stroke-1 text-gray-200 dark:text-gray-600'
                              viewBox='0 0 100 100'
                              preserveAspectRatio='none'
                              stroke='currentColor'
                            >
                              <line x1={100} y1={100} x2={0} y2={0} vectorEffect='non-scaling-stroke' />
                            </svg>
                          </div>
                        )}
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedSize ? selectedSize.name : ''}{' '}
            </Text>

            <RadioGroup value={selectedColor} onChange={handleRadioColorChange} className='mt-4'>
              <RadioGroup.Label className='sr-only'>Choose a color</RadioGroup.Label>
              <div className='flex items-center space-x-3'>
                {product.colors.map((color) => (
                  <RadioGroup.Option
                    key={color.name}
                    value={color}
                    className={({ active, checked }) =>
                      classNames(
                        active && checked ? 'ring-2 ring-gray-500' : '',
                        !active && checked ? 'ring-2 ring-gray-500' : '',
                        'relative flex cursor-pointer items-center justify-center rounded-full p-0.5',
                      )
                    }
                  >
                    <RadioGroup.Label as='p' className='sr-only'>
                      {color.name}
                    </RadioGroup.Label>
                    <span aria-hidden='true' className={`${color.class} h-7 w-7 rounded-full`} />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            <Text className='my-3 !text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedColor ? selectedColor.name : ''}{' '}
            </Text>
          </Section>

          <Section id='disclosure' name='Disclosure'>
            <Disclosure as='div'>
              {({ open }) => (
                <>
                  <h3 className='flow-root'>
                    <Disclosure.Button className='group flex w-full items-center justify-between rounded bg-gray-100 px-2 py-3 text-gray-600 transition-all hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'>
                      <span className='font-medium'>Color</span>
                      <span className='ml-6 flex items-center'>
                        {open ? (
                          <MinusSmIcon className='h-5 w-5' aria-hidden='true' />
                        ) : (
                          <PlusSmIcon className='h-5 w-5' aria-hidden='true' />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className='px-2 pt-2'>
                    <div className='space-y-2'>
                      <Checkbox label='Red' id='red' name='red' value='red' />
                      <Checkbox label='Blue' id='blue' name='blue' value='blue' />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <div className='mt-4 w-full max-w-md p-2'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-blue-600 transition-all hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'>
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-600`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-600 dark:text-gray-300'>
                      If you&apos;re unhappy with your purchase for any reason, email us within 90 days and we&apos;ll
                      refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-blue-600 transition-all hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'>
                      <span>Do you offer technical support?</span>
                      <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-600`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-600 dark:text-gray-300'>
                      No.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Section>

          <Section id='menu' name='Menu'>
            <Menu as='div' className='relative mr-4 inline-block text-left'>
              {({ open }) => (
                <>
                  <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'>
                    Options
                    <ChevronDownIcon
                      className={`-mr-1 ml-2 h-5 w-5 text-gray-500 dark:text-gray-200 
               				${open ? 'rotate-180 transform duration-300' : 'rotate-0 transform duration-200'}`}
                      aria-hidden='true'
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                  >
                    <Menu.Items className='absolute left-0 mt-2 w-32 rounded-md bg-white shadow dark:bg-neutral-900'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={`${
                              active ? 'bg-gray-100 dark:bg-neutral-800 dark:text-gray-200' : 'text-gray-900'
                            } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-neutral-800`}
                          >
                            Team
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={`${
                              active ? 'bg-gray-100 dark:bg-neutral-800 dark:text-gray-200' : 'text-gray-900'
                            } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-neutral-800`}
                          >
                            About
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>

            <Menu as='div' className='relative inline-block text-left'>
              <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'>
                Options
                <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
              >
                <Menu.Items className='absolute right-0 mt-2 w-32 rounded-md bg-white shadow dark:bg-neutral-900'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={`${
                          active ? 'bg-gray-100 dark:bg-neutral-800 dark:text-gray-200' : 'text-gray-900'
                        } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-neutral-800`}
                      >
                        Team
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={`${
                          active ? 'bg-gray-100 dark:bg-neutral-800 dark:text-gray-200' : 'text-gray-900'
                        } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-neutral-800`}
                      >
                        About
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </Section>

          <Section id='popover' name='Popover'>
            <div className='flex w-full justify-center px-4 py-8'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
									${open ? '' : 'text-opacity-90'}
									group inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white transition-all hover:bg-teal-700`}
                    >
                      <span>Popover</span>
                      <ChevronDownIcon
                        className={`${open ? 'rotate-180 transform' : ''}
										ml-2 h-5 w-5 text-white transition duration-150 ease-in-out`}
                        aria-hidden='true'
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                        <div className='overflow-hidden rounded-lg shadow-lg'>
                          <div className='relative grid gap-8 bg-white p-7 dark:bg-neutral-800 lg:grid-cols-2'>
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-neutral-700'
                              >
                                <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
                                  <item.icon aria-hidden='true' />
                                </div>
                                <div className='ml-4'>
                                  <p className='text-sm font-medium text-gray-900 dark:text-white'>{item.name}</p>
                                  <p className='text-sm text-gray-500 dark:text-gray-400'>{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className='bg-gray-50 px-4 pb-4 dark:bg-neutral-800'>
                            <a
                              href='##'
                              className='flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-neutral-700'
                            >
                              <span className='flex items-center'>
                                <span className='text-sm font-medium text-gray-900 dark:text-white'>Documentation</span>
                              </span>
                              <span className='block text-sm text-gray-500 dark:text-gray-400'>
                                Start integrating products and tools
                              </span>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </Section>

          <Section id='modal' name='Modal'>
            <button
              type='button'
              className='mt-3 block rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'
              onClick={() => setOpen(true)}
            >
              Open Modal
            </button>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' open={open} onClose={setOpen}>
                <div className='px-4 pt-4 text-center sm:block sm:p-0'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Dialog.Overlay className='fixed inset-0 bg-black opacity-30 transition-opacity' />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span className='inline-block h-screen align-middle' aria-hidden='true'>
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    enterTo='opacity-100 translate-y-0 sm:scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                    leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                  >
                    <div className='relative inline-block max-w-lg transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all dark:bg-neutral-900'>
                      <div className='p-5 sm:flex'>
                        <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100'>
                          <ExclamationIcon className='h-6 w-6 text-red-600' aria-hidden='true' />
                        </div>
                        <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                          <Dialog.Title
                            as='h3'
                            className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
                          >
                            Deactivate account
                          </Dialog.Title>
                          <div className='mt-2'>
                            <p className='text-sm text-gray-600 dark:text-gray-300'>
                              Are you sure you want to deactivate your account? All of your data will be permanently
                              removed. This action cannot be undone.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='bg-white px-5 pb-5 dark:bg-neutral-900 sm:flex sm:flex-row-reverse'>
                        <button
                          type='button'
                          className='w-full rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto'
                          onClick={() => setOpen(false)}
                        >
                          Deactivate
                        </button>
                        <button
                          type='button'
                          className='mt-3 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800 sm:ml-3 sm:mt-0 sm:w-auto'
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

            <MyModal
              modalTitle='Modal Title'
              isOpenModal={openModal}
              onCloseModal={() => setOpenModal(false)}
              onConfirmModal={() => setOpenModal(false)}
            >
              <Text className='pb-2'>Modal Body</Text>
            </MyModal>
            <Button className='mt-2' onClick={() => setOpenModal(true)}>
              Open Modal
            </Button>
            <br />
            <MyModal
              modalTitle='Modal Title Danger'
              isOpenModal={openDangerModal}
              danger
              onCloseModal={() => setOpenDangerModal(false)}
              onConfirmModal={() => setOpenDangerModal(false)}
            >
              <Text className='pb-2'>Modal Body Danger</Text>
            </MyModal>
            <Button.red className='mt-2' onClick={() => setOpenDangerModal(true)}>
              Open Danger Modal
            </Button.red>
            <br />
            <MyModal
              modalTitle='Modal Title With Data'
              isOpenModal={openModalWithData}
              onCloseModal={() => setOpenModalWithData(false)}
              onConfirmModal={handleSubmitModal}
            >
              <Text className='pb-2'>Modal Body With {modalData}</Text>
            </MyModal>
            <Button className='mt-2' onClick={() => handleShowModal('Data 2')}>
              Open Modal With Data
            </Button>
          </Section>

          <Section id='slide-over' name='Slide Over'>
            <Button onClick={() => setSlideOver(true)} className='mb-4 flex gap-x-2'>
              From Right Slide Over <ArrowSmLeftIcon className='h-5 w-5 text-white' />
            </Button>

            <Transition.Root show={slideOver} as={Fragment}>
              <Dialog as='div' className='relative z-10' onClose={setSlideOver}>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-500'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-hidden'>
                  <div className='absolute inset-0 overflow-hidden'>
                    <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                      <Transition.Child
                        as={Fragment}
                        enter='transform transition ease-in-out duration-500 sm:duration-700'
                        enterFrom='translate-x-full'
                        enterTo='translate-x-0'
                        leave='transform transition ease-in-out duration-500 sm:duration-700'
                        leaveFrom='translate-x-0'
                        leaveTo='translate-x-full'
                      >
                        <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                          <Transition.Child
                            as={Fragment}
                            enter='ease-in-out duration-500'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in-out duration-500'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                              <button
                                type='button'
                                className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                                onClick={() => setSlideOver(false)}
                              >
                                <span className='sr-only'>Close panel</span>
                                <XIcon className='h-6 w-6' aria-hidden='true' />
                              </button>
                            </div>
                          </Transition.Child>
                          <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-neutral-900'>
                            <div className='px-4 sm:px-6'>
                              <Dialog.Title className='text-lg font-medium text-gray-900 dark:text-white'>
                                {' '}
                                Panel title{' '}
                              </Dialog.Title>
                            </div>
                            <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                              {/* Replace with your content */}
                              <div className='absolute inset-0 px-4 sm:px-6'>
                                <div
                                  className='h-full rounded border-2 border-dashed border-gray-200 dark:border-neutral-700'
                                  aria-hidden='true'
                                />
                              </div>
                              {/* /End replace */}
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            <Button.green onClick={() => setLeftSlideOver(true)} className='mb-4 flex gap-x-2'>
              From Left Slide Over <ArrowSmRightIcon className='h-5 w-5 text-white' />
            </Button.green>

            <Transition.Root show={leftSlideOver} as={Fragment}>
              <Dialog as='div' className='relative z-10' onClose={setLeftSlideOver}>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-500'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-hidden'>
                  <div className='absolute inset-0 overflow-hidden'>
                    <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10'>
                      <Transition.Child
                        as={Fragment}
                        enter='transform transition ease-in-out duration-500 sm:duration-700'
                        enterFrom='-translate-x-full'
                        enterTo='translate-x-0'
                        leave='transform transition ease-in-out duration-500 sm:duration-700'
                        leaveFrom='translate-x-0'
                        leaveTo='-translate-x-full'
                      >
                        <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                          <Transition.Child
                            as={Fragment}
                            enter='ease-in-out duration-500'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in-out duration-500'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <div className='absolute right-0 top-0 -mr-8 flex pl-2 pt-4 sm:-mr-10 sm:pl-4'>
                              <button
                                type='button'
                                className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                                onClick={() => setLeftSlideOver(false)}
                              >
                                <span className='sr-only'>Close panel</span>
                                <XIcon className='h-6 w-6' aria-hidden='true' />
                              </button>
                            </div>
                          </Transition.Child>
                          <div className='overflow-none flex h-full flex-col bg-white py-6 shadow-xl dark:bg-neutral-900'>
                            <div className='px-4 sm:px-6'>
                              <Dialog.Title className='text-lg font-medium text-gray-900 dark:text-white'>
                                {' '}
                                Left Panel title{' '}
                              </Dialog.Title>
                            </div>
                            <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                              {/* Replace with your content */}
                              <div className='absolute inset-0 px-4 sm:px-6'>
                                <div
                                  className='h-full rounded border-2 border-dashed border-gray-200 dark:border-neutral-700'
                                  aria-hidden='true'
                                />
                              </div>
                              {/* /End replace */}
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            <Button.orange onClick={() => setBottomSlideOver(true)} className='mb-4 flex gap-x-2'>
              From Bottom Slide Over <ArrowSmUpIcon className='h-5 w-5 text-white' />
            </Button.orange>

            <Transition.Root show={bottomSlideOver} as={Fragment}>
              <Dialog as='div' className='relative z-50' onClose={setBottomSlideOver}>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-500'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-hidden'>
                  <div className='absolute inset-0 overflow-hidden'>
                    <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10'>
                      <Transition.Child
                        as={Fragment}
                        enter='transform transition ease-in-out duration-500 sm:duration-700'
                        enterFrom='translate-y-full'
                        enterTo='translate-y-100'
                        leave='transform transition ease-in-out duration-500 sm:duration-700'
                        leaveFrom='translate-y-100'
                        leaveTo='translate-y-full'
                      >
                        <Dialog.Panel className='pointer-events-auto absolute bottom-0 h-40 w-screen'>
                          <Transition.Child
                            as={Fragment}
                            enter='ease-in-out duration-500'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in-out duration-500'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <div className='absolute right-0 flex pr-5 pt-6'>
                              <button
                                type='button'
                                className='rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white'
                                onClick={() => setBottomSlideOver(false)}
                              >
                                <span className='sr-only'>Close panel</span>
                                <XIcon className='h-6 w-6' aria-hidden='true' />
                              </button>
                            </div>
                          </Transition.Child>
                          <div className='overflow-none flex h-full flex-col bg-white py-6 shadow-xl dark:bg-neutral-900'>
                            <div className='px-4 sm:px-6'>
                              <Dialog.Title className='text-lg font-medium text-gray-900 dark:text-white'>
                                {' '}
                                Bottom Panel title{' '}
                              </Dialog.Title>
                            </div>
                            <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                              {/* Replace with your content */}
                              <div className='absolute inset-0 px-4 sm:px-6'>
                                <div
                                  className='h-full rounded border-2 border-dashed border-gray-200 dark:border-neutral-700'
                                  aria-hidden='true'
                                />
                              </div>
                              {/* /End replace */}
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </Section>

          <Section id='simple-tab' name='Simple Tab'>
            <Tabs
              tabs={['Tab A', 'Tab B']}
              contents={['Content A', 'Content B Content B Content B Content B Content B']}
            ></Tabs>
            <TabsVerticall
              tabs={['Tab A Vertical', 'Tab B Vertical']}
              contents={[
                'Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.',
                'Content B Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.',
              ]}
            ></TabsVerticall>
            <Tabss
              tabs={['Tab A', 'Tab B']}
              contents={['Content A', 'Content B Content B Content B Content B']}
            ></Tabss>
            <TabsVertical
              tabs={['Tab A Vertical', 'Tab B Vertical']}
              contents={[
                'Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.',
                'Content B Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos. direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.',
              ]}
            ></TabsVertical>
          </Section>

          <Section id='tab' name='Tab'>
            <Tab.Group>
              <Tab.List className='flex w-full max-w-sm space-x-1 rounded-xl bg-gray-100 p-1 font-medium dark:bg-neutral-800'>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-xl py-2 text-base font-medium text-blue-500 transition-all',
                      selected
                        ? 'bg-blue-500	!text-white'
                        : 'text-blue-500 hover:bg-gray-200 hover:text-blue-600 dark:hover:bg-neutral-700 dark:hover:text-blue-600',
                    )
                  }
                >
                  {' '}
                  Tab A{' '}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-xl py-2 text-base font-medium text-blue-500 transition-all',
                      selected
                        ? 'bg-blue-500	!text-white'
                        : 'text-blue-500 hover:bg-gray-200 hover:text-blue-600 dark:hover:bg-neutral-700 dark:hover:text-blue-600',
                    )
                  }
                >
                  {' '}
                  Tab B{' '}
                </Tab>
              </Tab.List>
              <Tab.Panels className='mt-2 max-w-lg'>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <p className='text-base leading-relaxed'>
                    Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut,
                    direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
                    vinegar tacos.
                  </p>
                  <div className='mt-6 flex md:mt-4'>
                    <button className='inline-flex rounded border-0 bg-blue-500 px-4 py-1 text-white hover:bg-blue-600 focus:outline-none'>
                      Button
                    </button>
                  </div>
                </Tab.Panel>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <div className='flex flex-wrap text-center'>
                    <div className='w-1/2 p-4'>
                      <h2 className='title-font text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl'>
                        2.7K
                      </h2>
                      <p className='leading-relaxed'>Users</p>
                    </div>
                    <div className='w-1/2 p-4'>
                      <h2 className='title-font text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl'>
                        1.8K
                      </h2>
                      <p className='leading-relaxed'>Subscribes</p>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Section>

          <Section id='smooth-tab' name='Smooth Tab'>
            <Tab.Group as='div' className='req-res my-4'>
              <Tab.List className='relative flex items-center overflow-auto rounded-t bg-blue-100/50 dark:bg-neutral-800/75'>
                <Tab as='div' className='group rounded'>
                  {({ selected }) => (
                    <button
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        selected
                          ? 'text-neutral-800 dark:text-neutral-100'
                          : 'text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100'
                      }`}
                    >
                      Item A
                      {selected && (
                        <motion.div
                          className='absolute bottom-0 left-0 right-0 z-10 h-[2px] rounded-full border-b-2 border-b-blue-500'
                          layoutId='underline'
                          initial={false}
                        />
                      )}
                    </button>
                  )}
                </Tab>
                <Tab as='div' className='group rounded'>
                  {({ selected }) => (
                    <button
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        selected
                          ? 'text-neutral-800 dark:text-neutral-100'
                          : 'text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100'
                      }`}
                    >
                      Item B
                      {selected && (
                        <motion.div
                          className='absolute bottom-0 left-0 right-0 z-10 h-[2px] rounded-full border-b-2 border-b-blue-500'
                          layoutId='underline'
                          initial={false}
                        />
                      )}
                    </button>
                  )}
                </Tab>
                <Tab as='div' className='group rounded'>
                  {({ selected }) => (
                    <button
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        selected
                          ? 'text-neutral-800 dark:text-neutral-100'
                          : 'text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100'
                      }`}
                    >
                      Item C
                      {selected && (
                        <motion.div
                          className='absolute bottom-0 left-0 right-0 z-10 h-[2px] rounded-full border-b-2 border-b-blue-500'
                          layoutId='underline'
                          initial={false}
                        />
                      )}
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className='rounded-b-xl py-4 dark:text-white'>
                <Tab.Panel>Content A</Tab.Panel>
                <Tab.Panel>Content B</Tab.Panel>
                <Tab.Panel>Content C</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Section>

          <Section id='tab-style-a' name='Tab Style A'>
            <Tab.Group>
              <Tab.List className='flex whitespace-nowrap border-b border-gray-200 font-medium dark:border-neutral-700'>
                <div>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] mr-4 w-full py-2 text-base font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
                        selected ? 'border-b-2 !border-blue-500 !text-blue-500' : '',
                      )
                    }
                  >
                    Tab A
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] mr-4 w-full py-2 text-base font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
                        selected ? 'border-b-2 !border-blue-500 !text-blue-500' : '',
                      )
                    }
                  >
                    Tab B
                  </Tab>
                </div>
              </Tab.List>
              <Tab.Panels className='mt-2'>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <Skeletons className='max-w-[12rem]' />
                </Tab.Panel>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <Skeletons className='max-w-[24rem] !rounded-full' />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Section>

          <Section id='tab-style-b' name='Tab Style B'>
            <Tab.Group>
              <Tab.List className='flex whitespace-nowrap border-b border-gray-200 font-medium dark:border-neutral-700'>
                <div className='flex gap-x-6'>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] w-full py-2 text-sm font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
                        selected ? 'border-b-2 !border-blue-500 !text-blue-500' : '',
                      )
                    }
                  >
                    Tab A
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] w-full py-2 text-sm font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
                        selected ? 'border-b-2 !border-blue-500 !text-blue-500' : '',
                      )
                    }
                  >
                    Tab Title B
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] w-full py-2 text-sm font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border-b-2 border-transparent hover:border-gray-500 dark:hover:border-gray-400',
                        selected ? 'border-b-2 !border-blue-500 !text-blue-500' : '',
                      )
                    }
                  >
                    Tab Title C
                  </Tab>
                </div>
              </Tab.List>
              <Tab.Panels className='mt-2'>
                <Tab.Panel className='rounded-xl py-3 dark:text-white'>
                  <Skeletons className='max-w-[8rem] !rounded-full' />
                </Tab.Panel>
                <Tab.Panel className='rounded-xl py-3 dark:text-white'>
                  <Skeletons className='max-w-[16rem] !rounded-full' />
                </Tab.Panel>
                <Tab.Panel className='rounded-xl py-3 dark:text-white'>
                  <Skeletons className='!rounded-full' />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Section>

          <Section id='tab-style-c' name='Tab Style C'>
            <Tab.Group>
              <Tab.List className='flex whitespace-nowrap border-b-2 border-gray-200 font-medium dark:border-neutral-700'>
                <div className='-mb-[0.08rem]'>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] mr-4 w-full rounded-t-md py-2 text-base font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border-2 border-transparent',
                        selected
                          ? 'border-x-2 border-t-2 border-x-gray-200 border-b-white border-t-gray-200 !text-blue-500 dark:border-neutral-700 dark:border-b-neutral-900'
                          : '',
                      )
                    }
                  >
                    Tab A
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] mr-4 w-full rounded-t-md py-2 text-base font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border-2 border-transparent',
                        selected
                          ? 'border-x-2 border-t-2 border-x-gray-200 border-b-white border-t-gray-200 !text-blue-500 dark:border-neutral-700 dark:border-b-neutral-900'
                          : '',
                      )
                    }
                  >
                    Tab B
                  </Tab>
                </div>
              </Tab.List>
              <Tab.Panels className='mt-2'>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <Skeletons className='max-w-[12rem]' />
                </Tab.Panel>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <Skeletons className='max-w-[24rem] !rounded-full' />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>

            <Tab.Group>
              <Tab.List className='flex whitespace-nowrap border-b border-gray-200 font-medium dark:border-neutral-700'>
                <div>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] mr-4 w-full rounded-t-md py-2 text-base font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border border-transparent',
                        selected
                          ? 'border border-x-gray-200 border-b-white border-t-gray-200 !text-blue-500 dark:border-x-neutral-700 dark:border-b-neutral-900 dark:border-t-neutral-700'
                          : '',
                      )
                    }
                  >
                    Tab A
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        '-mb-[0.06rem] mr-4 w-full rounded-t-md py-2 text-base font-medium transition-all',
                        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
                        'border border-transparent',
                        selected
                          ? 'border border-x-gray-200 border-b-white border-t-gray-200 !text-blue-500 dark:border-x-neutral-700 dark:border-b-neutral-900 dark:border-t-neutral-700'
                          : '',
                      )
                    }
                  >
                    Tab B
                  </Tab>
                </div>
              </Tab.List>
              <Tab.Panels className='mt-2'>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <Skeletons className='max-w-[12rem]' />
                </Tab.Panel>
                <Tab.Panel className='rounded-xl p-3 dark:text-white'>
                  <Skeletons className='max-w-[24rem] !rounded-full' />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Section>

          <Section id='accordion' name='Accordion'>
            <Accordion title='Accordion Title' className='my-2 max-w-2xl !text-base'>
              <Text>Accordion Body</Text>
            </Accordion>
            <Accordion title='Accordion Title' className='my-2 max-w-xl !text-base'>
              <Text>Accordion Body</Text>
            </Accordion>
            <Accordion title='Accordion Title' className='my-2 max-w-lg'>
              <Text className='!text-sm'>Accordion Body</Text>
            </Accordion>
            <Accordion title='Accordion Title' className='my-2 max-w-md'>
              <Text className='!text-sm'>Accordion Body</Text>
            </Accordion>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Accordion from "@components/Accordion";

<Accordion title="Accordion Title" className="max-w-xl my-2 !text-base">
	<Text>Accordion Body</Text>
</Accordion>
<Accordion title="Accordion Title" className="max-w-xl my-2">
	<Text className="text-sm">Accordion Body</Text>
</Accordion>`}
              ></Code>
            </AccordionCode>
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

          <Section id='toast' name='Toast'>
            {/* for global toast, put Toaster component below in _app.js  */}
            <Toaster />
            <div className='flex items-center gap-2'>
              <Button.green onClick={showToast}>Show Toast</Button.green>
              <Button.red onClick={showErrorToast}>Show Error Toast</Button.red>
              <Button.orange onClick={showAsyncToast}>Show Async Toast</Button.orange>
              <Button.secondary onClick={closeToast}>Close Toast</Button.secondary>
            </div>
          </Section>

          <Section id='toast-custom' name='Toast Custom'>
            {/* for global toast, put Toaster component below in _app.js  */}
            <Toaster />
            <div className='flex items-center gap-2'>
              <Button onClick={showCustomToast}>Show Custom Toast</Button>
              <Button.green onClick={showSuccessCustomToast}>Show Success Custom Toast</Button.green>
              <Button.red onClick={showErrorCustomToast}>Show Error Custom Toast</Button.red>
              <Button.orange onClick={showAsyncCustomToast}>Show Async Custom Toast</Button.orange>
              <Button.secondary onClick={closeCustomToast}>Close Custom Toast</Button.secondary>
            </div>
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
            </div>
          </Section>

          <BackToTop />
        </main>
        <Footer />
      </Layout>
    </>
  );
}
