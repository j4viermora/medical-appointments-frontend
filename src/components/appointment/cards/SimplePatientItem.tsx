import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Card } from 'components/shared';
import { Link as RouterLink } from 'react-router-dom';

interface SimplePatientItemProps {
	name: string;
	dni: string;
	_id: string;
}

export const SimplePatientItem = ({
	name,
	dni,
	_id,
}: SimplePatientItemProps) => {
	return (
		<Card display={'flex'} justifyContent='space-between' alignItems={'center'}>
			<Box>
				<Heading size={'md'}>{name}</Heading>
				<Text> {dni}</Text>
			</Box>
			<Box>
				<Button
					as={RouterLink}
					to={`/app/appointments/add/form?dni=${dni}&id=${_id}&name=${name}`}
					colorScheme={'green'}
				>
					Seleccionar
				</Button>
			</Box>
		</Card>
	);
};
