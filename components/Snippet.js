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
      className={`flex items-center justify-between gap-x-3 text-sm py-1.5 pl-4 pr-3 dark:text-white border border-gray-300 dark:border-neutral-700 rounded-md ${
        className && className
      }`}
    >
      <div className='truncate'>
        <span className='dark:text-white font-medium mr-2.5'>$</span>
        {text}
      </div>
      <button
        title='Copy Code'
        onClick={copyText}
        className='flex items-center dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200 border dark:border-neutral-700 px-0.5 py-0.5 rounded-md transition-all'
      >
        {copy ? (
          <>
            <ClipboardIcon className='h-5 w-5 text-neutral-500 hover:text-neutral-600 dark:text-gray-400 dark:hover:text-gray-300 transition-all' />
            <span className='truncate pl-1 text-xs text-neutral-600 dark:text-gray-300'>Copied !</span>
          </>
        ) : (
          <DocumentDuplicateIcon className='h-5 w-5 text-neutral-500 hover:text-neutral-600 dark:text-gray-400 dark:hover:text-gray-300 transition-all' />
        )}
      </button>
    </div>
  );
}
