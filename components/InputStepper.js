import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

export default function InputStepper({
  id,
  className,
  label,
  name,
  placeholder,
  value,
  min,
  max,
  onDown,
  onUp,
  ...rest
}) {
  const canDown = value != min ? true : false;
  const canUp = value != max ? true : false;

  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <div className='mt-2 flex'>
        <button
          onClick={onDown}
          disabled={!canDown}
          className={`${
            !canDown && 'cursor-not-allowed'
          } rounded-l-md border-y border-l border-gray-300 bg-gray-100 px-2.5 py-[0.4rem] transition-all hover:bg-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
        >
          <MinusSmIcon className='h-4 w-4 dark:text-white' />
        </button>
        <input
          {...rest}
          name={name}
          placeholder={placeholder}
          value={value}
          className={`z-10 w-24 border
						border-gray-300 bg-white px-3 py-[0.4rem]
						text-center text-sm outline-none  
						transition-all focus:border-blue-500 focus:ring-1 
						focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white
            ${className ? className : ''}
					`}
        />
        <button
          onClick={onUp}
          disabled={!canUp}
          className={`${
            !canUp && 'cursor-not-allowed'
          } rounded-r-md border-y border-r border-gray-300 bg-gray-100 px-2.5 py-[0.4rem] transition-all hover:bg-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700`}
        >
          <PlusSmIcon className='h-4 w-4 dark:text-white' />
        </button>
      </div>
    </div>
  );
}
