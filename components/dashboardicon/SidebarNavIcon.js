import * as Tooltip from '@radix-ui/react-tooltip';

import ActiveLink from '@components/dashboardicon/ActiveLink';

export default function SidebarNavIcon({ href = '', children, className = '', name = '' }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger aria-label={name}>
          <ActiveLink activeClassName='bg-neutral-100 dark:bg-neutral-800' href={href} aria-label={name}>
            <span
              className={`flex items-center justify-center rounded-md px-2 py-1.5 transition-all hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 ${className}`}
            >
              {children}
            </span>
          </ActiveLink>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side='right'
            className='rounded border bg-neutral-100 px-2.5 py-1.5 text-sm font-medium shadow-xl dark:border-neutral-800 dark:bg-neutral-800 dark:text-white'
          >
            {name}
            <Tooltip.Arrow className='fill-current text-neutral-100 dark:text-neutral-800' />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
