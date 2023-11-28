export default function Divider({ className, center, left, right, text }) {
  return center ? (
    <div className={`${className ? className + ' ' : ''} relative p-2.5`} role='seperator'>
      <div className='border-b border-neutral-200 dark:border-neutral-700' />
      <span className='dark:text-dark-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap bg-white px-3 text-sm text-gray-400 dark:bg-neutral-900'>
        {text}
      </span>
    </div>
  ) : left ? (
    <div className={`${className ? className + ' ' : ''} relative p-2.5`} role='seperator'>
      <div className='border-b border-neutral-200 dark:border-neutral-700' />
      <span className='dark:text-dark-400 absolute left-16 top-1/2 -translate-y-1/2 transform whitespace-nowrap bg-white px-3 text-sm text-gray-400 dark:bg-neutral-900'>
        {text}
      </span>
    </div>
  ) : right ? (
    <div className={`${className ? className + ' ' : ''} relative p-2.5`} role='seperator'>
      <div className='border-b border-neutral-200 dark:border-neutral-700' />
      <span className='dark:text-dark-400 absolute right-16 top-1/2 -translate-y-1/2 transform whitespace-nowrap bg-white px-3 text-sm text-gray-400 dark:bg-neutral-900'>
        {text}
      </span>
    </div>
  ) : (
    <div className={`${className ? className + ' ' : ''} p-2.5`} role='seperator'>
      <div className='border-b border-neutral-200 dark:border-neutral-700' />
    </div>
  );
}
