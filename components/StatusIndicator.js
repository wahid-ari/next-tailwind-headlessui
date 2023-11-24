export default function StatusIndicator({ className, success, warning, danger, text }) {
  return (
    <div className={`flex items-center space-x-2 ${className ? className + ' ' : ''}`}>
      <div
        className={`h-2.5 w-2.5 ${
          success
            ? 'bg-teal-500'
            : warning
              ? 'bg-orange-500'
              : danger
                ? 'bg-red-500'
                : 'bg-gray-300 dark:bg-neutral-600'
        } rounded-full`}
      ></div>
      <span className='text-sm dark:text-white'>{text}</span>
    </div>
  );
}
