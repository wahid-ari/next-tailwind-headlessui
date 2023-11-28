import { Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/outline';

export default function SearchBox({ label, value, placeholder, onChange, onChangeInput, options }) {
  return (
    <Combobox value={value} onChange={onChange}>
      <Combobox.Label className='text-sm font-medium dark:text-gray-200'>{label}</Combobox.Label>
      <div className='relative mt-2'>
        <div className='relative w-full cursor-default overflow-hidden rounded border border-gray-200 text-left text-sm dark:border-neutral-700 '>
          <Combobox.Input
            className='w-full border-none bg-white py-2 text-sm text-gray-900 transition-all hover:bg-gray-100 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
            // displayValue={(option) => option.id ? `${option.id} - ${option.value}` : `${option.value}` || ""}
            displayValue={(option) => (option?.value ? option.value : '')}
            placeholder={placeholder}
            onChange={onChangeInput}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
            <SelectorIcon className='h-5 w-5 text-gray-500 dark:text-gray-200' aria-hidden='true' />
          </Combobox.Button>
        </div>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Combobox.Options className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-200 bg-white py-1 text-sm shadow-lg dark:border-neutral-700 dark:bg-neutral-900'>
            {options.length === 0 ? (
              <div className='relative cursor-default select-none px-4 py-2 text-neutral-700 dark:text-gray-300'>
                Nothing found.
              </div>
            ) : (
              options.map((option) => (
                <Combobox.Option
                  key={option.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none px-4 py-2 text-neutral-700 hover:text-blue-500 dark:text-gray-200
										${active ? 'bg-gray-100 text-blue-500 dark:bg-neutral-800' : 'text-gray-800 dark:text-gray-200'}`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium text-blue-500' : 'font-normal'}`}>
                      {option.id ? `${option.id} - ${option.value}` : `${option.value}`}
                    </span>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
