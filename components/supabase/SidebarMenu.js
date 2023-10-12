import { ArrowSmDownIcon, BadgeCheckIcon, BellIcon, BookmarkAltIcon, ChartSquareBarIcon, EmojiHappyIcon, FireIcon, LightBulbIcon, HomeIcon, LibraryIcon, AdjustmentsIcon, ChipIcon, GiftIcon, SupportIcon, CubeIcon, InboxInIcon } from "@heroicons/react/outline"
import SidebarNavIcon from "@components/supabase/SidebarNavIcon";
import SidebarNavAccordionIcon from "@components/supabase/SidebarNavAccordionIcon";
import Link from "next/link";
import Image from "next/image";

export default function SidebarMenu() {

  return (
    <aside className={`w-14 z-10 fixed inset-y-0 border-r dark:border-r-neutral-800`}>
      {/* Scrollbar full */}
      {/* <div className='p-2 gap-2 h-full overflow-auto flex flex-col scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded'> */}
      {/* Scrollbar middle */}
      <div className='h-full flex flex-col'>

        <div className="p-2 h-12 flex items-center justify-center bg-white dark:bg-neutral-900 border-b border-b-neutral-200 dark:border-b-neutral-800">
          <Link
            href='/supabase'
            passHref
            className="p-0.5"
          >
            <Image alt='Logo' src='/icon.svg' width={24} height={24} className="dark:hidden" unoptimized />
            <Image alt='Logo' src='/icon-dark.svg' width={24} height={24} className="hidden dark:block" unoptimized />
          </Link>
        </div>

        <div style={{
          // to keep both padding same when scrollbar showed
          scrollbarGutter: 'stable both-edges'
        }} className="px-1 py-2 flex flex-col gap-2 flex-grow overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thinner scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">

          {/* TODO show detail menu in small sidebarmenu */}
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

          {/* <SidebarNavAccordionIcon name="Second" routeName="/dashboardicon/second" icon={<BellIcon className="w-5 h-5" />}>
            <SidebarNavIcon href="/dashboardicon/second" name="Dashboard Second" className="px-2.5">
              <BellIcon className="w-5 h-5" />
            </SidebarNavIcon>
            <SidebarNavIcon href="/dashboardicon/second/b" name="Dashboard Second B" className="px-2.5">
              <BellIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon> */}

          <hr className="border-neutral-200 dark:border-neutral-800" />

          <SidebarNavIcon href="/supabase" name="Supabase">
            <AdjustmentsIcon className="w-5 h-5" />
          </SidebarNavIcon>

          <SidebarNavAccordionIcon name="Supabase First" routeName="/supabase/first" icon={<ChipIcon className="w-5 h-5" />}>
            <SidebarNavIcon href="/supabase/first" name="Supabase First" className="px-2.5">
              <ChipIcon className="w-5 h-5" />
            </SidebarNavIcon>
            <SidebarNavIcon href="/supabase/first/b" name="Supabase First B" className="px-2.5">
              <ChipIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon>

          <SidebarNavAccordionIcon name="Supabase Second" routeName="/supabase/second" icon={<GiftIcon className="w-5 h-5" />}>
            <SidebarNavIcon href="/supabase/second" name="Supabase Second" className="px-2.5">
              <GiftIcon className="w-5 h-5" />
            </SidebarNavIcon>
            <SidebarNavIcon href="/supabase/second/b" name="Supabase Second B" className="px-2.5">
              <GiftIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon>

          <SidebarNavIcon href="/supabase/third" name="Supabase No Submenu">
            <SupportIcon className="w-5 h-5" />
          </SidebarNavIcon>
          
          <SidebarNavIcon href="/supabase/forth" name="Supabase Subnavbar scroll">
            <CubeIcon className="w-5 h-5" />
          </SidebarNavIcon>

          <SidebarNavIcon href="/supabase/fifth" name="Supabase Subnavbar no scroll">
            <InboxInIcon className="w-5 h-5" />
          </SidebarNavIcon>
        </div>

        <div className="h-12 gap-2 bg-white dark:bg-neutral-900 border-t border-t-neutral-200 dark:border-t-neutral-800">
          <div className="p-2">
            <SidebarNavIcon href="/supabase#" name="Top" className="px-2.5">
              <ArrowSmDownIcon className="w-5 h-5" />
            </SidebarNavIcon>
          </div>
        </div>

      </div>
    </aside>
  )
}