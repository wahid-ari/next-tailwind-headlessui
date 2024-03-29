import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';

import Breadcrumb from '@components/dashboardicon/Breadcrumb';
import DashboardNavIcon from '@components/dashboardicon/DashboardNavIcon';
import MobileMenuIcon from '@components/dashboardicon/MobileMenuIcon';
import SidebarMenuIcon from '@components/dashboardicon/SidebarMenuIcon';

export default function LayoutDashboardIcon({ children }) {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      <DashboardNavIcon />
      <MobileMenuIcon />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='mx-auto h-full max-w-screen-2xl'>
        <div className='h-full lg:flex'>
          <SidebarMenuIcon />
          <main className={`${showSidebarMenu ? 'lg:ml-60' : 'lg:ml-14'} w-full px-4 pb-4 pt-2`}>
            <Breadcrumb />
            {/* Start Content */}
            {children}
            {/* End Content */}
          </main>
        </div>
      </div>
    </div>
  );
}
