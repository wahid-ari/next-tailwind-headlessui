export default function Text({ className, children, ...rest }) {
  return (
    <p {...rest} className={`${className ? className + ' ' : ''} text-base dark:text-white`}>
      {children}
    </p>
  );
}

Text.light = ({ className, children, ...rest }) => {
  return (
    <p {...rest} className={`${className ? className + ' ' : ''} text-base font-light dark:text-white`}>
      {children}
    </p>
  );
};

Text.medium = ({ className, children, ...rest }) => {
  return (
    <p {...rest} className={`${className ? className + ' ' : ''} text-base font-medium dark:text-white`}>
      {children}
    </p>
  );
};

Text.semibold = ({ className, children, ...rest }) => {
  return (
    <p {...rest} className={`${className ? className + ' ' : ''} text-base font-semibold dark:text-white`}>
      {children}
    </p>
  );
};

Text.bold = ({ className, children, ...rest }) => {
  return (
    <p {...rest} className={`${className ? className + ' ' : ''} text-base font-bold dark:text-white`}>
      {children}
    </p>
  );
};

Text.extrabold = ({ className, children, ...rest }) => {
  return (
    <p {...rest} className={`${className ? className + ' ' : ''} text-base font-extrabold dark:text-white`}>
      {children}
    </p>
  );
};
