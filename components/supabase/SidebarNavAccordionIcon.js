import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import * as Tooltip from '@radix-ui/react-tooltip';

export default function SidebarNavAccordionIcon({ name, routeName, icon, children, className }) {

  const [isOpen, setIsOpen] = useState(false)
  const [cek, setCek] = useState(false)
  const router = useRouter();

  // set sidebar nav accordion open or close based on route 
  useEffect(() => {
    if (router.pathname.includes(routeName)) {
      // console.log("------------------")
      // console.log("ROUTE MATCH")
      // console.log("params : ", routeName)
      // console.log("actual : ", router.pathname)
      setIsOpen(true)
    } else {
      // console.log("------------------")
      // console.log("ROUTE NOT MATCH")
      // console.log("params : ", routeName)
      // console.log("actual : ", router.pathname)
      setIsOpen(false)
    }
    setCek(true)
  }, [router.pathname])

  if (!cek) {
    return (
      <button className={`w-full flex items-center justify-center px-2 py-1.5 text-sm font-medium dark:text-white hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded transition-all ${className}`}>
        {icon}
      </button>
    )
  }

  return (
    <>
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            {/* FIX Lighthouse ok, console error */}
            <Disclosure.Button aria-label={name}>
              <Tooltip.Provider>
                <Tooltip.Root delayDuration={100}>
                  <Tooltip.Trigger aria-label={name} className={`w-full flex items-center justify-center px-2 py-1.5 text-sm font-medium dark:text-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded transition-all ${className}`}>
                    {icon}
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content side="right" className="bg-neutral-100 shadow-xl border dark:border-neutral-800 dark:bg-neutral-800 dark:text-white text-sm font-medium px-2.5 py-1.5 rounded">
                      {name}
                      <Tooltip.Arrow className="fill-current text-neutral-100 dark:text-neutral-800" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </Disclosure.Button>
            {/* <Transition
                enter="transition duration-300 ease-in"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition-all ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              > */}
            <Disclosure.Panel className="text-sm space-y-2">
              {children}
            </Disclosure.Panel>
            {/* </Transition> */}
          </>
        )}
      </Disclosure>
      {/* <hr className="border-neutral-200 dark:border-neutral-800" /> */}
    </>
  )
}