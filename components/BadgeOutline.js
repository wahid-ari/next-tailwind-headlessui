export default function BadgeOutline({ className, large, pills, children }) {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'}
      ${pills ? 'rounded-full' : 'rounded'} 
      border border-blue-500 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-blue-500`}
    >
      {children}
    </span>
  );
}

BadgeOutline.green = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'}
      ${pills ? 'rounded-full' : 'rounded'} 
      border border-green-500 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-green-500`}
    >
      {children}
    </span>
  );
};

BadgeOutline.red = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'}
      ${pills ? 'rounded-full' : 'rounded'} 
      border border-red-500 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-red-500`}
    >
      {children}
    </span>
  );
};

BadgeOutline.yellow = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'}
      ${pills ? 'rounded-full' : 'rounded'} 
      border border-yellow-500 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-yellow-500`}
    >
      {children}
    </span>
  );
};

BadgeOutline.orange = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'}
      ${pills ? 'rounded-full' : 'rounded'} 
      border border-orange-500 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-orange-500`}
    >
      {children}
    </span>
  );
};

BadgeOutline.purple = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'}
      ${pills ? 'rounded-full' : 'rounded'} 
      border border-violet-500 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-violet-500`}
    >
      {children}
    </span>
  );
};

BadgeOutline.dark = ({ className, large, pills, children }) => {
  return (
    <span
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? '!pb-[0.1rem] !pt-[0.1rem] text-sm' : 'text-xs'}
      ${pills ? 'rounded-full' : 'rounded'} 
      border border-gray-500 px-[0.4rem] pb-[0.25rem] pt-[0.2rem] font-medium text-gray-500 dark:text-gray-300`}
    >
      {children}
    </span>
  );
};
