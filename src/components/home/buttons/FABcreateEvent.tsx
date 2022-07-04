import { MdOutlineAdd } from 'react-icons/md';
import {
	Box,
	IconButton,
	Select,
	SelectField,
	Textarea,
} from '@chakra-ui/react';

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormLabel,
	Input,
	FormControl,
} from '@chakra-ui/react';

export const FABcreateEvent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			{isOpen && <AddEventModal isOpen={isOpen} onClose={onClose} />}
			<Box
				position='fixed'
				bottom={5}
				right={5}
				w='50px'
				h='50px'
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<IconButton
					onClick={onOpen}
					shadow='lg'
					rounded={'full'}
					icon={<MdOutlineAdd size={30} />}
					bg='blue.400'
					colorScheme={'blue'}
					aria-label='Add event'
					size='lg'
				/>
			</Box>
		</>
	);
};

const AddEventModal = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				motionPreset='slideInBottom'
				scrollBehavior='inside'
				size='full'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Agregar cita</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mt={4}>
							<FormLabel>Doctor</FormLabel>
							<Select placeholder='Escoge un doctor'>
								<option value='miguel'>Miguel Mora</option>
								<option value='suleima'>Suleima</option>
							</Select>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Paciente</FormLabel>
							{/* TODO agregar el buscado de paciente por nombre */}
							<Input />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Fecha</FormLabel>
							<Input type='date'></Input>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Observaciones</FormLabel>
							<Textarea />
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button variant='ghost' onClick={onClose}>
							Cancelar
						</Button>
						<Button colorScheme='blue' mr={3}>
							Guardar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
