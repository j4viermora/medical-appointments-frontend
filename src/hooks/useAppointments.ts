import { getEventByCompany, registerAppointment, deactivateAppointment as deactivateAppointmentRequest } from 'api';
import { RootState } from 'app/store';
import { setAppointments, setLoading } from 'features/appointments/appointmentsSlice';
import { AddAppointmentProps } from 'interfaces/appointments.interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react'

export const useAppointments = () => {
	const toast = useToast()
	const { _id: companyId } = useSelector((state: RootState) => state.session.company);
	const { appointments, metadata, isLoading } = useSelector(
		(state: RootState) => state.appointments
	);
	const dispatch = useDispatch();
	const startLoading = () => {
		dispatch(setLoading(true));
	}

	const stopLoading = () => {
		dispatch(setLoading(false));
	}

	const getEvents = async ({ }: {}) => {
		startLoading();
		try {
			const { data } = await getEventByCompany({ companyId })
			dispatch(
				setAppointments({
					appointments: data.data.docs,
					metadata: {
						hasNextPage: data.data.hasNextPage,
						hasPrevPage: data.data.hasPrevPage,
						nextPage: data.data.nextPage,
						limit: data.data.limit,
						page: data.data.page,
						pagingCounter: data.data.pagingCounter,
						prevPage: data.data.prevPage,
						totalDocs: data.data.totalDocs,
						totalPages: data.data.totalPages,
					}

				})
			);

		} catch (error) {
			console.log('error')
		} finally {
			stopLoading()
		}
	}



	const addAppointment = async ({ ...data }: AddAppointmentProps) => {
		startLoading();
		try {
			await registerAppointment({ companyId, ...data })
			toast({ title: 'Registro exitoso', status: 'success' })
			return true
		} catch (error) {
			toast({ title: 'Error', status: 'error', description: 'Algo salio mal mientras se registraba la cita' })
			return false
		} finally {
			stopLoading()
		}

	}

	const deactivateAppointment = async (_id: string) => {
		try {
			await deactivateAppointmentRequest(_id)
			toast({ title: 'Registro exitoso', status: 'success' })
			return true
		} catch (error) {
			return false
		}
	}

	return {
		isLoading,
		appointments,
		metadata,
		getEvents,
		addAppointment,
		deactivateAppointment
	}
};

