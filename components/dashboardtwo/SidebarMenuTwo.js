import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import SidebarNavLink from "@components/dashboard/SidebarNavLink"
import { ArrowCircleRightIcon, ArrowSmRightIcon, MenuIcon } from "@heroicons/react/outline"

export default function SidebarMenuTwo() {

  const { showSidebarMenu, setShowSidebarMenu } = useContext(GlobalContext);

  return (
    <aside className={`w-60 hidden ${showSidebarMenu ? "lg:block" : ""} fixed inset-y-0 border-r dark:border-r-neutral-800`}>

      <div className="px-5 py-1 flex gap-x-2 items-center border-b dark:border-b-neutral-800">
        <button onClick={() => setShowSidebarMenu(!showSidebarMenu)} className="hidden lg:flex items-center gap-x-1 text-sm font-medium p-1">
          <span className="sr-only">Open Sidebar Panel</span>
          <MenuIcon className="block h-5 w-5" aria-hidden="true" />
        </button>
        <p className="font-medium text-sm dark:text-white py-2">Dashboard Two</p>
      </div>

      <div className="max-h-[90%] py-1 mt-2 pb-4 overflow-auto px-4 gap-y-1 flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
        <SidebarNavLink href="/dashboard" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
          Dashboard
        </SidebarNavLink>

        <SidebarNavLink href="/dashboardd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboardd
        </SidebarNavLink>

        <SidebarNavLink href="/dashboarddd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboarddd
        </SidebarNavLink>

        <SidebarNavLink href="/dashboardtwo" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboard Two
        </SidebarNavLink>

        <SidebarNavLink href="/dashboardthree" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboard Three
        </SidebarNavLink>

        <SidebarNavLink href="/dashboardicon" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Dashboard Icon
        </SidebarNavLink>

        <SidebarNavLink href="/supabase" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
          Supabase
        </SidebarNavLink>

        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => {
            return (
              <SidebarNavLink key={index} href="#" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                Link {item}
              </SidebarNavLink>
            )
          })} */}
      </div>

    </aside>
  )
}