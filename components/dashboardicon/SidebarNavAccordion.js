import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function SidebarNavAccordion({ name, routeName, icon, children, className }) {
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
        className={`flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 ${className}`}
      >
        <div className='flex items-center gap-x-2'>
          {icon}
          <span>{name}</span>
        </div>
        <ChevronRightIcon className='h-4 w-4' />
      </button>
    );
  }

  return (
    <>
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 ${className}`}
            >
              <div className='flex items-center gap-x-2'>
                {icon}
                <span>{name}</span>
              </div>
              <ChevronRightIcon
                className={`h-4 w-4 ${open ? 'rotate-90 transform transition-transform' : 'transition-transform'}`}
              />
            </Disclosure.Button>
            {/* <Transition
                enter="transition duration-300 ease-in"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition-all ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              > */}
            <Disclosure.Panel className='flex flex-col space-y-2 px-2.5 text-sm'>{children}</Disclosure.Panel>
            {/* </Transition> */}
          </>
        )}
      </Disclosure>
      {/* <hr className="border-neutral-200 dark:border-neutral-800" /> */}
    </>
  );
}
