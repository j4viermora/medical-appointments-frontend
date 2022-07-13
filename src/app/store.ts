import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from 'features/session/sessionSlice';
import appointmentsSlice from 'features/appointments/appointmentsSlice';
import patientsSlice from 'features/patients/patientsSlice';
export const store = configureStore({
	reducer: {
		session: sessionReducer,
		appointments: appointmentsSlice,
		patients: patientsSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
