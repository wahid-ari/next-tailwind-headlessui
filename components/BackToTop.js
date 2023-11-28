import { useEffect, useState } from 'react';
import { ArrowCircleUpIcon } from '@heroicons/react/outline';

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  }

  return (
    <>
      {showBackToTop && (
        <div className='fixed bottom-6 right-3 z-40 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-neutral-800 dark:bg-opacity-40 md:right-10'>
          <button
            onClick={scrollToTop}
            className='h-8 w-8 rounded-full bg-gray-100 p-1 transition-all duration-300 ease-in hover:bg-gray-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'
          >
            <ArrowCircleUpIcon />
          </button>
        </div>
      )}
    </>
  );
}
