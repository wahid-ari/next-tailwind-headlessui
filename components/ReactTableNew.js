import React, { useState, useEffect } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/outline';
import clsx from "clsx";

function DebouncedInput({ label, value: initialValue, onChange, debounce = 300, ...props }) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)
    return () => clearTimeout(timeout)
  }, [value])

  return (
    <>
      <label htmlFor="search" className="block font-medium text-sm text-neutral-800 dark:text-gray-200">
        {label}
      </label>
      <input {...props} id="search" value={value} onChange={e => setValue(e.target.value)}
        className="text-sm transition-all max-w-xs w-full px-3 py-[0.6rem] rounded-md m-2 ml-0
      dark:text-white bg-white dark:bg-neutral-900  
      border border-gray-300 dark:border-neutral-700 
      focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
    </>
  )
}

export default function ReactTableNew({ columns, data, className, bordered }) {
  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [expanded, setExpanded] = useState({})
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      expanded
    },
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      }
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const safeValue = (() => {
        const value = row.getValue(columnId);
        return typeof value === 'number' ? String(value) : value;
      })();
      return safeValue?.toLowerCase().includes(filterValue.toLowerCase());
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onExpandedChange: setExpanded,
    getSubRows: row => row,
    getExpandedRowModel: getExpandedRowModel()
  })

  return (
    <>
      <DebouncedInput
        label="Search Data"
        value={globalFilter ?? ''}
        onChange={value => setGlobalFilter(String(value))}
        placeholder="Search all columns..."
      />
      <div className={clsx("w-full rounded border dark:border-neutral-800", className && className)}>
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700">
          <table className="w-full whitespace-nowrap text-neutral-800 dark:text-neutral-300">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className="text-left border-b text-sm dark:border-neutral-800 font-medium bg-gray-50 dark:bg-[#202020]">
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className={clsx("font-semibold p-3", bordered && "first:border-l-0 last:border-r-0 border-x dark:border-x-neutral-800")}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'flex items-center gap-1.5 cursor-pointer select-none group'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <ChevronUpIcon className="h-4 w-4 text-neutral-500 group-hover:text-neutral-400 transition-all" />,
                            desc: <ChevronDownIcon className="h-4 w-4 text-neutral-500 group-hover:text-neutral-400 transition-all" />,
                          }[header.column.getIsSorted()] ?? null}
                          {/* if column can be sorted */}
                          {header.column.getCanSort() && (
                            // if column being sorted, hide arrow up and arrow down icon 
                            header.column.getIsSorted() ?
                              null
                              :
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.5} stroke="currentColor"
                                className="w-5 h-[20px] text-neutral-500 group-hover:text-neutral-400 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                              </svg>
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, i) => (
                <React.Fragment key={i + 1}>
                  <tr
                    className="text-sm bg-white text-neutral-600 dark:text-neutral-200 dark:bg-neutral-900 border-b dark:border-neutral-800">
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}
                        className={clsx("p-3", bordered && "first:border-l-0 last:border-r-0 border-x dark:border-x-neutral-800")} >
                        {flexRender(cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                  {row.getIsExpanded() ?
                    <tr key={row.id + 1}>
                      <td colSpan={row.getVisibleCells().length} className="text-sm p-3">
                        <pre>
                          <code>{JSON.stringify(row.original, null, 2)}</code>
                        </pre>
                      </td>
                    </tr>
                    : null
                  }
                </React.Fragment>
              ))}
            </tbody>
            {/* <tfoot>
              {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id} className="text-left border-b text-sm dark:border-neutral-800 font-medium bg-gray-50 dark:bg-[#202020]">
                  {footerGroup.headers.map(header => (
                    <th key={header.id} className={`font-semibold p-3 ${bordered && "first:border-l-0 last:border-r-0 border-x dark:border-x-neutral-800"}`}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot> */}
          </table>
        </div>
        <div className="pt-3 pb-5 sm:p-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <button onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-label="First"
              className={clsx("p-1 rounded border border-transparent transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500",
                !table.getCanPreviousPage() && "cursor-not-allowed",
                table.getCanPreviousPage() && "hover:border hover:border-neutral-300 dark:hover:border-neutral-700"
              )}>
              <ChevronDoubleLeftIcon className="w-5 h-5 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white transition-all" />
            </button>{' '}
            <button onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Prev"
              className={clsx("p-1 rounded border border-transparent transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500",
                !table.getCanPreviousPage() && "cursor-not-allowed",
                table.getCanPreviousPage() && "hover:border hover:border-neutral-300 dark:hover:border-neutral-700"
              )}>
              <ChevronLeftIcon className="w-5 h-5 text-neutral-600 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100 transition-all" />
            </button>{' '}
            <span className="mx-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white transition-all">
              Page {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </span>
            <button onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="Next"
              className={clsx("p-1 rounded border border-transparent transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500",
                !table.getCanNextPage() && "cursor-not-allowed",
                table.getCanNextPage() && "hover:border hover:border-neutral-300 dark:hover:border-neutral-700"
              )}>
              <ChevronRightIcon className="w-5 h-5 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white transition-all" />
            </button>{' '}
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              aria-label="Last"
              className={clsx("p-1 rounded border border-transparent transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500",
                !table.getCanNextPage() && "cursor-not-allowed",
                table.getCanNextPage() && "hover:border hover:border-neutral-300 dark:hover:border-neutral-700"
              )}>
              <ChevronDoubleRightIcon className="w-5 h-5 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white transition-all" />
            </button>{' '}
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-end">
            <span className="text-sm text-neutral-800 dark:text-gray-200">
              Go to page
            </span>
            <input
              type="number"
              min={1}
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
              className="text-sm transition-all w-[72px] px-3 py-[0.4rem] rounded-md
                dark:text-white bg-white dark:bg-neutral-900  
                border border-gray-300 dark:border-neutral-700 
                focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="1"
            />
            <select
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value))
              }}
              className="cursor-pointer block w-24 px-3 py-[0.4rem] text-sm rounded-md transition-all
              dark:text-white bg-white dark:bg-neutral-900  
              border border-gray-300 dark:border-neutral-700 
              focus:ring-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="dark:text-white px-4 pb-4 text-sm">
          <div>{table.getRowModel().rows.length} Rows per Page</div>
          <div>{table.options.data.length} Total Rows</div>
          <pre>Sort by : {JSON.stringify(sorting, null, 2)}</pre>
          <pre>{JSON.stringify(expanded, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}