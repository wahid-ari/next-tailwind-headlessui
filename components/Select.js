export default function Select({ label, id, name, className, defaultValue, onChange, children, ...rest }) {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <select
        {...rest}
        id={id}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`
          ${className ? className + ' ' : ''}
          mt-2 block w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3
          py-[0.6rem] text-sm outline-none  
          transition-all focus:border-blue-500 focus:outline-none 
          focus:ring-1 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white
        `}
      >
        {children}
      </select>
    </div>
  );
}

Select.option = ({ value, children, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {children}
    </option>
  );
};
