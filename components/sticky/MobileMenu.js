import { useContext, useEffect } from "react";
import { Fragment } from 'react'
import { useRouter } from "next/router";
import { GlobalContext } from "@utils/GlobalContext";
import { Dialog, Transition } from "@headlessui/react";
import MobileNavLink from "@components/sticky/MobileNavLink";
import MobileNavAccordion from "@components/sticky/MobileNavAccordion";
import { XIcon } from "@heroicons/react/solid";
import { ArrowSmRightIcon, ArrowCircleRightIcon, BadgeCheckIcon, BellIcon } from "@heroicons/react/outline";

export default function MobileMenu() {

  const { showMobileMenu, setShowMobileMenu } = useContext(GlobalContext);
  const router = useRouter()

  // handle auto close mobile menu panel based on route changes or page being refreshed
  useEffect(() => {
    setShowMobileMenu(false)
  }, [router.pathname])

  return (
    <Transition.Root show={showMobileMenu} as={Fragment}>
      <Dialog as="aside" className="fixed inset-0 overflow-hidden lg:hidden z-20" onClose={setShowMobileMenu}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* End Backdrop */}

          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="pointer-events-auto relative w-screen max-w-sm">
                {/* Close Panel Button  */}
                <div className="absolute top-0 right-0 pt-[1.6rem] mr-7">
                  <button
                    type="button"
                    className="rounded p-1 transition-all text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 border border-gray-500 hover:border-gray-800 dark:border-gray-300 dark:hover:border-gray-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {/* End Close Panel Button  */}

                {/* Mobile Menu Panel  */}
                <div className="flex h-full flex-col overflow-y-hide bg-white dark:bg-neutral-900 py-6 shadow-xl">

                  <div className="px-5">
                    <Dialog.Title className="text-lg font-medium dark:text-white"> Menu </Dialog.Title>
                  </div>
                  <div className="relative mt-6 flex-1">
                    {/* Mobile Menu Link */}
                    <div className="absolute inset-0 pl-4 pr-2">
                      <div className="h-full flex flex-col gap-y-1 py-1 pl-1 pr-4 overflow-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded" aria-hidden="true">

                        <MobileNavLink href="/dashboard" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
                          Dashboard
                        </MobileNavLink>

                        <MobileNavAccordion name="First" routeName="/dashboardd/first" icon={<BadgeCheckIcon className="w-4 h-4" />}>
                          <MobileNavLink href="/dashboardd/first" icon={<BadgeCheckIcon className="w-4 h-4" />} className="mb-1">
                            First
                          </MobileNavLink>
                          <MobileNavLink href="/dashboardd/first/b" icon={<BadgeCheckIcon className="w-4 h-4" />}>
                            First B
                          </MobileNavLink>
                        </MobileNavAccordion>

                        <MobileNavAccordion name="Second" routeName="/dashboardd/second" icon={<BellIcon className="w-4 h-4" />}>
                          <MobileNavLink href="/dashboardd/second" icon={<BellIcon className="w-4 h-4" />} className="mb-1">
                            Second
                          </MobileNavLink>
                          <MobileNavLink href="/dashboardd/second/b" icon={<BellIcon className="w-4 h-4" />}>
                            Second B
                          </MobileNavLink>
                        </MobileNavAccordion>

                        <MobileNavLink href="/dashboardd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboardd
                        </MobileNavLink>

                        <MobileNavLink href="/dashboarddd" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboarddd
                        </MobileNavLink>

                        <MobileNavLink href="/dashboardtwo" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboard Two
                        </MobileNavLink>

                        <MobileNavLink href="/dashboardthree" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboard Three
                        </MobileNavLink>

                        <MobileNavLink href="/dashboardicon" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Dashboard Icon
                        </MobileNavLink>

                        <MobileNavLink href="/sticky" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Sticky
                        </MobileNavLink>

                        <MobileNavLink href="/supabase" icon={<ArrowCircleRightIcon className="w-4 h-4" />}>
                          Supabase
                        </MobileNavLink>

                        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => {
                          return (
                            <MobileNavLink key={item + 1} href="#" icon={<ArrowSmRightIcon className="w-4 h-4" />}>
                              Link #{item}
                            </MobileNavLink>
                          )
                        })} */}

                      </div>
                    </div>
                    {/* End Mobile Menu Link */}
                  </div>
                </div>
                {/* End Mobile Menu Panel  */}

              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}