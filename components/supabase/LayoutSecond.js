import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { GlobalContext } from "@utils/GlobalContext";
import Breadcrumb from "@components/supabase/Breadcrumb";
import NavbarSecond from "@components/supabase/NavbarSecond"
import MobileMenu from "@components/supabase/MobileMenu";
import SidebarMenu from "@components/supabase/SidebarMenu";

export default function Layout({ children, sidebar, sidebarTitle }) {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      {/* <Navbar /> */}
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className="max-w-screen-2xl mx-auto h-full">
        <div className="lg:flex h-full relative">
          <SidebarMenu />
          <div className={`w-60 hidden fixed lg:pl-14 h-full border-r dark:border-r-neutral-800 ${showSidebarMenu && sidebar ? 'lg:block' : 'lg:hidden'}`}>
            <div className="border-b dark:border-b-neutral-800 h-12 flex items-center p-4">
              <h4 className="text-base font-medium dark:text-white">{sidebarTitle || "Menu"}</h4>
            </div>
            <div style={{
              // to activate scrollbar
              maxHeight: "calc(-55px + 100vh)"
            }} className="p-2 flex flex-col gap-y-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
              {sidebar}
            </div>
          </div>
          <div className={`w-full pl-14 ${showSidebarMenu && sidebar ? 'lg:pl-60' : 'lg:pl-14'}`}>
            <NavbarSecond />
            {/* subnavbar show when small screen */}
            {sidebar &&
              <SubNavbar className="block lg:hidden">
                {sidebar}
              </SubNavbar>
            }
            <div className="px-3 pt-1.5 pb-3 md:px-4 md:pb-4">
              <Breadcrumb />
              {/* Start Content */}
              {children}
              {/* End Content */}
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

function SubNavbar({ className, children }) {
  return (
    <Popover open={true} className={`${className} sticky top-12 w-full px-1.5 py-1.5 md:px-2.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md backdrop-filter border-b dark:border-b-neutral-800`}>
      {({ open, close }) => (
        <>
          <Popover.Button className="group w-full py-1.5 px-2 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded flex justify-between space-x-1 items-center text-sm font-medium transition-all">
            <span>Menu</span>
            <ChevronDownIcon
              className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-5 w-5`}
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
            <Popover.Panel className="absolute top-11 inset-x-0 px-3 w-full z-[5]">
              <div className="h-[310px] p-3 bg-white dark:bg-neutral-900 dark:text-neutral-200 border shadow flex flex-col space-y-1 dark:border-neutral-800 scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}