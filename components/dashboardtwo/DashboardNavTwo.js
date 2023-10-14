import { useContext, Fragment } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { ArrowsExpandIcon, ChevronDownIcon, MenuIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import ActiveLink from "@components/ActiveLink";
import ChangeTheme from "@components/dashboard/ChangeTheme";

export default function DashboardNavTwo() {

  const { setShowMobileMenu } = useContext(GlobalContext);
  const { showSidebarMenu, setShowSidebarMenu } = useContext(GlobalContext);

  return (
    // Full Width
    // <nav className="flex mx-auto px-2 sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b dark:border-b-neutral-800">
    <nav className="flex max-w-screen-2xl mx-auto px-2 sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b dark:border-b-neutral-800">
      <div className="lg:pl-1 w-full my-2 flex gap-x-2 justify-between items-center">
        <div className={`flex dark:text-white font-medium lg:pl-0 items-center`}>

          <div className="flex items-center gap-1">
            <button onClick={() => setShowMobileMenu(true)} className="lg:hidden p-1">
              <span className="sr-only">Open Mobile Panel</span>
              <MenuIcon className="block h-5 w-5" aria-hidden="true" />
            </button>
            <span className="lg:hidden text-sm font-medium">Dashboard Two</span>
          </div>

          {!showSidebarMenu &&
            <div className="flex items-center gap-1">
              <button onClick={() => setShowSidebarMenu(!showSidebarMenu)} className="hidden lg:flex items-center p-1">
                <span className="sr-only">Open Sidebar Panel</span>
                <MenuIcon className="block h-5 w-5" aria-hidden="true" />
              </button>
              <span className="hidden lg:block text-sm font-medium">Dashboard Two</span>
            </div>
          }
        </div>
        <div className="flex gap-x-3 dark:text-white text-sm font-medium items-center">
          <ChangeTheme />

          <Popover className="relative hover:bg-gray-100 dark:hover:bg-neutral-800 rounded flex items-center transition-all">
            {({ open }) => (
              <>
                <Popover.Button className="py-1 group flex space-x-1 items-center px-2 rounded-md text-sm font-medium transition-all">
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
                  <Popover.Panel className="absolute bg-white dark:bg-neutral-900 shadow space-y-1 top-9 right-0 px-2 py-2 rounded w-40 z-10">
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
        </div>
      </div>
    </nav>
  )
}