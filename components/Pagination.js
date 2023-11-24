import { useState } from 'react';

export default function Pagination({ className, min, max, current = 1 }) {
  let [currentPage, setCurrentPage] = useState(current);

  let pages = [];
  for (let index = 0; index < max; index++) {
    pages.push(index + 1);
  }

  let [pagesToShow, setPagesToShow] = useState(pages.slice(currentPage - 1, currentPage + 2));

  function Next() {
    if (currentPage < max) {
      setCurrentPage(currentPage + 1);
      setPagesToShow(currentPage == max - 1 ? pages.slice(-3) : pages.slice(currentPage - 1, currentPage + 2));
    } else {
      setCurrentPage(max);
    }
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
        onClick={Prev}
        className='h-8 border dark:border-neutral-700 border-r-0 px-2 rounded-l hover:bg-sky-500 group transition-all'
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
          className={`h-8 border dark:border-neutral-700 border-r-0 w-8 text-sm text-neutral-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all 
          ${currentPage === page && 'bg-sky-500 !text-white dark:text-white'}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={Next}
        className='h-8 border dark:border-neutral-700 px-2 rounded-r hover:bg-sky-500 group transition-all'
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
    </div>
  );
}
