import Image from 'next/image';
import Link from 'next/link';
import SidebarNavAccordionIcon from '@components/supabase/SidebarNavAccordionIcon';
import SidebarNavIcon from '@components/supabase/SidebarNavIcon';
import {
  AdjustmentsIcon,
  ArrowSmDownIcon,
  BadgeCheckIcon,
  BellIcon,
  BookmarkAltIcon,
  ChartSquareBarIcon,
  ChipIcon,
  CubeIcon,
  EmojiHappyIcon,
  FireIcon,
  GiftIcon,
  HomeIcon,
  InboxInIcon,
  LibraryIcon,
  LightBulbIcon,
  SupportIcon,
} from '@heroicons/react/outline';

export default function SidebarMenu() {
  return (
    <aside className={`fixed inset-y-0 z-10 w-14 border-r dark:border-r-neutral-800`}>
      {/* Scrollbar full */}
      {/* <div className='p-2 gap-2 h-full overflow-auto flex flex-col scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded'> */}
      {/* Scrollbar middle */}
      <div className='flex h-full flex-col'>
        <div className='flex h-12 items-center justify-center border-b border-b-neutral-200 bg-white p-2.5 dark:border-b-neutral-800 dark:bg-neutral-900'>
          <Link href='/supabase' passHref className='p-0.5'>
            <Image alt='Logo' src='/icon.svg' width={24} height={24} className='dark:hidden' unoptimized />
            <Image alt='Logo' src='/icon-dark.svg' width={24} height={24} className='hidden dark:block' unoptimized />
          </Link>
        </div>

        <div
          style={{
            // to keep both padding same when scrollbar showed
            scrollbarGutter: 'stable both-edges',
          }}
          className='scrollbar-thinner flex flex-grow flex-col gap-2 overflow-y-auto overflow-x-hidden px-1 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700'
        >
          {/* TODO show detail menu in small sidebarmenu */}
          <SidebarNavIcon href='/dashboard' name='Dashboard'>
            <HomeIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavIcon href='/dashboardd' name='Dashboardd'>
            <LibraryIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavIcon href='/dashboarddd' name='Dashboarddd'>
            <FireIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavIcon href='/dashboardtwo' name='Dashboard Two'>
            <ChartSquareBarIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavIcon href='/dashboardthree' name='Dashboard Three'>
            <BookmarkAltIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <hr className='border-neutral-200 dark:border-neutral-800' />

          <SidebarNavIcon href='/dashboardicon' name='Dashboard Icon'>
            <EmojiHappyIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavAccordionIcon
            name='First'
            routeName='/dashboardicon/first'
            icon={<BadgeCheckIcon className='h-5 w-5' />}
          >
            <SidebarNavIcon href='/dashboardicon/first' name='Dashboard First' className='px-2.5'>
              <BadgeCheckIcon className='h-5 w-5' />
            </SidebarNavIcon>
            <SidebarNavIcon href='/dashboardicon/first/b' name='Dashboard First B' className='px-2.5'>
              <BadgeCheckIcon className='h-5 w-5' />
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

          <hr className='border-neutral-200 dark:border-neutral-800' />

          <SidebarNavIcon href='/supabase' name='Supabase'>
            <AdjustmentsIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavAccordionIcon
            name='Supabase First'
            routeName='/supabase/first'
            icon={<ChipIcon className='h-5 w-5' />}
          >
            <SidebarNavIcon href='/supabase/first' name='Supabase First' className='px-2.5'>
              <ChipIcon className='h-5 w-5' />
            </SidebarNavIcon>
            <SidebarNavIcon href='/supabase/first/b' name='Supabase First B' className='px-2.5'>
              <ChipIcon className='h-5 w-5' />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon>

          <SidebarNavAccordionIcon
            name='Supabase Second'
            routeName='/supabase/second'
            icon={<GiftIcon className='h-5 w-5' />}
          >
            <SidebarNavIcon href='/supabase/second' name='Supabase Second' className='px-2.5'>
              <GiftIcon className='h-5 w-5' />
            </SidebarNavIcon>
            <SidebarNavIcon href='/supabase/second/b' name='Supabase Second B' className='px-2.5'>
              <GiftIcon className='h-5 w-5' />
            </SidebarNavIcon>
          </SidebarNavAccordionIcon>

          <SidebarNavIcon href='/supabase/third' name='Supabase No Submenu'>
            <SupportIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavIcon href='/supabase/forth' name='Supabase Subnavbar scroll'>
            <CubeIcon className='h-5 w-5' />
          </SidebarNavIcon>

          <SidebarNavIcon href='/supabase/fifth' name='Supabase Subnavbar no scroll'>
            <InboxInIcon className='h-5 w-5' />
          </SidebarNavIcon>
        </div>

        <div className='h-12 gap-2 border-t border-t-neutral-200 bg-white dark:border-t-neutral-800 dark:bg-neutral-900'>
          <div className='p-2'>
            <SidebarNavIcon href='/supabase#' name='Top' className='px-2.5'>
              <ArrowSmDownIcon className='h-5 w-5' />
            </SidebarNavIcon>
          </div>
        </div>
      </div>
    </aside>
  );
}
