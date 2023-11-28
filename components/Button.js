export default function Button({ className, type, value, onClick, disabled, pills, children, ...rest }) {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				bg-blue-500 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all focus:outline-none focus:ring-2 focus:ring-blue-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-blue-600'} 
				`}
    >
      {children}
    </button>
  );
}

Button.secondary = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				border border-neutral-300 bg-gray-50 px-3 py-1.5 text-sm font-medium text-neutral-800 outline-none transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-neutral-900'} 
				`}
    >
      {children}
    </button>
  );
};

Button.green = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-emerald-600'} 
				`}
    >
      {children}
    </button>
  );
};

Button.yellow = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				bg-amber-500 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all focus:outline-none focus:ring-2 focus:ring-amber-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-amber-600'} 
				`}
    >
      {children}
    </button>
  );
};

Button.orange = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				bg-orange-500 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all focus:outline-none focus:ring-2 focus:ring-orange-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-orange-600'} 
				`}
    >
      {children}
    </button>
  );
};

Button.red = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				bg-red-500 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all focus:outline-none focus:ring-2 focus:ring-red-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-red-600'} 
				`}
    >
      {children}
    </button>
  );
};

Button.purple = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				bg-violet-500 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all focus:outline-none focus:ring-2 focus:ring-violet-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-violet-600'} 
				`}
    >
      {children}
    </button>
  );
};

Button.dark = ({ className, type, value, onClick, disabled, pills, children, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      disabled={disabled && true}
      className={`
				bg-gray-500 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all focus:outline-none focus:ring-2 focus:ring-gray-300
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				${disabled ? 'cursor-not-allowed' : 'hover:bg-gray-600'} 
				`}
    >
      {children}
    </button>
  );
};
