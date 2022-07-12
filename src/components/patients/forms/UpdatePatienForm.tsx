import { FC, useState } from 'react';

import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Input,
} from '@chakra-ui/react';
import { Card } from 'components/shared';

// Icons
import { EditIcon, CloseIcon } from '@chakra-ui/icons';
import { AiOutlineSave } from 'react-icons/ai';

//third parts imports
import { useFormik } from 'formik';
import * as Yup from 'yup';

//hooks
import { usePatients } from 'hooks';
import { IPatientUpdate } from 'interfaces/patients.interfaces';

interface IProps extends IPatientUpdate {
	_id: string;
}

export const UpdatePatienForm: FC<IProps> = ({ ...props }) => {
	const [isEdit, onToggle] = useState<boolean>(false);

	const { updatePatient, isLoading } = usePatients();

	const cancelEdit = () => {
		const ok = window.confirm('Esta seguro que desea cancelar la edicion');
		if (ok) {
			resetForm();
			onToggle(false);
		}
	};

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

	const { getFieldProps, resetForm, handleSubmit } = useFormik({
		initialValues: props,
		enableReinitialize: true,
		onSubmit: ({ name, lastName, phone, email, dni, city }) => {
			updatePatient(
				props._id,
				{ name, lastName, phone, email, dni, city },
				onToggle
			);
		},
		validationSchema,
	});

	return (
		<Card padding={'7'}>
			<Flex justifyContent={'space-between'} alignItems='center'>
				<Heading as='h3' size='lg' textAlign='center' mt='4' mb='4'>
					Informacion de paciente
				</Heading>
				{!isEdit ? (
					<IconButton
						colorScheme={'blue'}
						aria-label='edit-icon'
						icon={<EditIcon />}
						onClick={() => onToggle((prev) => !prev)}
					/>
				) : (
					<IconButton
						aria-label='cancel button'
						icon={<CloseIcon />}
						colorScheme='red'
						onClick={cancelEdit}
					/>
				)}
			</Flex>

			<form onSubmit={handleSubmit}>
				<FormControl mb='4'>
					<FormLabel>Nombre</FormLabel>
					<Input type='text' {...getFieldProps('name')} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Apellido</FormLabel>
					<Input type='text' {...getFieldProps('lastName')} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Email</FormLabel>
					<Input type='text' {...getFieldProps('email')} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Documento de identidad</FormLabel>
					<Input type='text' {...getFieldProps('dni')} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Ciudad</FormLabel>
					<Input type='text' {...getFieldProps('city')} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Telefono</FormLabel>
					<Input type='text' {...getFieldProps('phone')} />
				</FormControl>

				<Button
					isLoading={isLoading}
					type='submit'
					colorScheme={'blue'}
					leftIcon={<AiOutlineSave />}
					width='full'
					disabled={!isEdit}
				>
					Guardar
				</Button>
			</form>
		</Card>
	);
};
