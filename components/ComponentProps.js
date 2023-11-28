export default function ComponentProps({ name, className, children }) {
  return (
    <div className={`${className} flex flex-wrap items-center gap-2 rounded-lg pt-2`}>
      <div className='text-sm font-medium italic dark:text-white'>{name} Props :</div>
      {children}
    </div>
  );
}
