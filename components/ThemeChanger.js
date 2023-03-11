import { GlobalContext } from "@utils/GlobalContext";
import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

export default function ThemeChanger({ variant = 'icon' }) {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode) }
      className={clsx(
        'rounded-full border-2 hover:border-neutral-300 focus:border-sky-500 focus:outline-none dark:border-neutral-700 dark:hover:border-neutral-600 dark:focus:border-sky-500',
        'inline-flex h-8 items-center justify-center overflow-hidden transition-all duration-200',
        {
          'w-8': variant === 'icon',
          'px-4': variant === 'labelled',
        }
      )}
    >
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className='relative h-5 w-5'>
        <span
          className='absolute inset-0 rotate-90 transform text-black transition duration-500 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white'
          style={{ transformOrigin: '50% 100px' }}
        >
          <MoonIcon />
        </span>
        <span
          className='absolute inset-0 rotate-0 transform text-black transition duration-500 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white'
          style={{ transformOrigin: '50% 100px' }}
        >
          <SunIcon />
        </span>
      </div>
      <span
        className={clsx('ml-3 text-black dark:text-white', {
          'sr-only': variant === 'icon',
        })}
      >
        {darkMode ? 'switch to light mode' : 'switch to dark mode'}
      </span>
    </button>
  );
}
