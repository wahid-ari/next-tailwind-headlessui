import { useContext, useEffect } from "react";
import { Fragment } from 'react'
import { useRouter } from "next/router";
import { GlobalContext } from "@utils/GlobalContext";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { AdjustmentsIcon, ArrowSmDownIcon, BadgeCheckIcon, BellIcon, BookmarkAltIcon, ChartSquareBarIcon, ChipIcon, CubeIcon, EmojiHappyIcon, FireIcon, GiftIcon, HomeIcon, InboxInIcon, LibraryIcon, LightBulbIcon, SupportIcon } from "@heroicons/react/outline";
import MobileNavLink from "@components/supabase/MobileNavLink";
import MobileMenuNavAccordion from "@components/supabase/MobileMenuNavAccordion";

export default function MobileMenu() {

  const { showMobileMenu, setShowMobileMenu } = useContext(GlobalContext);
  const router = useRouter();

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
            <Dialog.Overlay className="absolute inset-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md backdrop-filter transition-opacity" />
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
              <div className="pointer-events-auto relative w-screen max-w-xs">
                {/* Close Panel Button  */}
                <div className="absolute top-0 right-0 pt-[1rem] mr-5">
                  <button
                    type="button"
                    className="rounded p-1 transition-all text-neutral-500 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-200 border border-neutral-200 hover:border-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-200"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {/* End Close Panel Button  */}

                {/* Mobile Menu Panel  */}
                <div className="flex h-full flex-col overflow-y-hide bg-white dark:bg-neutral-900 py-4 shadow-xl">

                  <div className="px-5">
                    <Dialog.Title className="text-lg font-medium dark:text-white"> Menu </Dialog.Title>
                  </div>
                  <div className="relative mt-4 flex-1">
                    {/* Mobile Menu Link */}
                    <div className="absolute inset-0 px-2">
                      <div className="h-full flex flex-col gap-y-1 p-1 overflow-auto scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded" aria-hidden="true">

                        <div className="flex flex-col gap-1 flex-grow">
                          <MobileNavLink href="/dashboard" icon={<HomeIcon className="w-5 h-5" />}>
                            Dashboard
                          </MobileNavLink>

                          <MobileNavLink href="/dashboardd" icon={<LibraryIcon className="w-5 h-5" />}>
                            Dashboardd
                          </MobileNavLink>

                          <MobileNavLink href="/dashboarddd" icon={<FireIcon className="w-5 h-5" />}>
                            Dashboarddd
                          </MobileNavLink>

                          <MobileNavLink href="/dashboardtwo" icon={<ChartSquareBarIcon className="w-5 h-5" />}>
                            Dashboard Two
                          </MobileNavLink>

                          <MobileNavLink href="/dashboardthree" icon={<BookmarkAltIcon className="w-5 h-5" />}>
                            Dashboard Three
                          </MobileNavLink>

                          <hr className="border-neutral-200 dark:border-neutral-800" />

                          <MobileNavLink href="/dashboardicon" icon={<EmojiHappyIcon className="w-5 h-5" />}>
                            Dashboard Icon
                          </MobileNavLink>

                          <MobileMenuNavAccordion name="First" routeName="/dashboardicon/first" icon={<BadgeCheckIcon className="w-5 h-5" />}>
                            <MobileNavLink href="/dashboardicon/first" icon={<BadgeCheckIcon className="w-5 h-5" />}>
                              First
                            </MobileNavLink>
                            <MobileNavLink href="/dashboardicon/first/b" icon={<BadgeCheckIcon className="w-5 h-5" />}>
                              First B
                            </MobileNavLink>
                          </MobileMenuNavAccordion>

                          {/* <MobileMenuNavAccordion name="Second" routeName="/dashboardicon/second" icon={<BellIcon className="w-5 h-5" />}>
                            <MobileNavLink href="/dashboardicon/second" icon={<BellIcon className="w-5 h-5" />}>
                              Second
                            </MobileNavLink>
                            <MobileNavLink href="/dashboardicon/second/b" icon={<BellIcon className="w-5 h-5" />}>
                              Second B
                            </MobileNavLink>
                          </MobileMenuNavAccordion> */}

                          <hr className="border-neutral-200 dark:border-neutral-800" />

                          <MobileNavLink href="/supabase" icon={<AdjustmentsIcon className="w-5 h-5" />}>
                            Supabase
                          </MobileNavLink>

                          <MobileMenuNavAccordion name="Supabase First" routeName="/supabase/first" icon={<ChipIcon className="w-5 h-5" />}>
                            <MobileNavLink href="/supabase/first" icon={<ChipIcon className="w-5 h-5" />}>
                              Supabase First
                            </MobileNavLink>
                            <MobileNavLink href="/supabase/first/b" icon={<ChipIcon className="w-5 h-5" />}>
                              Supabase First B
                            </MobileNavLink>
                          </MobileMenuNavAccordion>

                          <MobileMenuNavAccordion name="Supabase Second" routeName="/supabase/second" icon={<GiftIcon className="w-5 h-5" />}>
                            <MobileNavLink href="/supabase/second" icon={<GiftIcon className="w-5 h-5" />}>
                              Supabase Second
                            </MobileNavLink>
                            <MobileNavLink href="/supabase/second/b" icon={<GiftIcon className="w-5 h-5" />}>
                              Supabase Second B
                            </MobileNavLink>
                          </MobileMenuNavAccordion>

                          <MobileNavLink href="/supabase/third" icon={<SupportIcon className="w-5 h-5" />}>
                            Supabase No Submenu
                          </MobileNavLink>

                          <MobileNavLink href="/supabase/forth" icon={<CubeIcon className="w-5 h-5" />}>
                            Supabase Subnavbar scroll
                          </MobileNavLink>

                          <MobileNavLink href="/supabase/fifth" icon={<InboxInIcon className="w-5 h-5" />}>
                            Supabase Subnavbar no scroll
                          </MobileNavLink>
                        </div>

                        <MobileNavLink href="/supabase#" icon={<ArrowSmDownIcon className="w-5 h-5" />}>
                          Bottom
                        </MobileNavLink>

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