import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.min.css';

export default function Code({ code, className }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div
        className={`Code mt-4 rounded-md border border-transparent dark:border dark:border-neutral-700 ${
          className ? className : ' '
        }`}
      >
        <pre className='line-numbers'>
          <code className={`language-javascript`}>{code}</code>
        </pre>
      </div>
    </>
  );
}
