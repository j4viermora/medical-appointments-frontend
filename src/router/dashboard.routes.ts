import { IRoute } from 'interfaces';
import { Home, Profile, SingleEvent, EventView, Patients } from 'pages/app';
import { AddPatient } from 'pages/app/patients/AddPatient';
import { PatientView } from 'pages/app/patients/PatientView';
// import { lazy } from 'react';

// const PatientsPage = lazy(() => import('pages/app/patients/Patients'));

export const privateRoutes: IRoute[] = [
	{ component: Home, name: 'Home', path: '' },
	{ component: SingleEvent, name: 'SingleEvent', path: 'events/id/:id' },
	{ component: EventView, name: 'EventView', path: 'events' },
	{ component: Profile, name: 'Home', path: 'profile' },
	{ component: Patients, name: 'Patiens', path: 'patients' },
	{ component: PatientView, name: 'patient-view', path: 'patients/view/:dni' },
	{ component: AddPatient, name: 'add-patien', path: 'patients/add' },
];
