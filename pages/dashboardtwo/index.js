import Head from 'next/head';

import LayoutDashboardTwo from '@components/dashboardtwo/LayoutDashboardTwo';

export default function Index() {
  return (
    <>
      <Head>
        <title>Dashboard Two</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LayoutDashboardTwo>
        <div className='flex h-96 items-center justify-center bg-green-500'>
          <h1 className='px-8 text-2xl font-medium text-white'>Example Dashboard Layout Two Column</h1>
        </div>
        <div className='h-96 bg-violet-500'></div>
        <div className='h-96 bg-red-500'></div>
      </LayoutDashboardTwo>
    </>
  );
}
