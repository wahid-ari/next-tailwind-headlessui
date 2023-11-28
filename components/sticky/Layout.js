import Breadcrumb from '@components/sticky/Breadcrumb';
import MobileMenu from '@components/sticky/MobileMenu';
import Navbar from '@components/sticky/Navbar';
import Sidebar from '@components/sticky/Sidebar';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen dark:bg-neutral-900'>
      <Navbar />
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='mx-auto h-full max-w-screen-2xl'>
        <div className='h-full lg:flex'>
          <Sidebar />
          <main className='w-full px-4 pb-4'>
            <Breadcrumb />
            {/* Start Content */}
            {children}
            {/* End Content */}
          </main>
        </div>
        <footer>
          <p className='border-t py-16 text-center text-2xl font-semibold dark:border-t-neutral-800 dark:text-white'>
            Footer
          </p>
        </footer>
      </div>
    </div>
  );
}
