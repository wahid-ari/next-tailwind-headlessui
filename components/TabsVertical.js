import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabsVertical({ tabs, contents }) {
  return (
    <div className='pt-4 sm:flex sm:px-0'>
      <Tab.Group vertical>
        <Tab.List className='bg-transparent font-medium dark:border-gray-500'>
          {tabs.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'text-dark-500 mb-2 w-full rounded border bg-gray-100 py-2 text-base font-medium transition-all dark:border-gray-700 dark:bg-neutral-900 sm:rounded-r-none',
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
            <Tab.Panel
              key={item}
              className='-ml-[0.06rem] rounded border p-4 dark:border-gray-700 dark:text-white sm:rounded-tl-none sm:rounded-tr'
            >
              {item}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
