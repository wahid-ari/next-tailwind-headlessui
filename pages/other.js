import Head from "next/head";
import { GlobalContext } from "@utils/GlobalContext";
import { useRef, useContext, useState, useMemo } from "react";
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import toast, { Toaster } from 'react-hot-toast';
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
import ReactTable from "@components/ReactTable"
import { tabledata } from "@utils/useTableData";
import Input from "@components/Input";
import ReactTableGrouped from "@components/ReactTableGrouped";
import DeleteModal from "@components/other/DeleteModal";

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

	const [openDeleteModal, setOpenDeleteModal] = useState(false)
	const [deleteModalData, setDeleteModalData] = useState({ id: "", name: "" });
	function showDeleteModal(id, name) {
		setDeleteModalData({ id: id, name: name })
		setOpenDeleteModal(true)
	}
	async function handleDeleteData() {
		const toastId = pushToast({
			message: `Deleting ${deleteModalData.id} - ${deleteModalData.name} Data`,
			isLoading: true,
		});
		try {
			setTimeout(() => {
				updateToast({ toastId, message: "Success Delete Data", isError: false });
			}, 2000);
		} catch (error) {
			console.error(error)
			updateToast({ toastId, message: "Failed Delete Data", isError: true });
		}
		setOpenDeleteModal(false);
	}

	const column = useMemo(
		() => [
			{
				Header: 'Id',
				accessor: 'id',
				width: 300,
			},
			{
				Header: 'Email',
				accessor: 'email',
				width: 300,
			},
			{
				Header: 'Name',
				accessor: 'name',
				width: 300,
			},
			{
				Header: 'Age',
				accessor: 'age',
				width: 300,
			},
			{
				Header: 'Gender',
				accessor: 'gender',
				Cell: (row) => {
					return (
						row.value == "male" ?
							<Badge.green>Male</Badge.green>
							:
							<Badge.red>Female</Badge.red>
					);
				},
				width: 300,
			},
			{
				Header: 'Company',
				accessor: 'company',
				width: 300,
			},
			{
				Header: 'Phone',
				accessor: 'phone',
				disableSortBy: true,
				width: 300,
			},
			// {
			// 	Header: 'Ukuran',
			// 	accessor: 'size',
			// 	Cell: (row) => {
			// 		return <div className="size">{row.value}</div>;
			// 	},
			// 	width: 200,
			// },
			// {
			// 	Header: 'Harga',
			// 	accessor: 'price',
			// 	Cell: (row) => {
			// 		return (
			// 			<div className="price">
			// 				{row.value?.length > 0 ? (
			// 					<>
			// 						<span>Rp </span>{' '}
			// 						<span>{Number(row.value).toLocaleString('id-ID')}</span>{' '}
			// 					</>
			// 				) : (
			// 					row.value
			// 				)}
			// 			</div>
			// 		);
			// 	},
			// 	width: 400,
			// },
			{
				Header: 'Date',
				accessor: 'date',
				Cell: (row) => {
					return convertDate(row.value)
				},
				width: 400,
			},
			{
				Header: 'Action',
				disableSortBy: true,
				Cell: (row) => {
					// console.log(`${row.cell.row.values.id} - ${row.cell.row.values.name}`)
					return (
						<div className="flex space-x-2">
							{/* <Link href={`edit/${item.id}`}>
								<a className="text-blue-500 hover:text-blue-700 text-sm font-medium">Edit</a>
							</Link> */}
							<button onClick={() => alert(`${row.cell.row.values.id} - ${row.cell.row.values.name}`)}
								className="text-blue-500 hover:text-blue-700 text-sm font-medium">
								Edit
							</button>
							<button onClick={() => showDeleteModal(row.cell.row.values.id, row.cell.row.values.name)}
								className="text-red-500 hover:text-red-700 text-sm font-medium">
								Delete
							</button>
						</div>
					)
				},
				width: 200,
			},
		],
		[]
	);

	const columns = useMemo(
		() => [
			{
				Header: 'Id',
				accessor: 'id',
				width: 300,
			},
			{
				Header: 'Email',
				accessor: 'email',
				width: 300,
			},
			{
				Header: 'Name',
				accessor: 'name',
				width: 300,
			},
			{
				Header: 'Age',
				accessor: 'age',
				width: 300,
			},
			{
				Header: 'Gender',
				accessor: 'gender',
				Cell: (row) => {
					return (
						row.value == "male" ?
							<Badge.green>Male</Badge.green>
							:
							<Badge.red>Female</Badge.red>
					);
				},
				width: 300,
			},
			{
				Header: 'Company',
				accessor: 'company',
				width: 300,
			},
			{
				Header: 'Phone',
				accessor: 'phone',
				disableSortBy: true,
				width: 300,
			},
			// {
			// 	Header: 'Ukuran',
			// 	accessor: 'size',
			// 	Cell: (row) => {
			// 		return <div className="size">{row.value}</div>;
			// 	},
			// 	width: 200,
			// },
			// {
			// 	Header: 'Harga',
			// 	accessor: 'price',
			// 	Cell: (row) => {
			// 		return (
			// 			<div className="price">
			// 				{row.value?.length > 0 ? (
			// 					<>
			// 						<span>Rp </span>{' '}
			// 						<span>{Number(row.value).toLocaleString('id-ID')}</span>{' '}
			// 					</>
			// 				) : (
			// 					row.value
			// 				)}
			// 			</div>
			// 		);
			// 	},
			// 	width: 400,
			// },
			{
				Header: 'Date',
				accessor: 'date',
				Cell: (row) => {
					return convertDate(row.value)
				},
				width: 400,
			},
			{
				Header: 'Time',
				accessor: 'timestamp',
				Cell: (row) => {
					return convertTime(row.value)
				},
				disableSortBy: true,
				width: 400,
			}
		],
		[]
	);

	const columnss = useMemo(
		() => [
			{
				Header: 'Id',
				accessor: 'id',
				width: 300,
			},
			{
				Header: 'Email / Name',
				columns: [
					{
						Header: 'Email',
						accessor: 'email',
						width: 300,
					},
					{
						Header: 'Name',
						accessor: 'name',
						width: 300,
					},
				]
			},
			{
				Header: 'Age',
				accessor: 'age',
				width: 300,
			},
			{
				Header: 'Gender',
				accessor: 'gender',
				Cell: (row) => {
					return (
						row.value == "male" ?
							<Badge.green>Male</Badge.green>
							:
							<Badge.red>Female</Badge.red>
					);
				},
				width: 300,
			},
			{
				Header: 'Company',
				accessor: 'company',
				width: 300,
			},
			{
				Header: 'Phone',
				accessor: 'phone',
				disableSortBy: true,
				width: 300,
			},
			{
				Header: 'Date / Time',
				columns: [
					{
						Header: 'Date',
						accessor: 'date',
						Cell: (row) => {
							return convertDate(row.value)
						},
						width: 400,
					},
					{
						Header: 'Time',
						accessor: 'timestamp',
						Cell: (row) => {
							return convertTime(row.value)
						},
						disableSortBy: true,
						width: 400,
					}]
			},
		],
		[]
	);

	const tableInstanc = useRef(null);
	const tableInstance = useRef(null);
	const tableInstancee = useRef(null);

	function convertDate(date) {
		let localeDate = new Date(date).toLocaleDateString('en-US');
		let splitDate = localeDate.split('/');
		return `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
	};

	function convertTime(time) {
		let localeTime = new Date(time * 1000).toLocaleTimeString();
		return localeTime;
	};

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
								<TocLink href="#toast" text="Toast" />
								<TocLink href="#toast-custom" text="Toast Custom" />
								<TocLink href="#input-pin" text="Input PIN" />
								<TocLink href="#tippy-tooltips" text="Tippy Tooltips" />
							</div>
							<div>
								<TocLink href="#react-table" text="React Table" />
								<TocLink href="#react-table-bordered" text="React Table Bordered" />
								<TocLink href="#react-table-grouped" text="React Table Grouped" />
							</div>
							<div>
								<TocLink href="#dark-mode" text="Dark Mode" />
							</div>
						</div>
					</Section>

					<Section id="react-table" name="React Table">
						<Input
							label="Cari Data"
							id="caridata"
							name="caridata"
							placeholder="Cari Data"
							className="max-w-xs !py-2"
							onChange={(e) => {
								tableInstanc.current.setGlobalFilter(e.target.value);
							}}
						/>

						<ReactTable columns={column} data={tabledata} ref={tableInstanc} />

						<ComponentProps name="ReactTable">
							<Badge>columns</Badge>
							<Badge>data</Badge>
							<Badge>ref</Badge>
							<Badge>className</Badge>
							<Badge>bordered</Badge>
						</ComponentProps>
						{/* <AccordionCode title="Show Code">
							<Code code={
								`import Tippy from "@tippyjs/react";

<Tippy content={
	<span className="bg-white dark:bg-neutral-800 dark:text-white rounded text-sm px-2 py-1 shadow">Tooltip</span>
}>
	<span className="dark:text-white hover:cursor-pointer font-medium">Hover Me</span>
</Tippy>`
							}>
							</Code>
						</AccordionCode> */}
					</Section>

					<DeleteModal
						modalTitle="Delete Data"
						isOpenModal={openDeleteModal}
						onCloseModal={() => setOpenDeleteModal(false)}
						onConfirmModal={handleDeleteData}
						danger
					>
						<Text className="pb-2 !text-sm">Sure want to delete <span className="font-semibold">{deleteModalData.id} {deleteModalData.name}</span> ?</Text>
					</DeleteModal>

					<Section id="react-table-bordered" name="React Table Bordered">
						<Input
							label="Cari Data"
							id="caridata"
							name="caridata"
							placeholder="Cari Data"
							className="max-w-xs !py-2"
							onChange={(e) => {
								tableInstance.current.setGlobalFilter(e.target.value);
							}}
						/>

						<ReactTable columns={columns} data={tabledata} ref={tableInstance} bordered className="mb-8" />

						<ComponentProps name="ReactTable">
							<Badge>columns</Badge>
							<Badge>data</Badge>
							<Badge>ref</Badge>
							<Badge>className</Badge>
							<Badge>bordered</Badge>
						</ComponentProps>
						{/* <AccordionCode title="Show Code">
							<Code code={
								`import Tippy from "@tippyjs/react";

<Tippy content={
	<span className="bg-white dark:bg-neutral-800 dark:text-white rounded text-sm px-2 py-1 shadow">Tooltip</span>
}>
	<span className="dark:text-white hover:cursor-pointer font-medium">Hover Me</span>
</Tippy>`
							}>
							</Code>
						</AccordionCode> */}
					</Section>

					<Section id="react-table-grouped" name="React Table Grouped">
						<Input
							label="Cari Data"
							id="caridata"
							name="caridata"
							placeholder="Cari Data"
							className="max-w-xs !py-2"
							onChange={(e) => {
								tableInstancee.current.setGlobalFilter(e.target.value);
							}}
						/>

						<ReactTableGrouped columns={columnss} data={tabledata} ref={tableInstancee} />

						<ComponentProps name="ReactTableGrouped">
							<Badge>columns</Badge>
							<Badge>data</Badge>
							<Badge>ref</Badge>
							<Badge>className</Badge>
						</ComponentProps>
						{/* <AccordionCode title="Show Code">
							<Code code={
								`import Tippy from "@tippyjs/react";

<Tippy content={
	<span className="bg-white dark:bg-neutral-800 dark:text-white rounded text-sm px-2 py-1 shadow">Tooltip</span>
}>
	<span className="dark:text-white hover:cursor-pointer font-medium">Hover Me</span>
</Tippy>`
							}>
							</Code>
						</AccordionCode> */}
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
								<span aria-hidden={true}>??????</span>
								<span aria-hidden={true}>????</span>
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
						</div>
					</Section>

					<BackToTop />

				</main>
				
				<Footer />
			
			</Layout>


		</>
	);
}