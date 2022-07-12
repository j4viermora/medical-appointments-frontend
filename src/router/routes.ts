import { lazy } from 'react';
import { IRoute } from 'interfaces';
import NotFound from 'pages/auth/NotFound';
// import { LoginPage, RegisterPage } from 'pages/auth';

const DemoLazy = lazy(() => import('pages/DemoLazy'));
const RegisterPage = lazy(() => import('pages/auth/Register'));
const LoginPage = lazy(() => import('pages/auth/Login'));
const FormikYup = lazy(() => import('pages/FormikYup'));

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
	{
		name: 'Formik yup',
		component: FormikYup,
		path: 'formik-yup',
	},
	{ name: 'Not found', component: NotFound, path: '404' },
];
