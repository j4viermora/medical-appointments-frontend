import { IRoute } from 'interfaces';
import {
	Home,
	Profile,
	AppointmentView,
	AppointmentsView,
	Patients,
	AddAppointmentPage,
	AddPatient,
} from 'pages/app';
import { PatientView } from 'pages/app/patients/PatientView';
// import { lazy } from 'react';

// const PatientsPage = lazy(() => import('pages/app/patients/Patients'));

export const privateRoutes: IRoute[] = [
	{ component: Home, name: 'Home', path: '' },
	{
		component: AppointmentView,
		name: 'SingleEvent',
		path: 'appointments/view/:id',
	},
	{ component: AppointmentsView, name: 'EventView', path: 'appointments' },
	{ component: Profile, name: 'Home', path: 'profile' },
	{ component: Patients, name: 'Patiens', path: 'patients' },
	{ component: PatientView, name: 'patient-view', path: 'patients/view/:dni' },
	{ component: AddPatient, name: 'add-patien', path: 'patients/add' },
	{
		component: AddAppointmentPage,
		name: 'add-appoinment',
		path: 'appointments/add',
	},
];
