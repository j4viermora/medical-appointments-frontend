import { getPatiens as getPatientsFromApi } from 'api';
import { RootState } from 'app/store';
import {
	setPatients,
	setLoading,
	setMetadata,
} from 'features/patients/patientsSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

export const usePatients = () => {
	const dispatch = useDispatch();
	const { patients, isLoading, metadata } = useSelector(
		(state: RootState) => state.patients
	);
	function handleLoading(state: boolean) {
		dispatch(setLoading(state));
	}

	function getPatients() {
		getPatientsFromApi({ limit: 200 })
			.then(({ data }) => {
				const {
					data: { docs, ...rest },
				} = data;
				dispatch(setPatients(docs));
				dispatch(setMetadata(rest));
			})
			.catch((err) => {
				console.log(err.response);
				return toast.error('Opss algo salio mal al consultar los pacientes');
			})
			.finally(() => handleLoading(false));
	}

	useEffect(() => {
		getPatients();
	}, []);

	return {
		patients,
		isLoading,
		handleLoading,
		getPatients,
		metadata,
	};
};
