import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs({ tabs, contents }) {
  return (
    <div className='pt-4 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex w-full max-w-md space-x-1 rounded-xl bg-gray-100 p-1 font-medium dark:bg-neutral-800'>
          {tabs.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-xl py-2 text-base font-medium text-blue-500 transition-all',
                  selected
                    ? 'bg-blue-500	!text-white'
                    : 'text-blue-500 hover:bg-gray-200 hover:text-blue-600 dark:hover:bg-neutral-700 dark:hover:text-blue-600',
                )
              }
            >
              {item}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {contents.map((item) => (
            <Tab.Panel key={item} className='rounded-xl p-3 dark:text-white'>
              {item}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
