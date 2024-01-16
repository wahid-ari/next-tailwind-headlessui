import clsx from 'clsx';

export default function Marquee({
  children,
  direction = 'left',
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
  numberOfCopies = 2,
}) {
  return (
    <div
      className={clsx(
        'group flex gap-[1rem] overflow-hidden',
        direction === 'left' ? 'flex-row' : 'flex-col',
        className,
      )}
      style={{
        maskImage: fade
          ? `linear-gradient(${
              direction === 'left' ? 'to right' : 'to bottom'
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              direction === 'left' ? 'to right' : 'to bottom'
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
    >
      {Array(numberOfCopies)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={clsx(
              'flex shrink-0 justify-around gap-[1rem] [--gap:1rem]',
              direction === 'left' ? 'animate-marquee-left flex-row' : 'animate-marquee-up flex-col',
              pauseOnHover && 'group-hover:[animation-play-state:paused]',
              reverse && 'direction-reverse',
              innerClassName,
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
