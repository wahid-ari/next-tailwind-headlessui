import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';

export default function AlertCompact({ className, title, children }) {
  return (
    <div className={`${className} flex max-w-xs rounded-md shadow-md dark:bg-[#202020]`}>
      <div className='flex items-center rounded-l-md bg-sky-500 px-2'>
        <InformationCircleIcon className='h-7 w-7 text-white' />
      </div>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-sky-500'>{title}</p>
        {children}
      </div>
    </div>
  );
}

AlertCompact.success = ({ className, title, children }) => {
  return (
    <div className={`${className} flex max-w-xs rounded-md shadow-md dark:bg-[#202020]`}>
      <div className='flex items-center rounded-l-md bg-emerald-500 px-2'>
        <CheckCircleIcon className='h-7 w-7 text-white' />
      </div>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-emerald-500'>{title}</p>
        {children}
      </div>
    </div>
  );
};

AlertCompact.warning = ({ className, title, children }) => {
  return (
    <div className={`${className} flex max-w-xs rounded-md shadow-md dark:bg-[#202020]`}>
      <div className='flex items-center rounded-l-md bg-yellow-500 px-2'>
        <ExclamationIcon className='h-7 w-7 text-white' />
      </div>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-yellow-500'>{title}</p>
        {children}
      </div>
    </div>
  );
};

AlertCompact.danger = ({ className, title, children }) => {
  return (
    <div className={`${className} flex max-w-xs rounded-md shadow-md dark:bg-[#202020]`}>
      <div className='flex items-center rounded-l-md bg-red-500 px-2'>
        <ExclamationCircleIcon className='h-7 w-7 text-white' />
      </div>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-red-500'>{title}</p>
        {children}
      </div>
    </div>
  );
};

AlertCompact.infoLeft = ({ className, title, children }) => {
  return (
    <div className={`${className} max-w-xs rounded-md border-l-8 border-sky-500 shadow-md dark:bg-[#202020]`}>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-sky-500'>{title}</p>
        {children}
      </div>
    </div>
  );
};

AlertCompact.successLeft = ({ className, title, children }) => {
  return (
    <div className={`${className} max-w-xs rounded-md border-l-8 border-emerald-500 shadow-md dark:bg-[#202020]`}>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-emerald-500'>{title}</p>
        {children}
      </div>
    </div>
  );
};

AlertCompact.warningLeft = ({ className, title, children }) => {
  return (
    <div className={`${className} max-w-xs rounded-md border-l-8 border-yellow-500 shadow-md dark:bg-[#202020]`}>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-yellow-500'>{title}</p>
        {children}
      </div>
    </div>
  );
};

AlertCompact.dangerLeft = ({ className, title, children }) => {
  return (
    <div className={`${className} max-w-xs rounded-md border-l-8 border-red-500 shadow-md dark:bg-[#202020]`}>
      <div className='px-3 py-1.5 '>
        <p className='text-base font-medium text-red-500'>{title}</p>
        {children}
      </div>
    </div>
  );
};
