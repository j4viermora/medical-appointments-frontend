import { useEffect } from 'react';
import {
	Alert,
	AlertIcon,
	Heading,
	Progress,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { AddPatientsModal } from 'components/patients/modals/AddPatients';
import { Card, CustomFAB } from 'components/shared';
import { PatientsItems } from 'components/patients/PatientsItems';
import { SearchPatientsForm } from 'components/patients/SearchPatientsForm';
import { usePatients } from 'hooks';
import { useSearchParams } from 'react-router-dom';

export const Patients = () => {
	const [searchParams] = useSearchParams();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { isLoading, patients, metadata, getPatiens, searchPatients } =
		usePatients();
	const queryParams = searchParams.get('q');

	useEffect(() => {
		queryParams && searchPatients(queryParams);
	}, []);

	useEffect(() => {
		!queryParams && getPatiens();
	}, []);

	return (
		<>
			<Card display={'flex'} justifyContent='space-between' alignItems='center'>
				<Heading fontSize={'lg'}>Pacientes</Heading>
				<Text>Total de pacientes: {metadata.totalDocs}</Text>
			</Card>
			<SearchPatientsForm />
			{isLoading ? (
				<Progress size='xs' isIndeterminate />
			) : (
				<>
					{patients.length === 0 ? (
						<Alert status='info'>
							<AlertIcon />
							Aun no tiene registrado ningun paciente
						</Alert>
					) : (
						<PatientsItems patients={patients} />
					)}
				</>
			)}
			<AddPatientsModal isOpen={isOpen} onClose={onClose} />
			<CustomFAB onClick={onOpen} />
		</>
	);
};

export default Patients;
