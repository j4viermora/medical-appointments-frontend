import {
	Heading,
	Input,
	FormLabel,
	Button,
	FormErrorMessage,
	FormControl,
	Container,
} from '@chakra-ui/react';

import { useFormik } from 'formik';

const DemoLazy = () => {
	const {
		handleChange,
		handleSubmit,
		errors,
		values: { email, firstName },
		touched,
	} = useFormik({
		initialValues: {
			firstName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<>
			<Container>
				<Heading>Formit tutotial</Heading>
				<form noValidate onSubmit={handleSubmit}>
					<FormControl isInvalid={errors.email ? true : false}>
						<FormLabel htmlFor='firstName'>First Name</FormLabel>
						<Input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							onChange={handleChange}
						/>
						<FormErrorMessage>Email is required</FormErrorMessage>
					</FormControl>
					<FormControl mb={4} isInvalid={true}>
						<FormLabel htmlFor='email'>Email addres</FormLabel>
						<Input
							type='text'
							id='email'
							name='email'
							value={email}
							onChange={handleChange}
						/>
						<FormErrorMessage>Check for an valid email format</FormErrorMessage>
					</FormControl>

					<Button type='submit'>Guardar</Button>
				</form>
			</Container>
		</>
	);
};

export default DemoLazy;
