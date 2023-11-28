import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

export default function ShowMore({
  className,
  children = 'Qui excepteur qui excepteur nostrud anim ex duis sint fugiat elit laborum laboris enim. Id consectetur sit quis nulla anim sit eiusmod enim cupidatat. Amet incididunt aliqua tempor ex occaecat cupidatat. Adipisicing reprehenderit eu esse mollit ad proident. Deserunt reprehenderit commodo proident cupidatat laborum sunt aliquip deserunt ad ut id enim nulla. Commodo minim ad id sint elit officia ex nisi veniam labore anim mollit reprehenderit. Consectetur nostrud dolore laboris velit ex quis officia anim excepteur Lorem fugiat.',
}) {
  const [showMore, setShowMore] = useState(false);
  const text = showMore ? children : children?.slice(0, 200) + '...';

  return (
    <div className={`${className ? className + ' ' : ''} relative`}>
      {text}
      <div className='relative py-3' role='seperator'>
        <div
          className={`absolute bottom-3 z-0 h-8 w-full bg-gradient-to-b from-white/70 to-white dark:from-neutral-900/70 dark:to-neutral-900 ${
            showMore && 'hidden'
          }`}
        />
        <div className='relative z-[1] border-b border-neutral-200 dark:border-neutral-700' />
        <button
          onClick={() => setShowMore(!showMore)}
          className='group absolute left-1/2 top-1/2 z-[2] flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-x-1 whitespace-nowrap rounded-full border bg-white px-2.5 py-0.5 text-xs text-gray-500 shadow transition-all hover:text-gray-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-400 dark:hover:text-gray-300'
        >
          {showMore ? 'Show Less' : 'Show More'}
          <ChevronDownIcon
            className={`h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 ${
              showMore ? 'rotate-180 transition-all duration-500' : 'rotate-0 transition-all duration-300'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
