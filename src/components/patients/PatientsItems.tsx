import { useRef } from 'react';

import {
	BoxProps,
	Flex,
	Heading,
	Stack,
	Text,
	Button,
	ButtonGroup,
	Grid,
	Link,
	IconButton,
	useDisclosure,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogBody,
	AlertDialogFooter,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { IPatient } from 'interfaces';
import { Link as RouterLink } from 'react-router-dom';
import { usePatients } from 'hooks';

interface IProps extends BoxProps {
	patients: IPatient[];
}

export const PatientsItems = ({ patients, ...rest }: IProps) => {
	const { deletePatient, getPatiens } = usePatients();

	const handleDeletePatient = (id: string, name: string) => {
		const ok = window.confirm(
			`Esta seguro que desea eliminar a ${name} como paciente`
		);
		ok && deletePatient(id).then(getPatiens);
	};

	return (
		<>
			<Grid
				gap='4'
				templateColumns={{
					sm: '1fr',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
					'2xl': 'repeat(4, 1fr)',
				}}
			>
				{patients.map(({ _id, name, lastName, phone, dni }) => (
					<Stack
						shadow={'lg'}
						w={{ sm: '100%', md: '300px' }}
						minW='100%'
						p='4'
						bg='white'
						mb='2'
						rounded={'lg'}
						key={_id}
					>
						<Flex justifyContent='space-between' alignItems='center'>
							<Heading fontSize={'lg'}>
								{name} {lastName}
							</Heading>
							<IconButton
								onClick={() => handleDeletePatient(_id, name)}
								aria-label='Delet contact'
								colorScheme={'red'}
								icon={<DeleteIcon />}
							/>
						</Flex>

						<Flex>
							<Text mr='2' fontWeight={'bold'}>
								Telefono:
							</Text>{' '}
							<span> {phone}</span>
						</Flex>
						<Flex>
							<Text mr='2' fontWeight={'bold'}>
								Cedula:
							</Text>{' '}
							<span> {dni}</span>
						</Flex>

						<ButtonGroup gap='4' justifyContent='center' marginTop={'4'}>
							<Button as={RouterLink} w='full' to={`view/${_id}`}>
								Ver mas
							</Button>
							<Button
								as={Link}
								w='full'
								href={`tel:${phone}`}
								colorScheme={'blue'}
							>
								Llamar
							</Button>
						</ButtonGroup>
					</Stack>
				))}
			</Grid>
		</>
	);
};
