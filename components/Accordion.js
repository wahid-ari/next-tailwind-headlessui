import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function Accordion({ title, children, className }) {
  return (
    <Disclosure as='div' className={`${className ? className + ' ' : ' '} my-1 text-sm`}>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left font-medium text-blue-500 transition-all hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'>
            <span>{title}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform duration-300' : 'rotate-0 transform duration-200'
              } h-5 w-5 text-blue-500`}
            />
          </Disclosure.Button>
          <Transition
            enter='transition duration-500 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-300 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Disclosure.Panel className='px-4 pb-4 pt-4'>{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
