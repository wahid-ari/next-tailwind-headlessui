export default function OrderedList({ className, inside, children }) {
  return <ul className={`list-decimal ${inside && 'list-inside'} ${className && className}`}>{children}</ul>;
}

OrderedList.item = ({ className, children }) => {
  return <li className={`dark:text-white ${className && className}`}>{children}</li>;
};
