import { useContext } from "react";
import { BookmarkAltIcon, ChartSquareBarIcon, EmojiHappyIcon, FireIcon, HomeIcon, LibraryIcon } from "@heroicons/react/outline"
import { GlobalContext } from "@utils/GlobalContext";
import SidebarNavLink from "@components/dashboardicon/SidebarNavLink"
import SidebarNavIcon from "@components/dashboardicon/SidebarNavIcon";

export default function SidebarMenuIcon() {

  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <aside className={`${showSidebarMenu ? "hidden lg:block w-60" : "hidden lg:block w-14"} pt-[50px] fixed inset-y-0 border-r dark:border-r-neutral-800`}>
      <div className={`${showSidebarMenu ? "py-2 px-2.5" : 'p-2'} gap-2 max-h-full overflow-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded`}>

        {showSidebarMenu ?
          <>
            <SidebarNavLink href="/dashboard" icon={<HomeIcon className="w-5 h-5" />}>
              Dashboard
            </SidebarNavLink>

            <SidebarNavLink href="/dashboardd" icon={<LibraryIcon className="w-5 h-5" />}>
              Dashboardd
            </SidebarNavLink>

            <SidebarNavLink href="/dashboarddd" icon={<FireIcon className="w-5 h-5" />}>
              Dashboarddd
            </SidebarNavLink>

            <SidebarNavLink href="/dashboardtwo" icon={<ChartSquareBarIcon className="w-5 h-5" />}>
              Dashboard Two
            </SidebarNavLink>

            <SidebarNavLink href="/dashboardthree" icon={<BookmarkAltIcon className="w-5 h-5" />}>
              Dashboard Three
            </SidebarNavLink>

            <SidebarNavLink href="/dashboardicon" icon={<EmojiHappyIcon className="w-5 h-5" />}>
              Dashboard Icon
            </SidebarNavLink>
          </>
          :
          <>
            <SidebarNavIcon href="/dashboard" name="Dashboard">
              <HomeIcon className="w-5 h-5" />
            </SidebarNavIcon>

            <SidebarNavIcon href="/dashboardd" name="Dashboardd">
              <LibraryIcon className="w-5 h-5" />
            </SidebarNavIcon>

            <SidebarNavIcon href="/dashboarddd" name="Dashboarddd">
              <FireIcon className="w-5 h-5" />
            </SidebarNavIcon>

            <SidebarNavIcon href="/dashboardtwo" name="Dashboard Two">
              <ChartSquareBarIcon className="w-5 h-5" />
            </SidebarNavIcon>

            <SidebarNavIcon href="/dashboardthree" name="Dashboard Three">
              <BookmarkAltIcon className="w-5 h-5" />
            </SidebarNavIcon>

            <SidebarNavIcon href="/dashboardicon" name="Dashboard Icon">
              <EmojiHappyIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </>
        }
      </div>
    </aside>
  )
}