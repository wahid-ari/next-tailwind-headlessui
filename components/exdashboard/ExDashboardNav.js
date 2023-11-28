import { useContext } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function ExDashboardNav() {
  const { setShowMobileMenu } = useContext(GlobalContext);

  return (
    <nav className='sticky top-0 z-10 mx-auto flex max-w-screen-2xl border px-2 dark:border-neutral-700'>
      <div className='my-2 flex w-full gap-2 border px-2 font-medium dark:border-neutral-700 dark:text-white'>
        <button onClick={() => setShowMobileMenu(true)} className='block lg:hidden'>
          <span className='sr-only'>Open panel</span>
          <MenuIcon className='block h-5 w-5' aria-hidden='true' />
        </button>
        navbar
      </div>
    </nav>
  );
}
