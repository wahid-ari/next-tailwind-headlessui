import Breadcrumb from '@components/Breadcrumb';
import ExDashboardNav from '@components/exdashboard/ExDashboardNav';
import ExMobileMenu from '@components/exdashboard/ExMobileMenu';
import ExSidebarMenu from '@components/exdashboard/ExSidebarMenu';
import ThemeToggle from '@components/exdashboard/ThemeToggle';

export default function ExLayoutDashboard({ children }) {
  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      <ThemeToggle />
      <ExDashboardNav />
      <ExMobileMenu />
      <div className='mx-auto mt-2 h-full max-w-screen-2xl border px-2 dark:border-neutral-700'>
        <div className='h-full py-2 lg:flex'>
          <ExSidebarMenu />
          <main className='w-full border px-2 dark:border-neutral-700 lg:ml-60'>
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
