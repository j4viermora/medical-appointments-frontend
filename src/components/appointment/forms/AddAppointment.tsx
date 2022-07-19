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
import * as Yup from 'yup';
import { useAppointments } from 'hooks';
import { Card } from 'components/shared';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const AddAppointment = () => {
	// const {} = useAppointments();

	const [queryParams] = useSearchParams();
	const [{ id, dni, name }, setPatientInfo] = useState({
		name: '',
		id: '',
		dni: '',
	});

	useEffect(() => {
		console.log(queryParams.get('name'));
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
	const { getFieldProps, handleSubmit } = useFormik({
		initialValues: {
			title: 'Consulta madica',
			doctor: '',
			dateEvent: '',
			observations: '',
		},
		onSubmit: (values) => {
			console.log({
				patient: id,
				patientDni: dni,
				...values,
			});
		},
		enableReinitialize: true,
	});
	return (
		<div>
			<Card>
				<form onSubmit={handleSubmit}>
					<Heading size={'lg'} mb='4'>
						Registar cita
					</Heading>
					<FormControl mb={4}>
						<FormLabel>Doctor</FormLabel>
						<Select {...getFieldProps('doctor')}>
							<option value=''>Selecionar</option>
							<option value='2342314523423fgdsafadsfds'>Javier</option>
						</Select>
						<FormErrorMessage>Upss</FormErrorMessage>
					</FormControl>
					<FormControl mb={4}>
						<FormLabel>Paciente</FormLabel>
						<Input disabled defaultValue={name} />
						<FormErrorMessage>Upss</FormErrorMessage>
					</FormControl>

					<FormControl mb={4}>
						<FormLabel>Fecha</FormLabel>
						<Input type='date' {...getFieldProps('dateEvent')} />
						<FormErrorMessage>Upss</FormErrorMessage>
					</FormControl>

					<FormControl mb={4}>
						<FormLabel>Observaciones</FormLabel>
						<Textarea {...getFieldProps('obvervations')} />
						<FormErrorMessage>Upss</FormErrorMessage>
					</FormControl>

					<ButtonGroup>
						<Button colorScheme='blue' type='submit'>
							Guardar
						</Button>
					</ButtonGroup>
				</form>
			</Card>
		</div>
	);
};
