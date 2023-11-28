import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function ChangeTheme() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return darkMode ? (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label='Change Theme'
      className='h-6 w-6 rounded-full bg-neutral-800 p-0.5 transition-all hover:bg-neutral-700'
    >
      <SunIcon className='text-white' />
    </button>
  ) : (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label='Change Theme'
      className='h-6 w-6 rounded-full bg-gray-100 p-0.5 transition-all hover:bg-gray-200'
    >
      <MoonIcon className='text-gray-700' />
    </button>
  );
}
