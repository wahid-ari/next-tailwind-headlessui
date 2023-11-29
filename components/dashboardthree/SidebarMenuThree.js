import { useContext } from 'react';
import { ArrowCircleRightIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

import SidebarNavLink from '@components/dashboard/SidebarNavLink';

export default function SidebarMenuThree() {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <aside
      className={`hidden w-52 ${showSidebarMenu ? 'lg:block' : ''} fixed inset-y-0 border-r dark:border-r-neutral-800`}
    >
      <div className='flex items-center gap-x-2 border-b px-6 py-1 dark:border-b-neutral-800'>
        <p className='py-1.5 font-medium dark:text-white'>Dashboard Three</p>
      </div>

      <div className='mt-2 flex max-h-[90%] flex-col gap-y-1 overflow-auto px-4 py-1 pb-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700'>
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
          Sticky
        </SidebarNavLink>

        <SidebarNavLink href='/supabase' icon={<ArrowCircleRightIcon className='h-4 w-4' />}>
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
  );
}
