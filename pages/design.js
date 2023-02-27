import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Head from 'next/head';

export default function Design() {
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

          <div className="relative z-[5] py-16 max-w-md">
            <div className="-mt-16 glow-area transition-all"></div>
            <div className="mt-16 bg-white dark:bg-neutral-800 rounded h-[300px] w-64 mx-auto">
            </div>
          </div>

          <div class="mx-auto px-8 py-10">
            <div class="py-10">
              <h1 class="text-3xl font-semibold mb-2 dark:text-white">Changelog</h1>
              <p class="text-lg dark:text-neutral-200">New updates and product improvements</p>
            </div>
            <div>
              <div class="grid border-l dark:border-l-neutral-700 pb-10 lg:grid-cols-12 lg:gap-8">
                <div class="col-span-12 mb-8 self-start lg:sticky lg:top-0 lg:col-span-4 lg:-mt-16 lg:pt-16 ">
                  <div class="flex w-full items-baseline gap-6">
                    <div class="-ml-2.5 flex h-5 w-5 items-center justify-center rounded border dark:border-neutral-700 drop-shadow-sm dark:bg-neutral-800 bg-neutral-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="dark:text-neutral-300">
                        <circle cx="12" cy="12" r="4"></circle>
                        <line x1="1.05" y1="12" x2="7" y2="12"></line>
                        <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
                      </svg>
                    </div>
                    <div class="flex w-full flex-col gap-1">
                      <h3 class="text-2xl dark:text-white font-medium">January 2023</h3>
                      <p class="dark:text-neutral-200">Feb 8, 2023</p>
                    </div>
                  </div>
                </div>
                <div class="col-span-8 ml-8 lg:ml-0">
                  <article class="prose max-w-none prose-h2:dark:text-neutral-200 prose-p:dark:text-neutral-200 prose-a:dark:text-neutral-200">
                    <p>The first month of the year was very productive here at Supabase. Here is a highlight of what we shipped during January:</p>
                    <h2>Storing OpenAI embeddings in Postgres with pgvector</h2>
                    <p>pgvector is a popular PostgreSQL extension for storing embeddings and performing vector similarity search. It was one of the most requested extensions by the AI/ML community and is now available thanks to&nbsp;<a href="https://github.com/gregnr">gregnr</a>.</p>
                    <p><a href="#">Read the announcement</a></p>
                    <h2>Meet Supabase Clippy: ChatGPT for Docs</h2>
                    <p>Greg wasted no time and took&nbsp;pgvector&nbsp;for a spin, he combined it with OpenAI to build Supabase Clippy, a next-generation doc search. The first implementation is a 1-week MVP and fully open source, so you can build on top of it.</p>
                    <ul>
                      <li><a href="#">Read the blog post</a></li>
                      <li><a href="#">Watch the video tutorial</a></li>
                    </ul>
                    <h2>Client library reference: Python and C#</h2>
                    <p>We have released extensive reference docs for C# and Python, detailing every object and method. What are you going to build?</p>
                    <ul>
                      <li><a href="#/">C# Client Library</a></li>
                      <li><a href="#">Python Client Library</a></li>
                    </ul>
                  </article>
                </div>
              </div>
              <div class="grid border-l dark:border-l-neutral-700 pb-10 lg:grid-cols-12 lg:gap-8">
                <div class="col-span-12 mb-8 self-start lg:sticky lg:top-0 lg:col-span-4 lg:-mt-16 lg:pt-16 ">
                  <div class="flex w-full items-baseline gap-6">
                    <div class="-ml-2.5 flex h-5 w-5 items-center justify-center rounded border dark:border-neutral-700 drop-shadow-sm dark:bg-neutral-800 bg-neutral-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="dark:text-neutral-300">
                        <circle cx="12" cy="12" r="4"></circle>
                        <line x1="1.05" y1="12" x2="7" y2="12"></line>
                        <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
                      </svg>
                    </div>
                    <div class="flex w-full flex-col gap-1">
                      <h3 class="text-2xl dark:text-white font-medium">November 2022</h3>
                      <p class="dark:text-neutral-200">Dec 8, 2022</p>
                    </div>
                  </div>
                </div>
                <div class="col-span-8 ml-8 lg:ml-0">
                  <article class="prose max-w-none prose-h2:dark:text-neutral-200 prose-p:dark:text-neutral-200 prose-a:dark:text-neutral-200">
                    <p>Launch Week 6 is just around the corner! Were saving most of Novembers updated as a surprise for Launch Week, but we still had time to ship some goodies this month.</p>
                    <h2>Launch Week 6 tickets</h2>
                    <p>Next week, we go all out for LW6. Its 5 days of shipping, including major features requested by the community. You dont want to miss a thing, so make sure to claim your free ticket (and you might win some very special SupaSwag).</p>
                    <p><a href="#">Get your ticket</a></p>
                    <h2>Remix Auth Helpers</h2>
                    <p>Its here! The much-awaited Remix Auth Helpers make server-side auth even easier and with a better experience. Up to date with supabase-js V2 and can be used with Typescript.</p>
                    <p><a href="#">Read the docs</a></p>
                    <h2>Automatic WebP detection for Image Transformation</h2>
                    <p>WebP is a modern image format that provides superior lossless and lossy compression for images on the web. We are enabling format conversion by default for anyone who has Image Transformations. You can opt out by including format: origin in the transformation parameters.</p>
                    <p><a href="#">Read the docs</a></p>
                  </article>
                </div>
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