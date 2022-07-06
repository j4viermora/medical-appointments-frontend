import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Table,
	TableContainer,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Link,
	Tooltip,
	Text,
	Divider,
	Box,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CustomFAB } from 'components/shared';
import { IPatient } from 'interfaces';
import { useEffect, useState } from 'react';
import { getPatiens } from 'api';

export const Patients = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [patients, setPatients] = useState<IPatient[]>();
	const [state, setState] = useState(false);

	useEffect(() => {
		getPatiens({ limit: 10 })
			.then(({ data }) => {
				console.log(data);
				setPatients(data.data.docs);
			})
			.catch((err) => {
				return;
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading)
		return (
			<h2>
				loading..{' '}
				<Button colorScheme={'blue'} onClick={() => setState(!state)}>
					{state ? 'true' : 'false'}
				</Button>
			</h2>
		);

	return (
		<>
			<Card>
				<TableContainer>
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th>Nombre</Th>
								<Th>Telefono</Th>
								<Th>Acciones</Th>
							</Tr>
						</Thead>
						<Tbody>
							{patients?.map((patient) => (
								<Tr key={patient._id}>
									<Td>
										<Link
											as={RouterLink}
											to={`patient/id/${patient._id}`}
											fontSize={'sm'}
										>
											{patient.name}
										</Link>
									</Td>
									<Td>
										<Tooltip label='Dando click puedes hacer aqui llamada'>
											<Link fontSize='sm' href='tel:+584128786953'>
												{patient.phone}
											</Link>
										</Tooltip>
									</Td>
									<Td>
										<Menu>
											<MenuButton as={Button} size='sm' colorScheme='blue'>
												<HamburgerIcon />
											</MenuButton>
											<MenuList>
												<MenuItem>Ver mas</MenuItem>
												<MenuItem>Crear cita</MenuItem>
												<MenuItem>Llamar</MenuItem>
												<MenuItem>Editar</MenuItem>
												<MenuItem>Eliminar</MenuItem>
											</MenuList>
										</Menu>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</Card>
			<CustomFAB onClick={() => console.log('hoal')} />
		</>
	);
};

export default Patients;
