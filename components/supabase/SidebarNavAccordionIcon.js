import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Disclosure, Transition } from '@headlessui/react';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function SidebarNavAccordionIcon({ name, routeName, icon, children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cek, setCek] = useState(false);
  const router = useRouter();

  // set sidebar nav accordion open or close based on route
  useEffect(() => {
    if (router.pathname.includes(routeName)) {
      // console.log("------------------")
      // console.log("ROUTE MATCH")
      // console.log("params : ", routeName)
      // console.log("actual : ", router.pathname)
      setIsOpen(true);
    } else {
      // console.log("------------------")
      // console.log("ROUTE NOT MATCH")
      // console.log("params : ", routeName)
      // console.log("actual : ", router.pathname)
      setIsOpen(false);
    }
    setCek(true);
  }, [router.pathname]);

  if (!cek) {
    return (
      <button
        className={`flex w-full items-center justify-center rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 ${className}`}
      >
        {icon}
      </button>
    );
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
                  <Tooltip.Trigger
                    aria-label={name}
                    className={`flex w-full items-center justify-center rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 ${className}`}
                  >
                    {icon}
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side='right'
                      className='rounded border bg-neutral-100 px-2.5 py-1.5 text-sm font-medium shadow-xl dark:border-neutral-800 dark:bg-neutral-800 dark:text-white'
                    >
                      {name}
                      <Tooltip.Arrow className='fill-current text-neutral-100 dark:text-neutral-800' />
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
            <Disclosure.Panel className='space-y-2 text-sm'>{children}</Disclosure.Panel>
            {/* </Transition> */}
          </>
        )}
      </Disclosure>
      {/* <hr className="border-neutral-200 dark:border-neutral-800" /> */}
    </>
  );
}
