import * as Tooltip from '@radix-ui/react-tooltip';
import ActiveLink from "@components/dashboardicon/ActiveLink";

export default function SidebarNavIcon({ href = "", children, className = "", name = "" }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger>
          <ActiveLink activeClassName="bg-neutral-100 dark:bg-neutral-800" href={href}>
            <span className={`py-1.5 px-2 flex justify-center items-center rounded-md dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all ${className}`}>
              {children}
            </span>
          </ActiveLink>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="right" className="bg-white shadow-xl border dark:border-neutral-800 dark:bg-neutral-950 dark:text-white text-sm font-medium px-2.5 py-1.5 rounded">
            {name}
            <Tooltip.Arrow className="fill-current text-neutral-200 dark:text-neutral-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}