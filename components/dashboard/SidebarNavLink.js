import ActiveLink from '@components/ActiveLink';

export default function SidebarNavLink({ href = '', icon, children, className }) {
  return (
    <ActiveLink activeClassName='bg-gray-100 dark:bg-neutral-800' href={href}>
      <span
        className={`flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 ${className}`}
      >
        {icon}
        <span>{children}</span>
      </span>
    </ActiveLink>
  );
}
