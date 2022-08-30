export default function Divider({ className, center, left, right, text }) {
  return (
    center ? (
      <div className={`${className ? className + " " : ""} p-2.5 relative`} role="seperator">
        <div className="border-b border-neutral-200 dark:border-neutral-700" />
        <span className="whitespace-nowrap px-3 dark:text-dark-400 text-gray-400 text-sm absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900">{text}</span>
      </div>
    )
    : left ? (

      <div className={`${className ? className + " " : ""} p-2.5 relative`} role="seperator">
        <div className="border-b border-neutral-200 dark:border-neutral-700" />
        <span className="whitespace-nowrap px-3 dark:text-dark-400 text-gray-400 text-sm absolute left-16 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900">{text}</span>
      </div>
    )
    : right ? (

      <div className={`${className ? className + " " : ""} p-2.5 relative`} role="seperator">
        <div className="border-b border-neutral-200 dark:border-neutral-700" />
        <span className="whitespace-nowrap px-3 dark:text-dark-400 text-gray-400 text-sm absolute right-16 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900">{text}</span>
      </div>
    )
    :
    <div className={`${className ? className + " " : ""} p-2.5`} role="seperator">
      <div className="border-b border-neutral-200 dark:border-neutral-700" />
    </div>
  )
}