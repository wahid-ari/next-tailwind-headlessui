import Head from "next/head";
import { GlobalContext } from "@utils/GlobalContext";
import { useRef, useContext, useState, useMemo } from "react";
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import Footer from "@components/Footer"
import Navbar from "@components/Navbar";
import Text from "@components/Text";
import Section from "@components/Section";
import BackToTop from "@components/BackToTop";
import Layout from "@components/Layout";
import TocLink from "@components/TocLink";
import ComponentProps from "@components/ComponentProps";
import Badge from "@components/Badge";
import ReactTable from "@components/ReactTable"
import { tabledata } from "@utils/useTableData";
import Input from "@components/Input";
import ReactTableGrouped from "@components/ReactTableGrouped";
import DeleteModal from "@components/other/DeleteModal";
import ReactTableSelectAll from "@components/ReactTableSelectAll";
import ReactTableSelect from "@components/ReactTableSelect";
import ReactTableExpanded from "@components/ReactTableExpanded";
import toast, { Toaster } from 'react-hot-toast';
import useToast from "@utils/useToast";
import ReactTablePagination from "@components/ReactTablePagination";

export default function Third() {

	const { darkMode, setDarkMode } = useContext(GlobalContext);

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

	const columnSelect = useMemo(
		() => [
			// {
			// 	Header: "",
			// 	id: "checkbox",
			// 	width: 30,
			// 	Cell: ({ row }) => (
			// 		<div>
			// 			<input type="checkbox" key={row.original.sourceId}
			// 				onToggle={() => onToggle(row.original)}
			// 				value={row.original.included}
			// 				{...row.getToggleRowSelectedProps()} className="h-4 w-4 border-gray-400 dark:border-neutral-600 rounded text-blue-500 focus:ring-blue-500
			//     bg-white dark:bg-neutral-900 dark:checked:bg-blue-500
			//     transition-all cursor-pointer"/>
			// 		</div>
			// 	)
			// },
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
		],
		[]
	);

	const columnSelectAll = useMemo(
		() => [
			// {
			// 	Header: "",
			// 	id: "checkbox",
			// 	width: 30,
			// 	Cell: ({ row }) => (
			// 		<div>
			// 			<input type="checkbox" key={row.original.sourceId}
			// 				onToggle={() => onToggle(row.original)}
			// 				value={row.original.included}
			// 				{...row.getToggleRowSelectedProps()} className="h-4 w-4 border-gray-400 dark:border-neutral-600 rounded text-blue-500 focus:ring-blue-500
			//     bg-white dark:bg-neutral-900 dark:checked:bg-blue-500
			//     transition-all cursor-pointer"/>
			// 		</div>
			// 	)
			// },
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
		],
		[]
	);

	const columnExpanded = useMemo(
		() => [
			{
				// Make an expander cell
				Header: () => null, // No header
				id: 'expander', // It needs an ID
				Cell: ({ row }) => (
					// Use Cell to render an expander for each row.
					// We can use the getToggleRowExpandedProps prop-getter
					// to build the expander.
					<span {...row.getToggleRowExpandedProps()}>
						{row.isExpanded ? '👇' : '👉'}
					</span>
				),
				disableSortBy: true
			},
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

	const columnPagination = useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Url',
				accessor: 'url',
			},
		],
		[]
	);

	const tableInstanc = useRef(null);
	const tableInstance = useRef(null);
	const tableInstancee = useRef(null);

	const tableSelect = useRef(null);
	const tableSelectAll = useRef(null);
	const tableExpanded = useRef(null);

	const tablePagination = useRef(null);

	function convertDate(date) {
		let localeDate = new Date(date).toLocaleDateString('en-US');
		let splitDate = localeDate.split('/');
		return `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
	};

	function convertTime(time) {
		let localeTime = new Date(time * 1000).toLocaleTimeString();
		return localeTime;
	};

	// const [selectedRowIds, setSelectedRowIds] = useState({});
	const [selectedOriginalRows, setSelectedOriginalRows] = useState([]);
	let arraySelectedId = [];
	for (let item of selectedOriginalRows) {
		arraySelectedId.push(item.original.id)
	}

	// const [selectedRowIdsAll, setSelectedRowIdsAll] = useState({});
	const [selectedOriginalRowsAll, setSelectedOriginalRowsAll] = useState([]);
	let arraySelectedIdAll = [];
	for (let item of selectedOriginalRowsAll) {
		arraySelectedIdAll.push(item.original.id)
	}

	const { updateToast, pushToast, dismissToast } = useToast();
	const [openDeleteModalSelected, setOpenDeleteModalSelected] = useState(false)
	async function handleDeleteDataSelected() {
		arraySelectedId.forEach(el => {
			showAsyncToast(el)
		});
		setOpenDeleteModalSelected(false);
	}
	function showAsyncToast(id) {
		const toastId = pushToast({
			message: `Deleting Id - ${id}`,
			isLoading: true,
		});
		setTimeout(() => {
			updateToast({ toastId, message: `Done deleting Id - ${id}`, isError: false });
		}, (Number(id) / 2) * 1000);
	};

	return (
		<>
			<Head>
				<title>React Table</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Layout>
				<main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16">

					<Section id="toc" name="React Table TOC">
						<div className="grid sm:grid-cols-2 md:grid-cols-3">
							<div>
								<TocLink href="#react-table" text="React Table" />
								<TocLink href="#react-table-bordered" text="React Table Bordered" />
								<TocLink href="#react-table-grouped" text="React Table Grouped" />
							</div>
							<div>
								<TocLink href="#react-table-select" text="React Table Select" />
								<TocLink href="#react-table-select-all" text="React Table Select All" />
								<TocLink href="#react-table-expanded" text="React Table Expanded" />
							</div>
							<div>
								<TocLink href="#react-table-pagination" text="React Table Pagination" />
								<TocLink href="#dark-mode" text="Dark Mode" />
							</div>
						</div>
					</Section>

					<Section id="react-table-pagination" name="React Table Pagination">
						<p className="text-red-500 font-medium">Pagination API. search and filter currently not work</p>
						<p className="text-blue-500 text-sm">https://pokeapi.co/api/v2/pokemon?offset=0&limit=10</p>
						<ReactTablePagination />
					</Section>

					<Section id="react-table-select" name="React Table Select">
						<div className="flex flex-wrap items-end gap-x-4 w-full">
							<Input
								label="Cari Data"
								id="caridata"
								name="caridata"
								placeholder="Cari Data"
								className="max-w-sm mb-0"
								onChange={(e) => {
									tableSelect.current.setGlobalFilter(e.target.value);
								}}
							/>

							{selectedOriginalRows.length > 0 ?
								<button onClick={() => setOpenDeleteModalSelected(true)} className="mb-4 text-sm text-white bg-red-500 rounded px-2 py-1 hover:bg-red-600 transition-all duration-200">
									Delete {selectedOriginalRows.length > 1 ? `${selectedOriginalRows.length} rows` : "1 row"}
								</button>
								: null
							}
						</div>

						<ReactTableSelect columns={columnSelect} data={tabledata} ref={tableSelect}
							// onRowSelectStateChange={setSelectedRowIds}
							setSelectedOriginalRows={setSelectedOriginalRows}
						/>

						{/* <p className="dark:text-white text-sm">Selected Rows: {Object.keys(selectedRowIds).length}</p> */}
						<p className="dark:text-white text-sm mt-2">Total Selected Original Rows : {selectedOriginalRows.length}</p>
						<p className="dark:text-white text-sm">Selected Original Rows by Id : {" "}
							{selectedOriginalRows.map(i => i.original.id).join(", ")}
						</p>
						<p className="dark:text-white text-sm">Array of Selected Rows by Id : {" "}
							[{arraySelectedId.map(i => i).join(", ")}]
						</p>
						<pre className="dark:text-white text-sm">
							<code>
								{JSON.stringify(
									{
										// selectedRowIds: selectedRowIds,
										'selectedFlatRows[].original': selectedOriginalRows.map(
											d => d.original
										),
									},
									null,
									2
								)}
							</code>
						</pre>

						<ComponentProps name="ReactTableSelect">
							<Badge>columns</Badge>
							<Badge>data</Badge>
							<Badge>ref</Badge>
							<Badge>className</Badge>
							<Badge>bordered</Badge>
							<Badge>onRowSelectStateChange</Badge>
							<Badge>setSelectedOriginalRows</Badge>
						</ComponentProps>
					</Section>

					<Toaster />

					<DeleteModal
						modalTitle="Delete Data"
						isOpenModal={openDeleteModalSelected}
						onCloseModal={() => setOpenDeleteModalSelected(false)}
						onConfirmModal={handleDeleteDataSelected}
						danger
					>
						<Text className="pb-2 !text-sm">
							Sure want to delete the selected {" "}
							{selectedOriginalRows.length > 1 ? `${selectedOriginalRows.length} rows` : "1 row"} ?
						</Text>
					</DeleteModal>

					<Section id="react-table-select-all" name="React Table Select All">
						<Input
							label="Cari Data"
							id="caridata"
							name="caridata"
							placeholder="Cari Data"
							className="max-w-xs !py-2"
							onChange={(e) => {
								tableSelectAll.current.setGlobalFilter(e.target.value);
							}}
						/>

						<ReactTableSelectAll columns={columnSelectAll} data={tabledata} ref={tableSelectAll}
							// onRowSelectStateChange={setSelectedRowIdsAll}
							setSelectedOriginalRows={setSelectedOriginalRowsAll}
						/>

						{/* <p className="dark:text-white text-sm">Selected Rows: {Object.keys(selectedRowIdsAll).length}</p> */}
						<p className="dark:text-white text-sm mt-2">Total Selected Original Rows : {selectedOriginalRowsAll.length}</p>
						<p className="dark:text-white text-sm">Selected Original Rows by Id : {" "}
							{selectedOriginalRowsAll.map(i => i.original.id).join(", ")}
						</p>
						<p className="dark:text-white text-sm">Array of Selected Rows by Id : {" "}
							[{arraySelectedIdAll.map(i => i).join(", ")}]
						</p>
						<pre className="dark:text-white text-sm">
							<code>
								{JSON.stringify(
									{
										// selectedRowIds: selectedRowIdsAll,
										'selectedFlatRows[].original': selectedOriginalRowsAll.map(
											d => d.original
										),
									},
									null,
									2
								)}
							</code>
						</pre>

						<ComponentProps name="ReactTableSelectAll">
							<Badge>columns</Badge>
							<Badge>data</Badge>
							<Badge>ref</Badge>
							<Badge>className</Badge>
							<Badge>bordered</Badge>
							<Badge>onRowSelectStateChange</Badge>
							<Badge>setSelectedOriginalRows</Badge>
						</ComponentProps>
					</Section>

					<Section id="react-table-expanded" name="React Table Expanded">
						<Input
							label="Cari Data"
							id="caridata"
							name="caridata"
							placeholder="Cari Data"
							className="max-w-xs !py-2"
							onChange={(e) => {
								tableExpanded.current.setGlobalFilter(e.target.value);
							}}
						/>

						<ReactTableExpanded columns={columnExpanded} data={tabledata} ref={tableExpanded} />

						<ComponentProps name="ReactTableExpanded">
							<Badge>columns</Badge>
							<Badge>data</Badge>
							<Badge>ref</Badge>
							<Badge>className</Badge>
							<Badge>bordered</Badge>
						</ComponentProps>
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
						</div>
					</Section>

					<BackToTop />

				</main>

				<Footer />

			</Layout>

		</>
	);
}