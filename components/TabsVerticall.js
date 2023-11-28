import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabsVerticall({ tabs, contents }) {
  return (
    <div className='pt-4 sm:flex sm:px-0'>
      <Tab.Group vertical>
        <Tab.List className='rounded bg-gray-100 p-2 font-medium dark:bg-neutral-800'>
          {tabs.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'text-dark-500 mb-2 w-full rounded bg-gray-100 py-2 text-base font-medium transition-all dark:bg-neutral-900',
                  selected
                    ? '!bg-blue-500 text-white'
                    : 'text-dark-500 hover:bg-gray-200 hover:text-blue-600 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700 dark:hover:text-blue-600',
                )
              }
            >
              {item}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='w-full'>
          {contents.map((item) => (
            <Tab.Panel key={item} className='p-4 dark:text-white'>
              {item}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
