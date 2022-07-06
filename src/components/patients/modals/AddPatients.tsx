import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	FormControl,
	FormLabel,
	Input,
	ModalFooter,
	Button,
	ButtonGroup,
	FormErrorMessage,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AddPatientsModal = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, 'Debe tener por lo menos 3 caracteres')
			.required('Este campo es requerido')
			.trim(),
		lastName: Yup.string().trim().optional(),
		phone: Yup.string().trim().required(),
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
			companyEmail: '',
			companyId: '',
			companyCode: '',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				motionPreset='slideInBottom'
				scrollBehavior='inside'
				size='full'
			>
				<ModalOverlay />
				<ModalContent>
					<form onSubmit={handleSubmit}>
						<ModalHeader>Agregar Paciente</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl
								mt={4}
								isInvalid={touched && errors.name ? true : false}
							>
								<FormLabel>Nombre</FormLabel>
								<Input {...getFieldProps('name')} />
								<FormErrorMessage>{errors.name}</FormErrorMessage>
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Apellido</FormLabel>
								<Input {...getFieldProps('lastName')} />
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Cedula de identidad</FormLabel>
								<Input type='text' {...getFieldProps('dni')}></Input>
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Telefono</FormLabel>
								<InputGroup>
									<InputLeftAddon children='+58' />
									<Input
										type='tel'
										placeholder='Numero de telefono'
										{...getFieldProps('phone')}
									/>
								</InputGroup>
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Ciudad</FormLabel>
								<Input {...getFieldProps('city')} />
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Email</FormLabel>
								<Input type='email' {...getFieldProps('email')} />
							</FormControl>
						</ModalBody>
						<ModalFooter>
							<ButtonGroup gap='4'>
								<Button variant='ghost' onClick={onClose}>
									Cancelar
								</Button>
								<Button type='submit' colorScheme='blue' mr={3}>
									Guardar
								</Button>
							</ButtonGroup>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	);
};
