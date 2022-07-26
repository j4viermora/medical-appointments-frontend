import { AddAppointment } from 'components/appointment/forms/AddAppointment';
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
	DoctorDetails,
	AddMessage,
	ListMessages
} from 'pages/app';
import { AddBank } from 'pages/app/bancos/AddBank';
import { DetailsBank } from 'pages/app/bancos/DetailsBank';
import { EditBank } from 'pages/app/bancos/EditBank';
import { ListBanks } from 'pages/app/bancos/ListBanks';
import { EditCompany } from 'pages/app/company/EditCompany';
import { PatientView } from 'pages/app/patients/PatientView';
import { AddUser } from 'pages/app/users/AddUser';
import { EditUser } from 'pages/app/users/EditUser';
import { ListUsers } from 'pages/app/users/ListUsers';
import { UserView } from 'pages/app/users/UserView';
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

	{ component: DoctorsPage, name: 'doctors-view', path: 'doctors' },
	{ component: DoctorDetails, name: 'doctors-view', path: 'doctors/view/:id' },
	{ component: AddDoctorPage, name: 'doctors-add', path: 'doctors/add' },

	// Messages
	{ component: AddMessage, name: 'add-message', path: 'messages/add' },
	{ component: ListMessages, name: 'list-messages', path: 'messages' },

	// Banks 
	{ component: AddBank, name: 'add-bank', path: 'banks/add' },
	{ component: ListBanks, name: 'list-banks', path: 'banks' },
	{ component: DetailsBank, name: 'bank-view', path: 'banks/view/:id' },
	{ component: EditBank, name: 'edit-bank', path: 'banks/edit/:id' },

	//Users

	{ component: AddUser, name: 'add-user', path: 'users/add' },
	{ component: ListUsers, name: 'list-users', path: 'users' },
	{ component: EditUser, name: 'edit-user', path: 'users/edit/:id' },
	{ component: UserView, name: 'user-view', path: 'users/view/:id' },

	// Company
	{ component: CompanyPage, name: 'company-page', path: 'company' },
	{ component: EditCompany, name: 'edit-company', path: 'company/edit/:id' },


];
