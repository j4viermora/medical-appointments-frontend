import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useAppSelector } from 'app/hooks';
import { Card } from 'components/shared';
import { useFormik } from 'formik';

export const UpdateProfileInfo = () => {
	const { email, name, lastName, updatedAt, role } = useAppSelector(
		(state) => state.session.user
	);

	const { handleSubmit, getFieldProps } = useFormik({
		initialValues: {
			name: ' javier',
			lastName: 'mora',
			email: 'javier@gmail.com',
		},
		onSubmit: (values) => console.log(values),
	});
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<FormControl mb='4'>
					<FormLabel>Nombre</FormLabel>
					<Input {...getFieldProps('name')} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Apellido</FormLabel>
					<Input {...getFieldProps('lastName')} />
				</FormControl>
				<FormControl mb='4'>
					<FormLabel>Email</FormLabel>
					<Input {...getFieldProps('email')} />
				</FormControl>
				<Button colorScheme='blue' type='submit'>
					Guardar
				</Button>
			</form>
		</Card>
	);
};
