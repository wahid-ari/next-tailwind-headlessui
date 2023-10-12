import Head from "next/head";
import LayoutForth from "@components/supabase/LayoutForth";
import SidebarNavAccordion from "@components/supabase/SidebarNavAccordion";
import SidebarNavLink from "@components/supabase/SidebarNavLink";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Index() {
  return (
    <>
      <Head>
        <title>Supabase Subnavbar Accordion scroll</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutForth sidebarTitle="Forth"
        subNavbar={
          <>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="group w-full py-1.5 px-2.5 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded flex justify-between space-x-1 items-center text-sm font-medium transition-all">
                    <span className="whitespace-nowrap">One - Five</span>
                    <ChevronDownIcon
                      className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-4 w-4`}
                    />
                  </Popover.Button>
                  <Popover.Panel className="absolute px-2 w-40 z-50">
                    <div className="p-2 bg-white dark:bg-neutral-900 dark:text-neutral-200 border shadow flex flex-col space-y-1 dark:border-neutral-800 scrollbar-thin scrollbar-thinner scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
                      {['One', 'Two', 'Three', 'Four', 'Five'].map(i =>
                        <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                          Forth {i}
                        </SidebarNavLink>
                      )}
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="group w-full py-1.5 px-2.5 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded flex justify-between space-x-1 items-center text-sm font-medium transition-all">
                    <span className="whitespace-nowrap">Six - Ten</span>
                    <ChevronDownIcon
                      className={`${open ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'} h-4 w-4`}
                    />
                  </Popover.Button>
                  <Popover.Panel className="absolute px-2 w-40 z-50">
                    <div className="p-2 bg-white dark:bg-neutral-900 dark:text-neutral-200 border shadow flex flex-col space-y-1 dark:border-neutral-800 scrollbar-thin scrollbar-thinner scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
                      {['Six', 'Seven', 'Eight', 'Nine', 'Ten'].map(i =>
                        <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                          Forth {i}
                        </SidebarNavLink>
                      )}
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </>}
        sidebarAccordion={
          <>
            <SidebarNavAccordion name="One - Five">
              {['One', 'Two', 'Three', 'Four', 'Five'].map(i =>
                <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                  Forth {i}
                </SidebarNavLink>
              )}
            </SidebarNavAccordion>
            <SidebarNavAccordion name="Six - Ten">
              {['Six', 'Seven', 'Eight', 'Nine', 'Ten'].map(i =>
                <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                  Forth {i}
                </SidebarNavLink>
              )}
            </SidebarNavAccordion>
          </>
        }
        sidebar=
        {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].map(i =>
          <SidebarNavLink key={i} href={`/supabase/forth#${i}`} noWrap>
            Forth {i}
          </SidebarNavLink>
        )
        }>
        <div id="One" className="bg-slate-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Example Supabase Subnavbar Accordion scroll</h1>
        </div>
        <div id="Two" className="bg-red-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Two</h1>
        </div>
        <div id="Three" className="bg-orange-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Three</h1>
        </div>
        <div id="Four" className="bg-yellow-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Four</h1>
        </div>
        <div id="Five" className="bg-lime-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Five</h1>
        </div>
        <div id="Six" className="bg-emerald-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Six</h1>
        </div>
        <div id="Seven" className="bg-indigo-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Seven</h1>
        </div>
        <div id="Eight" className="bg-violet-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Eight</h1>
        </div>
        <div id="Nine" className="bg-pink-500 h-96 mb-4 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Nine</h1>
        </div>
        <div id="Ten" className="bg-rose-500 h-96 flex items-center justify-center scroll-mt-[108px] lg:scroll-mt-16">
          <h1 className="text-white font-medium text-2xl px-8">Ten</h1>
        </div>
      </LayoutForth>
    </>
  )
}