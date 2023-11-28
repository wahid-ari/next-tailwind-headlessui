import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export default function InputPassword({ id, className, label, name, placeholder, value, onChange, disabled, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

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
          type={showPassword ? 'text' : 'password'}
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
          aria-label='Show Password'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-0 z-10 mr-1.5 rounded-md px-1.5 py-1'
        >
          {showPassword ? (
            <EyeIcon className='h-5 w-5 text-gray-600 dark:text-neutral-400' />
          ) : (
            <EyeOffIcon className='h-5 w-5 text-gray-600 dark:text-neutral-400' />
          )}
        </button>
      </div>
    </div>
  );
}
