export default function Note({ className, title, titleClassName, children }) {
  return (
    <div
      className={`rounded-md border border-gray-300 px-4 py-2 text-sm dark:border-neutral-700 dark:text-white ${
        className && className
      }`}
    >
      <span className={`mr-1 font-medium dark:text-white ${titleClassName && titleClassName}`}>{title}</span>
      {children}
    </div>
  );
}
