import { Fragment } from 'react';
import Breadcrumb from '@components/supabase/Breadcrumb';
import MobileMenu from '@components/supabase/MobileMenu';
import NavbarSecond from '@components/supabase/NavbarSecond';
import SidebarMenu from '@components/supabase/SidebarMenu';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Layout({ children, sidebar, sidebarTitle }) {
  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      {/* <Navbar /> */}
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='mx-auto h-full max-w-screen-2xl'>
        <div className='relative h-full lg:flex'>
          <SidebarMenu />
          {/* subsidebar */}
          <div className='fixed hidden h-full w-60 border-r dark:border-r-neutral-800 lg:block lg:pl-14'>
            <div className='flex h-12 items-center border-b p-4 dark:border-b-neutral-800'>
              <h4 className='text-base font-medium dark:text-white'>{sidebarTitle || 'Menu'}</h4>
            </div>
            <div
              style={{
                // to activate scrollbar
                maxHeight: 'calc(-55px + 100vh)',
              }}
              className='scrollbar-thinner flex flex-col gap-y-1 overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700'
            >
              {sidebar}
            </div>
          </div>
          <div className='w-full pl-14 lg:pl-60'>
            <NavbarSecond />
            {/* subnavbar show when small screen */}
            {sidebar && <SubNavbar className='block lg:hidden'>{sidebar}</SubNavbar>}
            <div className='px-3 pb-3 pt-1.5 md:px-4 md:pb-4'>
              <Breadcrumb />
              {/* Start Content */}
              {children}
              {/* End Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubNavbar({ className, children }) {
  return (
    <Popover
      className={`${className} sticky top-12 w-full border-b bg-white/80 px-1.5 py-1.5 backdrop-blur-md backdrop-filter dark:border-b-neutral-800 dark:bg-neutral-900/80 md:px-2.5`}
    >
      {({ open, close }) => (
        <>
          <Popover.Button className='group flex w-full items-center justify-between space-x-1 rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800'>
            <span>Menu</span>
            <ChevronDownIcon
              className={`${
                open ? 'rotate-180 transform transition-transform duration-300' : 'transition-transform duration-300'
              } h-5 w-5`}
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
            <Popover.Panel className='absolute inset-x-0 top-11 z-[5] w-full px-3 md:px-4'>
              <div className='scrollbar-thinner flex h-[310px] flex-col space-y-1 border bg-white p-3 shadow scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:scrollbar-thumb-neutral-700'>
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
