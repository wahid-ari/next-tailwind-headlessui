export default function Progress({ className, color, height, percent, stripe }) {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''}
      ${height ? height + ' ' : 'h-1'}
      w-full rounded-full bg-gray-200 dark:bg-neutral-800`}
    >
      <div
        className={`${height ? height + ' ' : 'h-1'} ${color ? color : 'bg-blue-500'} rounded-full`}
        style={{
          width: `${percent}%`,
          backgroundSize: stripe && `1rem 1rem`,
          backgroundImage:
            stripe &&
            `linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)`,
        }}
      ></div>
    </div>
  );
}

Progress.percentage = ({ className, color, percent, stripe }) => {
  return (
    <div
      className={`
      ${className ? className + ' ' : ''}
      w-full rounded-full bg-gray-200 dark:bg-neutral-800`}
    >
      <div
        className={`${
          color ? color : 'bg-blue-500'
        } rounded-full p-0.5 text-center text-xs font-medium leading-none text-white`}
        style={{
          width: `${percent}%`,
          backgroundSize: stripe && `1rem 1rem`,
          backgroundImage:
            stripe &&
            `linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)`,
        }}
      >
        {percent} %
      </div>
    </div>
  );
};
