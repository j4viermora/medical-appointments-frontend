import {
	TableContainer,
	Table,
	Thead,
	Th,
	Tr,
	Tbody,
	Td,
	Link,
	//menu
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	// other
	IconButton,
	Portal,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Card } from 'components/shared';
import { IPatient } from 'interfaces';

interface IProps {
	patients: IPatient[];
}

export const PatientDataTable = ({ patients }: IProps) => {
	return (
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
									<Link fontSize='sm' href='tel:+584128786953'>
										{patient.phone}
									</Link>
								</Td>
								<Td>
									<Menu computePositionOnMount>
										<MenuButton as={IconButton} size='sm' colorScheme='blue'>
											<HamburgerIcon />
										</MenuButton>
										<Portal>
											<MenuList>
												<MenuItem>Ver mas</MenuItem>
												<MenuItem>Crear cita</MenuItem>
												<MenuItem>Llamar</MenuItem>
												<MenuItem>Editar</MenuItem>
												<MenuItem>Eliminar</MenuItem>
											</MenuList>
										</Portal>
									</Menu>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Card>
	);
};
