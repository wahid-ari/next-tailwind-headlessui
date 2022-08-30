import { useState } from "react";
import { DuplicateIcon } from "@heroicons/react/outline";

export default function InputCopy({ id, className, label, name, placeholder, value, onChange, disabled, ...rest }) {

  const [copyLabel, setCopyLabel] = useState('Copy')

  async function copyInput() {
    try {
      await navigator.clipboard.writeText(value);
      setCopyLabel('Copied !');
      setTimeout(() => {
        setCopyLabel('Copy')
      }, 2000)
    } catch (err) {
      setCopyLabel('Failed to copy !');
    }
  }

  return (
    <div className="mb-4">
      {label &&
        <label htmlFor={name} className="block font-medium text-sm text-neutral-800 dark:text-gray-200">
          {label}
        </label>
      }
      <div className="relative flex mb-4 items-center mt-2">
        <input
          {...rest}
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            ${className ? className + " " : ""} 
            ${disabled ?
              "cursor-not-allowed text-neutral-500 bg-gray-100 dark:bg-neutral-800"
              :
              "dark:text-white bg-white dark:bg-neutral-900"
            } 
            text-sm transition-all w-full px-3 pr-11 py-[0.6rem] rounded-md
            border border-gray-300 dark:border-neutral-700 
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
          `}
        />
        <button
          title="Copy to clipboard"
          onClick={copyInput}
          className="dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-100 hover:bg-gray-200 border dark:border-0 flex items-center text-xs font-medium z-10 mr-1.5 px-2 py-1 rounded-md absolute right-0 transition-all"
        >
          <DuplicateIcon className="w-4 h-4 mr-1 text-gray-600 dark:text-neutral-400" />
          <span className="mb-0.5 text-gray-600 dark:text-neutral-400">{copyLabel}</span>
        </button>
      </div>
    </div>
  );
}
