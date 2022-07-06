import { refresh } from 'api';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store';
import { setChecking, setSession } from 'features/session/sessionSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLogged, checking } = useSelector(
		(state: RootState) => state.session
	);
	const logout = () => {
		window.localStorage.clear();
		window.location.href = '/';
	};

	const refreshToken = () => {
		refresh()
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
			.catch((err) => {
				toast.error('Ops algo salio mal');
				navigate('/auth/login', { replace: true });
				return;
			})
			.finally(() => {
				dispatch(setChecking(false));
			});
	};

	return {
		isAuthenticated: isLogged,
		logout,
		refreshToken,
		checking,
	};
}
