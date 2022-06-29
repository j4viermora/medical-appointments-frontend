import { IRoute } from 'interfaces';
import { Home, Profile } from 'pages/app';

export const privateRoutes: IRoute[] = [
  { component: Home, name: 'Home', path: '' },
  { component: Profile, name: 'Home', path: 'profile' },
];
