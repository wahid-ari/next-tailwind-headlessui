import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export default function Skeletons({ className }) {
  const { darkMode } = useContext(GlobalContext);

  return darkMode ? (
    <Skeleton
      className={`${className ? className + ' ' : ''} mb-2 h-10`}
      baseColor='#262626'
      highlightColor='#404040'
    />
  ) : (
    <Skeleton className={`${className ? className + ' ' : ''} mb-2 h-10 dark:bg-gray-500 dark:text-gray-400`} />
  );
}
