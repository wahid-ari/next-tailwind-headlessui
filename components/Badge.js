export default function Badge({ className, large, pills, children }) {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded'}
      bg-blue-100 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-blue-600`}
    >
      {children}
    </span>
  );
}

Badge.green = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded'}
      bg-green-100 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-green-600`}
    >
      {children}
    </span>
  );
};

Badge.red = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded'}
      bg-red-100 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-red-600`}
    >
      {children}
    </span>
  );
};

Badge.yellow = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded'}
      bg-yellow-100 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-yellow-600`}
    >
      {children}
    </span>
  );
};

Badge.orange = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded'}
      bg-orange-100 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-orange-600`}
    >
      {children}
    </span>
  );
};

Badge.purple = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded'}
      bg-violet-100 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-violet-600`}
    >
      {children}
    </span>
  );
};

Badge.dark = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded'}
      bg-gray-100 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-gray-600`}
    >
      {children}
    </span>
  );
};
