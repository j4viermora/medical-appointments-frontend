import { AddPatientsForm } from 'components/patients';
import { Card } from 'components/shared';
import { Helmet } from 'react-helmet';
import { Heading } from '@chakra-ui/react';

export const AddPatient = () => {
	return (
		<>
			<Helmet>
				<title>Registrar paciente</title>
			</Helmet>
			<Card>
				<Heading as='h2' size={'lg'}>
					Registrar paciente
				</Heading>
			</Card>
			<Card>
				<AddPatientsForm />
			</Card>
		</>
	);
};
