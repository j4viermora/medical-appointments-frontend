import {
	Heading,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Select,
	Input,
	ButtonGroup,
	Button,
	Textarea,
} from '@chakra-ui/react';

import { useFormik } from 'formik';
import { Card } from 'components/shared';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppointments, useDoctors } from 'hooks';
import * as Yup from 'yup';

export const AddAppointment = () => {
	const navigate = useNavigate();
	const validationSchema = Yup.object({
		doctor: Yup.string()
				.required('Este campo es requerido'),
		dateEvent: Yup.string().required('Este campo es requerido'),
		description: Yup.string().lowercase().trim(),
	});



	const {doctors, getDoctors} = useDoctors()
	const { addAppointment, isLoading } = useAppointments()
	const [queryParams] = useSearchParams();
	const [{ id, dni, name }, setPatientInfo] = useState({
		name: '',
		id: '',
		dni: '',
	});

	useEffect(() => {
		if(doctors.length === 0) getDoctors()
	},[])

	useEffect(() => {
		if (
			queryParams.get('dni') &&
			queryParams.get('id') &&
			queryParams.get('name')
		) {
			setPatientInfo({
				//@ts-ignore
				dni: queryParams.get('dni'),
				//@ts-ignore
				id: queryParams.get('id'),
				//@ts-ignore
				name: queryParams.get('name'),
			});
		}
	}, []);

	const { getFieldProps, handleSubmit, touched, errors } = useFormik({
		initialValues: {
			doctor: '',
			dateEvent: '',
			observations:''
		},
		onSubmit: async ({dateEvent, doctor, observations}) => {
		 const ok = await addAppointment({dateEvent,doctor,patient: id,patientDni : dni,title:'consulta_medica',observations ,description: ''})
		 if(ok) navigate('appointments')
		},
		enableReinitialize: true,
		validationSchema
	});

	return (
		<div>
			<Card>
				<form onSubmit={handleSubmit}>
					<Heading size={'lg'} mb='4'>
						Registar cita 
					</Heading>
					<FormControl mb={4} isInvalid={ touched.doctor  && errors.doctor ? true : false }>
						<FormLabel>Doctor</FormLabel>
						<Select {...getFieldProps('doctor')}>
							<option value=''>Selecionar</option>
							{
								doctors.map(doctor => (	
									<option key={doctor._id} value={doctor._id}>{doctor.name}</option>
								))
							}
						</Select>
						<FormErrorMessage>{errors.doctor}</FormErrorMessage>
					</FormControl>
					<FormControl mb={4}>
						<FormLabel>Paciente</FormLabel>
						<Input disabled defaultValue={name} />
					</FormControl>

					<FormControl mb={4} isInvalid={touched.dateEvent && errors.dateEvent ? true : false}>
						<FormLabel>Fecha</FormLabel>
						<Input type='date' {...getFieldProps('dateEvent')} />
						<FormErrorMessage>{errors.dateEvent}</FormErrorMessage>
					</FormControl>
					<FormControl mb={4}>
						<FormLabel>Observaciones</FormLabel>
						<Textarea {...getFieldProps('observations')} />
					</FormControl>
					<ButtonGroup>
						<Button isLoading={isLoading} colorScheme='blue' type='submit'>
							Guardar
						</Button>
					</ButtonGroup>
				</form>
			</Card>
		</div>
	);
};
