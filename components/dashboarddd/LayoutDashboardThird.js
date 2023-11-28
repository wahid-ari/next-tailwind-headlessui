import { useContext } from 'react';
import Breadcrumbb from '@components/dashboard/Breadcrumbb';
import DashboardNavThird from '@components/dashboarddd/DashboardNavThird';
import MobileMenuThird from '@components/dashboarddd/MobileMenuThird';
import SidebarMenuThird from '@components/dashboarddd/SidebarMenuThird';
import { GlobalContext } from '@utils/GlobalContext';

export default function LayoutDashboardThird({ children }) {
  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      <DashboardNavThird />
      <MobileMenuThird />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='mx-auto h-full max-w-screen-2xl px-2 py-2'>
        <div className='h-full lg:flex'>
          <SidebarMenuThird />
          <main className={`${showSidebarMenu ? 'lg:ml-60 lg:pl-4 lg:pr-2' : 'px-2'} w-full`}>
            <Breadcrumbb />
            {/* Start Content */}
            {children}
            {/* End Content */}
          </main>
        </div>
      </div>
    </div>
  );
}
