export default function Loading({ className, small, large }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='status'
      className={`
      ${className ? className : ' '}
      ${small ? 'h-6 w-6' : 'h-8 w-8'}
      ${large ? 'h-10 w-10' : 'h-8 w-8'} mr-2 inline animate-[spin_1.5s_linear_infinite] text-blue-500 duration-200`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <line x1='12' y1='2' x2='12' y2='6'></line>
      <line x1='12' y1='18' x2='12' y2='22'></line>
      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line>
      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line>
      <line x1='2' y1='12' x2='6' y2='12'></line>
      <line x1='18' y1='12' x2='22' y2='12'></line>
      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line>
      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line>
    </svg>
  );
}

Loading.green = ({ className, small, large }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='status'
      className={`
      ${className ? className : ' '}
      ${small ? 'h-6 w-6' : 'h-8 w-8'}
      ${large ? 'h-10 w-10' : 'h-8 w-8'} mr-2 inline animate-[spin_1.5s_linear_infinite] text-green-600`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <line x1='12' y1='2' x2='12' y2='6'></line>
      <line x1='12' y1='18' x2='12' y2='22'></line>
      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line>
      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line>
      <line x1='2' y1='12' x2='6' y2='12'></line>
      <line x1='18' y1='12' x2='22' y2='12'></line>
      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line>
      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line>
    </svg>
  );
};

Loading.red = ({ className, small, large }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='status'
      className={`
      ${className ? className : ' '}
      ${small ? 'h-6 w-6' : 'h-8 w-8'}
      ${large ? 'h-10 w-10' : 'h-8 w-8'} mr-2 inline animate-[spin_1.5s_linear_infinite] text-red-600`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <line x1='12' y1='2' x2='12' y2='6'></line>
      <line x1='12' y1='18' x2='12' y2='22'></line>
      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line>
      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line>
      <line x1='2' y1='12' x2='6' y2='12'></line>
      <line x1='18' y1='12' x2='22' y2='12'></line>
      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line>
      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line>
    </svg>
  );
};

Loading.yellow = ({ className, small, large }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='status'
      className={`
      ${className ? className : ' '}
      ${small ? 'h-6 w-6' : 'h-8 w-8'}
      ${large ? 'h-10 w-10' : 'h-8 w-8'} mr-2 inline animate-[spin_1.5s_linear_infinite] text-yellow-600`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <line x1='12' y1='2' x2='12' y2='6'></line>
      <line x1='12' y1='18' x2='12' y2='22'></line>
      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line>
      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line>
      <line x1='2' y1='12' x2='6' y2='12'></line>
      <line x1='18' y1='12' x2='22' y2='12'></line>
      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line>
      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line>
    </svg>
  );
};

Loading.orange = ({ className, small, large }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='status'
      className={`
      ${className ? className : ' '}
      ${small ? 'h-6 w-6' : 'h-8 w-8'}
      ${large ? 'h-10 w-10' : 'h-8 w-8'} mr-2 inline animate-[spin_1.5s_linear_infinite] text-orange-600`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <line x1='12' y1='2' x2='12' y2='6'></line>
      <line x1='12' y1='18' x2='12' y2='22'></line>
      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line>
      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line>
      <line x1='2' y1='12' x2='6' y2='12'></line>
      <line x1='18' y1='12' x2='22' y2='12'></line>
      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line>
      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line>
    </svg>
  );
};

Loading.purple = ({ className, small, large }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='status'
      className={`
      ${className ? className : ' '}
      ${small ? 'h-6 w-6' : 'h-8 w-8'}
      ${large ? 'h-10 w-10' : 'h-8 w-8'} mr-2 inline animate-[spin_1.5s_linear_infinite] text-violet-600`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <line x1='12' y1='2' x2='12' y2='6'></line>
      <line x1='12' y1='18' x2='12' y2='22'></line>
      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line>
      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line>
      <line x1='2' y1='12' x2='6' y2='12'></line>
      <line x1='18' y1='12' x2='22' y2='12'></line>
      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line>
      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line>
    </svg>
  );
};

Loading.dark = ({ className, small, large }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='status'
      className={`
      ${className ? className : ' '}
      ${small ? 'h-6 w-6' : 'h-8 w-8'}
      ${
        large ? 'h-10 w-10' : 'h-8 w-8'
      } mr-2 inline animate-[spin_1.5s_linear_infinite] text-gray-400 dark:text-gray-700`}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <line x1='12' y1='2' x2='12' y2='6'></line>
      <line x1='12' y1='18' x2='12' y2='22'></line>
      <line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line>
      <line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line>
      <line x1='2' y1='12' x2='6' y2='12'></line>
      <line x1='18' y1='12' x2='22' y2='12'></line>
      <line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line>
      <line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line>
    </svg>
  );
};
