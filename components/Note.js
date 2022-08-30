export default function Note({ className, title, titleClassName, children }) {
  return (
    <div className={`text-sm py-2 px-4 dark:text-white border border-gray-300 dark:border-neutral-700 rounded-md ${className && className}`}>
      <span className={`dark:text-white font-medium mr-1 ${titleClassName && titleClassName}`}>{title}</span>
      {children}
    </div>
  )
}