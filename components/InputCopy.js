import { useState } from 'react';
import { DuplicateIcon } from '@heroicons/react/outline';

export default function InputCopy({ id, className, label, name, placeholder, value, onChange, disabled, ...rest }) {
  const [copyLabel, setCopyLabel] = useState('Copy');

  async function copyInput() {
    try {
      await navigator.clipboard.writeText(value);
      setCopyLabel('Copied !');
      setTimeout(() => {
        setCopyLabel('Copy');
      }, 2000);
    } catch (err) {
      setCopyLabel('Failed to copy !');
    }
  }

  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <div className='relative mb-4 mt-2 flex items-center'>
        <input
          {...rest}
          type='text'
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            ${className ? className + ' ' : ''} 
            ${
              disabled
                ? 'cursor-not-allowed bg-gray-100 text-neutral-500 dark:bg-neutral-800'
                : 'bg-white dark:bg-neutral-900 dark:text-white'
            } 
            w-full rounded-md border border-gray-300 px-3 py-[0.6rem] pr-11
            text-sm outline-none transition-all 
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-neutral-700
          `}
        />
        <button
          title='Copy to clipboard'
          onClick={copyInput}
          className='absolute right-0 z-10 mr-1.5 flex items-center rounded-md border bg-gray-100 px-2 py-1 text-xs font-medium transition-all hover:bg-gray-200 dark:border-0 dark:bg-neutral-800 dark:hover:bg-neutral-700'
        >
          <DuplicateIcon className='mr-1 h-4 w-4 text-gray-600 dark:text-neutral-400' />
          <span className='mb-0.5 text-gray-600 dark:text-neutral-400'>{copyLabel}</span>
        </button>
      </div>
    </div>
  );
}
