import axios from 'axios';
// @ts-ignore
const baseURL = import.meta.env.VITE_APP_API_URL;

const token = localStorage.getItem('auth-token');

export const appRequest = axios.create({
	baseURL,
	timeout: 5000,
	headers: {
		authorization: 'Bearer ' + token,
	},
});

export const publicRequest = axios.create({
	baseURL,
});

// appRequest.interceptors.response.use(
// 	(res) => ({ ...res, ok: true }),
// 	(err) => {
// 		if (!err.response) {
// 			throw err;
// 		}
// 		const invalidStatusCodes = [401, 403];
// 		if (
// 			invalidStatusCodes.includes(err.status) &&
// 			err.config.url !== '/auth/resfresh-token'
// 		) {
// 			window.location.reload();
// 		} else {
// 			throw err;
// 		}
// 	}
// );
