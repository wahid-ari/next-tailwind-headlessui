import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import {
  AdjustmentsIcon,
  ArrowSmDownIcon,
  BadgeCheckIcon,
  BellIcon,
  BookmarkAltIcon,
  ChartSquareBarIcon,
  ChipIcon,
  CubeIcon,
  EmojiHappyIcon,
  FireIcon,
  GiftIcon,
  HomeIcon,
  InboxInIcon,
  LibraryIcon,
  LightBulbIcon,
  SupportIcon,
} from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { GlobalContext } from '@utils/GlobalContext';

import MobileMenuNavAccordion from '@components/supabase/MobileMenuNavAccordion';
import MobileNavLink from '@components/supabase/MobileNavLink';

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
            <Dialog.Overlay className='absolute inset-0 bg-white/80 backdrop-blur-md backdrop-filter transition-opacity dark:bg-neutral-900/80' />
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
              <div className='pointer-events-auto relative w-screen max-w-xs'>
                {/* Close Panel Button  */}
                <div className='absolute right-0 top-0 mr-5 pt-[1rem]'>
                  <button
                    type='button'
                    className='rounded border border-neutral-200 p-1 text-neutral-500 transition-all hover:border-neutral-800 hover:text-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-200 dark:hover:text-neutral-200'
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className='sr-only'>Close panel</span>
                    <XIcon className='h-4 w-4' aria-hidden='true' />
                  </button>
                </div>
                {/* End Close Panel Button  */}

                {/* Mobile Menu Panel  */}
                <div className='overflow-y-hide flex h-full flex-col bg-white py-4 shadow-xl dark:bg-neutral-900'>
                  <div className='px-5'>
                    <Dialog.Title className='text-lg font-medium dark:text-white'> Menu </Dialog.Title>
                  </div>
                  <div className='relative mt-4 flex-1'>
                    {/* Mobile Menu Link */}
                    <div className='absolute inset-0 px-2'>
                      <div
                        className='flex h-full flex-col gap-y-1 overflow-auto p-1 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700'
                        aria-hidden='true'
                      >
                        <div className='flex flex-grow flex-col gap-1'>
                          <MobileNavLink href='/dashboard' icon={<HomeIcon className='h-5 w-5' />}>
                            Dashboard
                          </MobileNavLink>

                          <MobileNavLink href='/dashboardd' icon={<LibraryIcon className='h-5 w-5' />}>
                            Dashboardd
                          </MobileNavLink>

                          <MobileNavLink href='/dashboarddd' icon={<FireIcon className='h-5 w-5' />}>
                            Dashboarddd
                          </MobileNavLink>

                          <MobileNavLink href='/dashboardtwo' icon={<ChartSquareBarIcon className='h-5 w-5' />}>
                            Dashboard Two
                          </MobileNavLink>

                          <MobileNavLink href='/dashboardthree' icon={<BookmarkAltIcon className='h-5 w-5' />}>
                            Dashboard Three
                          </MobileNavLink>

                          <hr className='border-neutral-200 dark:border-neutral-800' />

                          <MobileNavLink href='/dashboardicon' icon={<EmojiHappyIcon className='h-5 w-5' />}>
                            Dashboard Icon
                          </MobileNavLink>

                          <MobileMenuNavAccordion
                            name='First'
                            routeName='/dashboardicon/first'
                            icon={<BadgeCheckIcon className='h-5 w-5' />}
                          >
                            <MobileNavLink href='/dashboardicon/first' icon={<BadgeCheckIcon className='h-5 w-5' />}>
                              First
                            </MobileNavLink>
                            <MobileNavLink href='/dashboardicon/first/b' icon={<BadgeCheckIcon className='h-5 w-5' />}>
                              First B
                            </MobileNavLink>
                          </MobileMenuNavAccordion>

                          {/* <MobileMenuNavAccordion name="Second" routeName="/dashboardicon/second" icon={<BellIcon className="w-5 h-5" />}>
                            <MobileNavLink href="/dashboardicon/second" icon={<BellIcon className="w-5 h-5" />}>
                              Second
                            </MobileNavLink>
                            <MobileNavLink href="/dashboardicon/second/b" icon={<BellIcon className="w-5 h-5" />}>
                              Second B
                            </MobileNavLink>
                          </MobileMenuNavAccordion> */}

                          <hr className='border-neutral-200 dark:border-neutral-800' />

                          <MobileNavLink href='/supabase' icon={<AdjustmentsIcon className='h-5 w-5' />}>
                            Supabase
                          </MobileNavLink>

                          <MobileMenuNavAccordion
                            name='Supabase First'
                            routeName='/supabase/first'
                            icon={<ChipIcon className='h-5 w-5' />}
                          >
                            <MobileNavLink href='/supabase/first' icon={<ChipIcon className='h-5 w-5' />}>
                              Supabase First
                            </MobileNavLink>
                            <MobileNavLink href='/supabase/first/b' icon={<ChipIcon className='h-5 w-5' />}>
                              Supabase First B
                            </MobileNavLink>
                          </MobileMenuNavAccordion>

                          <MobileMenuNavAccordion
                            name='Supabase Second'
                            routeName='/supabase/second'
                            icon={<GiftIcon className='h-5 w-5' />}
                          >
                            <MobileNavLink href='/supabase/second' icon={<GiftIcon className='h-5 w-5' />}>
                              Supabase Second
                            </MobileNavLink>
                            <MobileNavLink href='/supabase/second/b' icon={<GiftIcon className='h-5 w-5' />}>
                              Supabase Second B
                            </MobileNavLink>
                          </MobileMenuNavAccordion>

                          <MobileNavLink href='/supabase/third' icon={<SupportIcon className='h-5 w-5' />}>
                            Supabase No Submenu
                          </MobileNavLink>

                          <MobileNavLink href='/supabase/forth' icon={<CubeIcon className='h-5 w-5' />}>
                            Supabase Subnavbar scroll
                          </MobileNavLink>

                          <MobileNavLink href='/supabase/fifth' icon={<InboxInIcon className='h-5 w-5' />}>
                            Supabase Subnavbar no scroll
                          </MobileNavLink>
                        </div>

                        <MobileNavLink href='/supabase#' icon={<ArrowSmDownIcon className='h-5 w-5' />}>
                          Bottom
                        </MobileNavLink>
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
