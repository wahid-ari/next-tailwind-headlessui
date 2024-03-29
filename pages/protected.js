import Head from 'next/head';
import { useSession } from 'next-auth/react';

import Footer from '@components/Footer';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';

export default function Protected() {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>Protected Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
          <section className='body-font text-gray-600'>
            <div className='mx-auto py-24'>
              <div className='mb-20 text-center'>
                <div className='title-font mb-4 font-medium text-gray-900 dark:text-neutral-200 sm:text-4xl'>
                  {session && (
                    <>
                      Auth from session NextAuth :<p>ID {session.id}</p>
                      <p>Name {session.user.name}</p>
                      <p>Email {session.user.email}</p>
                      <p>Token {session.user.token} aa</p>
                      <p>Token {session.token}</p>
                    </>
                  )}
                </div>
                <p className='mx-auto text-base leading-relaxed text-gray-500 dark:text-neutral-300 lg:w-3/4 xl:w-2/4'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                  poutine, ramps microdosing banh mi pug.
                </p>
                <div className='mt-6 flex justify-center'>
                  <div className='inline-flex h-1 w-16 rounded-full bg-gray-800'></div>
                </div>
              </div>
              <div className='-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0'>
                <div className='flex flex-col items-center p-4 text-center md:w-1/3'>
                  <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-gray-800'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-10 w-10'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                    </svg>
                  </div>
                  <div className='flex-grow'>
                    <h2 className='title-font mb-3 text-lg font-medium text-gray-900'>Shooting Stars</h2>
                    <p className='text-base leading-relaxed dark:text-neutral-200'>
                      Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                      poutine, ramps microdosing banh mi pug VHS try-hard.
                    </p>
                    <a className='mt-3 inline-flex items-center text-gray-900' href='#'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='ml-2 h-4 w-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className='flex flex-col items-center p-4 text-center md:w-1/3'>
                  <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-gray-900'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-10 w-10'
                      viewBox='0 0 24 24'
                    >
                      <circle cx='6' cy='6' r='3'></circle>
                      <circle cx='6' cy='18' r='3'></circle>
                      <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                    </svg>
                  </div>
                  <div className='flex-grow'>
                    <h2 className='title-font mb-3 text-lg font-medium text-gray-900'>The Catalyzer</h2>
                    <p className='text-base leading-relaxed dark:text-neutral-200'>
                      Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                      poutine, ramps microdosing banh mi pug VHS try-hard.
                    </p>
                    <a className='mt-3 inline-flex items-center text-gray-900' href='#'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='ml-2 h-4 w-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className='flex flex-col items-center p-4 text-center md:w-1/3'>
                  <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-gray-900'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-10 w-10'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <div className='flex-grow'>
                    <h2 className='title-font mb-3 text-lg font-medium text-gray-900'>Neptune</h2>
                    <p className='text-base leading-relaxed dark:text-neutral-200'>
                      Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                      poutine, ramps microdosing banh mi pug VHS try-hard.
                    </p>
                    <a className='mt-3 inline-flex items-center text-gray-900' href='#'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='ml-2 h-4 w-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <button className='mx-auto mt-16 flex rounded border-0 bg-gray-800 px-8 py-2 text-lg text-white hover:bg-gray-900 focus:outline-none'>
                Button
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </Layout>
    </div>
  );
}
