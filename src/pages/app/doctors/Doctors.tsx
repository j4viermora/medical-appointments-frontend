import {
	Button,
	ButtonGroup,
	Grid,
	GridItem,
	Heading,
	Progress,
	Text,
} from '@chakra-ui/react';
import { useAppDispatch } from 'app/hooks';
import { Card, CustomFAB } from 'components/shared';
import { IDoctor, setCurrentDoctor } from 'features/doctors/doctorsSlice';
import { useDoctors } from 'hooks';
import { useEffect } from 'react';
import {Helmet} from 'react-helmet';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const DoctorsPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		doctors,
		isLoading,
		getDoctors,
		metadata: { totalDocs },
	} = useDoctors();

	useEffect(() => {
		getDoctors();
	}, []);


	const addCurrentDoctor = ({ ...info }: IDoctor) => {
		dispatch(setCurrentDoctor(info));
		navigate(`view/${info._id}`)
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
		
			{isLoading ? (
				<Progress size='xs' isIndeterminate />
			) : (
				<Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap='4'>
					{doctors.map(({ _id, name, phone, ...rest }) => (
						<GridItem key={_id}>
							<Card>
								<Heading size={'md'}>Dr.{name}</Heading>
								<Text mb='4'>{phone}</Text>
								<ButtonGroup width={'full'}>
									<Button flex={1} as={RouterLink} to={`/app/appointments?q=${_id}`}>
										Citas
									</Button>
									<Button 
										flex={1}
										onClick={() =>
											addCurrentDoctor({ name, phone, _id, ...rest })
										}
										colorScheme='blue'
									>
										Editar
									</Button>
								</ButtonGroup>
							</Card>
						</GridItem>
					))}
				</Grid>
			)}
			<CustomFAB onClick={() => navigate('add')} />
		</>
	);
};
