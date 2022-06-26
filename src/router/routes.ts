import { IRoute } from 'interfaces';
import { LoginPage, RegisterPage } from 'pages/auth';

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
];
