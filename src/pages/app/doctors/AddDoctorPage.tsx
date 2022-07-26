import {
	Input,
	FormControl,
	FormLabel,
	Container,
	Heading,
	Button,
	useToast,
} from '@chakra-ui/react';
import { Card, GoToBackButton } from 'components/shared';
import { useFormik } from 'formik';
import { useDoctors } from 'hooks';
import { Helmet } from 'react-helmet';

export const AddDoctorPage = () => {
	const { addDoctor, isLoading } = useDoctors();

	const { getFieldProps, handleSubmit } = useFormik({
		initialValues: { name: '', phone: '' },
		onSubmit: ({ name, phone }, { resetForm }) => {
			addDoctor({ name, phone, resetForm });
		},
	});

	return (
		<>
			<Helmet>
				<title>Registar doctor</title>
			</Helmet>
			<Container>
				<Card>
					<Heading mb='4' size={'lg'}>
						Registrar doctor
					</Heading>
					<form onSubmit={handleSubmit}>
						<FormControl mb='4'>
							<FormLabel>Nombre y apellido</FormLabel>
							<Input {...getFieldProps('name')} />
						</FormControl>
						<FormControl mb='4'>
							<FormLabel>Telefono</FormLabel>
							<Input {...getFieldProps('phone')} />
						</FormControl>
						{/* <FormControl mb='4'>
							<FormLabel>Especialidad</FormLabel>
							<Input></Input>
						</FormControl> */}
						<Button
							colorScheme={'blue'}
							width='full'
							type='submit'
							isLoading={isLoading}
						>
							Registrar
						</Button>
					</form>
				</Card>
			</Container>
			<GoToBackButton />
		</>
	);
};
