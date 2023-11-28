import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

export default function SelectBoxCustom({ label, value, onChange, options }) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className='relative mt-4'>
          <Listbox.Label className='text-sm font-medium dark:text-gray-200'>{label}</Listbox.Label>
          <Listbox.Button className='relative mt-2 w-full cursor-pointer rounded border border-gray-200 bg-white px-3 py-2 text-left text-sm transition-all hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800'>
            <span className='block truncate'>{value ? value.name : 'Choose'}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
              <ChevronDownIcon
                className={`h-4 w-4 text-gray-500 dark:text-gray-200 
                ${open ? 'rotate-180 transform duration-300' : 'rotate-0 transform duration-200'}`}
                strokeWidth={3}
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white py-1 text-sm shadow-lg scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:border-neutral-700 dark:bg-neutral-900 dark:scrollbar-thumb-neutral-700'>
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `cursor-pointer px-3 py-2 text-neutral-700 hover:bg-gray-100 hover:text-blue-500 dark:text-gray-200 dark:hover:bg-neutral-800 dark:hover:text-blue-500 
                  ${active ? 'bg-gray-100 text-blue-600 dark:bg-neutral-800 dark:text-blue-500' : ' '}
                  `
                }
                value={option}
              >
                {({ selected }) => (
                  <span className={`block truncate ${selected ? 'font-semibold text-blue-500' : ' '}`}>
                    {option.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      )}
    </Listbox>
  );
}
