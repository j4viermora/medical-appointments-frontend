import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export const appRequest = axios.create({
	baseURL,
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('auth-token'),
	},
});
