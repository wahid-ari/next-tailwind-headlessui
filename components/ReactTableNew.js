import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline';
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';

function DebouncedInput({ label, value: initialValue, onChange, debounce = 300, ...props }) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);
  return (
    <>
      <label htmlFor='search' className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
        {label}
      </label>
      <input
        {...props}
        id='search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='m-2 ml-0 w-full max-w-xs rounded-md border border-gray-300 bg-white px-3
      py-[0.5rem] text-sm outline-none  
      transition-all focus:border-blue-500 focus:ring-1 
      focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
      />
    </>
  );
}

function IndeterminateCheckbox({ indeterminate, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);
  return (
    <input
      type='checkbox'
      ref={ref}
      className='h-4 w-4 cursor-pointer rounded border-gray-400 bg-white text-blue-500
          transition-all focus:ring-blue-500 dark:border-neutral-600
          dark:bg-neutral-900 dark:checked:bg-blue-500'
      {...rest}
    />
  );
}

export default function ReactTableNew({ columns, data, className, bordered, setSelectedOriginalRows }) {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [expanded, setExpanded] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  // add row select and row expand to original columns
  const columnsSelection = [
    // add row select column to original "columns"
    {
      id: 'select',
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    },
    // add expand row to original "columns"
    {
      accessorKey: 'expand',
      enableSorting: false,
      enableExpand: true,
      header: ({ table }) => (
        <button
          {...{
            onClick: table.getToggleAllRowsExpandedHandler(),
          }}
        >
          {table.getIsAllRowsExpanded() ? '👇' : '👉'}
        </button>
      ),
      cell: ({ row }) => (
        <button
          {...{
            onClick: () => row.toggleExpanded(),
            style: { cursor: 'pointer' },
          }}
        >
          {row.getIsExpanded() ? '👇' : '👉'}
        </button>
      ),
    },
    // original "columns"
    ...columns,
  ];
  const table = useReactTable({
    data,
    columns: columnsSelection,
    state: {
      sorting,
      globalFilter,
      expanded,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
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
    getSubRows: (row) => row,
    getExpandedRowModel: getExpandedRowModel(),
    onRowSelectionChange: setRowSelection,
  });

  useEffect(() => {
    setSelectedOriginalRows(table.getSelectedRowModel().flatRows);
  }, [table.getSelectedRowModel().flatRows]);

  return (
    <>
      <DebouncedInput
        label='Search Data'
        value={globalFilter ?? ''}
        onChange={(value) => setGlobalFilter(String(value))}
        placeholder='Search all columns...'
      />
      <div className={clsx('w-full rounded border dark:border-neutral-800', className && className)}>
        <div className='overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700'>
          <table className='w-full whitespace-nowrap text-neutral-800 dark:text-neutral-300'>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className='border-b bg-gray-50 text-left text-sm font-medium dark:border-neutral-800 dark:bg-[#202020]'
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={clsx(
                        'p-3 font-semibold',
                        bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800',
                      )}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'flex items-center gap-1.5 cursor-pointer select-none group'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: (
                              <ChevronUpIcon className='h-4 w-4 text-neutral-500 transition-all group-hover:text-neutral-400' />
                            ),
                            desc: (
                              <ChevronDownIcon className='h-4 w-4 text-neutral-500 transition-all group-hover:text-neutral-400' />
                            ),
                          }[header.column.getIsSorted()] ?? null}
                          {/* if column can be sorted */}
                          {header.column.getCanSort() &&
                            // if column being sorted, hide arrow up and arrow down icon
                            (header.column.getIsSorted() ? null : (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 25 25'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='h-[20px] w-5 text-neutral-500 transition-all group-hover:text-neutral-400'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                                />
                              </svg>
                            ))}
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
                  <tr className='border-b bg-white text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200'>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={clsx(
                          'p-3',
                          bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800',
                        )}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                  {row.getIsExpanded() ? (
                    <tr key={row.id + 1}>
                      <td colSpan={row.getVisibleCells().length} className='p-3 text-sm'>
                        <pre>
                          <code>{JSON.stringify(row.original, null, 2)}</code>
                        </pre>
                      </td>
                    </tr>
                  ) : null}
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
        <div className='grid grid-cols-1 gap-4 pb-5 pt-3 sm:grid-cols-2 sm:p-3'>
          <div className='flex items-center justify-center gap-2 sm:justify-start'>
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              aria-label='First'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !table.getCanPreviousPage() && 'cursor-not-allowed',
                table.getCanPreviousPage() && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
              )}
            >
              <ChevronDoubleLeftIcon className='h-5 w-5 text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white' />
            </button>{' '}
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label='Prev'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !table.getCanPreviousPage() && 'cursor-not-allowed',
                table.getCanPreviousPage() && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
              )}
            >
              <ChevronLeftIcon className='h-5 w-5 text-neutral-600 transition-all hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100' />
            </button>{' '}
            <span className='mx-2 text-sm font-medium text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white'>
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label='Next'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !table.getCanNextPage() && 'cursor-not-allowed',
                table.getCanNextPage() && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
              )}
            >
              <ChevronRightIcon className='h-5 w-5 text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white' />
            </button>{' '}
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              aria-label='Last'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !table.getCanNextPage() && 'cursor-not-allowed',
                table.getCanNextPage() && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
              )}
            >
              <ChevronDoubleRightIcon className='h-5 w-5 text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white' />
            </button>{' '}
          </div>
          <div className='flex items-center justify-center gap-2 sm:justify-end'>
            <span className='text-sm text-neutral-800 dark:text-gray-200'>Go to page</span>
            <input
              type='number'
              min={1}
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className='w-[72px] rounded-md border border-gray-300 bg-white px-3
                py-[0.4rem] text-sm outline-none  
                transition-all focus:border-blue-500 focus:ring-1 
                focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
              placeholder='1'
            />
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className='block w-24 cursor-pointer rounded-md border border-gray-300 bg-white px-3
              py-[0.4rem] text-sm outline-none  
              transition-all focus:border-blue-500 focus:outline-none 
              focus:ring-1 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='px-4 pb-4 text-sm dark:text-white'>
          <div>{table.getRowModel().rows.length} Rows per Page</div>
          <div>{table.options.data.length} Total Rows</div>
          <pre>Sort by : {JSON.stringify(sorting, null, 2)}</pre>
          <pre>Expanded Index : {JSON.stringify(expanded, null, 2)}</pre>
          <pre>Row Selected Index : {JSON.stringify(rowSelection, null, 2)}</pre>
          <pre>Row Selected Original : {JSON.stringify(table.getSelectedRowModel().flatRows, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
