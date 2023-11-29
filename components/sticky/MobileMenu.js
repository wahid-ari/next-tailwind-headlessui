import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import { ArrowCircleRightIcon, ArrowSmRightIcon, BadgeCheckIcon, BellIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { GlobalContext } from '@utils/GlobalContext';

import MobileNavAccordion from '@components/sticky/MobileNavAccordion';
import MobileNavLink from '@components/sticky/MobileNavLink';

export default function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useContext(GlobalContext);
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
                <div className='absolute right-0 top-0 mr-7 pt-[1.6rem]'>
                  <button
                    type='button'
                    className='rounded border border-gray-500 p-1 text-gray-500 transition-all hover:border-gray-800 hover:text-gray-800 dark:border-gray-300 dark:text-gray-300 dark:hover:border-gray-200 dark:hover:text-gray-200'
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className='sr-only'>Close panel</span>
                    <XIcon className='h-4 w-4' aria-hidden='true' />
                  </button>
                </div>
                {/* End Close Panel Button  */}

                {/* Mobile Menu Panel  */}
                <div className='overflow-y-hide flex h-full flex-col bg-white py-6 shadow-xl dark:bg-neutral-900'>
                  <div className='px-5'>
                    <Dialog.Title className='text-lg font-medium dark:text-white'> Menu </Dialog.Title>
                  </div>
                  <div className='relative mt-6 flex-1'>
                    {/* Mobile Menu Link */}
                    <div className='absolute inset-0 pl-4 pr-2'>
                      <div
                        className='flex h-full flex-col gap-y-1 overflow-auto py-1 pl-1 pr-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700'
                        aria-hidden='true'
                      >
                        <MobileNavLink href='/dashboard' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
                          Dashboard
                        </MobileNavLink>

                        <MobileNavAccordion
                          name='First'
                          routeName='/dashboardd/first'
                          icon={<BadgeCheckIcon className='h-4 w-4' />}
                        >
                          <MobileNavLink
                            href='/dashboardd/first'
                            icon={<BadgeCheckIcon className='h-4 w-4' />}
                            className='mb-1'
                          >
                            First
                          </MobileNavLink>
                          <MobileNavLink href='/dashboardd/first/b' icon={<BadgeCheckIcon className='h-4 w-4' />}>
                            First B
                          </MobileNavLink>
                        </MobileNavAccordion>

                        <MobileNavAccordion
                          name='Second'
                          routeName='/dashboardd/second'
                          icon={<BellIcon className='h-4 w-4' />}
                        >
                          <MobileNavLink
                            href='/dashboardd/second'
                            icon={<BellIcon className='h-4 w-4' />}
                            className='mb-1'
                          >
                            Second
                          </MobileNavLink>
                          <MobileNavLink href='/dashboardd/second/b' icon={<BellIcon className='h-4 w-4' />}>
                            Second B
                          </MobileNavLink>
                        </MobileNavAccordion>

                        <MobileNavLink href='/dashboardd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboardd
                        </MobileNavLink>

                        <MobileNavLink href='/dashboarddd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboarddd
                        </MobileNavLink>

                        <MobileNavLink href='/dashboardtwo' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboard Two
                        </MobileNavLink>

                        <MobileNavLink href='/dashboardthree' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboard Three
                        </MobileNavLink>

                        <MobileNavLink href='/dashboardicon' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Dashboard Icon
                        </MobileNavLink>

                        <MobileNavLink href='/sticky' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Sticky
                        </MobileNavLink>

                        <MobileNavLink href='/supabase' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
                          Supabase
                        </MobileNavLink>

                        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => {
                          return (
                            <MobileNavLink key={item + 1} href="#" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
                              Link #{item}
                            </MobileNavLink>
                          )
                        })} */}
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
