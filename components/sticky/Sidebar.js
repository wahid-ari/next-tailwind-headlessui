import SidebarNavAccordion from '@components/dashboard/SidebarNavAccordion';
import SidebarNavLink from '@components/dashboard/SidebarNavLink';
import { ArrowCircleRightIcon, ArrowSmRightIcon, BadgeCheckIcon, BellIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <aside className='hidden w-72 border-r dark:border-r-neutral-800 lg:block'>
      <div className='sticky top-12 flex h-[calc(100vh-55px)] max-h-full flex-col gap-y-1 overflow-auto px-4 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700'>
        <SidebarNavLink href='/dashboard' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
          Dashboard
        </SidebarNavLink>

        <SidebarNavAccordion name='First' routeName='/dashboardd/first' icon={<BadgeCheckIcon className='h-4 w-4' />}>
          <SidebarNavLink href='/dashboardd/first' icon={<BadgeCheckIcon className='h-4 w-4' />} className='mb-1'>
            First
          </SidebarNavLink>
          <SidebarNavLink href='/dashboardd/first/b' icon={<BadgeCheckIcon className='h-4 w-4' />}>
            First B
          </SidebarNavLink>
        </SidebarNavAccordion>

        <SidebarNavAccordion name='Second' routeName='/dashboardd/second' icon={<BellIcon className='h-4 w-4' />}>
          <SidebarNavLink href='/dashboardd/second' icon={<BellIcon className='h-4 w-4' />} className='mb-1'>
            Second
          </SidebarNavLink>
          <SidebarNavLink href='/dashboardd/second/b' icon={<BellIcon className='h-4 w-4' />}>
            Second B
          </SidebarNavLink>
        </SidebarNavAccordion>

        <SidebarNavLink href='/dashboardd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboardd
        </SidebarNavLink>

        <SidebarNavLink href='/dashboarddd' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboarddd
        </SidebarNavLink>

        <SidebarNavLink href='/dashboardtwo' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboard Two
        </SidebarNavLink>

        <SidebarNavLink href='/dashboardthree' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboard Three
        </SidebarNavLink>

        <SidebarNavLink href='/dashboardicon' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Dashboard Icon
        </SidebarNavLink>

        <SidebarNavLink href='/sticky' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Sticky
        </SidebarNavLink>

        <SidebarNavLink href='/supabase' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Supabase
        </SidebarNavLink>

        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <SidebarNavLink key={item + 1} href='#' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
              Link #{item}
            </SidebarNavLink>
          );
        })}
      </div>
    </aside>
  );
}
