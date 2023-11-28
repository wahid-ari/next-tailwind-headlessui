import AlertCompact from '@components/AlertCompact';

export default function AlertCompactRenderer() {
  return (
    <div className='mb-4 flex flex-col gap-3'>
      <AlertCompact title='Info'>
        <p className='text-sm text-gray-500 dark:text-gray-300'>This is info alert</p>
      </AlertCompact>
      <AlertCompact.success title='Success' className='!max-w-full'>
        <p className='text-sm text-gray-500 dark:text-gray-300'>This is success alert</p>
      </AlertCompact.success>
    </div>
  );
}
