import Image from 'next/image';

export default function NextImageRenderer() {
  return (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <div className='relative h-40'>
        <Image src='https://dummyimage.com/600x400' alt='image' layout='fill' className='rounded-lg' />
      </div>
      <div className='relative h-40'>
        <Image src='https://dummyimage.com/600x400' alt='image' layout='fill' className='rounded-lg' />
      </div>
      <div className='relative h-40'>
        <Image src='https://dummyimage.com/600x400' alt='image' layout='fill' className='rounded-lg' />
      </div>
      <div className='relative h-40'>
        <Image src='https://dummyimage.com/600x400' alt='image' layout='fill' className='rounded-lg' />
      </div>
    </div>
  );
}
