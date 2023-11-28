export default function ButtonOutline({ className, type, value, onClick, disabled, pills, children, ...rest }) {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				border border-blue-500 px-3 py-1.5 text-sm font-medium text-blue-500 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-blue-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'} 
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
				border border-emerald-500 px-3 py-1.5 text-sm font-medium text-emerald-500 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-emerald-500 hover:text-white'} 
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
				border border-amber-500 px-3 py-1.5 text-sm font-medium text-amber-500 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-amber-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-amber-500 hover:text-white'} 
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
				border border-orange-500 px-3 py-1.5 text-sm font-medium text-orange-500 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-orange-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-orange-500 hover:text-white'} 
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
				border border-red-500 px-3 py-1.5 text-sm font-medium text-red-500 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-red-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-red-500 hover:text-white'} 
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
				border border-violet-500 px-3 py-1.5 text-sm font-medium text-violet-500 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-violet-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-violet-500 hover:text-white'} 
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
				border border-gray-500 px-3 py-1.5 text-sm font-medium text-gray-500 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-gray-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-gray-500 hover:text-white'} 
				`}
    >
      {children}
    </button>
  );
};
