export default function Scrollable({ className, title, height, children }) {
  return (
    <div className={`rounded border border-gray-100 p-4 shadow dark:border-neutral-800 ${className && className}`}>
      {title && <h6 className='pb-4 text-base font-medium dark:text-white'>{title}</h6>}
      <div className={`overflow-scroll overflow-x-hidden ${height ? height : 'h-52'}`}>{children}</div>
    </div>
  );
}

Scrollable.custom = ({ className, title, height, children }) => {
  return (
    <div
      className={`rounded border border-gray-100 py-4 pr-4 shadow dark:border-neutral-800 ${className && className}`}
    >
      {title && <h6 className='pb-4 pl-4 text-base font-medium dark:text-white'>{title}</h6>}
      <div
        className={`${
          height ? height : 'h-52'
        } overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-800`}
      >
        <div className='pl-4 pr-5'>{children}</div>
      </div>
    </div>
  );
};
