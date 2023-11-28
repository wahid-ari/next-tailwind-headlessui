export default function InputLabel({
  id,
  className,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  labelLeft,
  labelRight,
  ...rest
}) {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <div className='mt-2 flex items-center rounded-md'>
        {labelLeft && (
          <span className='inline-flex h-[2.58rem] items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400'>
            {labelLeft}
          </span>
        )}
        <input
          {...rest}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            ${className ? className + ' ' : ''} 
            ${labelLeft ? 'rounded-r-md' : 'rounded-l-md'}
            w-full border border-gray-300 bg-white px-3
            py-[0.6rem] text-sm outline-none  
            transition-all focus:border-blue-500 focus:ring-1 
            focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white
          `}
        />
        {labelRight && (
          <span className='inline-flex h-[2.58rem] items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400'>
            {labelRight}
          </span>
        )}
      </div>
    </div>
  );
}

InputLabel.disabled = ({
  id,
  className,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  labelLeft,
  labelRight,
  ...rest
}) => {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <div className='mt-2 flex items-center rounded-md'>
        {labelLeft && (
          <span className='inline-flex h-[2.58rem] items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400'>
            {labelLeft}
          </span>
        )}
        <input
          {...rest}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled
          className={`
            ${className ? className + ' ' : ''} 
            ${labelLeft ? 'rounded-r-md' : 'rounded-l-md'}
            w-full cursor-not-allowed border border-gray-300 bg-gray-100
            px-3 py-[0.6rem] text-sm  
            transition-all dark:border-neutral-700 dark:bg-neutral-800 
            dark:text-white
          `}
        />
        {labelRight && (
          <span className='inline-flex h-[2.58rem] items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-400'>
            {labelRight}
          </span>
        )}
      </div>
    </div>
  );
};
