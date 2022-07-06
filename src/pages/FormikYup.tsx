import { useFormik } from 'formik';
import {
	Container,
	Heading,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Button,
} from '@chakra-ui/react';

import * as Yup from 'yup';

export const FormikYup = () => {
	const {
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
		getFieldProps,
		touched,
		values: { email, firstName },
	} = useFormik({
		initialValues: {
			firstName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Debe de tener 15 caracteres o menos')
				.required('Este campo es obligatorio')
				.trim(),
			email: Yup.string()
				.email('Debe ser un email valido')
				.required('Requerido')
				.trim(),
		}),
	});
	return (
		<div>
			<Container>
				<Heading>Formit tutotial</Heading>
				<form noValidate onSubmit={handleSubmit}>
					<FormControl
						isInvalid={touched.firstName && errors.firstName ? true : false}
					>
						<FormLabel htmlFor='firstName'>First Name</FormLabel>
						<Input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<FormErrorMessage>{errors.firstName}</FormErrorMessage>
					</FormControl>
					<FormControl
						mb={4}
						isInvalid={touched.email && errors.email ? true : false}
					>
						<FormLabel htmlFor='email'>Email addres</FormLabel>
						<Input
							type='text'
							id='email'
							name='email'
							value={email}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<FormErrorMessage>{errors.email}</FormErrorMessage>
					</FormControl>

					<Button type='submit'>Guardar</Button>
				</form>
			</Container>
		</div>
	);
};

export default FormikYup;
