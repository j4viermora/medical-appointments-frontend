//Components
import {
	Grid,
	GridItem,
	Heading,
	Text,
	Link,
	Button,
	Box,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Comments, UpdatePatienForm } from 'components/patients';
import { Card } from 'components/shared';
import { usePatients } from 'hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TimeIcon } from '@chakra-ui/icons';

const appointments = [
	{
		appointentDate: 'Jueves, 30 de Junio de 2022',
		id: '34321jklj;l',
	},
	{
		appointentDate: 'Jueves, 30 de Junio de 2022',
		id: '34321jklj;l',
	},
	{
		appointentDate: 'Jueves, 30 de Junio de 2022',
		id: '34321jklj;l',
	},

	{
		appointentDate: 'Jueves, 30 de Junio de 2022',
		id: '34321jklj;l',
	},
	{
		appointentDate: 'Jueves, 30 de Junio de 2022',
		id: '34321jklj;l',
	},
	{
		appointentDate: 'Jueves, 30 de Junio de 2022',
		id: '34321jklj;l',
	},
	{
		appointentDate: 'Jueves, 30 de Junio de 2022',
		id: '34321jklj;l',
	},
];

export const PatientView = () => {
	const { dni } = useParams();
	const { getOnePatient } = usePatients();

	const [patient, setPatient] = useState({
		name: '',
		lastName: '',
		city: '',
		phone: '',
		dni: '',
		email: '',
		_id: '',
	});

	useEffect(() => {
		dni && getOnePatient(dni).then(setPatient);
	}, []);
	return (
		<>
			<Helmet>
				<title>Informacion de paciente</title>
			</Helmet>
			<Grid templateColumns={{ sm: '1fr', md: '2fr 1fr' }} gap='4'>
				<GridItem>
					<Card>
						<Button
							as={RouterLink}
							to={`/app/appointments/add/form?dni=${patient.dni}&id=${patient._id}&name=${patient.name}`}
							colorScheme={'blue'}
						>
							Agendar
						</Button>
					</Card>
					<UpdatePatienForm {...patient} />
					<Comments />
				</GridItem>
				<GridItem>
					<Card>
						<Heading size={'md'}>Ultimas citas</Heading>
					</Card>
					{appointments.map(({ id, appointentDate }) => (
						<Card display={'flex'} alignItems='center' key={id}>
							<TimeIcon color='blue.300' />
							<Link as={RouterLink} to={`appointment/${10}`} ml='2'>
								{appointentDate}
							</Link>
						</Card>
					))}
				</GridItem>
			</Grid>
		</>
	);
};
