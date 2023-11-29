import { useContext } from 'react';
import { ArrowCircleRightIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

import SidebarNavLink from '@components/dashboard/SidebarNavLink';

export default function SidebarMenuThird() {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <aside
      className={`hidden w-60 ${
        showSidebarMenu ? 'lg:block' : ''
      } fixed inset-y-0 border-r pt-[3.5rem] dark:border-r-neutral-800`}
    >
      <div className='flex max-h-full flex-col gap-y-1 overflow-auto py-1 pl-2 pr-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700'>
        <SidebarNavLink href='/dashboard' icon={<ArrowSmRightIcon className='h-4 w-4' />}>
          Dashboard
        </SidebarNavLink>

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
          Dashboard Sticky
        </SidebarNavLink>

        <SidebarNavLink href='/supabase' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
          Supabase
        </SidebarNavLink>
      </div>
    </aside>
  );
}
