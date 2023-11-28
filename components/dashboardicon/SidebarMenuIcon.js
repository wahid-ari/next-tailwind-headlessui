import { useContext } from 'react';
import SidebarNavAccordion from '@components/dashboardicon/SidebarNavAccordion';
import SidebarNavAccordionIcon from '@components/dashboardicon/SidebarNavAccordionIcon';
import SidebarNavIcon from '@components/dashboardicon/SidebarNavIcon';
import SidebarNavLink from '@components/dashboardicon/SidebarNavLink';
import {
  AdjustmentsIcon,
  ArrowCircleRightIcon,
  ArrowSmDownIcon,
  BadgeCheckIcon,
  BellIcon,
  BookmarkAltIcon,
  ChartSquareBarIcon,
  EmojiHappyIcon,
  FireIcon,
  HomeIcon,
  LibraryIcon,
  LightBulbIcon,
} from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function SidebarMenuIcon() {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <aside
      className={`${
        showSidebarMenu ? 'w-60' : 'w-14'
      } fixed inset-y-0 hidden border-r pt-[50px] dark:border-r-neutral-800 lg:block`}
    >
      {/* Scrollbar full */}
      {/* <div className='p-2 gap-2 h-full overflow-auto flex flex-col scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded'> */}
      {/* Scrollbar middle */}
      <div className='flex h-full flex-col'>
        {showSidebarMenu ? (
          <>
            {/* Scrollbar Middle */}
            <div className='flex flex-grow flex-col gap-2 overflow-auto p-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700'>
              <SidebarNavLink href='/dashboard' icon={<HomeIcon className='h-5 w-5' />}>
                Dashboard
              </SidebarNavLink>

              <SidebarNavLink href='/dashboardd' icon={<LibraryIcon className='h-5 w-5' />}>
                Dashboardd
              </SidebarNavLink>

              <SidebarNavLink href='/dashboarddd' icon={<FireIcon className='h-5 w-5' />}>
                Dashboarddd
              </SidebarNavLink>

              <SidebarNavLink href='/dashboardtwo' icon={<ChartSquareBarIcon className='h-5 w-5' />}>
                Dashboard Two
              </SidebarNavLink>

              <SidebarNavLink href='/dashboardthree' icon={<BookmarkAltIcon className='h-5 w-5' />}>
                Dashboard Three
              </SidebarNavLink>

              <hr className='border-neutral-200 dark:border-neutral-800' />

              <SidebarNavLink href='/dashboardicon' icon={<EmojiHappyIcon className='h-5 w-5' />}>
                Dashboard Icon
              </SidebarNavLink>

              <SidebarNavAccordion
                name='First'
                routeName='/dashboardicon/first'
                icon={<BadgeCheckIcon className='h-5 w-5' />}
              >
                <SidebarNavLink href='/dashboardicon/first' icon={<BadgeCheckIcon className='h-5 w-5' />}>
                  First
                </SidebarNavLink>
                <SidebarNavLink href='/dashboardicon/first/b' icon={<BadgeCheckIcon className='h-5 w-5' />}>
                  First B
                </SidebarNavLink>
              </SidebarNavAccordion>

              <SidebarNavAccordion
                name='Second'
                routeName='/dashboardicon/second'
                icon={<BellIcon className='h-5 w-5' />}
              >
                <SidebarNavLink href='/dashboardicon/second' icon={<BellIcon className='h-5 w-5' />}>
                  Second
                </SidebarNavLink>
                <SidebarNavLink href='/dashboardicon/second/b' icon={<BellIcon className='h-5 w-5' />}>
                  Second B
                </SidebarNavLink>
              </SidebarNavAccordion>

              <SidebarNavAccordion
                name='Third'
                routeName='/dashboardicon/third'
                icon={<LightBulbIcon className='h-5 w-5' />}
              >
                <SidebarNavLink href='/dashboardicon/third' icon={<LightBulbIcon className='h-5 w-5' />}>
                  Third
                </SidebarNavLink>
                <SidebarNavLink href='/dashboardicon/third/b' icon={<LightBulbIcon className='h-5 w-5' />}>
                  Third B
                </SidebarNavLink>
              </SidebarNavAccordion>

              <hr className='border-neutral-200 dark:border-neutral-800' />

              <SidebarNavLink href='/sticky' icon={<ArrowCircleRightIcon className='h-5 w-5' />}>
                Sticky
              </SidebarNavLink>

              <SidebarNavLink href='/supabase' icon={<AdjustmentsIcon className='h-5 w-5' />}>
                Supabase
              </SidebarNavLink>
            </div>

            <div className='border-t border-t-neutral-200 bg-white dark:border-t-neutral-800 dark:bg-neutral-900'>
              <div className='p-2'>
                <SidebarNavLink href='/dashboardicon#' icon={<ArrowSmDownIcon className='h-5 w-5' />}>
                  Bottom
                </SidebarNavLink>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Scrollbar Middle */}
            <div
              style={{
                // to keep both padding same when scrollbar showed
                scrollbarGutter: 'stable both-edges',
              }}
              className='scrollbar-thinner flex flex-grow flex-col gap-2 overflow-y-auto overflow-x-hidden px-1 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700'
            >
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

              <SidebarNavAccordionIcon
                name='Second'
                routeName='/dashboardicon/second'
                icon={<BellIcon className='h-5 w-5' />}
              >
                <SidebarNavIcon href='/dashboardicon/second' name='Dashboard Second' className='px-2.5'>
                  <BellIcon className='h-5 w-5' />
                </SidebarNavIcon>
                <SidebarNavIcon href='/dashboardicon/second/b' name='Dashboard Second B' className='px-2.5'>
                  <BellIcon className='h-5 w-5' />
                </SidebarNavIcon>
              </SidebarNavAccordionIcon>

              <SidebarNavAccordionIcon
                name='Third'
                routeName='/dashboardicon/third'
                icon={<LightBulbIcon className='h-5 w-5' />}
              >
                <SidebarNavIcon href='/dashboardicon/third' name='Dashboard Third' className='px-2.5'>
                  <LightBulbIcon className='h-5 w-5' />
                </SidebarNavIcon>
                <SidebarNavIcon href='/dashboardicon/third/b' name='Dashboard Third B' className='px-2.5'>
                  <LightBulbIcon className='h-5 w-5' />
                </SidebarNavIcon>
              </SidebarNavAccordionIcon>

              <hr className='border-neutral-200 dark:border-neutral-800' />

              <SidebarNavIcon href='/sticky' name='Sticky'>
                <ArrowCircleRightIcon className='h-5 w-5' />
              </SidebarNavIcon>

              <SidebarNavIcon href='/supabase' name='Supabase'>
                <AdjustmentsIcon className='h-5 w-5' />
              </SidebarNavIcon>
            </div>

            <div className='border-t border-t-neutral-200 bg-white dark:border-t-neutral-800 dark:bg-neutral-900'>
              <div className='p-2'>
                <SidebarNavIcon href='/dashboardicon#' name='Bottom' className='px-2.5'>
                  <ArrowSmDownIcon className='h-5 w-5' />
                </SidebarNavIcon>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
