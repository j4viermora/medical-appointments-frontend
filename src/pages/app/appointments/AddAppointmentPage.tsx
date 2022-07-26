import { Button, Heading, Container, Text, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { Card } from 'components/shared';
import { SearchPatientsForm } from 'components/patients';
import { usePatients } from 'hooks';
import { SimplePatientItem } from 'components/appointment/cards/SimplePatientItem';

export const AddAppointmentPage = () => {
	const { patients, isLoading } = usePatients();
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
			<SearchPatientsForm />

			{isLoading
				? 'cargando..'
				: patients.map((patient) => (
						<SimplePatientItem key={patient._id} {...patient} />
				  ))}
		</Container>
	);
};
