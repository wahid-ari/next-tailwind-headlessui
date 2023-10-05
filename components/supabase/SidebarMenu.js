import { ArrowSmDownIcon, BadgeCheckIcon, BellIcon, BookmarkAltIcon, ChartSquareBarIcon, EmojiHappyIcon, FireIcon, LightBulbIcon, HomeIcon, LibraryIcon, AdjustmentsIcon } from "@heroicons/react/outline"
import SidebarNavIcon from "@components/supabase/SidebarNavIcon";
import SidebarNavAccordionIcon from "@components/supabase/SidebarNavAccordionIcon";

export default function SidebarMenu() {

  return (
    <aside className={`w-14 fixed inset-y-0 border-r dark:border-r-neutral-800`}>
      {/* Scrollbar full */}
      {/* <div className='p-2 gap-2 h-full overflow-auto flex flex-col scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded'> */}
      {/* Scrollbar middle */}
      <div className='h-full flex flex-col'>
        <div style={{
          maxHeight: "calc(-40px + 100vh)",
          scrollbarGutter: 'stable both-edges'
        }} className="px-1 py-2 flex flex-col gap-2 flex-grow overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thinner scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
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

          <SidebarNavAccordionIcon name="First" routeName="/dashboardicon/first" icon={<BadgeCheckIcon className="w-5 h-5" />}>
            <SidebarNavIcon href="/dashboardicon/first" name="Dashboard First" className="px-2.5">
              <BadgeCheckIcon className="w-5 h-5" />
            </SidebarNavIcon>
            <SidebarNavIcon href="/dashboardicon/first/b" name="Dashboard First B" className="px-2.5">
              <BadgeCheckIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon>

          <SidebarNavAccordionIcon name="Second" routeName="/dashboardicon/second" icon={<BellIcon className="w-5 h-5" />}>
            <SidebarNavIcon href="/dashboardicon/second" name="Dashboard Second" className="px-2.5">
              <BellIcon className="w-5 h-5" />
            </SidebarNavIcon>
            <SidebarNavIcon href="/dashboardicon/second/b" name="Dashboard Second B" className="px-2.5">
              <BellIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon>

          <SidebarNavAccordionIcon name="Third" routeName="/dashboardicon/third" icon={<LightBulbIcon className="w-5 h-5" />}>
            <SidebarNavIcon href="/dashboardicon/third" name="Dashboard Third" className="px-2.5">
              <LightBulbIcon className="w-5 h-5" />
            </SidebarNavIcon>
            <SidebarNavIcon href="/dashboardicon/third/b" name="Dashboard Third B" className="px-2.5">
              <LightBulbIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon>

          <SidebarNavIcon href="/supabase" name="Supabase">
            <AdjustmentsIcon className="w-5 h-5" />
          </SidebarNavIcon>
        </div>
        <div className="flex flex-col gap-2 bg-white dark:bg-neutral-900">
          <hr className="border-neutral-200 dark:border-neutral-800" />

          <div className="px-2 pb-2">
            <SidebarNavIcon href="/dashboardicon#" name="Bottom" className="px-2.5">
              <ArrowSmDownIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </div>
        </div>
      </div>
    </aside>
  )
}