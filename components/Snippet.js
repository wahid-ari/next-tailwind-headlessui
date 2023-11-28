import { useState } from 'react';
import { ClipboardIcon, DocumentDuplicateIcon } from '@heroicons/react/outline';

export default function Snippet({ className, text }) {
  const [copy, setCopy] = useState(false);

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 2500);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-x-3 rounded-md border border-gray-300 py-1.5 pl-4 pr-3 text-sm dark:border-neutral-700 dark:text-white ${
        className && className
      }`}
    >
      <div className='truncate'>
        <span className='mr-2.5 font-medium dark:text-white'>$</span>
        {text}
      </div>
      <button
        title='Copy Code'
        onClick={copyText}
        className='flex items-center rounded-md border bg-gray-100 px-0.5 py-0.5 transition-all hover:bg-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700'
      >
        {copy ? (
          <>
            <ClipboardIcon className='h-5 w-5 text-neutral-500 transition-all hover:text-neutral-600 dark:text-gray-400 dark:hover:text-gray-300' />
            <span className='truncate pl-1 text-xs text-neutral-600 dark:text-gray-300'>Copied !</span>
          </>
        ) : (
          <DocumentDuplicateIcon className='h-5 w-5 text-neutral-500 transition-all hover:text-neutral-600 dark:text-gray-400 dark:hover:text-gray-300' />
        )}
      </button>
    </div>
  );
}
