import { refresh } from 'api';
import { useEffect, useState } from 'react';
import { useSession } from 'store/sessionAtom';

export function useAuth() {
  const [checking, setChecking] = useState(true);
  const { session, setSession } = useSession();
  const token = localStorage.getItem('auth-token') || '';

  useEffect(() => {
    if (checking && token.length !== 0) {
      refresh().then(({ data: { company, token, user } }) => {
        setSession({
          company,
          token,
          user,
          isLogged: true,
        });
        setChecking(false);
      });
    }
  });

  return {
    checking,
    isAuthenticated: session.isLogged,
  };
}
