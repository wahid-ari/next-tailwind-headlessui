import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import {
  ArrowCircleRightIcon,
  ArrowSmRightIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  LibraryIcon,
  MoonIcon,
  SunIcon,
  TemplateIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { GlobalContext } from '@utils/GlobalContext';

import ActiveLink from '@components/ActiveLink';
import ExMobileNavAccordion from '@components/exdashboard/ExMobileNavAccordion';
import ExMobileNavLink from '@components/exdashboard/ExMobileNavLink';

export default function ExMobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useContext(GlobalContext);
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const router = useRouter();

  // handle auto close mobile menu panel based on route changes or page being refreshed
  useEffect(() => {
    setShowMobileMenu(false);
  }, [router.pathname]);

  return (
    <Transition.Root show={showMobileMenu} as={Fragment}>
      <Dialog as='aside' className='fixed inset-0 z-20 overflow-hidden lg:hidden' onClose={setShowMobileMenu}>
        <div className='absolute inset-0 overflow-hidden'>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          {/* End Backdrop */}

          <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-16'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='pointer-events-auto relative w-screen max-w-sm'>
                {/* Close Panel Button  */}
                <div className='absolute right-0 top-0 mr-6 pt-6'>
                  <button
                    type='button'
                    className='rounded p-1 text-gray-500 ring-2 ring-gray-500 transition-all hover:text-gray-800 hover:ring-gray-800 dark:text-gray-300 dark:ring-gray-300 dark:hover:text-gray-200 dark:hover:ring-gray-200'
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className='sr-only'>Close panel</span>
                    <XIcon className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
                {/* End Close Panel Button  */}

                {/* Mobile Menu Panel  */}
                <div className='overflow-y-hide flex h-full flex-col bg-white py-6 shadow-xl dark:bg-neutral-900'>
                  {/* Theme Toggle  */}
                  <div className='fixed bottom-20 left-56 z-10 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-opacity-40 md:left-80'>
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
                  {/* End Theme Toggle  */}

                  <div className='px-6'>
                    <Dialog.Title className='text-lg font-medium dark:text-white'> Menu </Dialog.Title>
                  </div>
                  <div className='relative mt-6 flex-1'>
                    {/* Mobile Menu Link */}
                    <div className='absolute inset-0 px-4'>
                      {/* <div className="h-full flex flex-col gap-y-1 pr-2 overflow-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded" aria-hidden="true"> */}
                      <div className='flex h-full flex-col gap-y-1 overflow-auto py-1 pl-1 pr-3' aria-hidden='true'>
                        <Menu>
                          {({ open }) => (
                            <>
                              <Menu.Button className='w-full rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                                <div className='flex items-center justify-between'>
                                  <span>Accordion Menu</span>
                                  <ChevronRightIcon
                                    className={`${
                                      open
                                        ? 'rotate-90 transform transition-transform duration-200'
                                        : 'transition-transform duration-200'
                                    } h-4 w-4`}
                                  />
                                </div>
                              </Menu.Button>
                              <Menu.Items className='flex flex-col gap-y-1 px-4'>
                                <Menu.Item>
                                  <ActiveLink activeClassName='bg-gray-100' href='/'>
                                    <span className='block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                                      1
                                    </span>
                                  </ActiveLink>
                                </Menu.Item>
                                <Menu.Item>
                                  <ExMobileNavLink href='/'>2</ExMobileNavLink>
                                </Menu.Item>
                              </Menu.Items>
                            </>
                          )}
                        </Menu>

                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex items-center justify-between rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                                <span>Accordion Disclosure</span>
                                <ChevronRightIcon
                                  className={`
                        ${
                          open
                            ? 'rotate-90 transform transition-transform duration-200'
                            : 'transition-transform duration-200'
                        } 
                        h-4 w-4 
                        `}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className='space-y-1 px-4'>
                                <ActiveLink activeClassName='bg-gray-100' href='/'>
                                  <span className='block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                                    A
                                  </span>
                                </ActiveLink>
                                <ExMobileNavLink href='/'>B</ExMobileNavLink>
                                <ExMobileNavLink href='/'>C</ExMobileNavLink>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        <ExMobileNavAccordion name='First' routeName='/dashboard/first'>
                          <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard/first'>
                            <span className='block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                              First A
                            </span>
                          </ActiveLink>
                          <ExMobileNavLink href='/dashboard/first/b' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
                            First B
                          </ExMobileNavLink>
                          <ExMobileNavLink href='/dashboard/first/c'>First C</ExMobileNavLink>
                        </ExMobileNavAccordion>

                        <ExMobileNavAccordion name='Second' routeName='/dashboard/second'>
                          <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard/second'>
                            <span className='block cursor-pointer rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                              Second A
                            </span>
                          </ActiveLink>
                          <ExMobileNavLink href='/dashboard/second/b' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
                            Second B
                          </ExMobileNavLink>
                          <ExMobileNavLink href='/dashboard/second/c'>Second C</ExMobileNavLink>
                        </ExMobileNavAccordion>

                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard'>
                          <span className='flex cursor-pointer items-center justify-start gap-2 rounded px-2 py-1 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800'>
                            <ArrowSmRightIcon className='h-4 w-4' />
                            Dashboard
                          </span>
                        </ActiveLink>
                        <ExMobileNavLink href='/dashboard/first' icon={<LibraryIcon className='h-4 w-4' />}>
                          First
                        </ExMobileNavLink>
                        <ExMobileNavLink href='/dashboard/second' icon={<UserGroupIcon className='h-4 w-4' />}>
                          Second
                        </ExMobileNavLink>
                        <ExMobileNavLink href='/dashboard/third' icon={<TemplateIcon className='h-4 w-4' />}>
                          Third (Layout Dashboard)
                        </ExMobileNavLink>
                        <ExMobileNavLink
                          href='/breadcrumb/first/second/detail/1'
                          icon={<ChevronDoubleRightIcon className='h-4 w-4' />}
                        >
                          Breadcrumb
                        </ExMobileNavLink>
                        <ExMobileNavLink href='/dashboardd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboardd
                        </ExMobileNavLink>

                        <ExMobileNavLink href='/dashboarddd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboarddd
                        </ExMobileNavLink>

                        <ExMobileNavLink href='/dashboardtwo' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboard Two
                        </ExMobileNavLink>

                        <ExMobileNavLink href='/dashboardthree' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboard Three
                        </ExMobileNavLink>

                        <ExMobileNavLink href='/dashboardicon' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboard Icon
                        </ExMobileNavLink>

                        <ExMobileNavLink href='/sticky' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Sticky
                        </ExMobileNavLink>

                        <ExMobileNavLink href='/supabase' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Supabase
                        </ExMobileNavLink>

                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                          return (
                            <ExMobileNavLink key={item + 1} href='#' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
                              Link #{item}
                            </ExMobileNavLink>
                          );
                        })}
                      </div>
                    </div>
                    {/* End Mobile Menu Link */}
                  </div>
                </div>
                {/* End Mobile Menu Panel  */}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
