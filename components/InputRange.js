export default function InputRange({ id, className, label, name, value, onChange, ...rest }) {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <input
        {...rest}
        id={id}
        type='range'
        name={name}
        value={value}
        onChange={onChange}
        className={`
          ${className ? className + ' ' : ''} 
          h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-neutral-700
        `}
      />
    </div>
  );
}
