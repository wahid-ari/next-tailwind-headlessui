import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function ShowMore({ className, text }) {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className={`${className ? className + " " : ""} py-5 relative`} role="seperator">
      <div className="border-b border-neutral-200 dark:border-neutral-700" />
      <button onClick={() => setShowMore(!showMore)} className="flex items-center gap-x-1 rounded-full shadow border dark:border-neutral-700 py-0.5 whitespace-nowrap px-2.5 group dark:text-gray-400 dark:hover:text-gray-300 text-gray-500 hover:text-gray-700 transition-all text-xs absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900">
        {text}
        <ChevronDownIcon className={`h-4 w-4 dark:text-gray-400 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 ${showMore ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"}`} />
      </button>
    </div>
  )
}