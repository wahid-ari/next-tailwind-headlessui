import { useEffect } from 'react';
import { signOut } from 'next-auth/react';

export default function Signout() {
  useEffect(() => {
    localStorage.removeItem('user-id');
    localStorage.removeItem('user-name');
    localStorage.removeItem('user-email');
  }, []);

  signOut({ callbackUrl: '/signin' });

  return <></>;
}
