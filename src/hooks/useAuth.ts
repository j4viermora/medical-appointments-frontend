import { refresh } from 'api';
import { useEffect, useState } from 'react';
// import { useSession } from 'store/sessionAtom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store';
import { setSession } from 'features/session/sessionSlice';

export function useAuth() {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const { isLogged } = useSelector((state: RootState) => state.session);
	const token = localStorage.getItem('auth-token') || '';

	useEffect(() => {
		if (checking && token.length !== 0) {
			refresh()
				.then(({ data: { company, user } }) => {
					dispatch(
						setSession({
							company,
							// token,
							user,
							isLogged: true,
						})
					);
				})
				.catch((err) => {
					console.log(JSON.stringify(err));
					// window.alert('Opss algo salio mal');
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
	};
}
