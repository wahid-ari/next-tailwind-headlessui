import React, { useEffect, useReducer } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import axios from 'axios';
import clsx from 'clsx';
import { usePagination, useTable } from 'react-table';
import useSWR from 'swr';

import Skeletons from './Skeletons';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const columns = [
  // {
  //   Header: 'No',
  //   accessor: 'no',
  //   Cell: (row) => {
  //     return row.cell.row.index + 1
  //   },
  // },
  {
    Header: 'No',
    accessor: 'no',
    Cell: (row) => {
      // console.log(row.cell.row.original.url.slice(34).replace("/", ""))
      let index = row.cell.row.original.url.slice(34).replace('/', '');
      return index;
    },
  },
  {
    Header: () => <div className='mx-auto'>Name</div>,
    accessor: 'name',
  },
  {
    Header: () => <div className='mx-auto'>URL</div>,
    accessor: 'url',
    Cell: (row) => {
      return (
        <a
          href={row.value}
          target='_blank'
          rel='noreferrer'
          className='cursor-pointer text-sky-500 transition-all duration-300 hover:text-sky-600'
        >
          {row.value}
        </a>
      );
    },
  },
];

const PAGE_CHANGED = 'PAGE_CHANGED';
const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PAGE_CHANGED:
      return {
        ...state,
        queryPageIndex: payload,
      };
    case PAGE_SIZE_CHANGED:
      return {
        ...state,
        queryPageSize: payload,
      };
    case TOTAL_COUNT_CHANGED:
      return {
        ...state,
        totalCount: payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default function ReactTablePagination({ className, bordered }) {
  const [{ queryPageIndex, queryPageSize, totalCount }, dispatch] = useReducer(reducer, {
    queryPageIndex: 0,
    queryPageSize: 10,
    totalCount: null,
  });

  const offset = queryPageIndex * queryPageSize;
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${queryPageSize}`, fetcher);

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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: data ? data?.results : [],
      // data: [],
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        // sortBy: [
        //   {
        //     id: 'id',
        //     desc: false,
        //   },
        // ],
      },
      manualPagination: true,
      pageCount: data ? Math.ceil(totalCount / queryPageSize) : null,
    },
    // useFilters,
    // useGlobalFilter,
    // useSortBy,
    usePagination,
  );

  useEffect(() => {
    dispatch({ type: PAGE_CHANGED, payload: pageIndex });
  }, [pageIndex]);

  useEffect(() => {
    dispatch({ type: PAGE_SIZE_CHANGED, payload: pageSize });
    gotoPage(0);
  }, [pageSize, gotoPage]);

  useEffect(() => {
    if (data?.count) {
      dispatch({
        type: TOTAL_COUNT_CHANGED,
        payload: data.count,
      });
    }
  }, [data?.count]);

  if (error) {
    return <p className='mt-4 dark:text-white'>Error</p>;
  }

  return (
    <div className={clsx('w-full rounded border dark:border-neutral-800', className && className)}>
      <div className='overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700'>
        <table {...getTableProps()} className='w-full whitespace-nowrap text-neutral-800 dark:text-neutral-300'>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr
                key={i}
                {...headerGroup.getHeaderGroupProps()}
                className='border-b bg-gray-50 text-left text-sm font-medium dark:border-neutral-800 dark:bg-[#202020]'
              >
                {headerGroup.headers.map((column, i) => (
                  <th
                    key={i}
                    {...column.getHeaderProps()}
                    className={clsx(
                      'p-3 font-semibold',
                      bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800',
                    )}
                  >
                    <span className='flex items-center gap-1.5'>{column.render('Header')}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {data
              ? page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      key={i}
                      {...row.getRowProps()}
                      className='border-b bg-white text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200'
                    >
                      {row.cells.map((cell, i) => (
                        <td
                          key={i}
                          {...cell.getCellProps()}
                          className={clsx(
                            'p-3',
                            bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800',
                          )}
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <tr
                    key={i}
                    className='border-b bg-white text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200'
                  >
                    <td
                      className={`px-3 pb-1 pt-1.5 ${
                        bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800'
                      }`}
                    >
                      <Skeletons className='!h-5' />
                    </td>
                    <td
                      className={`px-3 pb-1 pt-1.5 ${
                        bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800'
                      }`}
                    >
                      <Skeletons className='!h-5' />
                    </td>
                    <td
                      className={`px-3 pb-1 pt-1.5 ${
                        bordered && 'border-x first:border-l-0 last:border-r-0 dark:border-x-neutral-800'
                      }`}
                    >
                      <Skeletons className='!h-5' />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div id='pagination' className='grid grid-cols-1 gap-4 pb-5 pt-3 sm:grid-cols-2 sm:p-3'>
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
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
