import Link from 'next/link';

export default function LinkButton({ className, href, pills, children, ...rest }) {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300`}
    >
      {children}
    </Link>
  );
}

LinkButton.secondary = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				border border-neutral-300 bg-gray-50 px-3 py-1.5 text-sm font-medium text-neutral-800 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900`}
    >
      {children}
    </Link>
  );
};

LinkButton.green = ({ className, href, pills, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`
				${className ? className + ' ' : ''}
				${pills ? 'rounded-full' : 'rounded'}
				bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300`}
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
				bg-amber-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300`}
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
				bg-orange-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300`}
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
				bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300`}
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
				bg-violet-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-300`}
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
				bg-gray-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300`}
    >
      {children}
    </Link>
  );
};
