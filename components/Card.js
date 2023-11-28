export default function Card({ className, children }) {
  return <div className={`${className} rounded-lg border p-2 dark:border-neutral-800 xl:p-4`}>{children}</div>;
}
