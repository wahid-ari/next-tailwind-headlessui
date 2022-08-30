export default function Progress({ className, color, height, percent, stripe }) {
  return (
    <div className={`
      ${className ? className + " " : ""}
      ${height ? height + " " : "h-1"}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
    >
      <div className={`${height ? height + " " : "h-1"} ${color ? color : "bg-blue-500"
        } rounded-full`}
        style={{
          width: `${percent}%`,
          backgroundSize: stripe && `1rem 1rem`,
          backgroundImage: stripe && `linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)`
        }}
      >
      </div>
    </div>
  );
}

Progress.percentage = ({ className, color, percent, stripe }) => {
  return (
    <div className={`
      ${className ? className + " " : ""}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
    >
      <div className={`${color ? color : "bg-blue-500"
        } rounded-full text-center text-white text-xs leading-none font-medium p-0.5`}
        style={{
          width: `${percent}%`,
          backgroundSize: stripe && `1rem 1rem`,
          backgroundImage: stripe && `linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)`
        }}
      >
        {percent} %
      </div>
    </div>
  );
}
