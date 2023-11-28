export default function TimelineHorizontal({ className, children }) {
  return (
    <div className={`py-4 ${className ? className + ' ' : ''}`}>
      <ol className='items-center sm:flex'>{children}</ol>
    </div>
  );
}

TimelineHorizontal.item = ({ title, time, children }) => {
  return (
    <li className='relative mb-6 sm:mb-0'>
      <div className='flex items-center'>
        <div className='z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-sky-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
        </div>
        <div className='hidden h-[0.050rem] w-full bg-gray-200 dark:bg-neutral-700 sm:flex'></div>
      </div>
      <div className='mt-3 sm:pr-8'>
        <h3 className='font-semibold text-gray-900 dark:text-white'>{title}</h3>
        <time className='mb-2 block pt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {time}
        </time>
        {children}
      </div>
    </li>
  );
};
