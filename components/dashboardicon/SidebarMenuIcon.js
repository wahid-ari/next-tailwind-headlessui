import { useContext } from "react";
import { BadgeCheckIcon, BellIcon, BookmarkAltIcon, ChartSquareBarIcon, EmojiHappyIcon, FireIcon, HomeIcon, LibraryIcon } from "@heroicons/react/outline"
import { GlobalContext } from "@utils/GlobalContext";
import SidebarNavLink from "@components/dashboardicon/SidebarNavLink"
import SidebarNavIcon from "@components/dashboardicon/SidebarNavIcon";
import SidebarNavAccordion from "@components/dashboardicon/SidebarNavAccordion";
import SidebarNavAccordionIcon from "@components/dashboardicon/SidebarNavAccordionIcon";
import { Transition } from "@headlessui/react";

export default function SidebarMenuIcon() {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <aside className={`${showSidebarMenu ? "w-60" : "w-14"} hidden lg:block pt-[50px] fixed inset-y-0 border-r dark:border-r-neutral-800`}>
      <div className={`p-2 gap-2 max-h-full overflow-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded`}>

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

            <hr className="border-neutral-200 dark:border-neutral-800" />

            <SidebarNavLink href="/dashboardicon" icon={<EmojiHappyIcon className="w-5 h-5" />}>
              Dashboard Icon
            </SidebarNavLink>

            <SidebarNavAccordion name="First" routeName="/dashboardd/first" icon={<BadgeCheckIcon className="w-5 h-5" />}>
              <SidebarNavLink href="/dashboardd/first" icon={<BadgeCheckIcon className="w-5 h-5" />} className="mb-1.5">
                First
              </SidebarNavLink>
              <SidebarNavLink href="/dashboardd/first/b" icon={<BadgeCheckIcon className="w-5 h-5" />}>
                First B
              </SidebarNavLink>
            </SidebarNavAccordion>

            <SidebarNavAccordion name="Second" routeName="/dashboardd/second" icon={<BellIcon className="w-5 h-5" />}>
              <SidebarNavLink href="/dashboardd/second" icon={<BellIcon className="w-5 h-5" />} className="mb-1.5">
                Second
              </SidebarNavLink>
              <SidebarNavLink href="/dashboardd/second/b" icon={<BellIcon className="w-5 h-5" />}>
                Second B
              </SidebarNavLink>
            </SidebarNavAccordion>
          </>
          :
          <>
            {/* <Transition
              show={!showSidebarMenu}
              enter="transition duration-300 ease-in"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition-all ease-out"
              leaveFrom="transform opacity-100"
              leaveTo="transform opacity-0"
            > */}
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

            <hr className="border-neutral-200 dark:border-neutral-800" />

            <SidebarNavIcon href="/dashboardicon" name="Dashboard Icon">
              <EmojiHappyIcon className="w-5 h-5" />
            </SidebarNavIcon>

            <SidebarNavAccordionIcon name="First" routeName="/dashboardd/first" icon={<BadgeCheckIcon className="w-5 h-5" />}>
              <SidebarNavIcon href="/dashboardd/first" name="Dashboard First" className="mb-1.5 px-2.5">
                <BadgeCheckIcon className="w-5 h-5" />
              </SidebarNavIcon>
              <SidebarNavIcon href="/dashboardd/first/b" name="Dashboard First B" className="px-2.5">
                <BadgeCheckIcon className="w-5 h-5" />
              </SidebarNavIcon>
            </SidebarNavAccordionIcon>

            <SidebarNavAccordionIcon name="Second" routeName="/dashboardd/second" icon={<BellIcon className="w-5 h-5" />}>
              <SidebarNavIcon href="/dashboardd/second" name="Dashboard Second" className="mb-1.5 px-2.5">
                <BellIcon className="w-5 h-5" />
              </SidebarNavIcon>
              <SidebarNavIcon href="/dashboardd/second/b" name="Dashboard Second B" className="px-2.5">
                <BellIcon className="w-5 h-5" />
              </SidebarNavIcon>
            </SidebarNavAccordionIcon>
            {/* </Transition> */}
          </>
        }
      </div>
    </aside>
  )
}