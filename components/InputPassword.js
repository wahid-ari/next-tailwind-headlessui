import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

export default function InputPassword({ id, className, label, name, placeholder, value, onChange, disabled, ...rest }) {

  const [showPassword, setShowPassword] = useState(false);

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
          type={showPassword ? "text" : "password"}
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
          aria-label="Show Password"
          onClick={() => setShowPassword(!showPassword)}
          className="z-10 mr-1.5 px-1.5 py-1 rounded-md absolute right-0"
        >
          {showPassword ?
            <EyeIcon className="w-5 h-5 text-gray-600 dark:text-neutral-400" />
            :
            <EyeOffIcon className="w-5 h-5 text-gray-600 dark:text-neutral-400" />
          }
        </button>
      </div>
    </div>
  );
}
