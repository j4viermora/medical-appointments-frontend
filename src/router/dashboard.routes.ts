import { AddAppointment } from 'components/appointment/forms/addAppointment';
import { IRoute } from 'interfaces';
import {
	Home,
	Profile,
	AppointmentView,
	AppointmentsView,
	Patients,
	AddAppointmentPage,
	AddPatient,
	CompanyPage,
	DoctorsPage,
	AddDoctorPage,
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
	{ component: AddAppointment, name: 'add-apointment-form', path: 'appointments/add/form' },

	{
		component: AddAppointmentPage,
		name: 'add-appoinment',
		path: 'appointments/add',
	},
	{ component: Profile, name: 'Home', path: 'profile' },
	{ component: Patients, name: 'Patiens', path: 'patients' },
	{ component: PatientView, name: 'patient-view', path: 'patients/view/:dni' },
	{ component: AddPatient, name: 'add-patien', path: 'patients/add' },

	{ component: CompanyPage, name: 'company-page', path: 'company' },
	{ component: DoctorsPage, name: 'doctors-view', path: 'doctors' },
	{ component: AddDoctorPage, name: 'doctors-add', path: 'doctors/add' },

];
