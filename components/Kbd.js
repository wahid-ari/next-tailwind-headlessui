export default function Kbd({ className, children }) {
  return (
    <kbd
      className={`rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-800 
    shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100 ${className ? className : ''}`}
    >
      {children}
    </kbd>
  );
}
