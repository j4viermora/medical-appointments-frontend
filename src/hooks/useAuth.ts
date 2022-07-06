import { refresh } from 'api';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store';
import { setSession } from 'features/session/sessionSlice';
import toast from 'react-hot-toast';

export function useAuth() {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const { isLogged } = useSelector((state: RootState) => state.session);
	const token = localStorage.getItem('auth-token') || '';
	const logout = () => {
		window.localStorage.clear();
		window.location.href = '/';
	};

	useEffect(() => {
		if (checking && token.length > 0) {
			refresh()
				.then(({ data: { company, user } }) => {
					dispatch(
						setSession({
							company,
							user,
							isLogged: true,
						})
					);
				})
				.catch((err) => {
					if (err.response) {
						err.response.data.msg === 'token no valido' &&
							toast.error('No se pudo renovar el token');
					} else {
						return;
					}
				})
				.finally(() => {
					setChecking(false);
				});
		} else {
			setChecking(false);
		}
	}, []);

	return {
		checking,
		isAuthenticated: isLogged,
		logout,
	};
}
