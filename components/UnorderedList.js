export default function UnorderedList({ className, bullet, inside, children }) {
  return (
    <ul className={`${bullet ? "list-disc" : "list-none"} ${inside && "list-inside"} ${className && className}`}>
      {children}
    </ul>
  );
};

UnorderedList.item = ({ className, children }) => {
  return (
    <li className={`dark:text-white ${className && className}`}>{children}</li>
  )
}