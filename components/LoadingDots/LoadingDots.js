import s from './LoadingDots.module.css';

export default function LoadingDots({ className, medium, large }) {
  return (
    <span className={`${s.root} inline-flex items-center text-center leading-7 ${className}`}>
      <span
        className={`rounded-full bg-neutral-600 dark:bg-zinc-200 ${medium ? 'h-3 w-3' : large ? 'h-4 w-4' : 'h-2 w-2'}`}
      />
      <span
        className={`rounded-full bg-neutral-600 dark:bg-zinc-200 ${medium ? 'h-3 w-3' : large ? 'h-4 w-4' : 'h-2 w-2'}`}
      />
      <span
        className={`rounded-full bg-neutral-600 dark:bg-zinc-200 ${medium ? 'h-3 w-3' : large ? 'h-4 w-4' : 'h-2 w-2'}`}
      />
    </span>
  );
}
