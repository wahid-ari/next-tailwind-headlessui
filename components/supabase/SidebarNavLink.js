import ActiveLink from '@components/supabase/ActiveLink';

export default function SidebarNavLink({ href = '', icon, children, className, noWrap }) {
  return (
    <ActiveLink activeClassName='bg-neutral-100 dark:bg-neutral-800' href={href}>
      <span
        className={`flex items-center justify-start gap-2 rounded px-2.5 py-1.5 text-sm font-medium transition-all hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 ${className}`}
      >
        {icon}
        <span className={`${noWrap && 'whitespace-nowrap'}`}>{children}</span>
      </span>
    </ActiveLink>
  );
}
