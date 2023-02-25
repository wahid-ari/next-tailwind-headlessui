import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Head from 'next/head';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';

export default function Slider() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>Swiper.js Page</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Layout>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Nav Pagination Scrollbar
          </h1>
          <Swiper className='mb-5'
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={true}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="bg-purple-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Pagination Custom Dot
          </h1>
          <Swiper className='mb-5 swiper-custom-pagination-dot'
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            // autoplay={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="bg-purple-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Pagination Custom Progress
          </h1>
          <Swiper className='mb-5 swiper-custom-pagination-scroll'
            modules={[Autoplay, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={true}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="bg-purple-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Responsive
          </h1>
          <Swiper className='mb-5'
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={true}
            navigation={true}
            loop={true}
            breakpoints={{
              "320": {
                "slidesPerView": 1,
                "spaceBetween": 24
              },
              "640": {
                "slidesPerView": 2,
                "spaceBetween": 24
              },
              "768": {
                "slidesPerView": 2,
                "spaceBetween": 24
              },
              "1024": {
                "slidesPerView": 3,
                "spaceBetween": 24
              }
            }}
          >
            <SwiperSlide>
              <div className="bg-purple-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-600 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Nav Loop
          </h1>
          <Swiper className='mb-5'
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={true}
            navigation={true}
            loop={true}
          >
            <SwiperSlide>
              <div className="bg-purple-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Nav Progress
          </h1>
          <Swiper className='mb-5'
            modules={[Autoplay, Pagination, Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={true}
            navigation={true}
            pagination={{
              type: "progressbar",
            }}
          >
            <SwiperSlide>
              <div className="bg-purple-400 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-400 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-400 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-400 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Nav Custom Button
          </h1>
          <Swiper className='mb-5 swiper-custom-nav'
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={true}
            navigation={true}
            loop={true}
          >
            <SwiperSlide>
              <div className="bg-purple-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-500 h-60 text-center flex justify-center items-center">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Swiper Item Centered
          </h1>
          <Swiper className='mb-5 swiper-custom-nav'
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={24}
            slidesPerView={3}
            centeredSlides={true}
            autoplay={true}
            navigation={true}
            loop={true}
            breakpoints={{
              "320": {
                "slidesPerView": 1,
                "spaceBetween": 24
              },
              "640": {
                "slidesPerView": 2,
                "spaceBetween": 24
              },
              "768": {
                "slidesPerView": 2,
                "spaceBetween": 24
              },
              "1024": {
                "slidesPerView": 2,
                "spaceBetween": 24
              }
            }}
          >
            <SwiperSlide>
              <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font my-2 text-gray-900 dark:text-white">
            Swiper shows a bit previous/next slides
          </h1>
          <Swiper className='mb-5 swiper-custom-nav'
            modules={[Navigation, A11y]}
            spaceBetween={16}
            // this shows a bit of the previous/next slides
            slidesPerView={1.2}
            navigation={true}
            breakpoints={{
              "320": {
                "slidesPerView": 1.2,
                "spaceBetween": 16
              },
              "640": {
                "slidesPerView": 2.5,
                "spaceBetween": 16
              }
            }}
          >
            <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
              <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
              <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
              <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
              <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="sm:text-3xl text-2xl font-medium title-font my-2 text-gray-900 dark:text-white">
            Swiper continous play
          </h1>
          <Swiper className='mb-5 swiper-continous-play'
            modules={[Autoplay, A11y]}
            spaceBetween={16}
            slidesPerView={3}
            loop={true}
            allowTouchMove={false}
            autoplay={{ delay: 0 }}
            speed={4000}
            breakpoints={{
              "320": {
                "slidesPerView": 1,
                "spaceBetween": 16
              },
              "640": {
                "slidesPerView": 3,
                "spaceBetween": 16
              }
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
                <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg">
                  <div>
                    <h1 className="text-white font-medium text-2xl">Text 1</h1>
                    <h2 className="text-white text-lg">Text 1</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
                <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg">
                  <div>
                    <h1 className="text-white font-medium text-2xl">Text 2</h1>
                    <h2 className="text-white text-lg">Text 2</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
                <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg">
                  <div>
                    <h1 className="text-white font-medium text-2xl">Text 3</h1>
                    <h2 className="text-white text-lg">Text 3</h2>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="sm:w-[350px] md:w-[400px] lg:w-[770px] shrink-0">
                <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg">
                  <div>
                    <h1 className="text-white font-medium text-2xl">Text 4</h1>
                    <h2 className="text-white text-lg">Text 4</h2>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>

          <div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-10">
            {darkMode ?
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
                <SunIcon />
              </button>
              :
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
                <MoonIcon />
              </button>
            }
          </div>

          <BackToTop />

        </main>
      </Layout>
    </>
  )
}