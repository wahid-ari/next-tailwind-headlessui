import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <div className='fixed bottom-20 right-3 z-10 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-opacity-40 md:right-10'>
      {darkMode ? (
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label='Change Theme'
          className='h-8 w-8 rounded-full bg-neutral-800 p-1 text-white transition-all duration-300 ease-in hover:bg-neutral-700'
        >
          <SunIcon />
        </button>
      ) : (
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label='Change Theme'
          className='h-8 w-8 rounded-full bg-gray-100 p-1 transition-all duration-300 ease-in hover:bg-gray-200'
        >
          <MoonIcon />
        </button>
      )}
    </div>
  );
}
