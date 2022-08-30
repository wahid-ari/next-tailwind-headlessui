export default function Scrollable({ className, title, height, children }) {
  return (
    <div className={`shadow border border-gray-100 dark:border-neutral-800 p-4 rounded ${className && className}`}>
      {title && <h6 className="dark:text-white font-medium text-base pb-4">{title}</h6>}
      <div className={`overflow-scroll overflow-x-hidden ${height ? height : "h-52"}`}>
        {children}
      </div>
    </div>
  )
}

Scrollable.custom = ({ className, title, height, children }) => {
  return (
    <div className={`shadow border border-gray-100 dark:border-neutral-800 py-4 pr-4 rounded ${className && className}`}>
      {title && <h6 className="dark:text-white font-medium text-base pl-4 pb-4">{title}</h6>}
      <div className={`${height ? height : "h-52"} overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-800`}>
        <div className="pl-4 pr-5">
          {children}
        </div>
      </div>
    </div>
  )
}