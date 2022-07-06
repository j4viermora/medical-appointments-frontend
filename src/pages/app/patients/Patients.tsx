import { Heading, Progress, Text, useDisclosure } from '@chakra-ui/react';
import { PatientDataTable } from 'components/patients/datatables/PatientDataTable';
import { AddPatientsModal } from 'components/patients/modals/AddPatients';
import { Card, CustomFAB } from 'components/shared';
import { usePatients } from 'hooks/usePatients';

export const Patients = () => {
	const { isLoading, patients, metadata } = usePatients();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { totalDocs } = metadata;
	if (isLoading) return <Progress size='xs' isIndeterminate />;

	return (
		<>
			<Card>
				<Heading fontSize={'lg'}>Pacientes</Heading>
			</Card>
			<Card>
				<Text>Total de pacientes: {totalDocs}</Text>
			</Card>
			<PatientDataTable patients={patients} />
			<AddPatientsModal isOpen={isOpen} onClose={onClose} />
			<CustomFAB onClick={onOpen} />
		</>
	);
};

export default Patients;
