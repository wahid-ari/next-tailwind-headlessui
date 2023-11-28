import Image from 'next/image';

export default function Avatar({ className, src, alt }) {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''}
      relative h-8 w-8 rounded-full border-2 border-blue-500`}
    >
      <Image src={src} alt={alt} layout='fill' className={`${className ? className + ' ' : ''}rounded-full`} />
    </div>
  );
}
