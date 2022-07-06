import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Company, User } from 'interfaces';

interface ISession {
	company: Company;
	user: User;
	isLogged: boolean;
	//   token: string;
	checking?: boolean;
}

const initialState: ISession = {
	company: {
		_id: '',
		companyCode: '',
		createdAt: '',
		currency: '',
		exchangeRateToBs: 0,
		name: '',
		ownerEmail: '',
		ownerId: '',
		phone: '',
		plan: '',
		status: false,
		updatedAt: '',
	},
	user: {
		_id: '',
		companyId: '',
		createdAt: '',
		email: '',
		name: '',
		ownerCompany: '',
		role: '',
		status: false,
		lastName: '',
		uid: '',
		updatedAt: '',
	},
	isLogged: false,
	checking: true,
};

const sessionSlice = createSlice({
	initialState,
	name: 'session',
	reducers: {
		setSession: (state, action: PayloadAction<ISession>) => {
			const { company, isLogged, user } = action.payload;
			state.company = company;
			state.user = user;
			state.isLogged = isLogged;
			state.checking = false;
		},
		setChecking: (state, action: PayloadAction<boolean>) => {
			state.checking = action.payload;
		},
	},
});
export const { setSession, setChecking } = sessionSlice.actions;
export default sessionSlice.reducer;
