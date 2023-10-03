import ActiveLink from "@components/ActiveLink";

export default function ExMobileNavLink({ href = "", icon, children, className }) {

  return (
    <ActiveLink activeClassName="bg-gray-100 dark:bg-neutral-800" href={href}>
      <span className={`px-2 py-1 flex justify-start items-center gap-2 rounded-md text-sm font-medium dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all ${className}`}>
        {icon}
        <span>{children}</span>
      </span>
    </ActiveLink>
  )
}