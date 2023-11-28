import Button from '@components/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export default function Table({
  className,
  head,
  totalPage = 0,
  totalData = 0,
  currentPage = 0,
  onNext,
  onPrev,
  children,
}) {
  return (
    <div className={`${className ? className + ' ' : ''}w-full rounded border dark:border-neutral-800`}>
      <div className='overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700'>
        <table className='w-full whitespace-nowrap text-neutral-800 dark:text-neutral-300'>
          <thead>
            <tr className='border-b bg-gray-50 text-sm font-medium dark:border-neutral-800 dark:bg-[#202020]'>
              {head}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      {/* Start Pagination */}
      <div className='bg-white text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-gray-400'>
        <div className='flex w-full items-center justify-between gap-2 px-4 py-2.5'>
          {totalData === 0 ? (
            <p className='whitespace-nowrap'>Tidak ada data</p>
          ) : (
            <p className='whitespace-nowrap'>
              Menampilkan <span className='font-medium'>{(currentPage - 1) * 5 + 1}</span> -{' '}
              <span className='font-medium'>{currentPage !== totalPage ? currentPage * 5 : totalData}</span> dari{' '}
              <span className='font-medium'>{totalData}</span> data
            </p>
          )}
          <div className='flex items-center justify-end gap-2'>
            <Button.secondary
              onClick={onPrev}
              disabled={currentPage < 2}
              className='flex h-8 w-8 items-center justify-center !p-0'
            >
              <ChevronLeftIcon className='h-4 w-4' />
            </Button.secondary>
            <Button.secondary
              onClick={onNext}
              disabled={currentPage === totalPage}
              className='flex h-8 w-8 items-center justify-center !p-0'
            >
              <ChevronRightIcon className='h-4 w-4' />
            </Button.secondary>
          </div>
        </div>
      </div>
      {/* End Pagination */}
    </div>
  );
}

Table.tr = ({ className, children }) => {
  return (
    <tr
      className={`${className ? className + ' ' : ''}
      border-b bg-white text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200`}
    >
      {children}
    </tr>
  );
};

Table.td = ({ className, small, children }) => {
  return <td className={`${className ? className + ' ' : ''}p-4 ${small ? 'w-1' : ''}`}>{children}</td>;
};
