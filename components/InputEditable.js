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
        <label htmlFor={name} className='mb-2 block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <div className={`${canEdit ? 'py-0' : 'px-2 py-1.5'}`}>
        <span onClick={onClick} className={`${canEdit ? 'hidden' : 'inline'} cursor-pointer text-sm dark:text-white`}>
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
          w-full rounded-md border border-gray-300 bg-white px-2
          py-[0.5rem] text-sm outline-none  
          transition-all focus:border-blue-500 focus:ring-1 
          focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white
        `}
      />
      <button
        onClick={onSave}
        className={`${
          canEdit ? 'inline' : 'hidden'
        } mr-2 mt-2 rounded border border-neutral-300 bg-gray-50 px-1.5 py-1 outline-none transition-all hover:bg-gray-100 dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-900`}
      >
        <CheckIcon className='h-5 w-5 text-green-600' />
      </button>
      <button
        onClick={onCancel}
        className={`${
          canEdit ? 'inline' : 'hidden'
        } mt-2 rounded border border-neutral-300 bg-gray-50 px-1.5 py-1 outline-none transition-all hover:bg-gray-100 dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-900`}
      >
        <XIcon className='h-5 w-5 text-red-600' />
      </button>
    </div>
  );
}
