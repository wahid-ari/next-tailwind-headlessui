import Breadcrumb from '@components/supabase/Breadcrumb';
import MobileMenu from '@components/supabase/MobileMenu';
import NavbarSecond from '@components/supabase/NavbarSecond';
import SidebarMenu from '@components/supabase/SidebarMenu';

export default function Layout({ children, sidebar, sidebarTitle }) {
  return (
    <div className='dark:bg-neutral-900 min-h-screen'>
      {/* <Navbar /> */}
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='max-w-screen-2xl mx-auto h-full'>
        <div className='lg:flex h-full relative'>
          <SidebarMenu />
          {/* subsidebar */}
          <div className='w-60 hidden fixed lg:pl-14 h-full border-r dark:border-r-neutral-800 lg:block'>
            <div className='border-b dark:border-b-neutral-800 h-12 flex items-center p-4'>
              <h4 className='text-base font-medium dark:text-white'>{sidebarTitle || 'Menu'}</h4>
            </div>
            <div
              style={{
                // to activate scrollbar
                maxHeight: 'calc(-55px + 100vh)',
              }}
              className='p-2 flex flex-col gap-y-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thinner scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded'
            >
              {sidebar}
            </div>
          </div>
          <div className='w-full pl-14 lg:pl-60'>
            <NavbarSecond />
            {/* subnavbar show when small screen */}
            {sidebar && (
              <div className='h-12 flex gap-1 justify-between lg:hidden sticky top-12 w-full px-1.5 py-1.5 md:px-2.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md backdrop-filter border-b dark:border-b-neutral-800 overflow-y-hidden scrollbar-thin scrollbar-thinner scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded'>
                {sidebar}
              </div>
            )}
            <div className='px-3 pt-1.5 pb-3 md:px-4 md:pb-4'>
              <Breadcrumb />
              {/* Start Content */}
              {children}
              {/* End Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
