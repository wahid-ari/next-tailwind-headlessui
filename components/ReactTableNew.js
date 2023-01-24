import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/outline';

// TODO Add pagination 
export default function ReactTableNew({ columns, data, className, bordered }) {
  const [sorting, setSorting] = useState([])
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  })

  return (
    <div className={`w-full rounded border dark:border-neutral-800 ${className ? className + " " : ""}`}>
      <div className="overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700">
        <table className="w-full whitespace-nowrap text-neutral-800 dark:text-neutral-300">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="text-left border-b text-sm dark:border-neutral-800 font-medium bg-gray-50 dark:bg-[#202020]">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className={`font-semibold p-3 ${bordered && "first:border-l-0 last:border-r-0 border-x dark:border-x-neutral-800"}`}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'flex items-center gap-1.5 cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <ChevronUpIcon className="h-4 w-4 text-neutral-400" />,
                          desc: <ChevronDownIcon className="h-4 w-4 text-neutral-400" />,
                        }[header.column.getIsSorted()] ?? null}
                        {/* if column can be sorted */}
                        {header.column.getCanSort() && (
                          // if column being sorted, hide arrow up and arrow down icon 
                          header.column.getIsSorted() ?
                            null
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.5} stroke="currentColor" className="w-5 h-[20px] text-neutral-500">
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
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="text-sm bg-white text-neutral-600 dark:text-neutral-200 dark:bg-neutral-900 border-b dark:border-neutral-800">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className={`p-3 ${bordered && "first:border-l-0 last:border-r-0 border-x dark:border-x-neutral-800"}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
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
          </tfoot>
        </table>
        <div>{table.getRowModel().rows.length} Rows</div>
        <pre>{JSON.stringify(sorting, null, 2)}</pre>
      </div>
    </div>
  )
}