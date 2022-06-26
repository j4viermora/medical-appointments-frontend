import axios from 'axios';

export const apiNameProject = axios.create({
	baseURL: 'http://localhost:3333',
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('token'),
	},
});
