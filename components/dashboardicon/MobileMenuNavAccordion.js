import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function MobileMenuNavAccordion({ name, routeName, icon, children }) {
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
      <button className='flex w-full items-center justify-between rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'>
        <div className='flex items-center gap-x-2'>
          {icon}
          <span>{name}</span>
        </div>
        <ChevronRightIcon className={`h-4 w-4`} />
      </button>
    );
  }

  return (
    <>
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex w-full items-center justify-between rounded px-2 py-1.5 text-sm font-medium transition-all hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'>
              <div className='flex items-center gap-x-2'>
                {icon}
                <span>{name}</span>
              </div>
              <ChevronRightIcon
                className={`h-4 w-4 ${open ? 'rotate-90 transform transition-transform' : 'transition-transform'}`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='flex flex-col space-y-1 px-2'>{children}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <hr className="border-neutral-200 dark:border-neutral-800" /> */}
    </>
  );
}
