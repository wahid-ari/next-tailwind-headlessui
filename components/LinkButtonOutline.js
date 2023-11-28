import Link from 'next/link';

export default function LinkButton({ className, href, pills, children, ...rest }) {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-blue-500 px-3 py-1.5 text-sm font-medium text-blue-500 transition-all hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300`}
    >
      {children}
    </Link>
  );
}

LinkButton.green = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-emerald-500 px-3 py-1.5 text-sm font-medium text-emerald-500 transition-all hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300`}
    >
      {children}
    </Link>
  );
};

LinkButton.yellow = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-amber-500 px-3 py-1.5 text-sm font-medium text-amber-500 transition-all hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-300`}
    >
      {children}
    </Link>
  );
};

LinkButton.orange = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-orange-500 px-3 py-1.5 text-sm font-medium text-orange-500 transition-all hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300`}
    >
      {children}
    </Link>
  );
};

LinkButton.red = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-red-500 px-3 py-1.5 text-sm font-medium text-red-500 transition-all hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300`}
    >
      {children}
    </Link>
  );
};

LinkButton.purple = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-violet-500 px-3 py-1.5 text-sm font-medium text-violet-500 transition-all hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-300`}
    >
      {children}
    </Link>
  );
};

LinkButton.dark = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-gray-500 px-3 py-1.5 text-sm font-medium text-gray-500 transition-all hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-300`}
    >
      {children}
    </Link>
  );
};
