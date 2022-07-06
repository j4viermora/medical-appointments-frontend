import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from 'features/session/sessionSlice';
import eventsSlice from 'features/events/eventsSlice';
import patientsSlice from 'features/patients/patientsSlice';
export const store = configureStore({
	reducer: {
		session: sessionReducer,
		events: eventsSlice,
		patients: patientsSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
