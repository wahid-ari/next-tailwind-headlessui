import { useState } from 'react';

export default function RatingButton({ className, activeClassName }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className='star-rating'>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            className={
              index <= ((rating && hover) || hover)
                ? activeClassName
                  ? activeClassName
                  : 'text-yellow-500'
                : 'text-neutral-300 dark:text-neutral-600'
            }
            onClick={() => {
              if (rating == index) {
                setRating(0);
              } else {
                setRating(index);
              }
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={`star ${className ? className : 'text-xl'}`}>&#9733;</span>
          </button>
        );
      })}
      <p className='dark:text-white'>{rating}</p>
    </div>
  );
}
