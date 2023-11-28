export default function Input({ id, className, label, type, name, placeholder, value, onChange, ...rest }) {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <input
        {...rest}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          ${className ? className + ' ' : ''} 
          ${type == 'date' ? 'cursor-pointer' : ''}
          mt-2 w-full rounded-md border border-gray-300 bg-white px-3
          py-[0.6rem] text-sm outline-none  
          transition-all focus:border-blue-500 focus:ring-1 
          focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white
        `}
      />
    </div>
  );
}

Input.disabled = ({ id, className, label, type, name, placeholder, value, onChange, ...rest }) => {
  return (
    <div className='mb-4'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <input
        {...rest}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled
        className={`
          ${className ? className + ' ' : ''}
          mt-2 w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100
          px-3 py-[0.6rem] text-sm
          text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800
        `}
      />
    </div>
  );
};
