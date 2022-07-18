import { getEventByCompany, registerAppointment } from 'api';
import { RootState } from 'app/store';
import { setAppointments } from 'features/appointments/appointmentsSlice';
import { Appointment } from 'interfaces/events.interfaces';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useAppointments = () => {
	const [isLoading, setLoading] = useState(true);
	const { _id } = useSelector((state: RootState) => state.session.company);
	const { appointments, ...rest } = useSelector(
		(state: RootState) => state.appointments
	);
	const dispatch = useDispatch();

	const getEvents = () => {
		getEventByCompany({ companyId: _id })
			.then(({ data }) => {
				dispatch(
					setAppointments({
						appointments: data.data.docs,
						hasNextPage: data.data.hasNextPage,
						hasPrevPage: data.data.hasPrevPage,
						nextPage: data.data.nextPage,
						limit: data.data.limit,
						page: data.data.page,
						pagingCounter: data.data.pagingCounter,
						prevPage: data.data.prevPage,
						totalDocs: data.data.totalDocs,
						totalPages: data.data.totalPages,
					})
				);
			})
			.catch((err) => console.log(err.response))
			.finally(() => setLoading(false));
	}



	const addAppointment = async (appointmentInfo: Appointment) => {
		try {
			await registerAppointment({ ...appointmentInfo })
		} catch (err) {
			console.log(err)
		}
	}
	const deleteEvent = () => { }
	const updateEvent = () => { }
	const searchEvent = () => { }

	return {
		isLoading,
		appointments,
		metadata: rest,
		getEvents,
		addAppointment,
		deleteEvent,
		updateEvent,
		searchEvent,
	};
};
