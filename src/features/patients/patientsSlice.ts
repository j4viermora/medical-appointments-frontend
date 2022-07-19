import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPatient } from 'interfaces';

interface IMetadata {
	totalDocs: number;
	offset: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: boolean | null;
	nextPage: boolean | null;
}

interface IPatientsState {
	patients: IPatient[] | [];
	isLoading: boolean;
	metadata: IMetadata;
}
const initialState: IPatientsState = {
	patients: [
		{
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
	],
	isLoading: false,
	metadata: {
		totalDocs: 0,
		offset: 0,
		limit: 10,
		totalPages: 0,
		page: 0,
		pagingCounter: 0,
		hasPrevPage: false,
		hasNextPage: false,
		prevPage: null,
		nextPage: null,
	},
};

const patientsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		setPatients: (state, action) => {
			state.patients = action.payload;
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setMetadata: (state, action: PayloadAction<IMetadata>) => {
			state.metadata = action.payload;
		},
	},
});

export const { setPatients, setLoading, setMetadata } = patientsSlice.actions;
export default patientsSlice.reducer;
