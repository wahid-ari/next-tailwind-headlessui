import Link from "next/link";
import { Fragment } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import ActiveLink from '@components/ActiveLink'
import { useSession } from "next-auth/react"

export default function Navbar() {
  // check the session to show or hide login and logout link
  const { data: session, status } = useSession()

  return (
    <Disclosure as="nav" className="shadow dark:bg-neutral-900 dark:border-b dark:border-b-neutral-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-16">
              {/* web logo  */}
              <div className="flex-shrink-0">
                <Link href="/">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 1000 1000" fill="none">
                      <path d="M467.253 0.269139C465.103 0.464613 458.26 1.14878 452.102 1.63747C310.068 14.4411 177.028 91.0671 92.7664 208.841C45.8456 274.325 15.8358 348.605 4.49658 427.284C0.488759 454.748 0 462.86 0 500.098C0 537.336 0.488759 545.448 4.49658 572.912C31.6716 760.666 165.298 918.414 346.53 976.861C378.983 987.319 413.196 994.453 452.102 998.754C467.253 1000.42 532.747 1000.42 547.898 998.754C615.054 991.326 671.945 974.71 728.055 946.073C736.657 941.675 738.319 940.502 737.146 939.525C736.364 938.939 699.707 889.777 655.718 830.352L575.758 722.353L475.562 574.085C420.43 492.572 375.073 425.915 374.682 425.915C374.291 425.818 373.9 491.693 373.705 572.13C373.412 712.97 373.314 718.639 371.554 721.962C369.013 726.751 367.058 728.706 362.952 730.856C359.824 732.42 357.087 732.713 342.327 732.713H325.415L320.919 729.878C317.986 728.021 315.836 725.578 314.37 722.744L312.317 718.345L312.512 522.382L312.805 326.321L315.836 322.509C317.4 320.457 320.723 317.818 323.069 316.547C327.077 314.592 328.641 314.397 345.552 314.397C365.494 314.397 368.817 315.179 373.998 320.848C375.464 322.411 429.717 404.12 494.624 502.541C559.531 600.963 648.289 735.352 691.887 801.324L771.065 921.248L775.073 918.609C810.557 895.543 848.094 862.703 877.81 828.495C941.056 755.877 981.818 667.326 995.503 572.912C999.511 545.448 1000 537.336 1000 500.098C1000 462.86 999.511 454.748 995.503 427.284C968.328 239.53 834.702 81.7821 653.47 23.3352C621.505 12.975 587.488 5.84016 549.365 1.53972C539.98 0.562345 475.367 -0.51276 467.253 0.269139ZM671.945 302.668C676.637 305.014 680.45 309.51 681.818 314.201C682.6 316.743 682.796 371.085 682.6 493.549L682.307 669.281L651.32 621.781L620.235 574.281V446.538C620.235 363.95 620.626 317.525 621.212 315.277C622.776 309.803 626.197 305.503 630.89 302.962C634.897 300.909 636.364 300.714 651.711 300.714C666.178 300.714 668.719 300.909 671.945 302.668Z"
                        fill="black" />
                    </svg>
                    <span className="ml-3 text-xl dark:text-white">Next</span>
                  </a>
                </Link>
              </div>
              {/* web logo  */}

              {/* Nav Link wide nav */}
              <div className="hidden lg:block">
                <div className="ml-10 flex items-center space-x-4">
                  <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/">
                    <a className="px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Home</a>
                  </ActiveLink>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="group flex space-x-2 items-center px-2 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                          <span>Components</span>
                          <ChevronDownIcon
                            className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-4 w-4`}
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="duration-200 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="duration-100 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Popover.Panel className="absolute bg-white dark:bg-[#111] shadow space-y-1 top-12 px-2 py-2 rounded w-52 z-10">
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/components/#toc">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Components</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/headless/#toc">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Headless</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/radix/#toc">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Radix UI</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/other/#toc">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Other</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/preview-component">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Preview Components</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/learn">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Learn</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/nav-bar">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Navbar</a>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="group flex space-x-2 items-center px-2 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                          <span>Slider</span>
                          <ChevronDownIcon
                            className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-4 w-4`}
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="duration-200 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="duration-100 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Popover.Panel className="absolute bg-white dark:bg-[#111] shadow space-y-1 top-12 px-2 py-2 rounded w-40 z-10">
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Slider</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider-swiper">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Swiper.js</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider-react-slick">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">React Slick</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider-splide">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Splide.js</a>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="group flex space-x-2 items-center px-2 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                          <span>Dashboard</span>
                          <ChevronDownIcon
                            className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-4 w-4`}
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="duration-200 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="duration-100 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Popover.Panel className="absolute bg-white dark:bg-[#111] shadow space-y-1 top-12 px-2 py-2 rounded w-44 z-10">
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboard</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboardd">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboardd</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboarddd">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboarddd</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboardtwo">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboard Two</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboardthree">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboard Three</a>
                            </ActiveLink>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  {!session &&
                    <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/signin">
                      <a className="px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Signin</a>
                    </ActiveLink>
                  }
                  {session &&
                    <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/signout">
                      <a className="px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Signout</a>
                    </ActiveLink>
                  }
                  <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/protected">
                    <a className="px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Protected</a>
                  </ActiveLink>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="group flex space-x-2 items-center px-2 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                          <span>Admin</span>
                          <ChevronDownIcon
                            className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-4 w-4`}
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="duration-200 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="duration-100 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Popover.Panel className="absolute bg-white dark:bg-[#111] shadow space-y-1 top-12 px-2 py-2 rounded w-40 z-10">
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/admin/third">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Third</a>
                            </ActiveLink>
                            <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/admin/fourth">
                              <a className="block px-3 py-1 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Fourth</a>
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
              <div className="-mr-2 flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-neutral-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">
                    Open main menu
                  </span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* End Mobile menu button */}
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/">
                <a className="border-b-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Home</a>
              </ActiveLink>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="border-b-1 w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                      <div className="flex justify-between items-center">
                        <span>Components</span>
                        <ChevronRightIcon
                          className={`${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'
                            } w-5 h-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className="space-y-1 px-3">
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/components/#toc">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Components</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/headless/#toc">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Headless</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/radix/#toc">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Radix UI</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/other/#toc">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Other</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/preview-component">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Preview Components</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/learn">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Learn</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/nav-bar">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Navbar</a>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="border-b-1 w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                      <div className="flex justify-between items-center">
                        <span>Slider</span>
                        <ChevronRightIcon
                          className={`${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'
                            } w-5 h-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className="space-y-1 px-3">
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Slider</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider-swiper">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Swiper.js</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider-react-slick">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">React Slick</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/slider-splide">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Splide.js</a>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="border-b-1 w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                      <div className="flex justify-between items-center">
                        <span>Dashboard</span>
                        <ChevronRightIcon
                          className={`${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'
                            } w-5 h-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className="space-y-1 px-3">
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboard</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboardd">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboardd</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboarddd">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboarddd</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboardtwo">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboard Two</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboardthree">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboard Three</a>
                        </ActiveLink>
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
              {!session &&
                <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/signin">
                  <a className="border-b-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Signin</a>
                </ActiveLink>
              }
              {session &&
                <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/signout">
                  <a className="border-b-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Signout</a>
                </ActiveLink>
              }
              <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/protected">
                <a className="border-b-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Protected</a>
              </ActiveLink>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="border-b-1 w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
                      <div className="flex justify-between items-center">
                        <span>Admin</span>
                        <ChevronRightIcon
                          className={`${open ? 'transform rotate-90 transition-transform duration-200' : 'transition-transform duration-200'
                            } w-5 h-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className="space-y-1 px-3">
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/admin/third">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Third</a>
                        </ActiveLink>
                      </Menu.Item>
                      <Menu.Item>
                        <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/admin/fourth">
                          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Fourth</a>
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
