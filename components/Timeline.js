export default function Timeline({ className, children }) {
  return (
    <div className={`py-4 ${className ? className + ' ' : ''}`}>
      <ol className='relative border-l border-gray-200 dark:border-neutral-700'>{children}</ol>
    </div>
  );
}

Timeline.item = ({ title, time, children }) => {
  return (
    <li className='my-4 ml-6'>
      <span className=' absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'>
        <svg
          aria-hidden='true'
          className='h-3 w-3 text-sky-500'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
            clipRule='evenodd'
          ></path>
        </svg>
      </span>
      <h5 className='mb-1 text-base font-semibold text-gray-900 dark:text-white'>{title}</h5>
      <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{time}</time>
      {children}
    </li>
  );
};
