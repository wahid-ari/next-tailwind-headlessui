import Link from 'next/link';
import Breadcrumb from '@components/Breadcrumb';
import ThemeToggle from '@components/exdashboard/ThemeToggle';
import Layout from '@components/Layout';

export default function Index() {
  return (
    <>
      <Layout>
        <Breadcrumb />
        <Link href='/dashboard' passHref>
          <span className='p-3 text-sm font-medium text-blue-500 transition-all'>Dashboard</span>
        </Link>
        <ThemeToggle />
      </Layout>
    </>
  );
}
