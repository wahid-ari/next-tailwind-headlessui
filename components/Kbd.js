export default function Kbd({ className, children }) {
  return (
    <kbd className={`px-2 py-1 text-xs font-semibold text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-neutral-800 border 
    border-gray-200 rounded-lg dark:border-neutral-600 shadow-md ${className ? className : ""}`}>
      {children}
    </kbd>
  )
}