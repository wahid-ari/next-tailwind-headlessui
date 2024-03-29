export default function DescriptionList({ className, divide, children }) {
  return (
    <dl className={`${className ? className : ' '} ${divide && 'divide-y divide-gray-200 dark:divide-neutral-700'}`}>
      {children}
    </dl>
  );
}

DescriptionList.item = ({ title, text }) => {
  return (
    <div className='py-3 sm:grid sm:grid-cols-6 sm:gap-2'>
      <dt className='text-sm font-medium text-gray-600 dark:text-white'>{title}</dt>
      <dd className='mt-1 text-sm text-gray-600 dark:text-gray-200 sm:col-span-5 sm:mt-0'>{text}</dd>
    </div>
  );
};
