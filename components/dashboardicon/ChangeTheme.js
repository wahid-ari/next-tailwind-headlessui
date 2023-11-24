import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function ChangeTheme() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return darkMode ? (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label='Change Theme'
      className='w-[26px] h-[26px] p-0.5 transition-all hover:bg-neutral-800 rounded-full'
    >
      <SunIcon className='text-white' />
    </button>
  ) : (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label='Change Theme'
      className='w-[26px] h-[26px] p-0.5 transition-all hover:bg-neutral-100 rounded-full'
    >
      <MoonIcon className='text-gray-700' />
    </button>
  );
}
