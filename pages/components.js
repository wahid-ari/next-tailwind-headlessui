import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AccordionCode from '@components/AccordionCode';
import Alert from '@components/Alert';
import AlertCompact from '@components/AlertCompact';
import AlertOutline from '@components/AlertOutline';
import Avatar from '@components/Avatar';
import BackToTop from '@components/BackToTop';
import Badge from '@components/Badge';
import BadgeOutline from '@components/BadgeOutline';
import Button from '@components/Button';
import ButtonOutline from '@components/ButtonOutline';
import Card from '@components/Card';
import Checkbox from '@components/Checkbox';
import Code from '@components/Code';
import ComponentProps from '@components/ComponentProps';
import ComponentVariants from '@components/ComponentVariants';
import Container from '@components/Container';
import DescriptionList from '@components/DescriptionList';
import Divider from '@components/Divider';
import FileInput from '@components/FileInput';
import FileInputLarge from '@components/FileInputLarge';
import Footer from '@components/Footer';
import Heading from '@components/Heading';
import Input from '@components/Input';
import InputCopy from '@components/InputCopy';
import InputEditable from '@components/InputEditable';
import InputLabel from '@components/InputLabel';
import InputPassword from '@components/InputPassword';
import InputRange from '@components/InputRange';
import InputSearch from '@components/InputSearch';
import InputStepper from '@components/InputStepper';
import Kbd from '@components/Kbd';
import Label from '@components/Label';
import Layout from '@components/Layout';
import LinkButton from '@components/LinkButton';
import LinkButtonOutline from '@components/LinkButtonOutline';
import Loading from '@components/Loading';
import LoadingDots from '@components/LoadingDots/LoadingDots';
import LoadingSpinner from '@components/LoadingSpinner';
import Navbar from '@components/Navbar';
import Note from '@components/Note';
import OrderedList from '@components/OrderedList';
import Progress from '@components/Progress';
import ProgressCircle from '@components/ProgressCircle';
import Radio from '@components/Radio';
import Rating from '@components/Rating';
import Scrollable from '@components/Scrollable';
import Section from '@components/Section';
import Select from '@components/Select';
import ShowMore from '@components/ShowMore';
import Skeletons from '@components/Skeletons';
import Snippet from '@components/Snippet';
import Spinner from '@components/Spinner';
import StatusIndicator from '@components/StatusIndicator';
import Stepper from '@components/Stepper';
import Table from '@components/Table';
import TableSimple from '@components/TableSimple';
import Text from '@components/Text';
import TextArea from '@components/TextArea';
import Timeline from '@components/Timeline';
import TimelineHorizontal from '@components/TimelineHorizontal';
import TocLink from '@components/TocLink';
import Tooltips from '@components/Tooltips';
import UnorderedList from '@components/UnorderedList';
import {
  AnnotationIcon,
  CheckCircleIcon,
  CheckIcon,
  DocumentTextIcon,
  DownloadIcon,
  InformationCircleIcon,
  MinusIcon,
  MinusSmIcon,
  MoonIcon,
  PhotographIcon,
  PlusCircleIcon,
  PlusSmIcon,
  SunIcon,
  TrashIcon,
  XIcon,
} from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import { tabledata } from '@utils/useTableData';

export default function Third() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const [radioNameColor, setRadioNameColor] = useState();
  function handleRadioNameChange(e) {
    setRadioNameColor(e.target.value);
  }

  const [radioColor, setRadioColor] = useState();
  function handleRadioChange(e) {
    setRadioColor(e.target.value);
  }

  const [checkedRadioColor, setCheckedRadioColor] = useState('purple');
  function handleCheckedRadioChange(e) {
    setCheckedRadioColor(e.target.value);
  }

  const [selectedColor, setSelectedColor] = useState('blue');
  function handleSelectColor(e) {
    setSelectedColor(e.target.value);
  }

  const [selectedColorWithId, setSelectedColorWithId] = useState(3);
  function handleSelectColorWithId(e) {
    setSelectedColorWithId(e.target.value);
  }

  const [inputLabelLeft, setInputLabelLeft] = useState();
  function handleInputLabelLeftChange(e) {
    setInputLabelLeft(e.target.value);
  }

  const [input, setInput] = useState();
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  const [textArea, setTextArea] = useState();
  function handleTextAreaChange(e) {
    setTextArea(e.target.value);
  }

  const [uncheckedColor, setUncheckedColor] = useState([]);
  function handleUncheckedCheckboxChange(e) {
    e.persist();
    if (e.target.checked) {
      setUncheckedColor([...uncheckedColor, e.target.value]);
    } else {
      setUncheckedColor(uncheckedColor.filter((item) => item !== e.target.value));
    }
  }

  const [checkedColor, setCheckedColor] = useState(['yellow', 'pink']);
  function handleCheckedCheckboxChange(e) {
    e.persist();
    if (e.target.checked) {
      setCheckedColor([...checkedColor, e.target.value]);
    } else {
      setCheckedColor(checkedColor.filter((item) => item !== e.target.value));
    }
  }

  const [file, setFile] = useState();
  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  const [filee, setFilee] = useState();
  function handleFileChangee(e) {
    setFilee(e.target.files[0]);
  }

  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  function handleImageChange(e) {
    setImage(e.target.files[0]);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  }

  const [images, setImages] = useState([]);
  const [imagesURL, setImagesURL] = useState([]);
  function handleMultipleImageChange(e) {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImagesURL(newImageURLs);
  }, [images]);

  function deleteImage(id) {
    const filtered = images.filter((item, index) => index !== id);
    setImages(filtered);
  }

  const [slicedTableData, setSlicedTableData] = useState(tabledata.slice(0, 5));
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndexSlice, setStartIndexSlice] = useState(0);
  const [itemsToSlice, setItemsToSlice] = useState(5);

  function onNext() {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
      setStartIndexSlice(startIndexSlice + 5);
      setItemsToSlice(itemsToSlice + 5);
      setSlicedTableData(tabledata.slice(startIndexSlice + 5, itemsToSlice + 5));
    }
  }

  function onPrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setStartIndexSlice(startIndexSlice - 5);
      setItemsToSlice(itemsToSlice - 5);
      setSlicedTableData(tabledata.slice(startIndexSlice - 5, itemsToSlice - 5));
    }
  }

  // useEffect(() => {
  // 	// console.log(tabledata)
  // 	// console.log(slicedTableData)
  // 	console.log("current page : ", currentPage)
  // 	console.log("start index slice : ", startIndexSlice)
  // 	console.log("last items to slice : ", itemsToSlice)
  // }, [currentPage])

  const [rangeValue, setRangeValue] = useState(30);
  function handleRangeChange(e) {
    setRangeValue(e.target.value);
  }

  const [rangeValueMinMax, setRangeValueMinMax] = useState(50);
  function handleRangeMinMaxChange(e) {
    setRangeValueMinMax(e.target.value);
  }

  const [rangeValueStep, setRangeValueStep] = useState(70);
  function handleRangeStepChange(e) {
    setRangeValueStep(e.target.value);
  }

  const [inputSearch, setInputSearch] = useState();
  function handleInputSearchChange(e) {
    setInputSearch(e.target.value);
  }
  function handleInputSearchClick() {
    alert(inputSearch ? inputSearch : 'Search Empty !');
  }

  const [stepperValue, setStepperValue] = useState(0);
  const [stepperValueMinMax, setStepperValueMinMax] = useState(0);

  const [percentage, setPercentage] = useState(50);

  const [canEditLabel, setCanEditLabel] = useState(false);
  const [inputEditableValueLabel, setInputEditableValueLabel] = useState('Click this Text to Edit Label');
  function onChangeEditableValueLabel(e) {
    setInputEditableValueLabel(e.target.value);
  }
  function onSaveEditableValueLabel() {
    setCanEditLabel(false);
  }
  function onCancelEditableValueLabel() {
    setInputEditableValueLabel('Click this Text to Edit Label');
    setCanEditLabel(false);
  }
  const [canEdit, setCanEdit] = useState(false);
  const [inputEditableValue, setInputEditableValue] = useState('Click this Text to Edit');
  function onChangeEditableValue(e) {
    setInputEditableValue(e.target.value);
  }

  const [currentStep, setCurrentStep] = useState(1);
  const stepArray = ['First', 'Second', 'Complete'];
  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType == 'next' ? newStep++ : newStep--;
    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= stepArray.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div>
      <Head>
        <title>Components</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16'>
          <Section id='toc' name='Components TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#dark-mode' text='Dark Mode' />
                <TocLink href='#radio' text='Native Radio' />
                <TocLink href='#checkbox' text='Native Checkbox' />
                <TocLink href='#native-select' text='Native Select' />
                <TocLink href='#label' text='Label' />
                <TocLink href='#input' text='Input' />
                <TocLink href='#input-label' text='Input Label' />
                <TocLink href='#input-password' text='Input Password' />
                <TocLink href='#text-area' text='Text Area' />
                <TocLink href='#input-file' text='Input File' />
                <TocLink href='#input-file-large' text='Input File Large' />
                <TocLink href='#input-image' text='Input Image' />
                <TocLink href='#input-image-multiple' text='Input Image Multiple' />
                <TocLink href='#input-range' text='Input Range' />
                <TocLink href='#input-search' text='Input Search' />
                <TocLink href='#input-stepper' text='Input Stepper' />
                <TocLink href='#input-copy' text='Input Copy' />
                <TocLink href='#input-editable' text='Input Editable' />
                <TocLink href='#section' text='Section' />
                <TocLink href='#container' text='Container' />
              </div>
              <div>
                <TocLink href='#card' text='Card' />
                <TocLink href='#divider' text='Divider' />
                <TocLink href='#heading' text='Heading' />
                <TocLink href='#text' text='Text' />
                <TocLink href='#table-simple' text='Table Simple' />
                <TocLink href='#table-simple-bordered' text='Table Simple Bordered' />
                <TocLink href='#table' text='Table' />
                <TocLink href='#table-functional' text='Table Functional' />
                <TocLink href='#button' text='Button' />
                <TocLink href='#button-outline' text='Button Outline' />
                <TocLink href='#link-button' text='Link Button' />
                <TocLink href='#link-button-outline' text='Link Button Outline' />
                <TocLink href='#badge' text='Badge' />
                <TocLink href='#badge-outline' text='Badge Outline' />
                <TocLink href='#alert' text='Alert' />
                <TocLink href='#alert-outline' text='Alert Outline' />
                <TocLink href='#alert-compact' text='Alert Compact' />
                <TocLink href='#description-list' text='Description List' />
                <TocLink href='#ordered-list' text='Ordered List' />
                <TocLink href='#unordered-list' text='Unordered List' />
              </div>
              <div>
                <TocLink href='#progress' text='Progress' />
                <TocLink href='#progress-circle' text='Progress Circle' />
                <TocLink href='#avatar' text='Avatar' />
                <TocLink href='#tooltips' text='Tooltips' />
                <TocLink href='#skeletons' text='Skeletons' />
                <TocLink href='#spinner' text='Spinner' />
                <TocLink href='#loading' text='Loading' />
                <TocLink href='#loading-dots' text='Loading Dots' />
                <TocLink href='#loading-spinner' text='Loading Spinner' />
                <TocLink href='#kbd' text='Kbd (Keyboard)' />
                <TocLink href='#rating' text='Rating' />
                <TocLink href='#snippet' text='Snippet' />
                <TocLink href='#note' text='Note' />
                <TocLink href='#show-more' text='Show More' />
                <TocLink href='#timeline' text='Timeline' />
                <TocLink href='#timeline-horizontal' text='Timeline Horizontal' />
                <TocLink href='#status-indicator' text='Status Indicator' />
                <TocLink href='#scrollable' text='Scrollable' />
                <TocLink href='#stepper' text='Stepper' />
              </div>
            </div>
          </Section>

          <Section id='dark-mode' name='Dark Mode'>
            <div className='flex gap-3 flex-wrap'>
              <div
                onClick={() => setDarkMode(!darkMode)}
                className='transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative'
              >
                <div className='h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-6 left-1'></div>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='relative flex items-center py-0.5 px-1 bg-blue-500 rounded-full h-7'
              >
                <span className='absolute w-5 h-5 rounded-full bg-white dark:left-[1.7rem] left-1 transition-all'></span>
                <span aria-hidden={true}>☀️</span>
                <span aria-hidden={true}>🌙</span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className={`${
                  darkMode ? 'bg-neutral-800' : 'bg-gray-200'
                } relative flex gap-1 items-center px-1 py-0.5 rounded-full h-7`}
              >
                <span className='absolute w-5 h-5 rounded-full bg-blue-500 dark:left-[1.6rem] left-1.5 transition-all'></span>
                <span aria-hidden={true}>
                  <SunIcon className={`${darkMode ? 'text-white bg-white' : ''}h-5 w-5`} />
                </span>
                <span aria-hidden={true}>
                  <MoonIcon className='h-5 w-5' />
                </span>
              </button>

              {darkMode ? (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label='Change Theme'
                  className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full'
                >
                  <SunIcon />
                </button>
              ) : (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label='Change Theme'
                  className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full'
                >
                  <MoonIcon className='transform rotate-45' />
                </button>
              )}
            </div>
          </Section>

          <div className='!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-20'>
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full'
              >
                <SunIcon />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full'
              >
                <MoonIcon />
              </button>
            )}
          </div>

          <BackToTop />

          <Section id='radio' name='Native Radio'>
            <Text className='mb-4 font-medium'>Unchecked Radio same name</Text>
            <Radio label='Teal' name='color' value='teal' onChange={handleRadioNameChange} />
            <Radio label='Orange' name='color' value='orange' onChange={handleRadioNameChange} />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              Radio : {radioNameColor ? radioNameColor : ''}
            </Text>

            <Text className='mb-4 font-medium'>Unchecked Radio</Text>
            <Radio label='Red' name='red' value='red' onChange={handleRadioChange} checked={radioColor == 'red'} />
            <Radio label='Blue' name='blue' value='blue' onChange={handleRadioChange} checked={radioColor == 'blue'} />
            <Text className='mb-4 text-sm font-medium !text-red-500'>Radio : {radioColor ? radioColor : ''}</Text>

            <Text className='mb-4 font-medium'>Checked Radio</Text>
            <Radio
              label='Green'
              name='green'
              value='green'
              onChange={handleCheckedRadioChange}
              checked={checkedRadioColor == 'green'}
            />
            <Radio
              label='Purple'
              name='purple'
              value='purple'
              onChange={handleCheckedRadioChange}
              checked={checkedRadioColor == 'purple'}
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              Initial Radio : {checkedRadioColor ? checkedRadioColor : ''}
            </Text>
            <ComponentProps name='Radio'>
              <Badge.red>className</Badge.red>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>value</Badge>
              <Badge>checked</Badge>
              <Badge>onChange</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import Radio from "@components/Radio";
import Text from "@components/Text";

const [radioNameColor, setRadioNameColor] = useState();
function handleRadioNameChange(e) {
	setRadioNameColor(e.target.value)
}

const [radioColor, setRadioColor] = useState();
function handleRadioChange(e) {
	setRadioColor(e.target.value)
}

const [checkedRadioColor, setCheckedRadioColor] = useState("purple");
function handleCheckedRadioChange(e) {
	setCheckedRadioColor(e.target.value)
}

<Text className="mb-4 font-medium">Unchecked Radio same name</Text>
<Radio
	label="Teal"
	name="color"
	value="teal"
	onChange={handleRadioNameChange}
/>
<Radio
	label="Orange"
	name="color"
	value="orange"
	onChange={handleRadioNameChange}
/>
<Text className="mb-4 text-sm font-medium !text-red-500">Radio : {radioNameColor ? radioNameColor : ""}</Text>

<Text className="mb-4 font-medium">Unchecked Radio</Text>
<Radio
	label="Red"
	name="red"
	value="red"
	onChange={handleRadioChange}
	checked={radioColor == "red"}
/>
<Radio
	label="Blue"
	name="blue"
	value="blue"
	onChange={handleRadioChange}
	checked={radioColor == "blue"}
/>
<Text className="mb-4 text-sm font-medium !text-red-500">Radio : {radioColor ? radioColor : ""}</Text>

<Text className="mb-4 font-medium">Checked Radio</Text>
<Radio
	label="Green"
	name="green"
	value="green"
	onChange={handleCheckedRadioChange}
	checked={checkedRadioColor == "green"}
/>
<Radio
	label="Purple"
	name="purple"
	value="purple"
	onChange={handleCheckedRadioChange}
	checked={checkedRadioColor == "purple"}
/>
<Text className="mb-4 text-sm font-medium !text-red-500">Initial Radio : {checkedRadioColor ? checkedRadioColor : ""}</Text>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='checkbox' name='Native Checkbox'>
            <Text className='mb-4 font-medium'>Unchecked Checkbox</Text>
            <Checkbox label='Red' name='red' value='red' onChange={handleUncheckedCheckboxChange} />
            <Checkbox label='Blue' name='blue' value='blue' onChange={handleUncheckedCheckboxChange} />
            <Checkbox label='Green' name='green' value='green' onChange={handleUncheckedCheckboxChange} />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              Checkbox : {uncheckedColor ? uncheckedColor.map((item) => <span key={item}>{item}, </span>) : ''}
            </Text>

            <Text className='mb-4 font-medium'>Checked Checkbox</Text>
            <Checkbox
              label='Yellow'
              name='yellow'
              value='yellow'
              onChange={handleCheckedCheckboxChange}
              checked={checkedColor.includes('yellow')}
            />
            <Checkbox
              label='Purple'
              name='purple'
              value='purple'
              onChange={handleCheckedCheckboxChange}
              checked={checkedColor.includes('purple')}
            />
            <Checkbox
              label='Pink'
              name='pink'
              value='pink'
              onChange={handleCheckedCheckboxChange}
              checked={checkedColor.includes('pink')}
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              Initial Checkbox : {checkedColor ? checkedColor.map((item) => <span key={item}>{item}, </span>) : ''}
            </Text>
            <ComponentProps name='Checkbox'>
              <Badge.red>className</Badge.red>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>checked</Badge>
              <Badge>defaultChecked</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import Checkbox from "@components/Checkbox";
import Text from "@components/Text";

const [uncheckedColor, setUncheckedColor] = useState([])
function handleUncheckedCheckboxChange(e) {
	e.persist();
	if (e.target.checked) {
		setUncheckedColor([...uncheckedColor, e.target.value]);
	} else {
		setUncheckedColor(uncheckedColor.filter(item => item !== e.target.value));
	}
};

const [checkedColor, setCheckedColor] = useState(["yellow", "pink"])
function handleCheckedCheckboxChange(e) {
	e.persist();
	if (e.target.checked) {
		setCheckedColor([...checkedColor, e.target.value]);
	} else {
		setCheckedColor(checkedColor.filter(item => item !== e.target.value));
	}
};

<Text className="mb-4 font-medium">Unchecked Checkbox</Text>
<Checkbox
	label="Red"
	name="red"
	value="red"
	onChange={handleUncheckedCheckboxChange}
/>
<Checkbox
	label="Blue"
	name="blue"
	value="blue"
	onChange={handleUncheckedCheckboxChange}
/>
<Checkbox
	label="Green"
	name="green"
	value="green"
	onChange={handleUncheckedCheckboxChange}
/>
<Text className="mb-4 text-sm font-medium !text-red-500">
	Checkbox : {" "}
	{uncheckedColor ?
		uncheckedColor.map(item =>
			<span key={item}>{item}, </span>
		)
		: ""}
</Text>

<Text className="mb-4 font-medium">Checked Checkbox</Text>
<Checkbox
	label="Yellow"
	name="yellow"
	value="yellow"
	onChange={handleCheckedCheckboxChange}
	checked={checkedColor.includes("yellow")}
/>
<Checkbox
	label="Purple"
	name="purple"
	value="purple"
	onChange={handleCheckedCheckboxChange}
	checked={checkedColor.includes("purple")}
/>
<Checkbox
	label="Pink"
	name="pink"
	value="pink"
	onChange={handleCheckedCheckboxChange}
	checked={checkedColor.includes("pink")}
/>
<Text className="mb-4 text-sm font-medium !text-red-500">
	Initial Checkbox : {" "}
	{checkedColor ?
		checkedColor.map(item =>
			<span key={item}>{item}, </span>
		)
		: ""}
</Text>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='native-select' name='Native Select'>
            <Select
              label='Select Color'
              id='color'
              name='color'
              value={selectedColor ? selectedColor : 'Choose Color'}
              onChange={handleSelectColor}
            >
              <Select.option value='red'>Red</Select.option>
              <Select.option value='blue'>Blue</Select.option>
              <Select.option value='green'>Green</Select.option>
            </Select>
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              {' '}
              Selected : {selectedColor ? selectedColor : ''}{' '}
            </Text>

            <Select
              label='Select Color With Id'
              id='colorwithid'
              name='colorwithid'
              value={selectedColorWithId ? selectedColorWithId : 'Choose Color With Id'}
              onChange={handleSelectColorWithId}
            >
              <Select.option value='1'>Purple</Select.option>
              <Select.option value='2'>Yellow</Select.option>
              <Select.option value='3'>Pink</Select.option>
            </Select>
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              Initial Selected : {selectedColorWithId ? selectedColorWithId : ''}{' '}
            </Text>
            <ComponentProps name='Select'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>defaultValue</Badge>
              <Badge>onChange</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentProps name='Select.option'>
              <Badge.purple>children</Badge.purple>
              <Badge>value</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import Select from "@components/Select";
import Text from "@components/Text";

const [selectedColor, setSelectedColor] = useState("blue")
function handleSelectColor(e) {
	setSelectedColor(e.target.value);
};

const [selectedColorWithId, setSelectedColorWithId] = useState(3)
function handleSelectColorWithId(e) {
	setSelectedColorWithId(e.target.value)
};

<Select
	label="Select Color"
	id="color"
	name="color"
	value={selectedColor ? selectedColor : "Choose Color"}
	onChange={handleSelectColor}
>
	<Select.option value="red">Red</Select.option>
	<Select.option value="blue">Blue</Select.option>
	<Select.option value="green">Green</Select.option>
</Select>
<Text className="mb-4 text-sm font-medium !text-red-500"> Selected : {selectedColor ? selectedColor : ""} </Text>

<Select
	label="Select Color With Id"
	id="colorwithid"
	name="colorwithid"
	value={selectedColorWithId ? selectedColorWithId : "Choose Color With Id"}
	onChange={handleSelectColorWithId}
>
	<Select.option value="1">Purple</Select.option>
	<Select.option value="2">Yellow</Select.option>
	<Select.option value="3">Pink</Select.option>
</Select>
<Text className="mb-4 text-sm font-medium !text-red-500">Initial Selected : {selectedColorWithId ? selectedColorWithId : ""} </Text>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='label' name='Label'>
            <Label className='my-2'>This is default label</Label>
            <Label className='text-sm my-2'>This is small label</Label>
            <Label className='text-sm font-medium my-2'>This is medium small label</Label>
            <ComponentProps name='Label'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Label from "@components/Label";

<Label>This is default label</Label>
<Label className="text-sm">This is small label</Label>
<Label className="text-sm font-medium">This is medium small label</Label>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input' name='Input'>
            <Input
              label='Input With Label'
              id='inputwithlabel'
              name='inputwithlabel'
              placeholder='Input With Label'
              onChange={handleInputChange}
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'> Input : {input ? input : ''} </Text>
            <Input id='inputnolabel' name='inputnolabel' placeholder='Input No Label' className='mt-6' />
            <Input.disabled id='inputdisablednolabel' name='inputdisablednolabel' value='Input Disabled No Label' />
            <Input.disabled
              label='Input Disabled With Label'
              id='inputdisabledwithlabel'
              name='inputdisabledwithlabel'
              value='Input Disabled With Label'
            />
            <ComponentProps name='Input'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>type</Badge>
              <Badge>name</Badge>
              <Badge>placeholder</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='Input'>
              <Badge.orange pills>.disabled</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import Input from "@components/Input";
import Text from "@components/Text";

const [input, setInput] = useState()
function handleInputChange(e) {
	setInput(e.target.value);
};

<Input
	label="Input With Label"
	id="inputwithlabel"
	name="inputwithlabel"
	placeholder="Input With Label"
	onChange={handleInputChange}
/>
<Text className="mb-4 text-sm font-medium !text-red-500"> Input  : {input ? input : ""} </Text>

<Input
	id="inputnolabel"
	name="inputnolabel"
	placeholder="Input No Label"
	className="mt-6"
/>
<Input.disabled
	id="inputdisablednolabel"
	name="inputdisablednolabel"
	value="Input Disabled No Label"
/>
<Input.disabled
	label="Input Disabled With Label"
	id="inputdisabledwithlabel"
	name="inputdisabledwithlabel"
	value="Input Disabled With Label"
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-label' name='Input Label'>
            <InputLabel
              label='Input Label Left'
              id='inputlabelleft'
              name='inputlabelleft'
              placeholder='Input Label Left'
              labelLeft='https://'
              onChange={handleInputLabelLeftChange}
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              {' '}
              Input Label Left : {inputLabelLeft ? inputLabelLeft : ''}{' '}
            </Text>

            <InputLabel
              label='Input Label Right'
              id='inputlabelright'
              name='inputlabelright'
              placeholder='Input Label Right'
              labelRight='.com'
            />
            <InputLabel.disabled
              label='Input Disabled Label Left'
              id='inputlabelleft'
              name='inputlabelleft'
              placeholder='Input Disabled Label Left'
              labelLeft='https://'
            />
            <InputLabel.disabled
              label='Input Disabled Label Right'
              id='inputlabelright'
              name='inputlabelright'
              placeholder='Input Disabled Label Right'
              labelRight='.com'
            />
            <ComponentProps name='InputLabel'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>type</Badge>
              <Badge>name</Badge>
              <Badge>placeholder</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>labelLeft</Badge>
              <Badge>labelRight</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='InputLabel'>
              <Badge.orange pills>.disabled</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import Text from "@components/Text";
import InputLabel from "@components/InputLabel";

const [inputLabelLeft, setInputLabelLeft] = useState()
function handleInputLabelLeftChange(e) {
	setInputLabelLeft(e.target.value);
};

<InputLabel
	label="Input Label Left"
	id="inputlabelleft"
	name="inputlabelleft"
	placeholder="Input Label Left"
	labelLeft="https://"
	onChange={handleInputLabelLeftChange}
/>
<Text className="mb-4 text-sm font-medium !text-red-500"> Input Label Left : {inputLabelLeft ? inputLabelLeft : ""} </Text>

<InputLabel
	label="Input Label Right"
	id="inputlabelright"
	name="inputlabelright"
	placeholder="Input Label Right"
	labelRight=".com"
/>
<InputLabel.disabled
	label="Input Disabled Label Left"
	id="inputlabelleft"
	name="inputlabelleft"
	placeholder="Input Disabled Label Left"
	labelLeft="https://"
/>
<InputLabel.disabled
	label="Input Disabled Label Right"
	id="inputlabelright"
	name="inputlabelright"
	placeholder="Input Disabled Label Right"
	labelRight=".com"
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-password' name='Input Password'>
            <InputPassword label='Password' name='password' placeholder='Password' />
            <InputPassword
              label='Password Disabled'
              name='passworddisabled'
              placeholder='Password Disabled'
              value='passworddisabled'
              disabled
            />
            <ComponentProps name='InputPassword'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>placeholder</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import InputPassword from "@components/InputPassword";

<InputPassword label="Password" name="password" placeholder="Password" />
<InputPassword label="Password Disabled" name="passworddisabled" placeholder="Password Disabled" value="passworddisabled" disabled />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='text-area' name='Text Area'>
            <TextArea
              label='Text Area with Label'
              id='textareawithlabel'
              name='textareawithlabel'
              height={2}
              placeholder='Text Area With Label'
              onChange={handleTextAreaChange}
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'> Text Area : {textArea ? textArea : ''} </Text>

            <TextArea
              id='textareanolabel'
              name='textareanolabel'
              height={2}
              placeholder='Text Area No Label'
              className='mt-6'
            />
            <TextArea.disabled
              label='Text Area Disabled with Label'
              id='textareawithlabeldisabled'
              name='textareawithlabeldisabled'
              height={2}
              value='Text Area Disabled with Label'
            />
            <TextArea.disabled
              id='textareadisabled'
              name='textareadisabled'
              height={2}
              value='Text Area Disabled No Label'
            />
            <ComponentProps name='TextArea'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>placeholder</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>height</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='TextArea'>
              <Badge.orange pills>.disabled</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import TextArea from "@components/TextArea";
import Text from "@components/Text";

const [textArea, setTextArea] = useState()
function handleTextAreaChange(e) {
	setTextArea(e.target.value);
};

<TextArea
	label="Text Area with Label"
	id="textareawithlabel"
	name="textareawithlabel"
	height={2}
	placeholder="Text Area With Label"
	onChange={handleTextAreaChange}
/>
<Text className="mb-4 text-sm font-medium !text-red-500"> Text Area : {textArea ? textArea : ""} </Text>

<TextArea
	id="textareanolabel"
	name="textareanolabel"
	height={2}
	placeholder="Text Area No Label"
	className="mt-6"
/>
<TextArea.disabled
	label="Text Area Disabled with Label"
	id="textareawithlabeldisabled"
	name="textareawithlabeldisabled"
	height={2}
	value="Text Area Disabled with Label"
/>
<TextArea.disabled
	id="textareadisabled"
	name="textareadisabled"
	height={2}
	value="Text Area Disabled No Label"
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-file' name='Input File'>
            <FileInput
              label='File Docx'
              accept='.docx'
              name='file_docx'
              inputLabel='Select file (.docx)'
              value={file ? file.name : ''}
              onChange={handleFileChange}
              icon={<DocumentTextIcon className='w-6 h-6 text-gray-400 mr-1' strokeWidth='1' />}
            />
            <ComponentProps name='FileInput'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>accept</Badge>
              <Badge>name</Badge>
              <Badge>icon</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>inputLabel</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import FileInput from "@components/FileInput";

const [file, setFile] = useState()
function handleFileChange(e) {
	setFile(e.target.files[0])
}

<FileInput
	label="File Docx"
	accept=".docx"
	name="file_docx"
	inputLabel="Select file (.docx)"
	value={file ? file.name : ''}
	onChange={handleFileChange}
	icon={<DocumentTextIcon className="w-6 h-6 text-gray-400 mr-1" strokeWidth="1" />}
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-file-large' name='Input File Large'>
            <FileInputLarge
              label='File PDF'
              accept='.pdf'
              name='file_pdf'
              inputLabel='Select file (.pdf)'
              value={filee ? filee.name : ''}
              onChange={handleFileChangee}
              icon={<DocumentTextIcon className='w-8 h-8 text-gray-400' strokeWidth='1' />}
            />
            <ComponentProps name='FileInputLarge'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>accept</Badge>
              <Badge>name</Badge>
              <Badge>icon</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>inputLabel</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import FileInputLarge from "@components/FileInputLarge";

const [filee, setFilee] = useState()
function handleFileChangee(e) {
	setFilee(e.target.files[0])
}

<FileInputLarge
	label="File PDF"
	accept=".pdf"
	name="file_pdf"
	inputLabel="Select file (.pdf)"
	value={filee ? filee.name : ''}
	onChange={handleFileChangee}
	icon={<DocumentTextIcon className="w-8 h-8 text-gray-400" strokeWidth="1" />}
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-image' name='Input Image'>
            <FileInput
              label='File Image'
              accept='.png, .jpg, .jpeg'
              name='file_image'
              inputLabel='Select image (.png, .jpg, .jpeg)'
              onChange={handleImageChange}
              icon={<PhotographIcon className='w-6 h-6 text-gray-400 mr-1' strokeWidth='1' />}
            />
            {imageURL ? (
              <div className='relative w-48 h-36 mb-4'>
                <Image alt='image' src={imageURL} layout='fill' className='rounded-lg' />
              </div>
            ) : (
              ''
            )}
            <ComponentProps name='FileInput'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>accept</Badge>
              <Badge>name</Badge>
              <Badge>icon</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>inputLabel</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import FileInput from "@components/FileInput";

const [image, setImage] = useState()
const [imageURL, setImageURL] = useState()
function handleImageChange(e) {
	setImage(e.target.files[0])
	setImageURL(URL.createObjectURL(e.target.files[0]))
}

<FileInput
	label="File Image"
	accept=".png, .jpg, .jpeg"
	name="file_image"
	inputLabel="Select image (.png, .jpg, .jpeg)"
	onChange={handleImageChange}
	icon={<PhotographIcon className="w-6 h-6 text-gray-400 mr-1" strokeWidth="1" />}
/>
{imageURL ? 
	<div className="relative w-48 h-36 mb-4">
		<Image
			alt="image"
			src={imageURL}
			layout="fill"
			className="rounded-lg"
		/>
	</div>
	:
	""
}`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-image-multiple' name='Input Image Multiple'>
            <FileInput
              label='File Image Multiple'
              accept='.png, .jpg, .jpeg'
              name='file_image'
              inputLabel='Select multiple image (.png, .jpg, .jpeg)'
              onChange={handleMultipleImageChange}
              icon={<PhotographIcon className='w-6 h-6 text-gray-400 mr-1' strokeWidth='1' />}
              multiple
            />
            {imagesURL ? (
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2'>
                {imagesURL.map((image, id) => (
                  <div key={id} className='relative h-36 md:h-40 w-full'>
                    <Image src={image} alt='image' layout='fill' className='rounded-lg' />
                    <button
                      onClick={() => deleteImage(id)}
                      className='absolute top-0 right-0 m-1 text-red-500 hover:text-red-600 bg-black bg-opacity-30 backdrop-blur-lg p-1.5 rounded-full transition-all'
                    >
                      <TrashIcon className='w-4 h-4' />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
            <ComponentProps name='FileInput'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>accept</Badge>
              <Badge>name</Badge>
              <Badge>icon</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>inputLabel</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState, useEffect } from "react"; 
import FileInput from "@components/FileInput";

const [images, setImages] = useState([])
const [imagesURL, setImagesURL] = useState([])
function handleMultipleImageChange(e) {
	setImages([...e.target.files])
}

useEffect(() => {
	const newImageURLs = []
	images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
	setImagesURL(newImageURLs)
}, [images])

function deleteImage(id) {
	const filtered = images.filter((item, index) => index !== id);
	setImages(filtered);
}

<FileInput
	label="File Image Multiple"
	accept=".png, .jpg, .jpeg"
	name="file_image"
	inputLabel="Select image (.png, .jpg, .jpeg)"
	onChange={handleMultipleImageChange}
	icon={<PhotographIcon className="w-6 h-6 text-gray-400 mr-1" strokeWidth="1" />}
	multiple
/>
{imagesURL ?
	<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
		{imagesURL.map((image, id) =>
			<div key={id} className="relative h-36 md:h-40 w-full">
				<Image
					src={image}
					alt="image"
					layout="fill"
					className="rounded-lg"
				/>
				<button onClick={() => deleteImage(id)} className="absolute top-0 right-0 m-1 text-red-500 hover:text-red-600 bg-black bg-opacity-30 backdrop-blur-lg p-1.5 rounded-full transition-all">
					<TrashIcon className="w-4 h-4" />
				</button>
			</div>
		)}
	</div>
	:
	""
}`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-range' name='Input Range'>
            <InputRange label='Input Range' name='range' onChange={handleRangeChange} value={rangeValue} />
            <Text className='mb-4 text-sm font-medium !text-red-500'>Range : {rangeValue ? rangeValue : ''}</Text>
            <InputRange
              label='Input Range Min 20 Max 80'
              name='rangeminmax'
              onChange={handleRangeMinMaxChange}
              value={rangeValueMinMax}
              min='20'
              max='80'
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              Range : {rangeValueMinMax ? rangeValueMinMax : ''}
            </Text>
            <InputRange
              label='Input Range Step 10'
              name='rangestep'
              onChange={handleRangeStepChange}
              value={rangeValueStep}
              step='10'
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              Range : {rangeValueStep ? rangeValueStep : ''}
            </Text>
            <InputRange label='Input Range Disabled' name='rangedisabled' value='50' disabled />
            <ComponentProps name='InputRange'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import InputRange from "@components/InputRange";
import Text from "@components/Text";

const [rangeValue, setRangeValue] = useState(30)
function handleRangeChange(e) {
	setRangeValue(e.target.value)
}

const [rangeValueMinMax, setRangeValueMinMax] = useState(50)
function handleRangeMinMaxChange(e) {
	setRangeValueMinMax(e.target.value)
}

const [rangeValueStep, setRangeValueStep] = useState(70)
function handleRangeStepChange(e) {
	setRangeValueStep(e.target.value)
}

<InputRange label="Input Range" name="range" onChange={handleRangeChange} value={rangeValue} />
<Text className="mb-4 text-sm font-medium !text-red-500">Range : {rangeValue ? rangeValue : ""}</Text>
<InputRange label="Input Range Min 20 Max 80" name="rangeminmax" onChange={handleRangeMinMaxChange} value={rangeValueMinMax} min="20" max="80" />
<Text className="mb-4 text-sm font-medium !text-red-500">Range : {rangeValueMinMax ? rangeValueMinMax : ""}</Text>
<InputRange label="Input Range Step 10" name="rangestep" onChange={handleRangeStepChange} value={rangeValueStep} step="10" />
<Text className="mb-4 text-sm font-medium !text-red-500">Range : {rangeValueStep ? rangeValueStep : ""}</Text>
<InputRange label="Input Range Disabled" name="rangedisabled" value="50" disabled />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-search' name='Input Search'>
            <InputSearch
              label='Input Search'
              type='text'
              name='inputsearch'
              placeholder='Search'
              value={inputSearch}
              onChange={handleInputSearchChange}
              onClick={handleInputSearchClick}
            />
            <Text className='mb-4 text-sm font-medium !text-red-500'>
              {' '}
              Input Search : {inputSearch ? inputSearch : ''}{' '}
            </Text>
            <ComponentProps name='InputSearch'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>type</Badge>
              <Badge>name</Badge>
              <Badge>placeholder</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge>onClick</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import InputSearch from "@components/InputSearch";
import Text from "@components/Text";

const [inputSearch, setInputSearch] = useState()
function handleInputSearchChange(e) {
	setInputSearch(e.target.value)
}
function handleInputSearchClick() {
	alert(inputSearch ? inputSearch : "Search Empty !")
}

<InputSearch label="Input Search" type="text" name="inputsearch" placeholder="Search" value={inputSearch} onChange={handleInputSearchChange} onClick={handleInputSearchClick} />
<Text className="mb-4 text-sm font-medium !text-red-500"> Input Search : {inputSearch ? inputSearch : ""} </Text>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-stepper' name='Input Stepper'>
            <InputStepper
              label='Input Stepper'
              name='inputstepper'
              value={stepperValue}
              onUp={() => setStepperValue(stepperValue + 1)}
              onDown={() => setStepperValue(stepperValue - 1)}
            />
            <InputStepper
              label='Input Stepper Min 0 Max 5'
              name='inputstepperminmax'
              className='!w-40'
              value={stepperValueMinMax}
              min={0}
              max={5}
              onUp={() => setStepperValueMinMax(stepperValueMinMax + 1)}
              onDown={() => setStepperValueMinMax(stepperValueMinMax - 1)}
            />
            <ComponentProps name='InputStepper'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>placeholder</Badge>
              <Badge>value</Badge>
              <Badge>min</Badge>
              <Badge>max</Badge>
              <Badge>onDown</Badge>
              <Badge>onUp</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import InputStepper from "@components/InputStepper";

const [stepperValue, setStepperValue] = useState(0)
const [stepperValueMinMax, setStepperValueMinMax] = useState(0)

<InputStepper
	label="Input Stepper"
	name="inputstepper"
	value={stepperValue}
	onUp={() => setStepperValue(stepperValue + 1)}
	onDown={() => setStepperValue(stepperValue - 1)}
/>

<InputStepper
	label="Input Stepper Min 0 Max 5"
	name="inputstepperminmax"
	className="!w-40"
	value={stepperValueMinMax}
	min={0}
	max={5}
	onUp={() => setStepperValueMinMax(stepperValueMinMax + 1)}
	onDown={() => setStepperValueMinMax(stepperValueMinMax - 1)}
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-copy' name='Input Copy'>
            <InputCopy label='Input Copy' id='inputcopy' name='inputcopy' value='This is very long text to copied' />
            <ComponentProps name='InputCopy'>
              <Badge.red>className</Badge.red>
              <Badge>id</Badge>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>placeholder</Badge>
              <Badge>value</Badge>
              <Badge>onChange</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react"; 
import InputCopy from "@components/InputCopy";

<InputCopy
	label="Input Copy"
	id="inputcopy"
	name="inputcopy"
	value="This is very long text to copied"
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='input-editable' name='Input Editable'>
            <InputEditable
              label='Input Editable Label'
              name='inputeditablelabel'
              value={inputEditableValueLabel}
              onChange={onChangeEditableValueLabel}
              canEdit={canEditLabel}
              onClick={() => setCanEditLabel(true)}
              onSave={onSaveEditableValueLabel}
              onCancel={onCancelEditableValueLabel}
            />
            <InputEditable
              name='inputeditable'
              value={inputEditableValue}
              onChange={onChangeEditableValue}
              canEdit={canEdit}
              onClick={() => setCanEdit(true)}
              onSave={() => setCanEdit(false)}
              onCancel={() => setCanEdit(false)}
            />
            <ComponentProps name='InputEditable'>
              <Badge.red>className</Badge.red>
              <Badge>label</Badge>
              <Badge>name</Badge>
              <Badge>value</Badge>
              <Badge.orange>onChange</Badge.orange>
              <Badge.orange>canEdit</Badge.orange>
              <Badge.orange>onClick</Badge.orange>
              <Badge.orange>onSave</Badge.orange>
              <Badge.orange>onCancel</Badge.orange>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import InputEditable from "@components/InputEditable";

const [canEditLabel, setCanEditLabel] = useState(false)
const [inputEditableValueLabel, setInputEditableValueLabel] = useState("Click this Text to Edit Label")
function onChangeEditableValueLabel(e) {
	setInputEditableValueLabel(e.target.value)
}
function onSaveEditableValueLabel() {
	setCanEditLabel(false)
}
function onCancelEditableValueLabel() {
	setInputEditableValueLabel("Click this Text to Edit Label")
	setCanEditLabel(false)
}
const [canEdit, setCanEdit] = useState(false)
const [inputEditableValue, setInputEditableValue] = useState("Click this Text to Edit")
function onChangeEditableValue(e) {
	setInputEditableValue(e.target.value)
}

<InputEditable
	label="Input Editable Label"
	name="inputeditablelabel"
	value={inputEditableValueLabel}
	onChange={onChangeEditableValueLabel}
	canEdit={canEditLabel}
	onClick={() => setCanEditLabel(true)}
	onSave={onSaveEditableValueLabel}
	onCancel={onCancelEditableValueLabel}
/>
<InputEditable
	name="inputeditable"
	value={inputEditableValue}
	onChange={onChangeEditableValue}
	canEdit={canEdit}
	onClick={() => setCanEdit(true)}
	onSave={() => setCanEdit(false)}
	onCancel={() => setCanEdit(false)}
/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='section' name='Section'>
            <Section className='!py-0'>
              <Text>Section Content no Title</Text>
            </Section>
            <Section id='sectiontitle' name='Section With Title' className='!py-0'>
              <Text>Section Content</Text>
            </Section>
            <ComponentProps name='Section'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>id</Badge>
              <Badge>name</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Section from "@components/Section";

<Section className="!py-0">
	<Text>Section Content no Title</Text>
</Section>
<Section id="sectiontitle" name="Section With Title" className="!py-0">
	<Text>Section Content</Text>
</Section>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='container' name='Container'>
            <Container>
              <Text>Container Default</Text>
            </Container>
            <Container large>
              <Text>Container large</Text>
            </Container>
            <Container medium>
              <Text>Container Medium</Text>
            </Container>
            <Container small>
              <Text>Container Small</Text>
            </Container>
            <ComponentProps name='Container'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>small</Badge>
              <Badge>medium</Badge>
              <Badge>large</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Container from "@components/Container";

<Container>
	<Text>Container Default</Text>
</Container>
<Container large>
	<Text>Container large</Text>
</Container>
<Container medium>
	<Text>Container Medium</Text>
</Container>
<Container small>
	<Text>Container Small</Text>
</Container>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='card' name='Card'>
            <Card className='shadow dark:shadow-neutral-700/40'>
              <Text className='!text-sm'>Card Default</Text>
            </Card>
            <Card className='!p-6 mt-4 shadow-md dark:shadow-neutral-700/40'>
              <Text>Card with padding </Text>
            </Card>
            <Card className='!p-8 mt-4 shadow-lg dark:shadow-neutral-700/40'>
              <Text>Card with large padding</Text>
            </Card>
            <ComponentProps name='Card' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Card from "@components/Card";

<Card className="shadow dark:shadow-neutral-700/40">
	<Text className="!text-sm">Card Default</Text>
</Card>
<Card className="!p-6 mt-4 shadow-md dark:shadow-neutral-700/40">
	<Text>Card with padding </Text>
</Card>
<Card className="!p-8 mt-4 shadow-lg dark:shadow-neutral-700/40">
	<Text>Card with large padding</Text>
</Card>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='divider' name='Divider'>
            <Divider className='mb-3' />
            <Divider className='mb-3' center text='Text Center' />
            <Divider className='mb-3' left text='Text Left' />
            <Divider className='mb-3' right text='Text Right' />
            <ComponentProps name='Card' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>text</Badge.purple>
              <Badge>center</Badge>
              <Badge>left</Badge>
              <Badge>right</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Divider from "@components/Divider";

<Divider className="mb-3" />
<Divider className="mb-3" center text="Text Center"/>
<Divider className="mb-3" left text="Text Left"/>
<Divider className="mb-3" right text="Text Right"/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='heading' name='Heading'>
            <Heading>Heading Default</Heading>
            <Heading.h2>Heading 2</Heading.h2>
            <Heading.h3>Heading 3</Heading.h3>
            <Heading.h4>Heading 4</Heading.h4>
            <Heading.h5>Heading 5</Heading.h5>
            <Heading.h6>Heading 6</Heading.h6>
            <ComponentProps name='Heading'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='Heading'>
              <Badge.orange pills>.h2</Badge.orange>
              <Badge.orange pills>.h3</Badge.orange>
              <Badge.orange pills>.h4</Badge.orange>
              <Badge.orange pills>.h5</Badge.orange>
              <Badge.orange pills>.h6</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Heading from "@components/Heading";

<Heading>Heading Default</Heading>
<Heading.h2>Heading 2</Heading.h2>
<Heading.h3>Heading 3</Heading.h3>
<Heading.h4>Heading 4</Heading.h4>
<Heading.h5>Heading 5</Heading.h5>
<Heading.h6>Heading 6</Heading.h6>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='text' name='Text'>
            <Text.light className='mb-2'>Text Light</Text.light>
            <Text className='mb-2'>Text Normal</Text>
            <Text.medium>Text Medium</Text.medium>
            <Text.semibold>Text SemiBold</Text.semibold>
            <Text.bold>Text Bold</Text.bold>
            <Text.extrabold>Text Extra Bold</Text.extrabold>
            <ComponentProps name='Text'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='Text'>
              <Badge.orange pills>.light</Badge.orange>
              <Badge.orange pills>.medium</Badge.orange>
              <Badge.orange pills>.semibold</Badge.orange>
              <Badge.orange pills>.bold</Badge.orange>
              <Badge.orange pills>.extrabold</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Text from "@components/Text";

<Text.light className="mb-2">Text Light</Text.light>
<Text className="mb-2">Text Normal</Text>
<Text.medium>Text Medium</Text.medium>
<Text.bold>Text Bold</Text.bold>
<Text.extrabold>Text Extra Bold</Text.extrabold>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='table-simple' name='Table Simple'>
            <TableSimple
              head={
                <>
                  <TableSimple.td small>No</TableSimple.td>
                  <TableSimple.td>Column 1</TableSimple.td>
                  <TableSimple.td>Column 2</TableSimple.td>
                  <TableSimple.td>Column 3</TableSimple.td>
                  <TableSimple.td>Column 4</TableSimple.td>
                  <TableSimple.td>Column 5</TableSimple.td>
                </>
              }
            >
              {[0, 1, 2, 3, 4].map((item, index) => {
                return (
                  <TableSimple.tr key={index}>
                    <TableSimple.td small>{index + 1}</TableSimple.td>
                    <TableSimple.td>Row {index + 1} Column 1</TableSimple.td>
                    <TableSimple.td>Row {index + 1} Column 2</TableSimple.td>
                    <TableSimple.td>Row {index + 1} Column 3</TableSimple.td>
                    <TableSimple.td>Row {index + 1} Column 4</TableSimple.td>
                    <TableSimple.td>Row {index + 1} Column 5</TableSimple.td>
                  </TableSimple.tr>
                );
              })}
            </TableSimple>
            <ComponentProps name='TableSimple' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>head</Badge>
              <Badge>bordered</Badge>
            </ComponentProps>
            <ComponentProps name='TableSimple.tr'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <ComponentProps name='TableSimple.td'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>small</Badge>
              <Badge>bordered</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import TableSimple from "@components/TableSimple";

<TableSimple
	head={
		<>
			<TableSimple.td small>No</TableSimple.td>
			<TableSimple.td>Column 1</TableSimple.td>
			<TableSimple.td>Column 2</TableSimple.td>
			<TableSimple.td>Column 3</TableSimple.td>
			<TableSimple.td>Column 4</TableSimple.td>
			<TableSimple.td>Column 5</TableSimple.td>
		</>
	}
>
	{[0, 1, 2, 3, 4].map((item, index) => {
		return (
			<TableSimple.tr key={index}>
				<TableSimple.td small>{index + 1}</TableSimple.td>
				<TableSimple.td>Row {index + 1} Column 1</TableSimple.td>
				<TableSimple.td>Row {index + 1} Column 2</TableSimple.td>
				<TableSimple.td>Row {index + 1} Column 3</TableSimple.td>
				<TableSimple.td>Row {index + 1} Column 4</TableSimple.td>
				<TableSimple.td>Row {index + 1} Column 5</TableSimple.td>
			</TableSimple.tr>
		);
	})}
</TableSimple>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='table-simple-bordered' name='Table Simple Bordered'>
            <TableSimple
              bordered
              head={
                <>
                  <TableSimple.td small bordered>
                    No
                  </TableSimple.td>
                  <TableSimple.td bordered>Column 1</TableSimple.td>
                  <TableSimple.td bordered>Column 2</TableSimple.td>
                  <TableSimple.td bordered>Column 3</TableSimple.td>
                  <TableSimple.td bordered>Column 4</TableSimple.td>
                  <TableSimple.td bordered>Column 5</TableSimple.td>
                </>
              }
            >
              {[0, 1, 2, 3, 4].map((item, index) => {
                return (
                  <TableSimple.tr key={index}>
                    <TableSimple.td small bordered>
                      {index + 1}
                    </TableSimple.td>
                    <TableSimple.td bordered>Row {index + 1} Column 1</TableSimple.td>
                    <TableSimple.td bordered>Row {index + 1} Column 2</TableSimple.td>
                    <TableSimple.td bordered>Row {index + 1} Column 3</TableSimple.td>
                    <TableSimple.td bordered>Row {index + 1} Column 4</TableSimple.td>
                    <TableSimple.td bordered>Row {index + 1} Column 5</TableSimple.td>
                  </TableSimple.tr>
                );
              })}
            </TableSimple>
            <AccordionCode title='Show Code'>
              <Code
                code={`import TableSimple from "@components/TableSimple";

<TableSimple
	bordered
	head={
		<>
			<TableSimple.td small bordered>No</TableSimple.td>
			<TableSimple.td bordered>Column 1</TableSimple.td>
			<TableSimple.td bordered>Column 2</TableSimple.td>
			<TableSimple.td bordered>Column 3</TableSimple.td>
			<TableSimple.td bordered>Column 4</TableSimple.td>
			<TableSimple.td bordered>Column 5</TableSimple.td>
		</>
	}
>
	{[0, 1, 2, 3, 4].map((item, index) => {
		return (
			<TableSimple.tr key={index}>
				<TableSimple.td small bordered>{index + 1}</TableSimple.td>
				<TableSimple.td bordered>Row {index + 1} Column 1</TableSimple.td>
				<TableSimple.td bordered>Row {index + 1} Column 2</TableSimple.td>
				<TableSimple.td bordered>Row {index + 1} Column 3</TableSimple.td>
				<TableSimple.td bordered>Row {index + 1} Column 4</TableSimple.td>
				<TableSimple.td bordered>Row {index + 1} Column 5</TableSimple.td>
			</TableSimple.tr>
		);
	})}
</TableSimple>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='table' name='Table'>
            <Table
              totalPage={5}
              totalData={10}
              currentPage={1}
              head={
                <>
                  <Table.td small>No</Table.td>
                  <Table.td>Dark</Table.td>
                  <Table.td>Red</Table.td>
                  <Table.td>Blue</Table.td>
                  <Table.td>Orange</Table.td>
                  <Table.td>Green</Table.td>
                  <Table.td>Purple</Table.td>
                  <Table.td>Yellow</Table.td>
                </>
              }
            >
              {[0, 1, 2, 3, 4].map((item, index) => {
                return (
                  <Table.tr key={index}>
                    <Table.td small>{index + 1}</Table.td>
                    <Table.td>
                      <Badge>Row {index + 1} Blue</Badge>
                    </Table.td>
                    <Table.td>
                      <Badge.red>Row {index + 1} Red</Badge.red>
                    </Table.td>
                    <Table.td>
                      <Badge.dark>Row {index + 1} Dark</Badge.dark>
                    </Table.td>
                    <Table.td>
                      <Badge.orange>Row {index + 1} Orange</Badge.orange>
                    </Table.td>
                    <Table.td>
                      <Badge.green>Row {index + 1} Green</Badge.green>
                    </Table.td>
                    <Table.td>
                      <Badge.purple>Row {index + 1} Purple</Badge.purple>
                    </Table.td>
                    <Table.td>
                      <Badge.yellow>Row {index + 1} Yellow</Badge.yellow>
                    </Table.td>
                  </Table.tr>
                );
              })}
            </Table>
            <ComponentProps name='Table' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>head</Badge>
              <Badge>totalPage</Badge>
              <Badge>totalData</Badge>
              <Badge>currentPage</Badge>
              <Badge>onNext</Badge>
              <Badge>onPrev</Badge>
            </ComponentProps>
            <ComponentProps name='Table.tr'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <ComponentProps name='Table.td'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>small</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Table from "@components/Table";
import Badge from "@components/Badge";

<Table totalPage={5} totalData={10} currentPage={1}
	head={
		<>
			<Table.td small>No</Table.td>
			<Table.td>Dark</Table.td>
			<Table.td>Red</Table.td>
			<Table.td>Blue</Table.td>
			<Table.td>Orange</Table.td>
			<Table.td>Green</Table.td>
			<Table.td>Purple</Table.td>
			<Table.td>Yellow</Table.td>
		</>
	}
>
	{[0, 1, 2, 3, 4].map((item, index) => {
		return (
			<Table.tr key={index}>
				<Table.td small>{index + 1}</Table.td>
				<Table.td><Badge>Row {index + 1} Blue</Badge></Table.td>
				<Table.td><Badge.red>Row {index + 1} Red</Badge.red></Table.td>
				<Table.td><Badge.dark>Row {index + 1} Dark</Badge.dark></Table.td>
				<Table.td><Badge.orange>Row {index + 1} Orange</Badge.orange></Table.td>
				<Table.td><Badge.green>Row {index + 1} Green</Badge.green></Table.td>
				<Table.td><Badge.purple>Row {index + 1} Purple</Badge.purple></Table.td>
				<Table.td><Badge.yellow>Row {index + 1} Yellow</Badge.yellow></Table.td>
			</Table.tr>
		);
	})}
</Table>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='table-functional' name='Table Functional'>
            <Table
              totalPage={4}
              totalData={20}
              currentPage={currentPage}
              onPrev={onPrev}
              onNext={onNext}
              head={
                <>
                  <Table.td small>No</Table.td>
                  <Table.td>Email</Table.td>
                  <Table.td>Name</Table.td>
                  <Table.td>Age</Table.td>
                  <Table.td>Gender</Table.td>
                  <Table.td>Company</Table.td>
                  <Table.td>Phone</Table.td>
                </>
              }
            >
              {slicedTableData.map((item, index) => {
                return (
                  <Table.tr key={index}>
                    <Table.td small>{item.id}</Table.td>
                    <Table.td>{item.email}</Table.td>
                    <Table.td>{item.name}</Table.td>
                    <Table.td>{item.age}</Table.td>
                    <Table.td>
                      {item.gender == 'male' ? <Badge.red>{item.gender}</Badge.red> : <Badge>{item.gender}</Badge>}
                    </Table.td>
                    <Table.td>{item.company}</Table.td>
                    <Table.td>{item.phone}</Table.td>
                  </Table.tr>
                );
              })}
            </Table>
            <AccordionCode title='Show Code'>
              <Code
                code={`import { useState } from "react";
import Table from "@components/Table";
import Badge from "@components/Badge";
import { tabledata } from "@utils/useTableData";

const [slicedTableData, setSlicedTableData] = useState(tabledata.slice(0, 5))
const [currentPage, setCurrentPage] = useState(1)
const [startIndexSlice, setStartIndexSlice] = useState(0)
const [itemsToSlice, setItemsToSlice] = useState(5)

function onNext() {
	if(currentPage < 4) {
		setCurrentPage(currentPage + 1)
		setStartIndexSlice(startIndexSlice + 5)
		setItemsToSlice(itemsToSlice + 5)
		setSlicedTableData(tabledata.slice(startIndexSlice + 5, itemsToSlice + 5))
	}
}

function onPrev() {
	if (currentPage > 1) {
		setCurrentPage(currentPage - 1)
		setStartIndexSlice(startIndexSlice - 5)
		setItemsToSlice(itemsToSlice - 5)
		setSlicedTableData(tabledata.slice(startIndexSlice - 5, itemsToSlice - 5))
	}
}

<Table totalPage={4} totalData={20} currentPage={currentPage} onPrev={onPrev} onNext={onNext}
	head={
		<>
			<Table.td small>No</Table.td>
			<Table.td>Email</Table.td>
			<Table.td>Name</Table.td>
			<Table.td>Age</Table.td>
			<Table.td>Gender</Table.td>
			<Table.td>Company</Table.td>
			<Table.td>Phone</Table.td>
		</>
	}
>
	{slicedTableData.map((item, index) => {
		return (
			<Table.tr key={index}>
				<Table.td small>{index + 1}</Table.td>
				<Table.td>{item.email}</Table.td>
				<Table.td>{item.name}</Table.td>
				<Table.td>{item.age}</Table.td>
				<Table.td>
					{item.gender == "male" ?
						<Badge.red>{item.gender}</Badge.red>
						:
						<Badge>{item.gender}</Badge>
					}
				</Table.td>
				<Table.td>{item.company}</Table.td>
				<Table.td>{item.phone}</Table.td>
			</Table.tr>
		)
	})}
</Table>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='button' name='Button'>
            <div className='flex items-center flex-wrap gap-2'>
              <Button className='flex gap-1 items-center'>
                <PlusCircleIcon className='h-5 w-5' />
                Default
              </Button>
              <Button.secondary>Secondary</Button.secondary>
              <Button.green>Green</Button.green>
              <Button.yellow>Yellow</Button.yellow>
              <Button.orange>Orange</Button.orange>
              <Button.red pills>Red</Button.red>
              <Button.purple pills>Purple</Button.purple>
              <Button.dark pills>Dark</Button.dark>
              <Button.dark pills disabled>
                Dark Disabled
              </Button.dark>
            </div>
            <ComponentProps name='Button' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>type</Badge>
              <Badge>value</Badge>
              <Badge>onClick</Badge>
              <Badge>disabled</Badge>
              <Badge>pills</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='Button'>
              <Badge.orange pills>.secondary</Badge.orange>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Button from "@components/Button";

<Button className="flex gap-1 items-center"><PlusCircleIcon className="h-5 w-5" />Default</Button>
<Button.secondary>Secondary</Button.secondary>
<Button.green>Green</Button.green>
<Button.yellow>Yellow</Button.yellow>
<Button.orange>Orange</Button.orange>
<Button.red pills>Red</Button.red>
<Button.purple pills>Purple</Button.purple>
<Button.dark pills>Dark</Button.dark>
<Button.dark pills disabled>Dark Disabled</Button.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='button-outline' name='Button Outline'>
            <div className='flex items-center flex-wrap gap-2'>
              <ButtonOutline className='flex gap-1 items-center'>
                <DownloadIcon className='h-5 w-5' />
                Default
              </ButtonOutline>
              <ButtonOutline.green>Green</ButtonOutline.green>
              <ButtonOutline.yellow>Yellow</ButtonOutline.yellow>
              <ButtonOutline.orange>Orange</ButtonOutline.orange>
              <ButtonOutline.red pills>Red</ButtonOutline.red>
              <ButtonOutline.purple pills>Purple</ButtonOutline.purple>
              <ButtonOutline.dark pills>Dark</ButtonOutline.dark>
              <ButtonOutline.dark pills disabled>
                Dark Disabled
              </ButtonOutline.dark>
            </div>
            <ComponentProps name='ButtonOutline' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>type</Badge>
              <Badge>value</Badge>
              <Badge>onClick</Badge>
              <Badge>disabled</Badge>
              <Badge>pills</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='ButtonOutline'>
              <Badge.orange pills>.secondary</Badge.orange>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import ButtonOutline from "@components/ButtonOutline";

<ButtonOutline className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5"/>Default</ButtonOutline>
<ButtonOutline.green>Green</ButtonOutline.green>
<ButtonOutline.yellow>Yellow</ButtonOutline.yellow>
<ButtonOutline.orange>Orange</ButtonOutline.orange>
<ButtonOutline.red pills>Red</ButtonOutline.red>
<ButtonOutline.purple pills>Purple</ButtonOutline.purple>
<ButtonOutline.dark pills>Dark</ButtonOutline.dark>
<ButtonOutline.dark pills disabled>Dark Disabled</ButtonOutline.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='link-button' name='Link Button'>
            <div className='flex items-center flex-wrap gap-2'>
              <LinkButton href='#' className='flex gap-1 items-center'>
                <DownloadIcon className='h-5 w-5' />
                Default
              </LinkButton>
              <LinkButton.secondary href='#'>Secondary</LinkButton.secondary>
              <LinkButton.green href='#'>Green</LinkButton.green>
              <LinkButton.yellow href='#'>Yellow</LinkButton.yellow>
              <LinkButton.orange href='#'>Orange</LinkButton.orange>
              <LinkButton.red href='#' pills>
                Red
              </LinkButton.red>
              <LinkButton.purple href='#' pills>
                Purple
              </LinkButton.purple>
              <LinkButton.dark href='#' pills>
                Dark
              </LinkButton.dark>
            </div>
            <ComponentProps name='LinkButton' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>href</Badge>
              <Badge>pills</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='LinkButton'>
              <Badge.orange pills>.secondary</Badge.orange>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import LinkButton from "@components/LinkButton";

<LinkButton href="#" className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</LinkButton>
<LinkButton.secondary href="#">Secondary</LinkButton.secondary>
<LinkButton.green href="#">Green</LinkButton.green>
<LinkButton.yellow href="#">Yellow</LinkButton.yellow>
<LinkButton.orange href="#">Orange</LinkButton.orange>
<LinkButton.red href="#" pills>Red</LinkButton.red>
<LinkButton.purple href="#" pills>Purple</LinkButton.purple>
<LinkButton.dark href="#" pills>Dark</LinkButton.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='link-button-outline' name='Link Button Outline'>
            <div className='flex items-center flex-wrap gap-2'>
              <LinkButtonOutline href='#' className='flex gap-1 items-center'>
                <DownloadIcon className='h-5 w-5' />
                Default
              </LinkButtonOutline>
              <LinkButtonOutline.green href='#'>Green</LinkButtonOutline.green>
              <LinkButtonOutline.yellow href='#'>Yellow</LinkButtonOutline.yellow>
              <LinkButtonOutline.orange href='#'>Orange</LinkButtonOutline.orange>
              <LinkButtonOutline.red href='#' pills>
                Red
              </LinkButtonOutline.red>
              <LinkButtonOutline.purple href='#' pills>
                Purple
              </LinkButtonOutline.purple>
              <LinkButtonOutline.dark href='#' pills>
                Dark
              </LinkButtonOutline.dark>
            </div>
            <ComponentProps name='LinkButtonOutline' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>href</Badge>
              <Badge>pills</Badge>
              <Badge.green>...rest</Badge.green>
            </ComponentProps>
            <ComponentVariants name='LinkButtonOutline'>
              <Badge.orange pills>.secondary</Badge.orange>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import LinkButtonOutline from "@components/LinkButtonOutline";

<LinkButtonOutline href="#" className="flex gap-1 items-center"><DownloadIcon className="h-5 w-5" />Default</LinkButtonOutline>
<LinkButtonOutline.green href="#">Green</LinkButtonOutline.green>
<LinkButtonOutline.yellow href="#">Yellow</LinkButtonOutline.yellow>
<LinkButtonOutline.orange href="#">Orange</LinkButtonOutline.orange>
<LinkButtonOutline.red href="#" pills>Red</LinkButtonOutline.red>
<LinkButtonOutline.purple href="#" pills>Purple</LinkButtonOutline.purple>
<LinkButtonOutline.dark href="#" pills>Dark</LinkButtonOutline.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='badge' name='Badge'>
            <div className='flex items-center flex-wrap gap-2'>
              <Badge className='flex gap-1 items-center'>
                <DownloadIcon className='h-4 w-4' />
                Default
              </Badge>
              <Badge.green>Green</Badge.green>
              <Badge.red large>Red</Badge.red>
              <Badge.yellow large pills>
                Yellow
              </Badge.yellow>
              <Badge.orange pills>Orange</Badge.orange>
              <Badge.purple pills>Purple</Badge.purple>
              <Badge.dark pills>Dark</Badge.dark>
            </div>
            <ComponentProps name='Badge' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>large</Badge>
              <Badge>pills</Badge>
            </ComponentProps>
            <ComponentVariants name='Badge'>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Badge from "@components/Badge";

<Badge className="flex gap-1 items-center"><DownloadIcon className="h-4 w-4" />Default</Badge>
<Badge.green>Green</Badge.green>
<Badge.red large>Red</Badge.red>
<Badge.yellow large pills>Yellow</Badge.yellow>
<Badge.orange pills>Orange</Badge.orange>
<Badge.purple pills>Purple</Badge.purple>
<Badge.dark pills>Dark</Badge.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='badge-outline' name='Badge Outline'>
            <div className='flex items-center flex-wrap gap-2'>
              <BadgeOutline className='flex gap-1 items-center'>
                <DownloadIcon className='h-4 w-4' />
                Default
              </BadgeOutline>
              <BadgeOutline.green>Green</BadgeOutline.green>
              <BadgeOutline.red large>Red</BadgeOutline.red>
              <BadgeOutline.yellow large pills>
                Yellow
              </BadgeOutline.yellow>
              <BadgeOutline.orange pills>Orange</BadgeOutline.orange>
              <BadgeOutline.purple pills>Purple</BadgeOutline.purple>
              <BadgeOutline.dark pills>Dark</BadgeOutline.dark>
            </div>
            <ComponentProps name='BadgeOutline' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>large</Badge>
              <Badge>pills</Badge>
            </ComponentProps>
            <ComponentVariants name='BadgeOutline'>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import BadgeOutline from "@components/BadgeOutline";

<BadgeOutline className="flex gap-1 items-center"><DownloadIcon className="h-4 w-4" />Default</BadgeOutline>
<BadgeOutline.green>Green</BadgeOutline.green>
<BadgeOutline.red large>Red</BadgeOutline.red>
<BadgeOutline.yellow large pills>Yellow</BadgeOutline.yellow>
<BadgeOutline.orange pills>Orange</BadgeOutline.orange>
<BadgeOutline.purple pills>Purple</BadgeOutline.purple>
<BadgeOutline.dark pills>Dark</BadgeOutline.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='alert' name='Alert'>
            <Alert className='flex gap-1 items-center font-medium' large>
              <InformationCircleIcon className='h-5 w-5' />
              Default
            </Alert>
            <Alert.green className='!p-2'>Green</Alert.green>
            <Alert.red className='flex gap-1 items-center font-medium' large>
              <InformationCircleIcon className='h-5 w-5' />
              Red <span className='font-normal'>Danger</span>
            </Alert.red>
            <Alert.yellow large>Yellow</Alert.yellow>
            <Alert.orange pills>Orange</Alert.orange>
            <Alert.purple pills>Purple</Alert.purple>
            <Alert.dark pills>Dark</Alert.dark>
            <ComponentProps name='Alert'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>large</Badge>
              <Badge>pills</Badge>
            </ComponentProps>
            <ComponentVariants name='Alert'>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Alert from "@components/Alert";

<Alert className="flex gap-1 items-center font-medium" large><InformationCircleIcon className="h-5 w-5"/>Default</Alert>
<Alert.green className="!p-2">Green</Alert.green>
<Alert.red className="flex gap-1 items-center font-medium" large><InformationCircleIcon className="h-5 w-5" />Red <span className="font-normal">Danger</span></Alert.red>
<Alert.yellow large>Yellow</Alert.yellow>
<Alert.orange pills>Orange</Alert.orange>
<Alert.purple pills>Purple</Alert.purple>
<Alert.dark pills>Dark</Alert.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='alert-outline' name='Alert Outline'>
            <AlertOutline className='flex gap-1 items-center font-medium' large>
              <InformationCircleIcon className='h-5 w-5' />
              Default
            </AlertOutline>
            <AlertOutline.green>Green</AlertOutline.green>
            <AlertOutline.red className='flex gap-1 items-center font-medium' large>
              <InformationCircleIcon className='h-5 w-5' />
              Red <span className='font-normal'>Danger</span>
            </AlertOutline.red>
            <AlertOutline.yellow large>Yellow</AlertOutline.yellow>
            <AlertOutline.orange pills>Orange</AlertOutline.orange>
            <AlertOutline.purple pills>Purple</AlertOutline.purple>
            <AlertOutline.dark pills>Dark</AlertOutline.dark>
            <ComponentProps name='AlertOutline'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
              <Badge>large</Badge>
              <Badge>pills</Badge>
            </ComponentProps>
            <ComponentVariants name='AlertOutline'>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import AlertOutline from "@components/AlertOutline";

<AlertOutline className="flex gap-1 items-center font-medium" large><InformationCircleIcon className="h-5 w-5" />Default</AlertOutline>
<AlertOutline.green>Green</AlertOutline.green>
<AlertOutline.red className="flex gap-1 items-center font-medium" large><InformationCircleIcon className="h-5 w-5" />Red <span className="font-normal">Danger</span></AlertOutline.red>
<AlertOutline.yellow large>Yellow</AlertOutline.yellow>
<AlertOutline.orange pills>Orange</AlertOutline.orange>
<AlertOutline.purple pills>Purple</AlertOutline.purple>
<AlertOutline.dark pills>Dark</AlertOutline.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='alert-compact' name='Alert Compact'>
            <div className='flex flex-col gap-3 mb-4'>
              <AlertCompact title='Info'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is info alert</p>
              </AlertCompact>
              <AlertCompact.success title='Success' className='w-56'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is success alert</p>
              </AlertCompact.success>
              <AlertCompact.warning title='Warning' className='!max-w-sm'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is warning alert</p>
              </AlertCompact.warning>
              <AlertCompact.danger title='Danger' className='!max-w-md'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is danger alert</p>
              </AlertCompact.danger>
              <AlertCompact.infoLeft title='Info' className='w-56'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is info alert</p>
              </AlertCompact.infoLeft>
              <AlertCompact.successLeft title='Success' className='w-56'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is success alert</p>
              </AlertCompact.successLeft>
              <AlertCompact.warningLeft title='Warning' className='w-56'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is warning alert</p>
              </AlertCompact.warningLeft>
              <AlertCompact.dangerLeft title='Danger' className='w-56'>
                <p className='text-sm text-gray-500 dark:text-gray-300'>This is danger alert</p>
              </AlertCompact.dangerLeft>
            </div>
            <ComponentProps name='AlertCompact'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <ComponentVariants name='AlertCompact'>
              <Badge.orange pills>.success</Badge.orange>
              <Badge.orange pills>.warning</Badge.orange>
              <Badge.orange pills>.danger</Badge.orange>
              <Badge.orange pills>.infoLeft</Badge.orange>
              <Badge.orange pills>.successLeft</Badge.orange>
              <Badge.orange pills>.warningLeft</Badge.orange>
              <Badge.orange pills>.dangerLeft</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import AlertCompact from "@components/AlertCompact";

<div className="flex flex-col gap-3">
	<AlertCompact title="Info">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is info alert</p>
	</AlertCompact>
	<AlertCompact.success title="Success" className="w-56">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is success alert</p>
	</AlertCompact.success>
	<AlertCompact.warning title="Warning" className="!max-w-sm">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is warning alert</p>
	</AlertCompact.warning>
	<AlertCompact.danger title="Danger" className="!max-w-md">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is danger alert</p>
	</AlertCompact.danger>
	<AlertCompact.infoLeft title="Info" className="w-56">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is info alert</p>
	</AlertCompact.infoLeft>
	<AlertCompact.successLeft title="Success" className="w-56">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is success alert</p>
	</AlertCompact.successLeft>
	<AlertCompact.warningLeft title="Warning" className="w-56">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is warning alert</p>
	</AlertCompact.warningLeft>
	<AlertCompact.dangerLeft title="Danger" className="w-56">
		<p className="text-sm text-gray-500 dark:text-gray-300">This is danger alert</p>
	</AlertCompact.dangerLeft>
</div>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='description-list' name='Description List'>
            <DescriptionList>
              <DescriptionList.item
                title='Lorem Ipsum'
                text='Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor.'
              />
              <DescriptionList.item
                title='Lorem Ipsum'
                text='Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor. Ut nulla ut minim velit occaecat nostrud minim. Lorem ex adipisicing eu laboris laborum ut id est ea nostrud elit proident id.'
              />
            </DescriptionList>
            <DescriptionList divide className='my-3'>
              <DescriptionList.item
                title='Lorem Ipsum'
                text='Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor.'
              />
              <DescriptionList.item
                title='Lorem Ipsum'
                text='Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor. Ut nulla ut minim velit occaecat nostrud minim. Lorem ex adipisicing eu laboris laborum ut id est ea nostrud elit proident id.'
              />
            </DescriptionList>
            <ComponentProps name='DescriptionList'>
              <Badge.red>className</Badge.red>
              <Badge>divide</Badge>
              <Badge>children</Badge>
            </ComponentProps>
            <ComponentProps name='DescriptionList.item'>
              <Badge>title</Badge>
              <Badge>text</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import DescriptionList from "@components/DescriptionList";

<DescriptionList>
	<DescriptionList.item title="Lorem Ipsum" text="Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor." />
	<DescriptionList.item title="Lorem Ipsum" text="Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor. Ut nulla ut minim velit occaecat nostrud minim. Lorem ex adipisicing eu laboris laborum ut id est ea nostrud elit proident id." />
</DescriptionList>
<DescriptionList divide className="my-3">
	<DescriptionList.item title="Lorem Ipsum" text="Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor." />
	<DescriptionList.item title="Lorem Ipsum" text="Consequat commodo ullamco aliquip velit sint. Exercitation culpa aliqua ea cillum in minim ipsum non non aliqua tempor. Ut nulla ut minim velit occaecat nostrud minim. Lorem ex adipisicing eu laboris laborum ut id est ea nostrud elit proident id." />
</DescriptionList>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='ordered-list' name='Ordered List'>
            <OrderedList inside className='my-2'>
              <OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
              <OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
            </OrderedList>
            <OrderedList className='my-2'>
              <OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
              <OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
            </OrderedList>
            <ComponentProps name='OrderedList'>
              <Badge.red>className</Badge.red>
              <Badge>inside</Badge>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <ComponentProps name='OrderedList.item'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import OrderedList from "@components/OrderedList";

<OrderedList inside className="my-2">
	<OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
	<OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
</OrderedList>
<OrderedList className="my-2">
	<OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
	<OrderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</OrderedList.item>
</OrderedList>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='unordered-list' name='Unordered List'>
            <UnorderedList bullet inside className='my-2'>
              <UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
              <UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
            </UnorderedList>
            <UnorderedList inside className='my-2'>
              <UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
              <UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
            </UnorderedList>
            <UnorderedList bullet className='my-2'>
              <UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
              <UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
            </UnorderedList>
            <UnorderedList className='my-2'>
              <UnorderedList.item className='flex items-center gap-x-2'>
                <CheckCircleIcon className='w-5 h-5 text-teal-500' />
                Incididunt anim nulla mollit amet commodo irure sit fugiat.
              </UnorderedList.item>
              <UnorderedList.item className='flex items-center gap-x-2'>
                <CheckCircleIcon className='w-5 h-5 text-teal-500' />
                Incididunt anim nulla mollit amet commodo irure sit fugiat.
              </UnorderedList.item>
            </UnorderedList>
            <ComponentProps name='UnorderedList'>
              <Badge.red>className</Badge.red>
              <Badge>bullet</Badge>
              <Badge>inside</Badge>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <ComponentProps name='UnorderedList.item'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import UnorderedList from "@components/UnorderedList";

<UnorderedList bullet inside className="my-2">
	<UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
	<UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
</UnorderedList>
<UnorderedList inside className="my-2">
	<UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
	<UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
</UnorderedList>
<UnorderedList bullet className="my-2">
	<UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
	<UnorderedList.item>Incididunt anim nulla mollit amet commodo irure sit fugiat.</UnorderedList.item>
</UnorderedList>
<UnorderedList className="my-2">
	<UnorderedList.item className="flex items-center gap-x-2">
		<CheckCircleIcon className="w-5 h-5 text-teal-500" />
		Incididunt anim nulla mollit amet commodo irure sit fugiat.
	</UnorderedList.item>
	<UnorderedList.item className="flex items-center gap-x-2">
		<CheckCircleIcon className="w-5 h-5 text-teal-500" />
		Incididunt anim nulla mollit amet commodo irure sit fugiat.
	</UnorderedList.item>
</UnorderedList>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='progress' name='Progress Bar'>
            <Progress percent={20} />
            <br />
            <Progress height='h-1.5' percent={40} />
            <br />
            <Progress height='h-3' percent={60} stripe />
            <br />
            <Progress.percentage percent={80} />
            <br />
            <Progress.percentage percent={90} color='bg-red-500' stripe />
            <br />
            <ComponentProps name='Progress'>
              <Badge.red>className</Badge.red>
              <Badge>color</Badge>
              <Badge>height</Badge>
              <Badge>percent</Badge>
              <Badge>stripe</Badge>
            </ComponentProps>
            <ComponentProps name='Progress.percentage'>
              <Badge.red>className</Badge.red>
              <Badge>color</Badge>
              <Badge>percent</Badge>
              <Badge>stripe</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Progress from "@components/Progress";

<Progress percent={20} />
<br />
<Progress height="h-1.5" percent={40} />
<br />
<Progress height="h-3" percent={60} stripe />
<br />
<Progress.percentage percent={80} />
<br />
<Progress.percentage percent={90} color="bg-red-500" stripe />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='progress-circle' name='Progress Circle'>
            <ProgressCircle
              size={30}
              percent={percentage}
              strokeWidth={7}
              showPercent
              color='text-indigo-500'
              textClassName='font-medium !text-indigo-500'
            />
            <div className='flex gap-2 items-center my-3'>
              <Button.secondary
                className='!px-2'
                onClick={() => setPercentage(percentage > 0 ? percentage - 1 : 0)}
                disabled={percentage < 1 && true}
              >
                <MinusSmIcon className='w-5 h-5' />
              </Button.secondary>
              <p className='dark:text-white'>{percentage}</p>
              <Button.secondary
                className='!px-2'
                onClick={() => setPercentage(percentage < 100 ? percentage + 1 : 100)}
                disabled={percentage > 99 && true}
              >
                <PlusSmIcon className='w-5 h-5' />
              </Button.secondary>
            </div>
            <ProgressCircle size={30} percent={75} strokeWidth={7} showPercent textClassName='font-medium' />
            <ProgressCircle
              size={30}
              percent={100}
              strokeWidth={7}
              showPercent
              color='text-green-500'
              textClassName='font-medium !text-green-500'
            />
            <ProgressCircle size={30} percent={25} strokeWidth={5} color='text-red-500' />
            <ProgressCircle size={30} percent={50} strokeWidth={5} color='text-orange-500' />
            <div>
              <ProgressCircle.small size={20} percent={75} strokeWidth={6} showPercent textClassName='font-medium' />
              <ProgressCircle.small
                size={20}
                percent={100}
                strokeWidth={4}
                showPercent
                color='text-green-500'
                textClassName='font-medium !text-green-500'
              />
              <ProgressCircle.small size={20} percent={25} strokeWidth={3} color='text-red-500' />
              <ProgressCircle.small size={20} percent={50} strokeWidth={5} color='text-orange-500' />
            </div>
            <ComponentProps name='ProgressCircle'>
              <Badge.red>className</Badge.red>
              <Badge>color</Badge>
              <Badge>size</Badge>
              <Badge>percent</Badge>
              <Badge>showPercent</Badge>
              <Badge>strokeWidth</Badge>
              <Badge>textClassName</Badge>
            </ComponentProps>
            <ComponentProps name='ProgressCircle.small'>
              <Badge.red>className</Badge.red>
              <Badge>color</Badge>
              <Badge>size</Badge>
              <Badge>percent</Badge>
              <Badge>showPercent</Badge>
              <Badge>strokeWidth</Badge>
              <Badge>textClassName</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import ProgressCircle from "@components/ProgressCircle";

<ProgressCircle size={30} percent={75} strokeWidth={7} showPercent textClassName="font-medium" />
<ProgressCircle size={30} percent={100} strokeWidth={7} showPercent color="text-teal-500" textClassName="font-medium text-teal-500" />
<ProgressCircle size={30} percent={25} strokeWidth={5} color="text-red-400" />
<ProgressCircle size={30} percent={50} strokeWidth={5} color="text-orange-500" />
<div>
	<ProgressCircle.small size={20} percent={75} strokeWidth={6} showPercent textClassName="font-medium" />
	<ProgressCircle.small size={20} percent={100} strokeWidth={4} showPercent color="text-teal-500" textClassName="font-medium text-teal-500" />
	<ProgressCircle.small size={20} percent={25} strokeWidth={3} color="text-red-400" />
	<ProgressCircle.small size={20} percent={50} strokeWidth={5} color="text-orange-500" />
</div>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='avatar' name='Avatar'>
            <div className='flex -space-x-2 flex-wrap mb-4'>
              <Avatar
                className='border-0'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <Avatar
                className='border-0'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
            </div>
            <div className='flex space-x-2 flex-wrap mb-4'>
              <Avatar
                className='border-0 rounded'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <Avatar
                className='border-0 rounded'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
            </div>
            <div className='flex -space-x-1 flex-wrap mb-4'>
              <Avatar
                className='!border-red-500'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <Avatar
                className='rounded-lg !border-emerald-500'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
            </div>
            <div className='flex flex-wrap mb-4 gap-x-2'>
              <Avatar
                className='!border-orange-500'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <Avatar
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
            </div>
            <div className='flex flex-wrap mb-4 gap-x-2'>
              <Avatar
                className='h-10 w-10 !border-purple-600'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <Avatar
                className='!h-12 !w-12 rounded-lg'
                alt='Image Alt'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
            </div>
            <ComponentProps name='Avatar'>
              <Badge.red>className</Badge.red>
              <Badge>src</Badge>
              <Badge>alt</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Avatar from "@components/Avatar";

<div className="flex -space-x-2 flex-wrap mb-4">
	<Avatar className="border-0" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
	<Avatar className="border-0" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
</div>
<div className="flex space-x-2 flex-wrap mb-4">
	<Avatar className="border-0 rounded" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
	<Avatar className="border-0 rounded" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
</div>
<div className="flex -space-x-1 flex-wrap mb-4">
	<Avatar className="!border-red-500" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
	<Avatar className="rounded-lg !border-emerald-500" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
</div>
<div className="flex flex-wrap mb-4 gap-x-2">
	<Avatar className="!border-orange-500" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
	<Avatar alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
</div>
<div className="flex flex-wrap mb-4 gap-x-2">
	<Avatar className="h-10 w-10 !border-purple-600" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
	<Avatar className="!h-12 !w-12 rounded-lg" alt="Image Alt"
		src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
</div>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='tooltips' name='Tooltips'>
            <div className='flex items-center gap-8 mt-10'>
              <Tooltips text='Tooltips Left' left>
                <AnnotationIcon className='h-6 w-6 text-neutral-700 dark:text-gray-300'></AnnotationIcon>
              </Tooltips>
              <Tooltips text='Tooltips Center'>
                <AnnotationIcon className='h-6 w-6 text-neutral-700 dark:text-gray-300'></AnnotationIcon>
              </Tooltips>
              <Tooltips text='Tooltips Right' right>
                <AnnotationIcon className='h-6 w-6 text-neutral-700 dark:text-gray-300'></AnnotationIcon>
              </Tooltips>
            </div>
          </Section>

          <Section id='skeletons' name='Skeletons'>
            <Skeletons className='!h-32 w-full' />
            <Skeletons className='max-w-[12rem]' />
            <Skeletons className='max-w-[24rem] !rounded-full' />
            <Skeletons className='!w-24 !h-24 !rounded-full' />
            <ComponentProps name='Skeletons'>
              <Badge.red>className</Badge.red>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Skeletons from "@components/Skeletons";

<Skeletons className="!h-32 w-full" />
<Skeletons className="max-w-[12rem]" />
<Skeletons className="max-w-[24rem] !rounded-full" />
<Skeletons className="!w-24 !h-24 !rounded-full" />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='spinner' name='Spinner'>
            <Spinner></Spinner>
            <Spinner.green></Spinner.green>
            <Spinner.red small></Spinner.red>
            <Spinner.yellow small></Spinner.yellow>
            <Spinner.orange large></Spinner.orange>
            <Spinner.purple large></Spinner.purple>
            <Spinner.dark></Spinner.dark>
            <ComponentProps name='Spinner' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge>small</Badge>
              <Badge>large</Badge>
            </ComponentProps>
            <ComponentVariants name='AlertOutline'>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Spinner from "@components/Spinner"; 
							
<Spinner></Spinner>
<Spinner.green></Spinner.green>
<Spinner.red small></Spinner.red>
<Spinner.yellow small></Spinner.yellow>
<Spinner.orange large></Spinner.orange>
<Spinner.purple large></Spinner.purple>
<Spinner.dark></Spinner.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='loading' name='Loading'>
            <Loading></Loading>
            <Loading.green></Loading.green>
            <Loading.red small></Loading.red>
            <Loading.yellow small></Loading.yellow>
            <Loading.orange large></Loading.orange>
            <Loading.purple large></Loading.purple>
            <Loading.dark></Loading.dark>
            <ComponentProps name='Loading' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge>small</Badge>
              <Badge>large</Badge>
            </ComponentProps>
            <ComponentVariants name='AlertOutline'>
              <Badge.orange pills>.green</Badge.orange>
              <Badge.orange pills>.red</Badge.orange>
              <Badge.orange pills>.yellow</Badge.orange>
              <Badge.orange pills>.orange</Badge.orange>
              <Badge.orange pills>.purple</Badge.orange>
              <Badge.orange pills>.dark</Badge.orange>
            </ComponentVariants>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Loading from "@components/Loading"; 
							
<Loading></Loading>
<Loading.green></Loading.green>
<Loading.red small></Loading.red>
<Loading.yellow small></Loading.yellow>
<Loading.orange large></Loading.orange>
<Loading.purple large></Loading.purple>
<Loading.dark></Loading.dark>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='loading-dots' name='Loading Dots'>
            <LoadingDots />
            <br />
            <LoadingDots medium className='gap-0.5' />
            <br />
            <LoadingDots large className='gap-1' />
            <br />
            <ComponentProps name='LoadingDots' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge>medium</Badge>
              <Badge>large</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import LoadingDots from "@components/LoadingDots/LoadingDots"; 
							
<LoadingDots />
<br/>
<LoadingDots medium className="gap-0.5" />
<br/>
<LoadingDots large className="gap-1" />
<br/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='loading-spinner' name='Loading Spinner'>
            <LoadingSpinner />
            <br />
            <LoadingSpinner medium />
            <br />
            <LoadingSpinner large />
            <ComponentProps name='LoadingDots' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge>medium</Badge>
              <Badge>large</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import LoadingSpinner from "@components/LoadingSpinner"; 
							
<LoadingSpinner />
<LoadingSpinner medium />
<LoadingSpinner large />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='kbd' name='Kbd (Keyboard)'>
            <div className='flex items-center flex-wrap gap-2'>
              <Kbd>Shift</Kbd>
              <Kbd>Ctrl</Kbd>
              <Kbd>Tab</Kbd>
              <Kbd>Caps Lock</Kbd>
              <Kbd className='px-5'>Esc</Kbd>
              <Kbd className='px-5'>Spacebar</Kbd>
              <Kbd className='px-5'>Enter</Kbd>
            </div>
            <p className='text-gray-500 dark:text-gray-300 mt-4'>
              Please press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to Copy, and <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> to Paste.
            </p>
            <ComponentProps name='Kbd' className='mt-2'>
              <Badge.red>className</Badge.red>
              <Badge.purple>children</Badge.purple>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Kbd from "@components/Kbd";";

<div className="flex items-center flex-wrap gap-2">
	<Kbd>Shift</Kbd>
	<Kbd>Ctrl</Kbd>
	<Kbd>Tab</Kbd>
	<Kbd>Caps Lock</Kbd>
	<Kbd className="px-5">Esc</Kbd>
	<Kbd className="px-5">Spacebar</Kbd>
	<Kbd className="px-5">Enter</Kbd>
</div>
<p className="text-gray-500 dark:text-gray-300 mt-4">
	Please press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to Copy, and <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> to Paste.
</p>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='rating' name='Rating'>
            <Rating active={1} inactive={4} />
            <Rating
              active={3}
              inactive={2}
              className='mt-4 gap-1'
              activeClassName='!w-7 !h-7 !text-red-500'
              inactiveClassName='!w-7 !h-7'
            />
            <Rating
              active={5}
              className='my-4 gap-2'
              activeClassName='!w-9 !h-9 !text-emerald-500'
              inactiveClassName='!w-9 !h-9'
            />
            <ComponentProps name='Rating'>
              <Badge.red>className</Badge.red>
              <Badge.red>activeClassName</Badge.red>
              <Badge.red>inactiveClassName</Badge.red>
              <Badge>active</Badge>
              <Badge>inactive</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Rating from "@components/Rating";

<Rating active={1} inactive={4} />
<Rating active={3} inactive={2} className="mt-4 gap-1" activeClassName="!w-7 !h-7 !text-red-500" inactiveClassName="!w-7 !h-7" />
<Rating active={5} className="my-4 gap-2" activeClassName="!w-9 !h-9 !text-emerald-500" inactiveClassName="!w-9 !h-9" />
`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='snippet' name='Snippet'>
            <Snippet text='yarn add @heroicons/react' />
            <Snippet className='sm:w-96 my-4' text='yarn add react' />
            <Snippet className='sm:w-52 my-4' text='yarn add react' />
            <ComponentProps name='Snippet'>
              <Badge.red>className</Badge.red>
              <Badge>text</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Snippet from "@components/Snippet";

<Snippet text="yarn add @heroicons/react" />
<Snippet className="sm:w-96 my-4" text="yarn add react" />
<Snippet className="sm:w-52 my-4" text="yarn add react" />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='note' name='Note'>
            <Note title='NOTE :'>This note details something important.</Note>
            <Note className='my-4' title='INFO :' titleClassName='!text-sky-500 !dark:text-sky-500'>
              This note details something important.
            </Note>
            <Note
              className='my-4 !text-red-500 !dark:text-red-500'
              title='DANGER :'
              titleClassName='!text-red-500 !dark:text-red-500'
            >
              This note details something important.
            </Note>
            <ComponentProps name='Note'>
              <Badge.red>className</Badge.red>
              <Badge.red>titleClassName</Badge.red>
              <Badge>children</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Note from "@components/Note";

<Note title="NOTE :">This note details something important.</Note>
<Note className="my-4" title="INFO :" titleClassName="text-sky-500 dark:text-sky-500">This note details something important.</Note>
<Note className="my-4 text-red-500 dark:text-red-500" title="DANGER :" titleClassName="text-red-500 dark:text-red-500">This note details something important.</Note>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='show-more' name='Show More'>
            <ShowMore />
            <ComponentProps name='Show More'>
              <Badge.red>className</Badge.red>
              <Badge>children</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import ShowMore from "@components/ShowMore";

<ShowMore />`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='timeline' name='Timeline'>
            <Timeline className='!py-0.5'>
              <Timeline.item title='Application v1' time='December 6th, 2021'>
                <p className='text-base font-normal text-gray-500 dark:text-gray-300'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className='text-base font-normal text-gray-500 dark:text-gray-300'>
                  Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                </p>
              </Timeline.item>
              <Timeline.item title='Application v2' time='January 1st, 2022'>
                <p className='text-base font-normal text-gray-500 dark:text-gray-300'>
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className='text-base font-normal text-gray-500 dark:text-gray-300'>
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                </p>
              </Timeline.item>
            </Timeline>
            <ComponentProps name='Timeline'>
              <Badge.red>className</Badge.red>
              <Badge>children</Badge>
            </ComponentProps>
            <ComponentProps name='Timeline.item'>
              <Badge>title</Badge>
              <Badge>time</Badge>
              <Badge>children</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Timeline from "@components/Timeline";

<Timeline className="!py-0.5">
	<Timeline.item title="Application v1" time="December 6th, 2021">
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
	</Timeline.item>
	<Timeline.item title="Application v2" time="January 1st, 2022">
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">It has survived not only five centuries, but also the leap into electronic typesetting,</p>
	</Timeline.item>
</Timeline>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='timeline-horizontal' name='Timeline Horizontal'>
            <TimelineHorizontal className='!py-0.5 mb-4'>
              <TimelineHorizontal.item title='Application v1' time='December 6th, 2021'>
                <p className='text-base font-normal text-gray-500 dark:text-gray-300'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </TimelineHorizontal.item>
              <TimelineHorizontal.item title='Application v2' time='January 1st, 2022'>
                <p className='text-base font-normal text-gray-500 dark:text-gray-300'>
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </TimelineHorizontal.item>
              <TimelineHorizontal.item title='Application v3' time='May 3rd, 2022'>
                <p className='text-base font-normal text-gray-500 dark:text-gray-300'>
                  It has survived not only five centuries, but also the leap into electronic typesetting
                </p>
              </TimelineHorizontal.item>
            </TimelineHorizontal>
            <ComponentProps name='TimelineHorizontal'>
              <Badge.red>className</Badge.red>
              <Badge>children</Badge>
            </ComponentProps>
            <ComponentProps name='TimelineHorizontal.item'>
              <Badge>title</Badge>
              <Badge>time</Badge>
              <Badge>children</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import TimelineHorizontal from "@components/TimelineHorizontal";

<TimelineHorizontal className="!py-0.5 mb-4">
	<TimelineHorizontal.item title="Application v1" time="December 6th, 2021">
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
	</TimelineHorizontal.item>
	<TimelineHorizontal.item title="Application v2" time="January 1st, 2022">
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>	
	</TimelineHorizontal.item>
	<TimelineHorizontal.item title="Application v3" time="May 3rd, 2022">
		<p className="text-base font-normal text-gray-500 dark:text-gray-300">It has survived not only five centuries, but also the leap into electronic typesetting</p>	
	</TimelineHorizontal.item>
</TimelineHorizontal>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='status-indicator' name='Status Indicator'>
            <StatusIndicator success text='Success' />
            <StatusIndicator warning text='Warning' />
            <StatusIndicator danger text='Danger' />
            <StatusIndicator text='None' />
            <ComponentProps name='StatusIndicator'>
              <Badge.red>className</Badge.red>
              <Badge>success</Badge>
              <Badge>warning</Badge>
              <Badge>danger</Badge>
              <Badge>text</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import StatusIndicator from "@components/StatusIndicator";

<StatusIndicator success text="Success"/>
<StatusIndicator warning text="Warning"/>
<StatusIndicator danger text="Danger"/>
<StatusIndicator text="None"/>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='scrollable' name='Scrollable'>
            <Scrollable title='Lorem Ipsum' height='h-40' className='mb-4'>
              <p className='dark:text-white text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long
                established fact that a reader will be distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                opposed to using Content here, content here, making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over
                the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              <p className='dark:text-white text-sm'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
                amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum
                by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                1914 translation by H. Rackham.
              </p>
            </Scrollable>
            <Scrollable.custom title='Lorem Ipsum' height='h-40'>
              <p className='dark:text-white text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long
                established fact that a reader will be distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                opposed to using Content here, content here, making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over
                the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              <p className='dark:text-white text-sm'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
                amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum
                by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                1914 translation by H. Rackham.
              </p>
            </Scrollable.custom>
            <ComponentProps name='Scrollable'>
              <Badge.red>className</Badge.red>
              <Badge>title</Badge>
              <Badge>height</Badge>
              <Badge>children</Badge>
            </ComponentProps>
            <ComponentProps name='Scrollable.custom'>
              <Badge.red>className</Badge.red>
              <Badge>title</Badge>
              <Badge>height</Badge>
              <Badge>children</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Scrollable from "@components/Scrollable";

<Scrollable title="Lorem Ipsum" height="h-40" className="mb-4">
	<p className="dark:text-white text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		Why do we use it?
		It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
	<p className="dark:text-white text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
		The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
</Scrollable>
<Scrollable.custom title="Lorem Ipsum" height="h-40">
	<p className="dark:text-white text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		Why do we use it?
		It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
	<p className="dark:text-white text-sm">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
		The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
</Scrollable.custom>`}
              ></Code>
            </AccordionCode>
          </Section>

          <Section id='stepper' name='Stepper'>
            <div className='container horizontal mt-5 mb-12'>
              <Stepper steps={stepArray} currentStepNumber={currentStep} />
            </div>
            <div className='container flex justify-around my-8 '>
              <button
                onClick={() => handleClick()}
                className='transition duration-300 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded'
              >
                {' '}
                Previous{' '}
              </button>
              <p className='dark:text-white text-xl'>{currentStep}</p>
              <button
                onClick={() => handleClick('next')}
                className='transition duration-300 bg-teal-600 hover:bg-teal-700 text-white text-sm px-3 py-1 rounded'
              >
                {' '}
                Next{' '}
              </button>
            </div>
            <ComponentProps name='Stepper'>
              <Badge>steps</Badge>
              <Badge>currentStepNumber</Badge>
            </ComponentProps>
            <AccordionCode title='Show Code'>
              <Code
                code={`import Stepper from "@components/Stepper";

const [currentStep, setCurrentStep] = useState(1);
const stepArray = [
	"First",
	"Second",
	"Complete"
];
const handleClick = (clickType) => {
	let newStep = currentStep;
	(clickType == "next") ? newStep++ : newStep--;
	// Check if steps are within the boundary
	if (newStep > 0 && newStep <= stepArray.length) {
		setCurrentStep(newStep)
	}
}

<div className="container horizontal mt-5 mb-12">
	<Stepper
		steps={stepArray}
		currentStepNumber={currentStep}
	/>
</div>
<div className="container flex justify-around my-8 ">
	<button onClick={() => handleClick()} className="transition duration-300 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"> Previous </button>
	<p className="dark:text-white text-xl">{currentStep}</p>
	<button onClick={() => handleClick("next")} className="transition duration-300 bg-teal-600 hover:bg-teal-700 text-white text-sm px-3 py-1 rounded"> Next </button>
</div>`}
              ></Code>
            </AccordionCode>
          </Section>
        </main>

        <Footer />
      </Layout>
    </div>
  );
}
