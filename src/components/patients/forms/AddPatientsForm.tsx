import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	InputGroup,
	InputLeftAddon,
	ButtonGroup,
	Button,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { usePatients } from 'hooks';

export const AddPatientsForm = () => {
	const { addPatient, isLoading } = usePatients();

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, 'Debe tener por lo menos 3 caracteres')
			.required('Este campo es requerido')
			.trim(),
		lastName: Yup.string()
			.min(3, 'Debe tener minimo 3 caracteres')
			.trim()
			.required('Este campo es requerido'),
		city: Yup.string().trim().lowercase().required('Este campo es requerido'),
		email: Yup.string()
			.trim()
			.email('El campo debe ser un email valido')
			.required('Email es requerido'),
		dni: Yup.string()
			.min(4, 'Este campo no puede ser tan corto')
			.trim()
			.lowercase()
			.required('Este campo es requerido'),
		phone: Yup.string().trim().required('Telefono es un campo requerido'),
	});

	const { errors, handleSubmit, getFieldProps, touched } = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			city: '',
			kind: 'client',
			email: '',
			dni: '',
			phone: '',
		},
		validationSchema,
		onSubmit: async (values, { resetForm }) => {
			await addPatient(values, resetForm);
		},
	});
	return (
		<form onSubmit={handleSubmit}>
			<FormControl
				mt={4}
				isInvalid={touched.name && errors.name ? true : false}
			>
				<FormLabel>Nombre</FormLabel>
				<Input {...getFieldProps('name')} />
				<FormErrorMessage>{errors.name}</FormErrorMessage>
			</FormControl>
			<FormControl
				mt={4}
				isInvalid={touched.lastName && errors.lastName ? true : false}
			>
				<FormLabel>Apellido</FormLabel>
				<Input {...getFieldProps('lastName')} />
				<FormErrorMessage>{errors.lastName}</FormErrorMessage>
			</FormControl>
			<FormControl mt={4} isInvalid={touched.dni && errors.dni ? true : false}>
				<FormLabel>Cedula de identidad</FormLabel>
				<Input type='text' {...getFieldProps('dni')}></Input>
				<FormErrorMessage>{errors.dni}</FormErrorMessage>
			</FormControl>
			<FormControl
				mt={4}
				isInvalid={touched.phone && errors.phone ? true : false}
			>
				<FormLabel>Telefono</FormLabel>
				<InputGroup>
					<InputLeftAddon children='+58' />
					<Input
						type='tel'
						placeholder='Numero de telefono'
						{...getFieldProps('phone')}
					/>
				</InputGroup>
				<FormErrorMessage>{errors.phone}</FormErrorMessage>
			</FormControl>
			<FormControl
				mt={4}
				isInvalid={touched.city && errors.city ? true : false}
			>
				<FormLabel>Ciudad</FormLabel>
				<Input {...getFieldProps('city')} />
				<FormErrorMessage>{errors.city}</FormErrorMessage>
			</FormControl>
			<FormControl
				mt={4}
				isInvalid={touched.email && errors.email ? true : false}
			>
				<FormLabel>Email</FormLabel>
				<Input type='email' {...getFieldProps('email')} />
				<FormErrorMessage>{errors.email}</FormErrorMessage>
			</FormControl>

			<ButtonGroup gap='4' my={'4'} display='flex' justifyContent={'flex-end'}>
				<Button type='submit' colorScheme='blue' mr={3} isLoading={isLoading}>
					Guardar
				</Button>
			</ButtonGroup>
		</form>
	);
};
