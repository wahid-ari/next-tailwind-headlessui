import Link from 'next/link';

export default function TocLink({ href, text }) {
  return (
    <span className='mb-1 block font-medium text-blue-500 transition-all hover:text-blue-600'>
      <Link href={href}>{text}</Link>
    </span>
  );
}
