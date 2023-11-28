import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function ChangeTheme() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return darkMode ? (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label='Change Theme'
      className='h-[26px] w-[26px] rounded-full p-0.5 transition-all hover:bg-neutral-800'
    >
      <SunIcon className='text-white' />
    </button>
  ) : (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label='Change Theme'
      className='h-[26px] w-[26px] rounded-full p-0.5 transition-all hover:bg-neutral-100'
    >
      <MoonIcon className='text-gray-700' />
    </button>
  );
}
