import { IRoute } from 'interfaces';
import { Home, Profile, SingleEvent, EventView } from 'pages/app';
import { lazy } from 'react';

const PatientsPage = lazy(() => import('pages/app/patients/Patients'));

export const privateRoutes: IRoute[] = [
	{ component: Home, name: 'Home', path: '' },
	{ component: SingleEvent, name: 'SingleEvent', path: 'events/id/:id' },
	{ component: EventView, name: 'EventView', path: 'events' },
	{ component: Profile, name: 'Home', path: 'profile' },
	{ component: PatientsPage, name: 'Patiens', path: 'patients' },
];
