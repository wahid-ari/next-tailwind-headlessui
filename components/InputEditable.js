import { CheckIcon, XIcon } from '@heroicons/react/outline';

export default function InputEditable({
  id,
  className,
  canEdit,
  onClick,
  label,
  name,
  value,
  onChange,
  onSave,
  onCancel,
  ...rest
}) {
  return (
    <div className='mb-2 pt-2'>
      {label && (
        <label htmlFor={name} className='block mb-2 font-medium text-sm text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <div className={`${canEdit ? 'py-0' : 'py-1.5 px-2'}`}>
        <span onClick={onClick} className={`${canEdit ? 'hidden' : 'inline'} text-sm dark:text-white cursor-pointer`}>
          {value}
        </span>
      </div>
      <input
        {...rest}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`
          ${className && className}
          ${canEdit ? 'block' : 'hidden'}
          text-sm transition-all w-full px-2 py-[0.5rem] rounded-md
          dark:text-white bg-white dark:bg-neutral-900  
          border border-gray-300 dark:border-neutral-700 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
        `}
      />
      <button
        onClick={onSave}
        className={`${
          canEdit ? 'inline' : 'hidden'
        } mr-2 mt-2 rounded transition-all outline-none px-1.5 py-1 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-800`}
      >
        <CheckIcon className='w-5 h-5 text-green-600' />
      </button>
      <button
        onClick={onCancel}
        className={`${
          canEdit ? 'inline' : 'hidden'
        } mt-2 rounded transition-all outline-none px-1.5 py-1 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-800`}
      >
        <XIcon className='w-5 h-5 text-red-600' />
      </button>
    </div>
  );
}
