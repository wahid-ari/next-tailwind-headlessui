export default function AlertOutline({ className, children, pills, large }) {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 border border-blue-500 p-3 text-blue-600`}
    >
      {children}
    </div>
  );
}

AlertOutline.green = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 border border-green-500 p-3 text-green-600`}
    >
      {children}
    </div>
  );
};

AlertOutline.yellow = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 border border-yellow-500 p-3 text-yellow-600`}
    >
      {children}
    </div>
  );
};

AlertOutline.red = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 border border-red-500 p-3 text-red-600`}
    >
      {children}
    </div>
  );
};

AlertOutline.orange = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 border border-orange-500 p-3 text-orange-600`}
    >
      {children}
    </div>
  );
};

AlertOutline.purple = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 border border-violet-500 p-3 text-violet-600`}
    >
      {children}
    </div>
  );
};

AlertOutline.dark = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 border border-gray-500 p-3 text-gray-600 dark:text-gray-300`}
    >
      {children}
    </div>
  );
};
