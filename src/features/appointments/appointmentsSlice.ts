import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAppointment } from 'interfaces/appointments.interfaces';

interface IAppointmentsStore {
	appointments: IAppointment[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: null | boolean;
	nextPage: null | boolean;
}

const initialState: IAppointmentsStore = {
	appointments: [
		{
			_id: '',
			branchOffice: '',
			companyId: '',
			createdAt: '',
			createdBy: '',
			dateEvent: '',
			description: '',
			doctor: '',
			endDateEvent: '',
			id: '',
			observations: '',
			patient: {
				_id: '',
				city: '',
				code: '',
				companyCode: '',
				companyEmail: '',
				companyId: '',
				createBy: '',
				createdAt: '',
				dni: '',
				email: '',
				kind: '',
				lastName: '',
				name: '',
				phone: '',
				status: false,
				updatedAt: '',
			},
			patientDni: '',
			paymentState: '',
			startDateEvent: '',
			state: '',
			status: false,
			title: '',
			updatedAt: '',
			confirmationMessageSent: false,
		},
	],
	hasNextPage: false,
	hasPrevPage: false,
	limit: 0,
	nextPage: null,
	page: 1,
	pagingCounter: 0,
	prevPage: true,
	totalDocs: 1,
	totalPages: 1,
};

const appointmentsSlice = createSlice({
	initialState,
	name: 'events ',
	reducers: {
		setAppointments: (state, action: PayloadAction<IAppointmentsStore>) => {
			state.appointments = action.payload.appointments;
			state.hasNextPage = action.payload.hasNextPage;
			state.hasPrevPage = action.payload.hasPrevPage;
			state.totalDocs = action.payload.totalDocs;
			state.totalPages = action.payload.totalPages;
		},
	},
});
export const { setAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
