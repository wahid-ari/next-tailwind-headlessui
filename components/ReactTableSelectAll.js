import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline';
import clsx from 'clsx';
import { useFilters, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        type='checkbox'
        ref={resolvedRef}
        {...rest}
        className='h-4 w-4 cursor-pointer rounded border-gray-400 bg-white text-blue-500
          transition-all focus:ring-blue-500 dark:border-neutral-600
          dark:bg-neutral-900 dark:checked:bg-blue-500'
      />
    </>
  );
});

export const ReactTableSelectAll = forwardRef(
  ({ columns, data, className, bordered, onRowSelectStateChange, setSelectedOriginalRows }, ref) => {
    // Use the state and functions returned from useTable to build your UI
    const defaultColumn = useMemo(
      () => ({
        minWidth: 200,
        width: 500,
      }),
      [],
    );
    const instance = useTable(
      {
        columns,
        data,
        defaultColumn,
        initialState: {
          pageSize: 5,
          pageIndex: 0,
          sortBy: [
            {
              id: 'id',
              desc: false,
            },
          ],
        },
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          // Let's make a column for selection
          {
            id: 'selection',
            // The header can use the table's getToggleAllRowsSelectedProps method to select all rows on all pages
            // The header can use the table's getToggleAllPageRowsSelectedProps method to select all rows on current pages
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // Header: ({ getToggleAllPageRowsSelectedProps }) => (
            //   <div>
            //     <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            //   </div>
            // ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
            disableSortBy: true,
          },
          ...columns,
        ]);
      },
    );
    const {
      getTableProps,
      getTableBodyProps,
      prepareRow,
      headerGroups,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      rows,
      selectedFlatRows,
      // Get the state from the instance
      state: { pageIndex, pageSize, selectedRowIds },
    } = instance;
    useImperativeHandle(ref, () => instance);

    // Row-select state change
    useEffect(() => {
      onRowSelectStateChange?.(selectedRowIds);
    }, [onRowSelectStateChange, selectedRowIds]);

    useEffect(() => {
      setSelectedOriginalRows(selectedFlatRows);
    }, [setSelectedOriginalRows, selectedFlatRows]);

    return (
      <div className={clsx('w-full rounded border dark:border-neutral-800', className && className)}>
        <div className='overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700'>
          <table {...getTableProps()} className='w-full whitespace-nowrap text-neutral-800 dark:text-neutral-300'>
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr
                  key={i + 1}
                  {...headerGroup.getHeaderGroupProps()}
                  className='border-b bg-gray-50 text-left text-sm font-medium dark:border-neutral-800 dark:bg-[#202020]'
                >
                  {headerGroup.headers.map((column, i) => (
                    <th
                      key={i + 1}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={clsx(
                        'p-3 font-semibold',
                        bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800',
                      )}
                    >
                      <span className='flex items-center gap-1.5'>
                        {column.render('Header')}
                        {!column.disableSortBy ? (
                          column.isSorted ? (
                            column.isSortedDesc ? (
                              <ChevronDownIcon className='h-4 w-4 text-neutral-400' />
                            ) : (
                              <ChevronUpIcon className='h-4 w-4 text-neutral-400' />
                            )
                          ) : (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 25 25'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='h-[20px] w-5 text-neutral-500'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                              />
                            </svg>
                          )
                        ) : null}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    key={i + 1}
                    {...row.getRowProps()}
                    className='border-b bg-white text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200'
                  >
                    {row.cells.map((cell, i) => {
                      return (
                        <td
                          key={i + 1}
                          {...cell.getCellProps()}
                          className={clsx(
                            'p-3',
                            bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800',
                          )}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className='grid grid-cols-1 gap-4 pb-5 pt-3 sm:grid-cols-2 sm:p-3'>
          <div className='flex items-center justify-center gap-2 sm:justify-start'>
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              aria-label='First'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !canPreviousPage && 'cursor-not-allowed',
                canPreviousPage && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
              )}
            >
              <ChevronDoubleLeftIcon className='h-5 w-5 text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white' />
            </button>{' '}
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              aria-label='Prev'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !canPreviousPage && 'cursor-not-allowed',
                canPreviousPage && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
              )}
            >
              <ChevronLeftIcon className='h-5 w-5 text-neutral-600 transition-all hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100' />
            </button>{' '}
            <span className='mx-2 text-sm font-medium text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white'>
              Page {pageIndex + 1} of {pageOptions.length}
            </span>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              aria-label='Next'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !canNextPage && 'cursor-not-allowed',
                canNextPage && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
              )}
            >
              <ChevronRightIcon className='h-5 w-5 text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white' />
            </button>{' '}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              aria-label='Last'
              className={clsx(
                'rounded border border-transparent p-1 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500',
                !canNextPage && 'cursor-not-allowed',
                canNextPage && 'hover:border hover:border-neutral-300 dark:hover:border-neutral-700',
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
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className='w-[72px] rounded-md border border-gray-300 bg-white px-3
              py-[0.4rem] text-sm outline-none  
              transition-all focus:border-blue-500 focus:ring-1 
              focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white'
              placeholder='1'
            />
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
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
      </div>
    );
  },
);

ReactTableSelectAll.displayName = 'ReactTableSelectAll';
IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';

export default ReactTableSelectAll;
