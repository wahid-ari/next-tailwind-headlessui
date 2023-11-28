export default function InputSearch({
  id,
  className,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onClick,
  ...rest
}) {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className='mb-4 flex items-center'>
      <label htmlFor={name} className='sr-only'>
        {label}
      </label>
      <div className='relative w-full'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <svg
            aria-hidden='true'
            className='h-5 w-5 text-gray-500 dark:text-gray-400'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
        <input
          {...rest}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:placeholder-gray-400 ${
            className ? className : ''
          }`}
          placeholder={placeholder}
          required
        />
      </div>
      <button
        onClick={onClick}
        className='ml-2 rounded-lg bg-blue-500 p-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600'
      >
        <svg
          className='h-5 w-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
        <span className='sr-only'>Search</span>
      </button>
    </form>
  );
}
