import { useState } from 'react';

export default function PaginationFirstLast({ className, min, max, current = 1 }) {
  let [currentPage, setCurrentPage] = useState(current);

  let pages = [];
  for (let index = 0; index < max; index++) {
    pages.push(index + 1);
  }

  let [pagesToShow, setPagesToShow] = useState(pages.slice(currentPage - 1, currentPage + 2));

  function Last() {
    setCurrentPage(max);
    setPagesToShow(pages.slice(-3));
  }

  function Next() {
    if (currentPage < max) {
      setCurrentPage(currentPage + 1);
      setPagesToShow(currentPage == max - 1 ? pages.slice(-3) : pages.slice(currentPage - 1, currentPage + 2));
    } else {
      setCurrentPage(max);
    }
  }

  function First() {
    setCurrentPage(min);
    setPagesToShow(pages.slice(0, 3));
  }

  function Prev() {
    if (currentPage > min) {
      setCurrentPage(currentPage - 1);
      setPagesToShow(currentPage - 1 == min ? pages.slice(0, 3) : pages.slice(currentPage - 3, currentPage));
    } else {
      setCurrentPage(min);
    }
  }

  return (
    <div className={`flex rounded ${className && className}`}>
      <button
        onClick={First}
        className='h-8 border dark:border-neutral-700 border-r-0 px-2 rounded-l hover:text-white hover:bg-sky-500 group transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
      >
        First
      </button>
      <button
        onClick={Prev}
        className='h-8 border dark:border-neutral-700 border-r-0 px-2 hover:bg-sky-500 group transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
          className='transform rotate-180 duration-200 w-4 h-5 text-neutral-700 dark:text-gray-300 group-hover:text-white'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      {pagesToShow.map((page, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(page)}
          className={`h-8 border dark:border-neutral-700 border-r-0 w-8 text-sm text-neutral-800 dark:text-gray-300 transition-all 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
          ${currentPage === page && 'bg-sky-500 !text-white dark:text-white'} ${
            currentPage !== page && 'hover:bg-gray-100 dark:hover:bg-neutral-800'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={Next}
        className='h-8 border dark:border-neutral-700 px-2 hover:bg-sky-500 group transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
          className='transform rotate-0 duration-200 w-4 h-5 text-neutral-700 dark:text-gray-300 group-hover:text-white'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <button
        onClick={Last}
        className='h-8 border border-l-0 dark:border-neutral-700 px-2 rounded-r dark:text-white hover:bg-sky-500 group transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
      >
        Last
      </button>
    </div>
  );
}
