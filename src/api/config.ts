import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_API_URL;

const token = localStorage.getItem('auth-token') || '';

export const appRequest = axios.create({
	baseURL,
	headers: {
		Authorization: 'Bearer ' + token,
	},
});

export const publicRequest = axios.create({
	baseURL,
});
