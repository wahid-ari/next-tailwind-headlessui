import ActiveLink from '@components/dashboardicon/ActiveLink';

export default function SidebarNavLink({ href = '', icon, children, className }) {
  return (
    <ActiveLink activeClassName='bg-neutral-100 dark:bg-neutral-800' href={href}>
      <span
        className={`flex items-center justify-start gap-2 rounded px-2.5 py-1.5 text-sm font-medium transition-all hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 ${className}`}
      >
        {icon}
        <span>{children}</span>
      </span>
    </ActiveLink>
  );
}
