import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAppointment } from 'interfaces/appointments.interfaces';
import { IMetadata } from 'interfaces';

interface IAppointmentsStore {
	appointments: IAppointment[] | [];
	metadata: IMetadata;
	isLoading: boolean;
}

interface SetAppointmentProps {
	appointments: IAppointment[] | [];
	metadata: IMetadata;
}

const initialState: IAppointmentsStore = {
	appointments: [],
	metadata: {
		totalDocs: 0,
		limit: 0,
		totalPages: 0,
		page: 0,
		pagingCounter: 0,
		hasPrevPage: false,
		hasNextPage: false,
		prevPage: null,
		nextPage: null,
	},
	isLoading: false,
};



const appointmentsSlice = createSlice({
	initialState,
	name: 'appointments',
	reducers: {
		setAppointments: (state, action: PayloadAction<SetAppointmentProps>) => {
			state.appointments = action.payload.appointments;
			state.metadata = action.payload.metadata;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		}
	},
});
export const { setAppointments, setLoading } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
