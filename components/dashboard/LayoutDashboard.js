import Breadcrumbb from '@components/dashboard/Breadcrumbb';
import DashboardNav from '@components/dashboard/DashboardNav';
import MobileMenu from '@components/dashboard/MobileMenu';
import SidebarMenu from '@components/dashboard/SidebarMenu';

export default function LayoutDashboard({ children }) {
  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      <DashboardNav />
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='mx-auto h-full max-w-screen-2xl px-2 py-2'>
        <div className='h-full lg:flex'>
          <SidebarMenu />
          <main className='w-full lg:ml-60 lg:pl-4 lg:pr-2'>
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
