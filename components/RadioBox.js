import { RadioGroup } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function RadioBox({ label, value, onChange, options }) {
  return (
    <RadioGroup value={value} onChange={onChange} className='mt-4'>
      <RadioGroup.Label className='text-sm font-medium dark:text-gray-200'>{label}</RadioGroup.Label>
      <div className='flex items-center space-x-3 pt-3'>
        {options.map((option) => (
          <RadioGroup.Option
            key={option.name}
            value={option}
            disabled={!option.disabled}
            className={({ active }) =>
              classNames(
                option.disabled
                  ? 'cursor-pointer bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-200'
                  : 'cursor-not-allowed bg-gray-50 text-gray-300 focus:ring-0 dark:bg-neutral-900 dark:text-gray-600',
                active ? 'ring-2 ring-blue-500' : '',
                'group relative flex justify-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-gray-100 focus:ring-1 dark:border-neutral-700 dark:hover:bg-neutral-800',
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as='p'>{option.name}</RadioGroup.Label>
                {option.disabled ? (
                  <div
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-blue-500' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-md',
                    )}
                    aria-hidden='true'
                  />
                ) : (
                  <div
                    aria-hidden='true'
                    className='pointer-events-none absolute -inset-px rounded-md border border-gray-200 dark:border-neutral-700'
                  >
                    {' '}
                    <svg
                      className='absolute inset-0 h-full w-full stroke-1 text-gray-200 dark:text-gray-600'
                      viewBox='0 0 100 100'
                      preserveAspectRatio='none'
                      stroke='currentColor'
                    >
                      {/* <line x1={100} y1={100} x2={0} y2={0} vectorEffect="non-scaling-stroke" /> */}
                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect='non-scaling-stroke' />
                    </svg>
                  </div>
                )}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
