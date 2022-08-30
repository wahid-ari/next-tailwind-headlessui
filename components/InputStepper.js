import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";

export default function InputStepper({ id, className, label, name, placeholder, value, min, max, onDown, onUp, ...rest }) {

  const canDown = value != min ? true : false
  const canUp = value != max ? true : false

  return (
    <div className="mb-4">
      {label &&
        <label htmlFor={name} className="block font-medium text-sm text-neutral-800 dark:text-gray-200">
          {label}
        </label>
      }
      <div className="flex mt-2">
        <button onClick={onDown} disabled={!canDown} className={`${!canDown && 'cursor-not-allowed'} rounded-l-md border-l border-y border-gray-300 dark:border-neutral-700 px-2.5 py-[0.4rem] bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all`}>
          <MinusSmIcon className="w-4 h-4 dark:text-white" />
        </button>
        <input
          {...rest}
          name={name}
          placeholder={placeholder}
          value={value}
          className={`z-10 w-24 text-center
						text-sm transition-all px-3 py-[0.4rem]
						dark:text-white bg-white dark:bg-neutral-900  
						border border-gray-300 dark:border-neutral-700 
						focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
            ${className ? className : ""}
					`}
        />
        <button onClick={onUp} disabled={!canUp} className={`${!canUp && 'cursor-not-allowed'} rounded-r-md border-r border-y border-gray-300 dark:border-neutral-700 px-2.5 py-[0.4rem] bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all`}>
          <PlusSmIcon className="w-4 h-4 dark:text-white" />
        </button>
      </div>
    </div>
  );
}