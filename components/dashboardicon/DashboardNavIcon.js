import { Fragment, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ArrowsExpandIcon, ChevronDownIcon, MenuIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

import ActiveLink from '@components/dashboardicon/ActiveLink';
import ChangeTheme from '@components/dashboardicon/ChangeTheme';

export default function DashboardNavIcon() {
  const { setShowMobileMenu } = useContext(GlobalContext);
  const { showSidebarMenu, setShowSidebarMenu } = useContext(GlobalContext);

  return (
    // Full Width
    // <nav className="flex mx-auto px-2 sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b dark:border-b-neutral-800">
    <nav className='sticky top-0 z-10 mx-auto flex max-w-screen-2xl border-b bg-white dark:border-b-neutral-800 dark:bg-neutral-900'>
      <div className='my-2 flex w-full items-center justify-between gap-x-2 px-4'>
        <div className={`flex items-center gap-2 font-medium dark:text-white lg:pl-0.5`}>
          <button onClick={() => setShowMobileMenu(true)} className='block lg:hidden'>
            <span className='sr-only'>Open Mobile Panel</span>
            <MenuIcon className='block h-5 w-5' aria-hidden='true' />
          </button>
          <button onClick={() => setShowSidebarMenu(!showSidebarMenu)} className='hidden lg:block'>
            <span className='sr-only'>Open Sidebar Panel</span>
            {showSidebarMenu ? (
              <ArrowsExpandIcon className='block h-5 w-5' aria-hidden='true' />
            ) : (
              <MenuIcon className='block h-5 w-5' aria-hidden='true' />
            )}
          </button>
          Dashboard
        </div>
        <div className='flex items-center gap-x-1 text-sm font-medium dark:text-white sm:gap-x-2'>
          <ChangeTheme />
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button className='group flex items-center space-x-1 rounded px-1.5 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-neutral-800'>
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
                  <Popover.Panel className='absolute right-0 top-9 z-10 w-32 space-y-1 rounded border bg-white px-2 py-2 shadow dark:border-neutral-800 dark:bg-neutral-900'>
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
          <Popover>
            <Popover.Button aria-label='Account' className='p-0.5'>
              <div className='relative h-6 w-6 overflow-hidden rounded-full bg-gray-100 transition-all hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-gray-600'>
                <svg
                  className='absolute -left-[0.25rem] h-8 w-8 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
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
              <Popover.Panel className='absolute right-4 top-11 z-10 w-32 space-y-1 rounded border bg-white px-2 py-2 shadow dark:border-neutral-800 dark:bg-neutral-900'>
                <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='#'>
                  <span className='block rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-neutral-800'>
                    Profil
                  </span>
                </ActiveLink>
                <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/#'>
                  <span className='block rounded px-2 py-1.5 text-sm font-medium text-red-500 transition-all hover:bg-gray-100 dark:hover:bg-neutral-800'>
                    Logout
                  </span>
                </ActiveLink>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </nav>
  );
}
