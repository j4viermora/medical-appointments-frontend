import {
	Flex,
	Grid,
	GridItem,
	Heading,
	Input,
	Link,
	Text,
} from '@chakra-ui/react';
import { Card, CustomFAB } from 'components/shared';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const doctors = [
	{
		name: 'Miguel',
		lastName: 'Mora',

		id: 'fadsfasfdsa',
	},
	{
		name: 'Javier ',
		lastName: 'Mora',

		id: 'fadsfasfdsa',
	},
	{
		name: 'Javier ',
		lastName: 'Mora',

		id: 'fadsfasfdsa',
	},
	{
		name: 'Javier ',
		lastName: 'Mora',

		id: 'fadsfasfdsa',
	},
	{
		name: 'Javier',
		lastName: 'Mora',

		id: 'fadsfasfdsa',
	},
];

export const DoctorsPage = () => {
	const totalDocs = doctors.length;
	const navigate = useNavigate();
	const [listNameDoctors, updateListNameDoctors] = useState(doctors);
	const filterDoctorsByName = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		const filteredListDoctors = doctors.filter(
			(doctor) =>
				doctor.name.toLocaleLowerCase().includes(value) ||
				doctor.lastName.toLocaleLowerCase().includes(value)
		);

		updateListNameDoctors(filteredListDoctors);
	};

	return (
		<>
			<Helmet>
				<title>Doctores</title>
			</Helmet>
			<Card
				display={'flex'}
				justifyContent='space-between'
				alignItems={'center'}
			>
				<Heading size={'lg'}>Doctores</Heading>
				<Text fontSize='lg'>Total de doctores: {totalDocs}</Text>
			</Card>
			<Card>
				<Input
					placeholder='Buscar...'
					width={'lg'}
					onChange={filterDoctorsByName}
				/>
			</Card>
			<Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap='4'>
				{listNameDoctors.map(({ id, name, lastName }) => (
					<GridItem key={id}>
						<Card>
							<Heading size={'md'}>
								Dr.{name} {lastName}
							</Heading>
							<Flex mt='4' alignItems={'center'} gap='4'>
								<Link as={RouterLink} to={`/app/appointments?q=${id}`}>
									Citas
								</Link>
								<Link as={RouterLink} color='blue.500' to={`view/${id}`}>
									Ver informacion
								</Link>
							</Flex>
						</Card>
					</GridItem>
				))}
			</Grid>
			<CustomFAB onClick={() => navigate('add')} />
		</>
	);
};
