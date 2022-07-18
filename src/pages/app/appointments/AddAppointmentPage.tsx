import React, { useEffect, useState } from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Container,
	Select,
	Textarea,
	Text,
	Link,
} from '@chakra-ui/react';
import {
	Link as RouterLink,
	useParams,
	useSearchParams,
	useLocation,
} from 'react-router-dom';
import {} from '@chakra-ui/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppointments, usePatients } from 'hooks';
import { Card } from 'components/shared';

export const AddAppointmentPage = () => {
	// const {} = useAppointments();
	const [queryParams] = useSearchParams();
	const [{ id, dni, name }, setPatientInfo] = useState({
		name: '',
		id: '',
		dni: '',
	});

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
		<Container>
			<Card>
				<Heading size={'md'}>Nuevo paciente?</Heading>
				<Button
					mt={4}
					colorScheme='blue'
					as={RouterLink}
					to='/app/patients/add'
				>
					Registralo aqui
				</Button>
			</Card>

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
						<Input />
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
		</Container>
	);
};
