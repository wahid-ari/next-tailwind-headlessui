import { useEffect, useState } from 'react';

export default function Pagination({ className, min, max, current = 1, onChangePage }) {
  const [currentPage, setCurrentPage] = useState(current);
  useEffect(() => {
    onChangePage(currentPage);
  }, [currentPage]);
  // create array of all pages based on max page.
  // example max = 10
  // pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let pages = [];
  for (let index = 1; index <= max; index++) {
    pages.push(index);
  }
  // create array of pages to display
  const nearFirstPage = currentPage < 3;
  const nearLastPage = currentPage > max - 3;
  // if currentPage is 1 or 2, pagesToShow is [1, 2, 3]
  // if currentPage is 9 or 10, pagesToShow is [8, 9, 10]
  // else currentPage is 5, pagesToShow is [4, 5, 6]
  const [pagesToShow, setPagesToShow] = useState(
    nearFirstPage ? pages.slice(0, 3) : nearLastPage ? pages.slice(-3) : pages.slice(currentPage - 2, currentPage + 1),
  );

  function changePage(newPage) {
    if (newPage == currentPage) return;
    // go up
    if (newPage > currentPage) {
      setPagesToShow(nearLastPage ? pages.slice(-3) : pages.slice(currentPage - 1, currentPage + 2));
      // go down
    } else {
      setPagesToShow(nearFirstPage ? pages.slice(0, 3) : pages.slice(currentPage - 3, currentPage));
    }
    setCurrentPage(newPage);
  }

  function Next() {
    if (currentPage < max) {
      setCurrentPage(currentPage + 1);
      setPagesToShow(nearLastPage ? pages.slice(-3) : pages.slice(currentPage - 1, currentPage + 2));
    } else {
      setCurrentPage(max);
    }
  }

  function Prev() {
    if (currentPage > min) {
      setCurrentPage(currentPage - 1);
      setPagesToShow(nearFirstPage ? pages.slice(0, 3) : pages.slice(currentPage - 3, currentPage));
    } else {
      setCurrentPage(min);
    }
  }

  return (
    <div className={`flex space-x-1 rounded ${className && className}`}>
      <button
        onClick={Prev}
        disabled={currentPage == min}
        className='group h-8 rounded-l border px-2 transition-all hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed dark:border-neutral-700'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
          className='h-5 w-4 rotate-180 transform text-neutral-700 duration-200 group-hover:text-white dark:text-gray-300'
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
          onClick={() => changePage(page)}
          className={`border-r- h-8 w-8 border text-sm text-neutral-800 transition-all focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-sky-500 dark:border-neutral-700 dark:text-gray-300
          ${currentPage === page && 'bg-sky-500 !text-white dark:text-white'} ${
            currentPage !== page && 'hover:bg-gray-100 dark:hover:bg-neutral-800'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={Next}
        disabled={currentPage == max}
        className='group h-8 rounded-r border px-2 transition-all hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed dark:border-neutral-700'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
          className='h-5 w-4 rotate-0 transform text-neutral-700 duration-200 group-hover:text-white dark:text-gray-300'
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
