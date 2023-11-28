import { Fragment, useContext } from 'react';
import ActiveLink from '@components/ActiveLink';
import ChangeTheme from '@components/dashboard/ChangeTheme';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function DashboardNavTwo() {
  const { setShowMobileMenu } = useContext(GlobalContext);
  const { showSidebarMenu, setShowSidebarMenu } = useContext(GlobalContext);

  return (
    // Full Width
    // <nav className="flex mx-auto px-2 sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b dark:border-b-neutral-800">
    <nav className='sticky top-0 z-10 mx-auto flex max-w-screen-2xl border-b bg-white px-2 dark:border-b-neutral-800 dark:bg-neutral-900'>
      <div className='my-2 flex w-full items-center justify-between gap-x-2 lg:pl-1'>
        <div className={`flex items-center font-medium dark:text-white lg:pl-0`}>
          <div className='flex items-center gap-1'>
            <button onClick={() => setShowMobileMenu(true)} className='p-1 lg:hidden'>
              <span className='sr-only'>Open Mobile Panel</span>
              <MenuIcon className='block h-5 w-5' aria-hidden='true' />
            </button>
            <span className='text-sm font-medium lg:hidden'>Dashboard Two</span>
          </div>

          {!showSidebarMenu && (
            <div className='flex items-center gap-1'>
              <button onClick={() => setShowSidebarMenu(!showSidebarMenu)} className='hidden items-center p-1 lg:flex'>
                <span className='sr-only'>Open Sidebar Panel</span>
                <MenuIcon className='block h-5 w-5' aria-hidden='true' />
              </button>
              <span className='hidden text-sm font-medium lg:block'>Dashboard Two</span>
            </div>
          )}
        </div>
        <div className='flex items-center gap-x-3 text-sm font-medium dark:text-white'>
          <ChangeTheme />

          <Popover className='relative flex items-center rounded transition-all hover:bg-gray-100 dark:hover:bg-neutral-800'>
            {({ open }) => (
              <>
                <Popover.Button className='group flex items-center space-x-1 rounded-md px-2 py-1 text-sm font-medium transition-all'>
                  <span>Menu</span>
                  <ChevronDownIcon
                    className={`${
                      open
                        ? 'rotate-180 transform transition-transform duration-300'
                        : 'transition-transform duration-300'
                    } h-4 w-4`}
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='duration-200 ease-out'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='duration-100 ease-in'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Popover.Panel className='absolute right-0 top-9 z-10 w-40 space-y-1 rounded bg-white px-2 py-2 shadow dark:bg-neutral-900'>
                    <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard'>
                      <span className='block rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-neutral-800'>
                        Dashboard
                      </span>
                    </ActiveLink>
                    <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardd'>
                      <span className='block rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-neutral-800'>
                        Dashboardd
                      </span>
                    </ActiveLink>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  );
}
