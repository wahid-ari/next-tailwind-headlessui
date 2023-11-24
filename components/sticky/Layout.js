import Breadcrumb from '@components/sticky/Breadcrumb';
import MobileMenu from '@components/sticky/MobileMenu';
import Navbar from '@components/sticky/Navbar';
import Sidebar from '@components/sticky/Sidebar';

export default function Layout({ children }) {
  return (
    <div className='dark:bg-neutral-900 min-h-screen'>
      <Navbar />
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className='max-w-screen-2xl mx-auto h-full'>
        <div className='lg:flex h-full'>
          <Sidebar />
          <main className='px-4 pb-4 w-full'>
            <Breadcrumb />
            {/* Start Content */}
            {children}
            {/* End Content */}
          </main>
        </div>
        <footer>
          <p className='dark:text-white py-16 text-2xl font-semibold text-center border-t dark:border-t-neutral-800'>
            Footer
          </p>
        </footer>
      </div>
    </div>
  );
}
