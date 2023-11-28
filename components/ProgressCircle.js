export default function ProgressCircle({ className, color, size, percent, showPercent, strokeWidth, textClassName }) {
  const circumferencee = size * 2 * Math.PI;
  return (
    <div className={`inline-flex items-center justify-center overflow-hidden rounded-full ${className && className}`}>
      <svg className='h-20 w-20'>
        <circle
          className='text-gray-200 dark:text-gray-700'
          strokeWidth={strokeWidth ? strokeWidth : '5'}
          stroke='currentColor'
          fill='transparent'
          r={size}
          cx='40'
          cy='40'
        />
        <circle
          className={`${color ? color : 'text-sky-500'}`}
          strokeWidth={strokeWidth ? strokeWidth : '5'}
          strokeDasharray={circumferencee}
          strokeDashoffset={circumferencee - (percent / 100) * circumferencee}
          strokeLinecap='round'
          stroke='currentColor'
          fill='transparent'
          r={size}
          cx='40'
          cy='40'
        />
      </svg>
      {showPercent && <span className={`absolute text-lg text-sky-500 ${textClassName}`}>{percent}%</span>}
    </div>
  );
}

ProgressCircle.small = ({ className, color, size, percent, showPercent, strokeWidth, textClassName }) => {
  const circumferencee = size * 2 * Math.PI;
  return (
    <div className={`inline-flex items-center justify-center overflow-hidden rounded-full ${className && className}`}>
      <svg className='h-14 w-14'>
        <circle
          className='text-gray-200 dark:text-gray-700'
          strokeWidth={strokeWidth ? strokeWidth : '5'}
          stroke='currentColor'
          fill='transparent'
          r={size}
          cx='30'
          cy='30'
        />
        <circle
          className={`${color ? color : 'text-sky-500'}`}
          strokeWidth={strokeWidth ? strokeWidth : '5'}
          strokeDasharray={circumferencee}
          strokeDashoffset={circumferencee - (percent / 100) * circumferencee}
          strokeLinecap='round'
          stroke='currentColor'
          fill='transparent'
          r={size}
          cx='30'
          cy='30'
        />
      </svg>
      {showPercent && <span className={`absolute pl-1 pt-1 text-xs text-sky-500 ${textClassName}`}>{percent}%</span>}
    </div>
  );
};
