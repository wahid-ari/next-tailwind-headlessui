import { useContext, Fragment } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { ArrowsExpandIcon, ChevronDownIcon, MenuIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import ActiveLink from "@components/supabase/ActiveLink";
import ChangeTheme from "@components/supabase/ChangeTheme";

export default function Navbar({ sidebar }) {

  const { setShowMobileMenu } = useContext(GlobalContext);
  const { showSidebarMenu, setShowSidebarMenu } = useContext(GlobalContext);

  return (
    // Full Width
    // <nav className="flex mx-auto px-2 sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b dark:border-b-neutral-800">
    <nav className="-pl-2 h-12 flex max-w-screen-2xl mx-auto sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b dark:border-b-neutral-800">
      <div className="px-3 md:px-4 w-full my-2 flex gap-x-2 justify-between items-center">
        <div className={`flex gap-2 dark:text-white font-medium items-center`}>

          <button onClick={() => setShowMobileMenu(true)} className="block lg:hidden">
            <span className="sr-only">Open Mobile Panel</span>
            <MenuIcon className="block h-5 w-5" aria-hidden="true" />
          </button>

          {sidebar &&
            <button onClick={() => setShowSidebarMenu(!showSidebarMenu)} className="hidden lg:block">
              <span className="sr-only">Open Sidebar Panel</span>
              {showSidebarMenu ?
                <ArrowsExpandIcon className="block h-[19px] w-[19px]" aria-hidden="true" />
                :
                <MenuIcon className="block h-5 w-5" aria-hidden="true" />
              }
            </button>
          }

          Dashboard
        </div>
        <div className="flex gap-x-1 sm:gap-x-2 dark:text-white text-sm font-medium items-center">
          <ChangeTheme />
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="group py-1 px-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded flex space-x-1 items-center text-sm font-medium transition-all">
                  <span>Menu</span>
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
                  <Popover.Panel className="absolute bg-white dark:bg-neutral-900 border dark:border-neutral-800 shadow space-y-1 top-9 right-0 px-2 py-2 rounded w-32 z-10">
                    <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboard">
                      <span className="block px-2 py-1.5 rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboard</span>
                    </ActiveLink>
                    <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/dashboardd">
                      <span className="block px-2 py-1.5 rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Dashboardd</span>
                    </ActiveLink>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover>
            <Popover.Button aria-label="Account" className="p-0.5">
              <div className="relative w-6 h-6 overflow-hidden bg-gray-100 hover:bg-gray-200 rounded-full dark:bg-neutral-700 dark:hover:bg-gray-600 transition-all">
                <svg className="w-8 h-8 -left-[0.25rem] absolute text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
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
              <Popover.Panel className="absolute bg-white dark:bg-neutral-900 border dark:border-neutral-800 shadow space-y-1 top-11 right-4 px-2 py-2 rounded w-32 z-10">
                <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="#">
                  <span className="block px-2 py-1.5 rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Profil</span>
                </ActiveLink>
                <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href="/#">
                  <span className="block px-2 py-1.5 rounded text-sm font-medium text-red-500 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">Logout</span>
                </ActiveLink>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </nav>
  )
}