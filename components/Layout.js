export default function Layout({ children, className }) {
  return (
    // if using custom scrollbar
    // <div className="dark:bg-neutral-900 min-h-screen w-screen">
    <div className={`dark:bg-neutral-900 dark:text-white min-h-screen ${className}`}>{children}</div>
  );
}
