import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useRef, useState } from 'react';
import {
	getPatiens as patientsFromApi,
	getPatiensByDni,
	registerPatients,
	removePatient,
} from 'api';
import {
	setMetadata,
	setPatients,
	setLoading,
} from 'features/patients/patientsSlice';
import {
	IPatienDataRegister,
	IPatientForm,
} from 'interfaces/patients.interfaces';
import { ToastId, useToast } from '@chakra-ui/react';

export const usePatients = () => {
	const {
		patients: { patients, metadata, isLoading },
		session: {
			company: { _id: companyId, companyCode, ownerEmail },
		},
	} = useAppSelector((state) => state);
	const countryCode = '+58';

	const dispacth = useAppDispatch();
	const toast = useToast();
	const toastIdRef = useRef<ToastId>();

	const loadingToast = () => {
		toastIdRef.current = toast({ title: 'Cargando...' });
	};

	const addPatient = async (
		form: IPatientForm,
		onClose: () => void,
		resetForm?: () => void
	) => {
		dispacth(setLoading(true));
		const bodyResquest: IPatienDataRegister = {
			...form,
			phone: `${countryCode}${form.phone}`,
			companyEmail: ownerEmail,
			companyCode,
			companyId,
		};
		try {
			const { data } = await registerPatients(bodyResquest);
			if (data.message !== 'El contacto ya se encuentra registrado') {
				toast({
					title: 'Paciente registrado',
					description: 'Registro de paciente realizado correctamente',
					status: 'success',
					isClosable: true,
				});
				onClose();
				resetForm && resetForm();
				await getPatiens();
			} else {
				toast({
					title: 'Este contacto ya se encuentra registrado',
					status: 'info',
					isClosable: true,
				});
			}
		} catch (err) {
			toast({
				title: 'Opss algo salio',
				description: 'Intente nuevamente para realizar el registro',
				status: 'error',
				isClosable: true,
			});
		} finally {
			dispacth(setLoading(false));
		}
	};

	const getPatiens = async () => {
		dispacth(setLoading(true));
		try {
			const {
				data: { data },
			} = await patientsFromApi({ companyId });
			const { docs, ...rest } = data;
			console.log(docs);
			dispacth(setPatients(docs));
			dispacth(setMetadata(rest));
		} catch (error: any) {
			console.log(error);
			toast({
				title: 'Opss algo anda mal',
				description: JSON.stringify(error.response),
				status: 'warning',
			});
		} finally {
			dispacth(setLoading(false));
		}
	};

	const deletePatient = async (id: string) => {
		loadingToast();
		try {
			await removePatient(id);
			toast({
				title: 'Exito',
				description: 'Usuario eliminado correctamente',
				status: 'success',
				isClosable: true,
			});
		} catch (error: any) {
			toast({
				title: 'Opss!!',
				description: 'Algo salio mal mientras se intentaba eliminar el usuario',
				status: 'error',
				isClosable: true,
			});
		} finally {
			toastIdRef.current && toast.close(toastIdRef.current);
		}
	};

	const searchPatients = async (dni: string): Promise<void> => {
		dispacth(setLoading(true));
		try {
			const {
				data: { data },
			} = await getPatiensByDni(dni, companyId);
			dispacth(setPatients([data]));
		} catch (error) {
			toast({
				title: 'No se encontraron registros',
				status: 'warning',
			});
			// toast({
			// 	title: 'Opss!',
			// 	description: 'Algo salio mal',
			// 	status: 'error',
			// });
		} finally {
			dispacth(setLoading(false));
		}
	};

	// const goToNextPage = () => {
	// 	getPatiens();
	// };
	// const goToPrevPage = () => {};
	// const goToFirstPage = () => {};

	return {
		addPatient,
		getPatiens,
		deletePatient,
		searchPatients,
		// goToNextPage,
		// goToPrevPage,
		// goToFirstPage,
		isLoading,
		patients,
		metadata,
	};
};
