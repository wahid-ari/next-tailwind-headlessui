export default function Radio({ label, name, value, onChange, checked, className, ...rest }) {
  return (
    <div className='mb-2 text-sm font-medium'>
      <label className='inline-flex cursor-pointer items-center'>
        <input
          {...rest}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          type='radio'
          className={`
            ${className ? className + ' ' : ''}
          h-4 w-4 cursor-pointer border-gray-300 text-blue-600 transition-all
            focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:checked:bg-blue-500
					`}
        />
        <span className='ml-2 text-gray-700 dark:text-neutral-300'>{label}</span>
      </label>
    </div>
  );
}
