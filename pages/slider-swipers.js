import { useContext, useRef, useState } from 'react';
import Head from 'next/head';
import { ArrowLeftIcon, ArrowRightIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

import Link from 'next/link';
import { Tweets } from '@data/Tweets';
import clsx from 'clsx';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function SliderSwipers() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  // store API swiper instance
  const [apiSwiper, setApiSwiper] = useState(undefined);
  const [apiSwiperActiveIndex, setApiSwiperActiveIndex] = useState(0);
  function handleApiSwiperNavChange(e) {
    setApiSwiperActiveIndex(e);
    apiSwiper.slideTo(e);
  }

  const [apiSwiperVertical, setApiSwiperVertical] = useState(undefined);
  const [apiSwiperActiveIndexVertical, setApiSwiperActiveIndexVertical] = useState(0);
  function handleApiSwiperNavChangeVertical(e) {
    setApiSwiperActiveIndexVertical(e);
    apiSwiperVertical.slideTo(e);
  }

  const [imageSwiper, setImageSwiper] = useState(undefined);
  const [detailSwiper, setDetailSwiper] = useState(undefined);
  const [apiSwiperActiveIndexDouble, setApiSwiperActiveIndexDouble] = useState(0);
  function handleApiSwiperNavChangeDouble(e) {
    setApiSwiperActiveIndexDouble(e);
    imageSwiper.slideTo(e);
    detailSwiper.slideTo(e);
  }

  const [imageSwipers, setImageSwipers] = useState(undefined);
  const [detailSwipers, setDetailSwipers] = useState(undefined);
  const [apiSwiperActiveIndexDoubles, setApiSwiperActiveIndexDoubles] = useState(0);
  function handleApiSwiperNavChangeDoubles(e) {
    setApiSwiperActiveIndexDoubles(e);
    imageSwipers.slideTo(e);
    detailSwipers.slideTo(e);
  }

  const options = [{ title: 'First' }, { title: 'Second' }];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Head>
        <title>Swiper.js Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8'>
          <h1 className='title-font mb-2 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>Horizontal</h1>

          <div className='mt-8 flex space-x-2'>
            {options.map((item, i) => {
              const active = i == apiSwiperActiveIndex;
              return (
                <button
                  key={i}
                  className={clsx(
                    'rounded-md border px-4 py-1 text-sm font-medium transition-all',
                    'dark:border-neutral-700 dark:text-white',
                    active ? 'bg-blue-500 text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                  )}
                  onClick={() => handleApiSwiperNavChange(i)}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className='mt-4 max-w-md text-sm dark:text-white'>
            <Swiper
              onSwiper={setApiSwiper}
              initialSlide={apiSwiperActiveIndex}
              spaceBetween={0}
              slidesPerView={1}
              speed={300}
              allowTouchMove={false}
            >
              <SwiperSlide>
                Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam pariatur Lorem dolor ut velit
                sunt occaecat sit nisi esse. Et laboris deserunt tempor minim consequat tempor consequat minim eiusmod
                velit cupidatat elit proident dolore. Dolore eu ut exercitation tempor.
              </SwiperSlide>
              <SwiperSlide>
                Duis dolore ad excepteur magna ad incididunt do culpa aliqua et aute incididunt velit non. Nostrud minim
                officia excepteur do sit pariatur cillum irure fugiat qui voluptate. Reprehenderit cupidatat eu et
                eiusmod officia incididunt. Est sunt velit ad sit dolor. Magna commodo ut velit eu. Amet dolore labore
                mollit nostrud ad ipsum minim irure. Cupidatat esse minim quis voluptate commodo reprehenderit sit anim
                amet labore incididunt veniam veniam.
              </SwiperSlide>
            </Swiper>
          </div>

          <h1 className='title-font mb-2 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>Vertical</h1>
          <div className='mt-6 flex gap-4'>
            <div className='flex flex-col space-y-2'>
              {options.map((item, i) => {
                const active = i == apiSwiperActiveIndexVertical;
                return (
                  <button
                    key={i}
                    className={clsx(
                      'rounded-md border px-4 py-1 text-sm font-medium transition-all',
                      'dark:border-neutral-700 dark:text-white',
                      active ? 'bg-blue-500 text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                    )}
                    onClick={() => handleApiSwiperNavChangeVertical(i)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            <div className='max-w-md text-sm dark:text-white'>
              <Swiper
                onSwiper={setApiSwiperVertical}
                autoHeight={true}
                initialSlide={apiSwiperActiveIndexVertical}
                spaceBetween={0}
                slidesPerView={1}
                speed={300}
                direction='vertical'
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <div>
                    Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam pariatur Lorem dolor ut
                    velit sunt occaecat sit nisi esse. Et laboris deserunt tempor minim consequat tempor consequat minim
                    eiusmod velit cupidatat elit proident dolore. Dolore eu ut exercitation tempor.
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  Duis dolore ad excepteur magna ad incididunt do culpa aliqua et aute incididunt velit non. Nostrud
                  minim officia excepteur do sit pariatur cillum irure fugiat qui voluptate. Reprehenderit cupidatat eu
                  et eiusmod officia incididunt. Est sunt velit ad sit dolor. Magna commodo ut velit eu. Amet dolore
                  labore mollit nostrud ad ipsum minim irure. Cupidatat esse minim quis voluptate commodo reprehenderit
                  sit anim amet labore incididunt veniam veniam.
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <h1 className='title-font mb-2 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>
            Horizontal Horizontal
          </h1>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            <div>
              <div className='mt-8 flex space-x-2'>
                {options.map((item, i) => {
                  const active = i == apiSwiperActiveIndexDouble;
                  return (
                    <button
                      key={i}
                      className={clsx(
                        'rounded-md border px-4 py-1 text-sm font-medium transition-all',
                        'dark:border-neutral-700 dark:text-white',
                        active ? 'bg-blue-500 text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                      )}
                      onClick={() => handleApiSwiperNavChangeDouble(i)}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <div className='mt-4 text-sm dark:text-white'>
                <Swiper
                  onSwiper={setImageSwiper}
                  initialSlide={apiSwiperActiveIndexDouble}
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <div className='flex h-64 w-full items-center justify-center rounded bg-red-500 text-white'>
                      <p className='text-3xl font-bold'>First</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='flex h-64 w-full items-center justify-center rounded bg-emerald-500 text-white'>
                      <p className='text-3xl font-bold'>Second</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div>
              <div className='mt-8 text-sm dark:text-white'>
                <Swiper
                  onSwiper={setDetailSwiper}
                  initialSlide={apiSwiperActiveIndexDouble}
                  autoHeight={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <p className='mb-2 text-2xl font-bold'>First</p>
                    Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam pariatur Lorem dolor ut
                    velit sunt occaecat sit nisi esse. Et laboris deserunt tempor minim consequat tempor consequat minim
                    eiusmod velit cupidatat elit proident dolore. Dolore eu ut exercitation tempor.
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className='mb-2 text-2xl font-bold'>Second</p>
                    Duis dolore ad excepteur magna ad incididunt do culpa aliqua et aute incididunt velit non. Nostrud
                    minim officia excepteur do sit pariatur cillum irure fugiat qui voluptate. Reprehenderit cupidatat
                    eu et eiusmod officia incididunt. Est sunt velit ad sit dolor. Magna commodo ut velit eu. Amet
                    dolore labore mollit nostrud ad ipsum minim irure. Cupidatat esse minim quis voluptate commodo
                    reprehenderit sit anim amet labore incididunt veniam veniam.
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className='mt-6 text-sm dark:text-white'>
                <p className='mb-2 text-xl font-semibold'>Footer</p>
                Deserunt cupidatat voluptate labore fugiat ex. Ea Lorem duis magna nulla occaecat reprehenderit
                cupidatat culpa cupidatat duis irure ea culpa. Ad in dolore exercitation commodo ullamco ea.
              </div>
            </div>
          </div>

          <h1 className='title-font mb-2 mt-10 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>
            Horizontal Vertical
          </h1>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            <div>
              <div className='mt-8 flex space-x-2 border-b dark:border-b-neutral-800'>
                {options.map((item, i) => {
                  const active = i == apiSwiperActiveIndexDoubles;
                  return (
                    <button
                      key={i}
                      className={clsx(
                        'border-b-2 border-transparent px-4 py-2 text-sm font-medium transition-all duration-200',
                        'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100',
                        active ? 'border-neutral-700 text-neutral-900 dark:border-neutral-200 dark:text-white' : '',
                      )}
                      onClick={() => handleApiSwiperNavChangeDoubles(i)}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <div className='mt-4 text-sm dark:text-white'>
                <Swiper
                  onSwiper={setImageSwipers}
                  initialSlide={apiSwiperActiveIndexDoubles}
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <div className='flex h-64 w-full items-center justify-center rounded bg-red-500 text-white'>
                      <p className='text-3xl font-bold'>First</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='flex h-64 w-full items-center justify-center rounded bg-emerald-500 text-white'>
                      <p className='text-3xl font-bold'>Second</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div>
              <div className='mt-8 text-sm dark:text-white'>
                <Swiper
                  onSwiper={setDetailSwipers}
                  initialSlide={apiSwiperActiveIndexDoubles}
                  autoHeight={true}
                  direction='vertical'
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <p className='mb-2 text-2xl font-bold'>First</p>
                    Minim non esse deserunt id veniam veniam ad dolor est voluptate dolor. Nostrud officia aute deserunt
                    ex labore velit non veniam laboris laborum. Consequat proident laborum labore ad veniam laboris
                    minim ullamco exercitation laborum ipsum sunt veniam cupidatat. Ex Lorem voluptate eu adipisicing
                    elit aute ullamco eu nulla incididunt consequat eiusmod eu ex. Aute sit non deserunt Lorem elit
                    nulla laborum incididunt reprehenderit mollit Lorem id aute minim. Veniam non aliquip laborum sunt
                    mollit exercitation laborum anim duis non Lorem esse. Nisi labore labore laboris nulla elit dolor
                    exercitation elit pariatur. Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam
                    pariatur Lorem dolor ut velit sunt occaecat sit nisi esse. Et laboris deserunt tempor minim
                    consequat tempor consequat minim eiusmod velit cupidatat elit proident dolore. Dolore eu ut
                    exercitation tempor.
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className='mb-2 text-2xl font-bold'>Second</p>
                    Officia velit mollit fugiat deserunt proident esse ex id do voluptate et laborum. Nostrud laboris
                    proident incididunt mollit. Deserunt quis est fugiat laborum. Est ipsum culpa dolor consequat
                    ullamco amet ad incididunt labore laborum esse. Nisi dolor magna exercitation ea. Duis proident
                    commodo est nisi enim ad labore dolor officia. Duis dolore ad excepteur magna ad incididunt do culpa
                    aliqua et aute incididunt velit non. Nostrud minim officia excepteur do sit pariatur cillum irure
                    fugiat qui voluptate. Reprehenderit cupidatat eu et eiusmod officia incididunt. Est sunt velit ad
                    sit dolor. Magna commodo ut velit eu. Amet dolore labore mollit nostrud ad ipsum minim irure.
                    Cupidatat esse minim quis voluptate commodo reprehenderit sit anim amet labore incididunt veniam
                    veniam.
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <div className='cursor-move lg:-ml-16 lg:-mr-16'>
              <Swiper
                initialSlide={5}
                spaceBetween={0}
                slidesPerView={4}
                speed={300}
                loop={true}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                // onBeforeInit={(swiper) => {
                //   swiper.params.navigation.prevEl = prevRef.current;
                //   swiper.params.navigation.nextEl = nextRef.current;
                // }}
                // onInit={(swiper) => {
                //   swiper.params.navigation.prevEl = prevRef.current;
                //   swiper.params.navigation.nextEl = nextRef.current;
                //   swiper.navigation.init();
                //   swiper.navigation.update();
                // }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  720: {
                    slidesPerView: 2,
                  },
                  920: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1208: {
                    slidesPerView: 5,
                  },
                }}
              >
                {Tweets.map((tweet, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className='ml-3 mr-3'>
                        <Link href={tweet.url} target='_blank' className='cursor-pointer'>
                          <div
                            className='mt-1 rounded-md border bg-white p-6 drop-shadow-sm dark:border-neutral-700 dark:bg-neutral-800
      dark:text-neutral-100'
                          >
                            <p className='text-scale-1200 text-sm font-medium'>{`@${tweet.handle}`}</p>
                            <p className='text-scale-1100 mt-3 text-base'>{tweet.text}</p>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className='container mx-auto mt-3 flex flex-row justify-between'>
                  <div ref={prevRef} className='ml-4 cursor-pointer'>
                    <ArrowLeftIcon className='h-6 w-6 dark:text-white' />
                  </div>
                  <div ref={nextRef} className='mr-4 cursor-pointer'>
                    <ArrowRightIcon className='h-6 w-6 dark:text-white' />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>

          <div className='fixed bottom-20 right-3 z-10 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-neutral-800 dark:bg-opacity-40 md:right-10'>
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-neutral-800 p-1 text-white transition-all duration-300 ease-in hover:bg-neutral-700'
              >
                <SunIcon />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-gray-100 p-1 transition-all duration-300 ease-in hover:bg-gray-200'
              >
                <MoonIcon />
              </button>
            )}
          </div>

          <BackToTop />
        </main>
      </Layout>
    </>
  );
}
