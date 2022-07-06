import { lazy } from 'react';
import { IRoute } from 'interfaces';
// import { LoginPage, RegisterPage } from 'pages/auth';

const DemoLazy = lazy(() => import('pages/DemoLazy'));
const RegisterPage = lazy(() => import('pages/auth/Register'));
const LoginPage = lazy(() => import('pages/auth/Login'));

export const publicRoutes: IRoute[] = [
	{
		name: 'login',
		component: LoginPage,
		path: 'login',
	},
	{
		name: 'register',
		component: RegisterPage,
		path: 'register',
	},
	{
		name: 'formik',
		component: DemoLazy,
		path: 'formik',
	},
];
