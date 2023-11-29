import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';

import BreadcrumbTwo from '@components/dashboardtwo/BreadcrumbTwo';
import DashboardNavTwo from '@components/dashboardtwo/DashboardNavTwo';
import MobileMenuTwo from '@components/dashboardtwo/MobileMenuTwo';
import SidebarMenuTwo from '@components/dashboardtwo/SidebarMenuTwo';

export default function LayoutDashboardTwo({ children }) {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='mx-auto h-full max-w-screen-2xl'>
        <div className='h-full lg:flex'>
          <SidebarMenuTwo />
          <MobileMenuTwo />
          <main className={`${showSidebarMenu ? 'lg:ml-60' : ''} w-full`}>
            <DashboardNavTwo />
            <div className='px-3 pb-4 pt-1.5 lg:px-4'>
              <BreadcrumbTwo />
              {/* Start Content */}
              {children}
              {/* End Content */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
