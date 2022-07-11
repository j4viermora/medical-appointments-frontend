import {
	Button,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Card } from 'components/shared';

export const PatientView = () => {
	return (
		<Container>
			<Card>
				<Heading as='h3' size='lg' textAlign='center'>
					Informacion de paciente
				</Heading>
				<form>
					<FormControl mb='4'>
						<FormLabel>Nombre</FormLabel>
						<Input type='text' />
					</FormControl>
					<FormControl mb='4'>
						<FormLabel>Apellido</FormLabel>
						<Input type='text' />
					</FormControl>
					<FormControl mb='4'>
						<FormLabel>Email</FormLabel>
						<Input type='text' />
					</FormControl>
					<FormControl mb='4'>
						<FormLabel>Documento de identidad</FormLabel>
						<Input type='text' />
					</FormControl>
					<FormControl mb='4'>
						<FormLabel>Ciudad</FormLabel>
						<Input type='text' />
					</FormControl>
					<FormControl mb='4'>
						<FormLabel>Telefono</FormLabel>
						<Input type='text' />
					</FormControl>
					<Button colorScheme={'blue'} leftIcon={<CheckIcon />} width='full'>
						Guardar
					</Button>
				</form>
			</Card>
		</Container>
	);
};
