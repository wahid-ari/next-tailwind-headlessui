export default function Alert({ className, children, pills, large }) {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 bg-blue-100 p-3 text-blue-600`}
    >
      {children}
    </div>
  );
}

Alert.green = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 bg-green-100 p-3 text-green-600`}
    >
      {children}
    </div>
  );
};

Alert.yellow = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 bg-yellow-100 p-3 text-yellow-600`}
    >
      {children}
    </div>
  );
};

Alert.red = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 bg-red-100 p-3 text-red-600`}
    >
      {children}
    </div>
  );
};

Alert.orange = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 bg-orange-100 p-3 text-orange-600`}
    >
      {children}
    </div>
  );
};

Alert.purple = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 bg-violet-100 p-3 text-violet-600`}
    >
      {children}
    </div>
  );
};

Alert.dark = ({ className, children, pills, large }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''} 
      ${large ? 'text-sm' : 'text-xs'} 
      ${pills ? 'rounded-full' : 'rounded-lg'}
      mb-2 bg-gray-100 p-3 text-gray-600`}
    >
      {children}
    </div>
  );
};
