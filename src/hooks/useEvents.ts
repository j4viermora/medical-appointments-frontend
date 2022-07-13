import { getEventByCompany } from 'api';
import { RootState } from 'app/store';
import { setEvents } from 'features/appointments/appointmentsSlice';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useEvents = () => {
	const [isLoading, setLoading] = useState(true);
	const { _id } = useSelector((state: RootState) => state.session.company);
	const { appointments, ...rest } = useSelector(
		(state: RootState) => state.appointments
	);
	const dispatch = useDispatch();

	const getEvents = useCallback(() => {
		if (!_id) return;
		getEventByCompany({ companyId: _id })
			.then(({ data }) => {
				dispatch(
					setEvents({
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
	}, [_id]);

	useEffect(() => {
		getEvents();
	}, [_id]);
	return {
		isLoading,
		appointments,
		metadata: rest,
	};
};
