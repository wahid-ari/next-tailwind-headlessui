import { Disclosure } from '@headlessui/react';
import { CodeIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function AccordionCode({ title, children }) {
  return (
    <Disclosure as='div' className={`my-4 text-sm`}>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between rounded-lg border border-emerald-500 bg-white px-4 py-2 text-left font-medium text-emerald-500 transition-all hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800'>
            <div className='flex gap-x-3'>
              <CodeIcon className='h-5 w-5 text-emerald-500'></CodeIcon>
              <span>{title}</span>
            </div>
            <ChevronRightIcon
              className={`${
                open ? 'rotate-90 transform duration-300' : 'rotate-0 transform duration-200'
              } h-5 w-5 text-emerald-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
