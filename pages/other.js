import Head from "next/head";
import { GlobalContext } from "@utils/GlobalContext";
import { useRef, useContext, useState } from "react";
import { LibraryIcon, MoonIcon, SunIcon } from '@heroicons/react/outline'
import toast, { Toaster } from 'react-hot-toast';
import { Toaster as Toasters, toast as toasts } from 'sonner'
import Button from "@components/Button";
import Footer from "@components/Footer"
import Navbar from "@components/Navbar";
import Text from "@components/Text";
import Code from "@components/Code";
import Section from "@components/Section";
import BackToTop from "@components/BackToTop";
import Layout from "@components/Layout";
import useToast from "@utils/useToast";
import Select from 'react-select'
import TocLink from "@components/TocLink";
import AccordionCode from "@components/AccordionCode";
import PinField from "react-pin-field";
import Tippy from "@tippyjs/react";
import ComponentProps from "@components/ComponentProps";
import Badge from "@components/Badge";
import ThemeChanger from "@components/ThemeChanger";
import ThemeSelect from "@components/ThemeSelect";
import TabsAnimate from "@components/TabsAnimate";
import Link from "next/link";
import CommandMenu from "@components/CommandMenu";
import CommandsMenu from "@components/CommandsMenu";
import CommandMenuNested from "@components/CommandMenuNested";
import Step from "@components/Step";
import Carousel from "@components/Carousel";

const reactMultiSelectOptions = [
	{ value: 'red', label: 'Red' },
	{ value: 'blue', label: 'Blue' },
	{ value: 'green', label: 'Green' },
	{ value: 'yellow', label: 'Yellow' },
	{ value: 'purple', label: 'Purple' },
	{ value: 'orange', label: 'Orange' }
]

export default function Third() {

	const { updateToast, pushToast, dismissToast, pushCustomToast, updateCustomToast, dismissCustomToast } = useToast();
	function showCustomToast() {
		pushCustomToast({ title: "Toast Info", message: "Toast Info Message" });
	};
	function showSuccessCustomToast() {
		pushCustomToast({ title: "Toast Success", message: "Toast Success Message", isSuccess: true });
	};
	function showErrorCustomToast() {
		pushCustomToast({ title: "Toast Error", message: "Toast Error Message", isError: true });
	};
	function showAsyncCustomToast() {
		const toastId = pushCustomToast({
			title: "Loading",
			message: "Loading Toast",
			isLoading: true,
		});
		setTimeout(() => {
			updateCustomToast({ toastId, title: "Loading Success", message: "Loading Success Message", isError: false });
		}, 3000);
	};
	function closeCustomToast() {
		dismissCustomToast();
	};

	function showToast() {
		pushToast({ message: "Toast", isError: false });
	};
	function showErrorToast() {
		pushToast({ message: "Error toast", isError: true });
	};
	function closeToast() {
		dismissToast();
	};
	function showAsyncToast() {
		const toastId = pushToast({
			message: "Loading Toast",
			isLoading: true,
		});
		setTimeout(() => {
			updateToast({ toastId, message: "Done Toast", isError: false });
		}, 3000);
	};

	function promiseToast() {
		toasts.promise(
			async () => {
				const res = await fetch(`${process.env.NEXTAUTH_URL}/api/hello`)
				if (res.status === 200) return Promise.resolve(res.json())
				if (res.status !== 200) return Promise.reject('Error Message')
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

	const [multiSelect, setMultiSelect] = useState([reactMultiSelectOptions[0], reactMultiSelectOptions[1]])
	function handleMultiSelectChange(e) {
		setMultiSelect(e)
	}

	const [unselectMultiSelect, setUnselectMultiSelect] = useState()
	function handleUnselectMultiSelectChange(e) {
		setUnselectMultiSelect(e)
	}

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

	return (
		<>
			<Head>
				<title>Other</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Layout>
				<main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16">

					<Section id="toc" name="Other Components TOC">
						<div className="grid sm:grid-cols-2 md:grid-cols-3">
							<div>
								<TocLink href="#react-multi-select-search" text="React Multi Select Search" />
								<TocLink href="#sonner" text="Sonner (Toast)" />
								<TocLink href="#toast" text="Toast" />
								<TocLink href="#toast-custom" text="Toast Custom" />
								<TocLink href="#input-pin" text="Input PIN" />
								<TocLink href="#tippy-tooltips" text="Tippy Tooltips" />
							</div>
							<div>
								<TocLink href="#tabs-animate" text="Tabs Animate" />
								<TocLink href="#link-hover-underline" text="Link Hover Underline" />
								<TocLink href="#commands-menu" text="Command Menu (KMenu)" />
								<TocLink href="#command-menu" text="Command Menu (CMDK)" />
								<TocLink href="#dark-mode" text="Dark Mode" />
							</div>
							<div>
							</div>
						</div>
					</Section>

					<div className="h-[400px]">
						<Carousel />
					</div>

					{/* require setup in tailwind.config.js */}
					<Step />

					<Section id="commands-menu" name="Command Menu (KMenu)">
						<CommandsMenu />
					</Section>

					<Section id="command-menu" name="Command Menu (CMDK)">

						<CommandMenuNested />
						<br />
						<CommandMenu />

					</Section>

					<Section id="link-hover-underline" name="Link Hover Underline">
						<ul className="space-y-4 my-8">
							<li>
								<Link href="/" className="dark:text-white underlined inline-block">
									Home
								</Link>
							</li>
							<li>
								<Link href="/" className="dark:text-white hover-underline-animation inline-block">
									Home
								</Link>
							</li>
							<li>
								<Link href="/" className="dark:text-white underline-center-animation">
									Home
								</Link>
							</li>
						</ul>
					</Section>

					<Section id="tabs-animate" name="Tabs Animate">
						<TabsAnimate items={['First', 'Second']}>
							<TabsAnimate.Item className="py-4 dark:text-white">
								First
							</TabsAnimate.Item>
							<TabsAnimate.Item className="py-4 dark:text-white">
								Second
							</TabsAnimate.Item>
						</TabsAnimate>
					</Section>

					<Section id="react-multi-select-search" name="React Multi Select Search">
						<label htmlFor="reactselect" className="block font-medium text-sm text-neutral-800 dark:text-gray-200 mt-4 mb-2">
							Unselected Multi Select
						</label>
						<Select
							options={reactMultiSelectOptions}
							isMulti
							value={unselectMultiSelect}
							onChange={handleUnselectMultiSelectChange}
							placeholder="Multi select.."
							name="reactselect"
							className="rounded-lg"
							classNamePrefix="react-select"
							theme={(theme) => ({
								...theme,
								colors: {
									...theme.colors,
									primary25: `#3b82f6`
								},
							})}
						/>
						<Text className="mt-2 !text-sm font-medium !text-red-500">
							Multi Select : {" "}
							{unselectMultiSelect ?
								unselectMultiSelect.map((item, index) =>
									<span key={index}>{item.value}, </span>
								)
								: ""}
						</Text>

						<label htmlFor="reactselect" className="block font-medium text-sm text-neutral-800 dark:text-gray-200 mt-4 mb-2">
							Selected Multi Select
						</label>
						<Select
							options={reactMultiSelectOptions}
							value={multiSelect}
							isMulti
							placeholder="Multi select.."
							name="reactselect"
							className="rounded-lg"
							onChange={handleMultiSelectChange}
							classNamePrefix="react-select"
							theme={(theme) => ({
								...theme,
								colors: {
									...theme.colors,
									primary25: `#3b82f6`
								},
							})}
						/>

						<Text className="mt-2 !text-sm font-medium !text-red-500">
							Multi Select : {" "}
							{multiSelect ?
								multiSelect.map((item, index) =>
									<span key={index}>{item.value}, </span>
								)
								: ""}
						</Text>
					</Section>

					<Section id="sonner" name="Sonner / Toast">
						{/* for global toast, put Toaster component below in _app.js  */}
						<Toasters theme={darkMode ? 'dark' : 'light'} richColors closeButton expand visibleToasts={5} />
						<div className="flex flex-wrap gap-2">
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts('My first toast')}>
								toast
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts('Event has been created', {
								description: '',
								icon: <LibraryIcon className="h-5 w-5 mx-8" />,
							})}>
								icon
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts.custom((t) => (
								<div className="bg-white shadow dark:bg-neutral-900 dark:text-white p-4 rounded border border-neutral-50 dark:border-neutral-800 flex items-center justify-center gap-4">
									This is a custom component
									<button className="border dark:border-neutral-700 px-2 py-0.5 rounded font-medium text-sm"
										onClick={() => toasts.dismiss(t)}>X</button>
								</div>
							))}>
								custom dismiss
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => {
								const toastId = toasts.custom(() => (
									<div className="bg-white shadow dark:bg-neutral-900 dark:text-white p-4 rounded border border-neutral-50 dark:border-neutral-800 flex items-center justify-center gap-4">
										This is a custom component
										<button className="border dark:border-neutral-700 px-2 py-0.5 rounded font-medium text-sm"
											onClick={() => toasts.dismiss(toastId)}>X</button>
									</div>
								))
							}
							}>
								custom dismiss id
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts.message('Event has been created', {
								description: 'Monday, January 3rd at 6:00pm'
							})}>
								description
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts.message('Event has been created', {
								description: 'Monday, January 3rd at 6:00pm',
								style: {
									background: `${darkMode ? '#171717' : '#fff'}`,
								},
								className: '!text-blue-500',
								descriptionClassName: '!text-red-500',
							})}>
								style
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts('Event has been created', {
								action: {
									label: 'Undo',
									onClick: () => console.log('Undo')
								},
							})}>
								action
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts.promise(promise, {
								loading: 'Loading Promise...',
								success: (data) => {
									return `${data.name} toast has been added`;
								},
								error: 'Error',
							})}>
								promise
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={promiseToast}>
								async await
							</button>
							<button className="px-2 text-white py-0.5 bg-sky-500 rounded" onClick={() => toasts(<div>My custom toast</div>)}>
								custom toast
							</button>
							<button className="px-2 text-white py-0.5 bg-emerald-500 rounded" onClick={() => toasts.success(<div>My success toast</div>)}>
								success toast
							</button>
							<button className="px-2 text-white py-0.5 bg-red-500 rounded" onClick={() => toasts.error(<div>My error toast</div>)}>
								error toast
							</button>
							<button className="px-2 text-white py-0.5 bg-red-500 rounded" onClick={() => toasts.dismiss()}>
								close all toast
							</button>
						</div>
					</Section>

					<Section id="toast" name="Toast">
						{/* for global toast, put Toaster component below in _app.js  */}
						<Toaster />
						<div className="flex flex-wrap items-center gap-2">
							<Button.green onClick={showToast}>Show Toast</Button.green>
							<Button.red onClick={showErrorToast}>Show Error Toast</Button.red>
							<Button.orange onClick={showAsyncToast}>Show Async Toast</Button.orange>
							<Button.secondary onClick={closeToast}>Close Toast</Button.secondary>
						</div>
					</Section>

					<Section id="toast-custom" name="Toast Custom">
						{/* for global toast, put Toaster component below in _app.js  */}
						<Toaster />
						<div className="flex flex-wrap items-center gap-2">
							<Button onClick={showCustomToast}>Show Custom Toast</Button>
							<Button.green onClick={showSuccessCustomToast}>Show Success Custom Toast</Button.green>
							<Button.red onClick={showErrorCustomToast}>Show Error Custom Toast</Button.red>
							<Button.orange onClick={showAsyncCustomToast}>Show Async Custom Toast</Button.orange>
							<Button.secondary onClick={closeCustomToast}>Close Custom Toast</Button.secondary>
						</div>
					</Section>

					<Section id="input-pin" name="Input PIN">
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
						<p className={`${demoCompleted ? "text-green-500" : "text-red-500"} text-sm`}>{demoCompleted ? "Completed" : "Not Completed"}</p>
						<p className="dark:text-white">value : {pinFieldComplete}</p>
						<ComponentProps name="PinField">
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
						<AccordionCode title="Show Code">
							<Code code={
								`import { useRef } from "react";
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
<p className="dark:text-white">value : {pinFieldComplete}</p>`
							}>
							</Code>
						</AccordionCode>
					</Section>

					<Section id="tippy-tooltips" name="Tippy Tooltips">
						<Tippy content={
							<span className="bg-white dark:bg-neutral-800 dark:text-white rounded text-sm px-2 py-1 shadow">Tooltip</span>
						}>
							<span className="dark:text-white hover:cursor-pointer font-medium">Hover Me</span>
						</Tippy>
						<ComponentProps name="Tippy">
							<Badge>content</Badge>
							<Badge>children</Badge>
						</ComponentProps>
						<AccordionCode title="Show Code">
							<Code code={
								`import Tippy from "@tippyjs/react";

<Tippy content={
	<span className="bg-white dark:bg-neutral-800 dark:text-white rounded text-sm px-2 py-1 shadow">Tooltip</span>
}>
	<span className="dark:text-white hover:cursor-pointer font-medium">Hover Me</span>
</Tippy>`
							}>
							</Code>
						</AccordionCode>
					</Section>

					<Section id="dark-mode" name="Dark Mode">
						<div className="flex gap-3 flex-wrap">
							<div
								onClick={() => setDarkMode(!darkMode)}
								className="transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative"
							>
								<div className="h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-6 left-1"></div>
							</div>

							<button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="relative flex items-center py-0.5 px-1 bg-blue-500 rounded-full h-7">
								<span className="absolute w-5 h-5 rounded-full bg-white dark:left-[1.7rem] left-1 transition-all"></span>
								<span aria-hidden={true}>☀️</span>
								<span aria-hidden={true}>🌙</span>
							</button>

							<button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className={`${darkMode ? "bg-neutral-800" : "bg-gray-200"} relative flex gap-1 items-center px-1 py-0.5 rounded-full h-7`}>
								<span className="absolute w-5 h-5 rounded-full bg-blue-500 dark:left-[1.6rem] left-1.5 transition-all"></span>
								<span aria-hidden={true}><SunIcon className={`${darkMode ? "text-white bg-white" : ""}h-5 w-5`} /></span>
								<span aria-hidden={true}><MoonIcon className="h-5 w-5" /></span>
							</button>

							{darkMode ?
								<button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
									<SunIcon />
								</button>
								:
								<button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
									<MoonIcon className="transform rotate-45" />
								</button>
							}

							<ThemeChanger />

							<ThemeSelect />
						</div>
					</Section>

					<div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-10">
						{darkMode ?
							<button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
								<SunIcon />
							</button>
							:
							<button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
								<MoonIcon />
							</button>
						}
					</div>

					<BackToTop />

				</main>

				<Footer />

			</Layout>


		</>
	);
}