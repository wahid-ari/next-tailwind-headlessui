import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Head from 'next/head';

export default function Slider() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>Slider Page</title>
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
            Default Slider
          </h1>
          <div className="flex overflow-x-auto space-x-8 pb-4">
            <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg w-2/3 shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 1</h1>
                <h2 className="text-white text-lg">Text 1</h2>
              </div>
            </div>
            <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg w-2/3 shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 2</h1>
                <h2 className="text-white text-lg">Text 2</h2>
              </div>
            </div>
            <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg w-2/3 shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 3</h1>
                <h2 className="text-white text-lg">Text 3</h2>
              </div>
            </div>
            <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg w-2/3 shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 4</h1>
                <h2 className="text-white text-lg">Text 4</h2>
              </div>
            </div>
          </div>

          <h1 className="sm:text-3xl text-2xl font-medium title-font my-2 text-gray-900 dark:text-white">
            Default Slider Custom Bottom Scrollbar
          </h1>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-800">
            <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg w-60 sm:w-[350px] md:w-[400px] lg:w-[470px] shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 1</h1>
                <h2 className="text-white text-lg">Text 1</h2>
              </div>
            </div>
            <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg w-60 sm:w-[350px] md:w-[400px] lg:w-[470px] shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 2</h1>
                <h2 className="text-white text-lg">Text 2</h2>
              </div>
            </div>
            <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg w-60 sm:w-[350px] md:w-[400px] lg:w-[470px] shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 3</h1>
                <h2 className="text-white text-lg">Text 3</h2>
              </div>
            </div>
            <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg w-60 sm:w-[350px] md:w-[400px] lg:w-[470px] shrink-0">
              <div>
                <h1 className="text-white font-medium text-2xl">Text 4</h1>
                <h2 className="text-white text-lg">Text 4</h2>
              </div>
            </div>
          </div>

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