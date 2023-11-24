import ActiveLink from '@components/supabase/ActiveLink';

export default function MobileNavLink({ href = '', icon, children, className }) {
  return (
    <ActiveLink activeClassName='bg-neutral-100 dark:bg-neutral-800' href={href}>
      <span
        className={`px-2 py-1.5 flex justify-start items-center gap-2 rounded-md text-sm font-medium dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all ${className}`}
      >
        {icon}
        <span>{children}</span>
      </span>
    </ActiveLink>
  );
}
