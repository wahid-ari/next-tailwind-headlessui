import * as Tooltip from '@radix-ui/react-tooltip';
import ActiveLink from "@components/supabase/ActiveLink";

export default function SidebarNavIcon({ href = "", children, className = "", name = "" }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger aria-label={name}>
          <ActiveLink activeClassName="bg-neutral-100 dark:bg-neutral-800" href={href} aria-label={name}>
            <span className={`py-1.5 px-2 flex justify-center items-center rounded-md dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all ${className}`}>
              {children}
            </span>
          </ActiveLink>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="right" className="bg-neutral-100 shadow-xl border dark:border-neutral-800 dark:bg-neutral-800 dark:text-white text-sm font-medium px-2.5 py-1.5 rounded">
            {name}
            <Tooltip.Arrow className="fill-current text-neutral-100 dark:text-neutral-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}