export default function InputSearch({ id, className, label, type, name, placeholder, value, onChange, onClick, ...rest }) {
  function onSubmit(e) {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center mb-4">
      <label htmlFor={name} className="sr-only">{label}</label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input
          {...rest}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-neutral-900 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white ${className ? className : ""}`}
          placeholder={placeholder}
          required />
      </div>
      <button onClick={onClick} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}