import { refresh } from 'api';
import { RootState } from 'app/store';
import { setChecking, setSession } from 'features/session/sessionSlice';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';

export function useAuth() {
	const dispatch = useAppDispatch();
	const { isLogged, checking } = useAppSelector(
		(state: RootState) => state.session
	);

	const refreshToken = useCallback(() => {
		return refresh()
			.then(({ data: { company, user, token } }) => {
				localStorage.setItem('auth-token', token);
				dispatch(
					setSession({
						company,
						user,
						isLogged: true,
					})
				);
			})
			.catch(() => {
				window.location.href = '/#/auth/login';
				return;
			})
			.finally(() => {
				dispatch(setChecking(false));
			});
	}, [refresh, dispatch, setChecking]);

	useEffect(() => {
		if (!isLogged) {
			refreshToken();
		}
	}, []);

	return {
		isAuthenticated: isLogged,
		refreshToken,
		checking,
	};
}
