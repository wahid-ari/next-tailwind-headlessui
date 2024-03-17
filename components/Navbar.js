import { Fragment } from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';

import ActiveLink from '@components/ActiveLink';

export default function Navbar() {
  // check the session to show or hide login and logout link
  const { data: session, status } = useSession();

  return (
    <Disclosure as='nav' className='shadow dark:border-b dark:border-b-neutral-800 dark:bg-neutral-900'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
            <div className='flex h-16 items-center justify-between'>
              {/* web logo  */}
              <div className='flex-shrink-0'>
                <Link
                  href='/'
                  passHref
                  className='title-font flex items-center justify-center font-medium text-gray-900 md:justify-start'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-9 w-9' viewBox='0 0 1000 1000' fill='none'>
                    <path
                      d='M467.253 0.269139C465.103 0.464613 458.26 1.14878 452.102 1.63747C310.068 14.4411 177.028 91.0671 92.7664 208.841C45.8456 274.325 15.8358 348.605 4.49658 427.284C0.488759 454.748 0 462.86 0 500.098C0 537.336 0.488759 545.448 4.49658 572.912C31.6716 760.666 165.298 918.414 346.53 976.861C378.983 987.319 413.196 994.453 452.102 998.754C467.253 1000.42 532.747 1000.42 547.898 998.754C615.054 991.326 671.945 974.71 728.055 946.073C736.657 941.675 738.319 940.502 737.146 939.525C736.364 938.939 699.707 889.777 655.718 830.352L575.758 722.353L475.562 574.085C420.43 492.572 375.073 425.915 374.682 425.915C374.291 425.818 373.9 491.693 373.705 572.13C373.412 712.97 373.314 718.639 371.554 721.962C369.013 726.751 367.058 728.706 362.952 730.856C359.824 732.42 357.087 732.713 342.327 732.713H325.415L320.919 729.878C317.986 728.021 315.836 725.578 314.37 722.744L312.317 718.345L312.512 522.382L312.805 326.321L315.836 322.509C317.4 320.457 320.723 317.818 323.069 316.547C327.077 314.592 328.641 314.397 345.552 314.397C365.494 314.397 368.817 315.179 373.998 320.848C375.464 322.411 429.717 404.12 494.624 502.541C559.531 600.963 648.289 735.352 691.887 801.324L771.065 921.248L775.073 918.609C810.557 895.543 848.094 862.703 877.81 828.495C941.056 755.877 981.818 667.326 995.503 572.912C999.511 545.448 1000 537.336 1000 500.098C1000 462.86 999.511 454.748 995.503 427.284C968.328 239.53 834.702 81.7821 653.47 23.3352C621.505 12.975 587.488 5.84016 549.365 1.53972C539.98 0.562345 475.367 -0.51276 467.253 0.269139ZM671.945 302.668C676.637 305.014 680.45 309.51 681.818 314.201C682.6 316.743 682.796 371.085 682.6 493.549L682.307 669.281L651.32 621.781L620.235 574.281V446.538C620.235 363.95 620.626 317.525 621.212 315.277C622.776 309.803 626.197 305.503 630.89 302.962C634.897 300.909 636.364 300.714 651.711 300.714C666.178 300.714 668.719 300.909 671.945 302.668Z'
                      fill='black'
                    />
                  </svg>
                  <span className='ml-3 text-xl dark:text-white'>Next</span>
                </Link>
              </div>
              {/* web logo  */}

              {/* Nav Link wide nav */}
              <div className='hidden lg:block'>
                <div className='ml-10 flex items-center space-x-4'>
                  <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/'>
                    <span className='rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                      Home
                    </span>
                  </ActiveLink>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className='group relative flex items-center space-x-2 rounded-md px-2 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                          <span>Components</span>
                          <ChevronDownIcon
                            className={`${
                              open
                                ? 'rotate-180 transform transition-transform duration-300'
                                : 'transition-transform duration-300'
                            } h-4 w-4`}
                          />
                          <span className='absolute left-28 top-1 flex h-5 w-5 animate-bounce items-center justify-center'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75' />
                            <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500' />
                          </span>
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
                          <Popover.Panel className='absolute top-12 z-10 w-52 space-y-1 rounded bg-white px-2 py-2 shadow dark:bg-[#111]'>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/components/#toc'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Components
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/headless/#toc'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Headless
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/radix/#toc'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Radix UI
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/react-table/#toc'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                React Table
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/react-table-new/#toc'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                React Table New
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/other/#toc'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Other
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/preview-component'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Preview Components
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/learn'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Learn
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/card'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Card
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/design'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Design
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/hover'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Hover
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/nav-bar'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Navbar
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/background'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Background
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/animate'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Animate
                              </span>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className='group flex items-center space-x-2 rounded-md px-2 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                          <span>Other</span>
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
                          <Popover.Panel className='absolute top-12 z-10 w-40 space-y-1 rounded bg-white px-2 py-2 shadow dark:bg-[#111]'>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/file'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                File
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/file-supabase'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Image Supabase
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/files-supabase'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                File Supabase
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/logger'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Logger
                              </span>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className='group flex items-center space-x-2 rounded-md px-2 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                          <span>Slider</span>
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
                          <Popover.Panel className='absolute top-12 z-10 w-40 space-y-1 rounded bg-white px-2 py-2 shadow dark:bg-[#111]'>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Slider
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-other'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Other Slider
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-swiper'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Swiper.js
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-swipers'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Swipers Custom
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-react-slick'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                React Slick
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-splide'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Splide.js
                              </span>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className='group flex items-center space-x-2 rounded-md px-2 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                          <span>Dashboard</span>
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
                          <Popover.Panel className='absolute top-12 z-10 w-44 space-y-1 rounded bg-white px-2 py-2 shadow dark:bg-[#111]'>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Dashboard
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardd'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Dashboardd
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboarddd'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Dashboarddd
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardtwo'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Dashboard Two
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardthree'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Dashboard Three
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardicon'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Dashboard Icon
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/supabase'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Supabase
                              </span>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  {!session && (
                    <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/signin'>
                      <span className='rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                        Signin
                      </span>
                    </ActiveLink>
                  )}
                  {session && (
                    <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/signout'>
                      <span className='rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                        Signout
                      </span>
                    </ActiveLink>
                  )}
                  <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/protected'>
                    <span className='rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                      Protected
                    </span>
                  </ActiveLink>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button className='group flex items-center space-x-2 rounded-md px-2 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                          <span>Admin</span>
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
                          <Popover.Panel className='absolute top-12 z-10 w-40 space-y-1 rounded bg-white px-2 py-2 shadow dark:bg-[#111]'>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/admin/third'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Third
                              </span>
                            </ActiveLink>
                            <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/admin/fourth'>
                              <span className='block rounded-md px-3 py-1 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                                Fourth
                              </span>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
              {/* End Nav Link  */}

              {/* Mobile menu button */}
              <div className='-mr-2 flex lg:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:text-neutral-400'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              {/* End Mobile menu button */}
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
              <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/'>
                <span className='border-b-1 block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                  Home
                </span>
              </ActiveLink>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className='border-b-1 w-full rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                      <div className='relative flex items-center justify-between'>
                        <span>Components</span>
                        <ChevronRightIcon
                          className={`${
                            open
                              ? 'rotate-90 transform transition-transform duration-200'
                              : 'transition-transform duration-200'
                          } h-5 w-5`}
                        />
                        <span className='absolute left-24 top-1 flex h-5 w-5 animate-bounce items-center justify-center'>
                          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75' />
                          <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500' />
                        </span>
                      </div>
                    </Menu.Button>
                    <Menu.Items className='space-y-1 px-3'>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/components/#toc'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Components
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/headless/#toc'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Headless
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/radix/#toc'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Radix UI
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/react-table/#toc'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            React Table
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/react-table-new/#toc'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            React Table New
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/other/#toc'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Other
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/preview-component'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Preview Components
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/learn'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Learn
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/card'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Card
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/design'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Design
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/hover'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Hover
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/nav-bar'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Navbar
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/background'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Background
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/animate'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Animate
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className='border-b-1 w-full rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                      <div className='flex items-center justify-between'>
                        <span>Other</span>
                        <ChevronRightIcon
                          className={`${
                            open
                              ? 'rotate-90 transform transition-transform duration-200'
                              : 'transition-transform duration-200'
                          } h-5 w-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className='space-y-1 px-3'>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/file'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            File
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/file-supabase'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Image Supabase
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/files-supabase'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            File Supabase
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/logger'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Logger
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>

              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className='border-b-1 w-full rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                      <div className='flex items-center justify-between'>
                        <span>Slider</span>
                        <ChevronRightIcon
                          className={`${
                            open
                              ? 'rotate-90 transform transition-transform duration-200'
                              : 'transition-transform duration-200'
                          } h-5 w-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className='space-y-1 px-3'>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Slider
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-other'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Other Slider
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-swiper'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Swiper.js
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-swipers'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Swiper Custom
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-react-slick'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            React Slick
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/slider-splide'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Splide.js
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className='border-b-1 w-full rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                      <div className='flex items-center justify-between'>
                        <span>Dashboard</span>
                        <ChevronRightIcon
                          className={`${
                            open
                              ? 'rotate-90 transform transition-transform duration-200'
                              : 'transition-transform duration-200'
                          } h-5 w-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className='space-y-1 px-3'>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboard'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Dashboard
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardd'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Dashboardd
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboarddd'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Dashboarddd
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardtwo'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Dashboard Two
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardthree'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Dashboard Three
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/dashboardicon'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Dashboard Icon
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/supabase'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Supabase
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
              {!session && (
                <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/signin'>
                  <span className='border-b-1 block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                    Signin
                  </span>
                </ActiveLink>
              )}
              {session && (
                <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/signout'>
                  <span className='border-b-1 block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                    Signout
                  </span>
                </ActiveLink>
              )}
              <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/protected'>
                <span className='border-b-1 block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                  Protected
                </span>
              </ActiveLink>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className='border-b-1 w-full rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                      <div className='flex items-center justify-between'>
                        <span>Admin</span>
                        <ChevronRightIcon
                          className={`${
                            open
                              ? 'rotate-90 transform transition-transform duration-200'
                              : 'transition-transform duration-200'
                          } h-5 w-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className='space-y-1 px-3'>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/admin/third'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Third
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href='/admin/fourth'>
                          <span className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'>
                            Fourth
                          </span>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
            </div>
          </Disclosure.Panel>
          {/* End Mobile menu panel */}
        </>
      )}
    </Disclosure>
  );
}
