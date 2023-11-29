import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';

import BreadcrumbThree from '@components/dashboardthree/BreadcrumbThree';
import DashboardNavThree from '@components/dashboardthree/DashboardNavThree';
import MobileMenuThree from '@components/dashboardthree/MobileMenuThree';
import SidebarMenuThree from '@components/dashboardthree/SidebarMenuThree';

export default function LayoutDashboardThree({ children }) {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='mx-auto h-full max-w-screen-2xl'>
        <div className='h-full lg:flex'>
          <SidebarMenuThree />
          <MobileMenuThree />
          <main className={`${showSidebarMenu ? 'lg:ml-52' : ''} w-full`}>
            <DashboardNavThree />
            <div className='px-2 py-4 lg:px-4 '>
              {/* <BreadcrumbThree /> */}
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
