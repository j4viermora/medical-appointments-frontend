import {
	Input,
	FormControl,
	FormLabel,
	Container,
	Heading,
	Button,
} from '@chakra-ui/react';
import { Card, GoToBackButton } from 'components/shared';
import { Helmet } from 'react-helmet';

export const AddDoctorPage = () => {
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
					<form>
						<FormControl mb='4'>
							<FormLabel>Nombre</FormLabel>
							<Input></Input>
						</FormControl>
						<FormControl mb='4'>
							<FormLabel>Apellido</FormLabel>
							<Input></Input>
						</FormControl>
						<FormControl mb='4'>
							<FormLabel>Documento de identidad</FormLabel>
							<Input></Input>
						</FormControl>
						<FormControl mb='4'>
							<FormLabel>Telefono</FormLabel>
							<Input></Input>
						</FormControl>
						<FormControl mb='4'>
							<FormLabel>Email</FormLabel>
							<Input></Input>
						</FormControl>
						<FormControl mb='4'>
							<FormLabel>Especialidad</FormLabel>
							<Input></Input>
						</FormControl>
						<Button colorScheme={'blue'} width='full'>
							Registrar
						</Button>
					</form>
				</Card>
			</Container>
			<GoToBackButton />
		</>
	);
};
