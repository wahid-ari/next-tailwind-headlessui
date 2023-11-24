import SidebarNavAccordion from '@components/dashboard/SidebarNavAccordion';
import SidebarNavLink from '@components/dashboard/SidebarNavLink';
import { ArrowCircleRightIcon, ArrowSmRightIcon, BadgeCheckIcon, BellIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <aside className='w-72 hidden lg:block border-r dark:border-r-neutral-800'>
      <div className='h-[calc(100vh-55px)] sticky top-12 max-h-full overflow-auto px-4 py-2 gap-y-1 flex flex-col scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded'>
        <SidebarNavLink href='/dashboard' icon={<ArrowSmRightIcon className='w-4 h-4' />}>
          Dashboard
        </SidebarNavLink>

        <SidebarNavAccordion name='First' routeName='/dashboardd/first' icon={<BadgeCheckIcon className='w-4 h-4' />}>
          <SidebarNavLink href='/dashboardd/first' icon={<BadgeCheckIcon className='w-4 h-4' />} className='mb-1'>
            First
          </SidebarNavLink>
          <SidebarNavLink href='/dashboardd/first/b' icon={<BadgeCheckIcon className='w-4 h-4' />}>
            First B
          </SidebarNavLink>
        </SidebarNavAccordion>

        <SidebarNavAccordion name='Second' routeName='/dashboardd/second' icon={<BellIcon className='w-4 h-4' />}>
          <SidebarNavLink href='/dashboardd/second' icon={<BellIcon className='w-4 h-4' />} className='mb-1'>
            Second
          </SidebarNavLink>
          <SidebarNavLink href='/dashboardd/second/b' icon={<BellIcon className='w-4 h-4' />}>
            Second B
          </SidebarNavLink>
        </SidebarNavAccordion>

        <SidebarNavLink href='/dashboardd' icon={<ArrowCircleRightIcon className='w-4 h-4' />}>
          Dashboardd
        </SidebarNavLink>

        <SidebarNavLink href='/dashboarddd' icon={<ArrowCircleRightIcon className='w-4 h-4' />}>
          Dashboarddd
        </SidebarNavLink>

        <SidebarNavLink href='/dashboardtwo' icon={<ArrowCircleRightIcon className='w-4 h-4' />}>
          Dashboard Two
        </SidebarNavLink>

        <SidebarNavLink href='/dashboardthree' icon={<ArrowCircleRightIcon className='w-4 h-4' />}>
          Dashboard Three
        </SidebarNavLink>

        <SidebarNavLink href='/dashboardicon' icon={<ArrowCircleRightIcon className='w-4 h-4' />}>
          Dashboard Icon
        </SidebarNavLink>

        <SidebarNavLink href='/sticky' icon={<ArrowCircleRightIcon className='w-4 h-4' />}>
          Sticky
        </SidebarNavLink>

        <SidebarNavLink href='/supabase' icon={<ArrowCircleRightIcon className='w-4 h-4' />}>
          Supabase
        </SidebarNavLink>

        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <SidebarNavLink key={item + 1} href='#' icon={<ArrowSmRightIcon className='w-4 h-4' />}>
              Link #{item}
            </SidebarNavLink>
          );
        })}
      </div>
    </aside>
  );
}
