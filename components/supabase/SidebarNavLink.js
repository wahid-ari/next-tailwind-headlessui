import ActiveLink from '@components/supabase/ActiveLink';

export default function SidebarNavLink({ href = '', icon, children, className, noWrap }) {
  return (
    <ActiveLink activeClassName='bg-neutral-100 dark:bg-neutral-800' href={href}>
      <span
        className={`px-2.5 py-1.5 flex justify-start items-center gap-2 rounded text-sm font-medium dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all ${className}`}
      >
        {icon}
        <span className={`${noWrap && 'whitespace-nowrap'}`}>{children}</span>
      </span>
    </ActiveLink>
  );
}
