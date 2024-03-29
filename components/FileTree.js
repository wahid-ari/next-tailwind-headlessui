import React, { createContext, useCallback, useContext, useState } from 'react';
import cn from 'clsx';

const ctx = createContext(0);

export const { Provider, Consumer } = ctx;
export function useIndent() {
  return useContext(ctx) || 0;
}
export default ctx;

const Tree = ({ children }) => (
  <div className='mt-6 select-none text-sm text-gray-800 dark:text-gray-300'>
    <div className='inline-flex rounded border px-4 py-2 dark:border-neutral-800'>{children}</div>
  </div>
);

function Ident() {
  const indent = useIndent();

  return (
    <>
      {[...Array(indent)].map((_, i) => (
        <span className='inline-block w-5' key={i} />
      ))}
    </>
  );
}

const Folder = React.memo(({ label, name, open, children, defaultOpen, onToggle }) => {
  const indent = useIndent();

  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  const toggle = useCallback(() => {
    onToggle && onToggle(!isOpen);
    setIsOpen(!isOpen);
  }, [isOpen, onToggle]);

  const isFolderOpen = typeof open === 'undefined' ? isOpen : open;

  return (
    <li className={cn('flex list-none flex-col', { ['']: isFolderOpen })}>
      <a onClick={toggle} title={name} className='inline-flex cursor-pointer items-center py-1 hover:opacity-60'>
        <Ident />
        <span className={''}>
          {isFolderOpen ? (
            <svg width='1em' height='1em' viewBox='0 0 24 24'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z'
              ></path>
            </svg>
          ) : (
            <svg width='1em' height='1em' viewBox='0 0 24 24'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z'
              ></path>
            </svg>
          )}
        </span>
        <span className={'ml-1'}>{label ?? name}</span>
      </a>
      {isFolderOpen ? (
        <ul>
          <Provider value={indent + 1}>{children}</Provider>
        </ul>
      ) : null}
    </li>
  );
});

Folder.displayName = 'Folder';

const File = React.memo(({ label, name, active, ...props }) => {
  return (
    <li
      className={cn('flex list-none', {
        ['nx-text-primary-600 contrast-more:!nx-text-primary-600 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50']:
          active,
      })}
    >
      <a {...props} className='inline-flex cursor-default items-center py-1'>
        <Ident />
        <span className={''}>
          <svg width='1em' height='1em' viewBox='0 0 24 24'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z'
            ></path>
          </svg>
        </span>
        <span className={'ml-1'}>{label ?? name}</span>
      </a>
    </li>
  );
});

File.displayName = 'File';

export { Tree, Folder, File };
