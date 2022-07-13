import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEvent } from 'interfaces/events.interfaces';

interface IAppointmentsStore {
	appointments: IEvent[];
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
				__v: 0,
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
		setEvents: (state, action: PayloadAction<IAppointmentsStore>) => {
			state.appointments = action.payload.appointments;
			state.hasNextPage = action.payload.hasNextPage;
			state.hasPrevPage = action.payload.hasPrevPage;
			state.totalDocs = action.payload.totalDocs;
			state.totalPages = action.payload.totalPages;
		},
	},
});
export const { setEvents } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
