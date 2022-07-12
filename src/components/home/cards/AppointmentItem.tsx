import {
	Badge,
	Button,
	Center,
	Heading,
	Stack,
	Text,
	useColorModeValue,
	Tag,
	Box,
	Flex,
	IconButton,
	ButtonGroup,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { IEvent } from 'interfaces/events.interfaces';
import { DateTime } from 'luxon';
import { DeleteIcon } from '@chakra-ui/icons';

const message = `*Este es un mensaje que viene de la api*
y uso dos variabels para funcionar 
{{nombre}} y {{fecha}}`;

export function AppointmentItem({
	patient,
	dateEvent,
	confirmationMessageSent,
	_id,
}: IEvent) {
	const { name, lastName, phone, city, dni } = patient;
	const formatDate = DateTime.fromISO(dateEvent).toFormat('DDDD');

	const addNameAndDateToMessage = (
		message: string,
		name: string,
		dateAppointment: string
	): string => {
		const newMessage = message
			.replace('{{nombre}}', name)
			.replace('{{fecha}}', dateAppointment);
		return newMessage;
	};

	const whatsappMessage = encodeURI(
		addNameAndDateToMessage(message, name, formatDate)
	);
	const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

	// const sendMessageWhatsapp = () => {
	// 	const newWindow = window.open();
	// 	//@ts-ignore
	// 	newWindow.location.href = whatsappUrl;
	// };

	return (
		<>
			<Stack borderRadius='lg' bg={'white'} boxShadow={'lg'} padding='7'>
				<Stack flexDirection='column' p={1}>
					<Flex justifyContent={'space-between'} alignItems='center'>
						<Heading fontSize={'2xl'} fontFamily={'body'}>
							{name} {lastName}
						</Heading>
						<IconButton
							aria-label='delete-appointment'
							icon={<DeleteIcon />}
							colorScheme='red'
						/>
					</Flex>

					<Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
						Telefono{phone}
					</Text>
					<Stack>
						<Flex gap='2'>
							<Box as='span' fontWeight='bold'>
								Dirección:
							</Box>
							<Badge
								px={2}
								py={1}
								bg={useColorModeValue('gray.50', 'gray.800')}
								fontWeight={'400'}
							>
								{city}
							</Badge>
						</Flex>
						<Flex gap='2'>
							<Box as='span' fontWeight='bold'>
								C.I:
							</Box>
							<Badge
								px={2}
								py={1}
								bg={useColorModeValue('gray.50', 'gray.800')}
								fontWeight={'400'}
							>
								{dni}
							</Badge>
						</Flex>
						<Box display={'flex'} gap='2'>
							<Box fontWeight='bold'>Mensaje:</Box>
							<Tag
								bg={confirmationMessageSent ? 'green.400' : 'red.400'}
								color={'white'}
							>
								{confirmationMessageSent ? 'Enviado' : 'No enviado'}
							</Tag>
						</Box>
						<Text>{formatDate}</Text>
					</Stack>

					<ButtonGroup>
						<Button
							// onClick={sendMessageWhatsapp}
							as={'a'}
							href={whatsappUrl}
							target='_blank'
							flex={1}
							fontSize={'sm'}
							_focus={{
								bg: 'gray.200',
							}}
						>
							Mensaje
						</Button>
						<Button
							as={RouterLink}
							to={`events/id/${_id}`}
							flex={1}
							fontSize={'sm'}
							bg={'blue.400'}
							color={'white'}
							_hover={{
								bg: 'blue.500',
							}}
							_focus={{
								bg: 'blue.500',
							}}
						>
							Ver detalles
						</Button>
					</ButtonGroup>
				</Stack>
			</Stack>
		</>
	);
}
