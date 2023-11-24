export default function ButtonOutline({ className, type, value, onClick, disabled, pills, children, ...rest }) {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				text-sm text-blue-500 transition-all outline-none px-3 py-1.5 font-medium border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:text-white hover:bg-blue-500'} 
				`}
    >
      {children}
    </button>
  );
}

ButtonOutline.green = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				text-sm text-emerald-500 transition-all outline-none px-3 py-1.5 font-medium border border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:text-white hover:bg-emerald-500'} 
				`}
    >
      {children}
    </button>
  );
};

ButtonOutline.yellow = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				text-sm text-amber-500 transition-all outline-none px-3 py-1.5 font-medium border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:text-white hover:bg-amber-500'} 
				`}
    >
      {children}
    </button>
  );
};

ButtonOutline.orange = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				text-sm text-orange-500 transition-all outline-none px-3 py-1.5 font-medium border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:text-white hover:bg-orange-500'} 
				`}
    >
      {children}
    </button>
  );
};

ButtonOutline.red = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				text-sm text-red-500 transition-all outline-none px-3 py-1.5 font-medium border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:text-white hover:bg-red-500'} 
				`}
    >
      {children}
    </button>
  );
};

ButtonOutline.purple = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				text-sm text-violet-500 transition-all outline-none px-3 py-1.5 font-medium border border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:text-white hover:bg-violet-500'} 
				`}
    >
      {children}
    </button>
  );
};

ButtonOutline.dark = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				text-sm text-gray-500 dark:text-gray-300 transition-all outline-none px-3 py-1.5 font-medium border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:text-white hover:bg-gray-500'} 
				`}
    >
      {children}
    </button>
  );
};
