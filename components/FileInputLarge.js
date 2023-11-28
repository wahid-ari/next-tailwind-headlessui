import { useRef } from 'react';

export default function FileInputLarge({
  id,
  accept,
  icon,
  className,
  label,
  name,
  value,
  onChange,
  inputLabel,
  ...rest
}) {
  const ref = useRef();
  function handleClick() {
    ref.current.click();
  }

  return (
    <div className='mb-4'>
      <label className='mb-4 mt-2 block text-sm font-medium text-gray-800 dark:text-neutral-300' htmlFor={name}>
        {label}
      </label>
      <label
        className={`
        ${className ? className + ' ' : ''}
        mt-2 flex w-full cursor-pointer flex-col rounded-xl border-2
        border-dashed border-gray-300 transition-all hover:border-blue-500 hover:bg-gray-100 
        dark:border-neutral-800 dark:hover:bg-neutral-800 `}
      >
        <div className='flex flex-col items-center py-3'>
          {icon ? icon : ''}
          <p className='pt-1 text-xs tracking-wider text-gray-400'>{inputLabel}</p>
          {value ? <div className='mt-1 text-sm font-medium text-blue-500'>{value}</div> : ''}
        </div>

        <input
          className='h-0 w-0 opacity-0'
          {...rest}
          accept={accept}
          id={id}
          type='file'
          name={name}
          ref={ref}
          onChange={onChange}
          onClick={handleClick}
        />
      </label>
    </div>
  );
}
