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
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { IEvent } from 'interfaces/events.interfaces';
import { DateTime } from 'luxon';

export function EventItem({
	patient,
	description,
	dateEvent,
	confirmationMessageSent,
	_id,
}: IEvent) {
	const { name, lastName, phone, city, dni } = patient;
	const formatDate = DateTime.fromISO(dateEvent).toFormat('DDDD');
	const whatsappMessage = encodeURI(
		`Hola ${name} ${lastName} este mensaje es para recordarte que para la fecha *${formatDate}* tiene su proxima cita. Si no podra asistir por alguna razon no dude en contactarnos. Saludos`
	);
	const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

	// const sendMessageWhatsapp = () => {
	// 	const newWindow = window.open();
	// 	//@ts-ignore
	// 	newWindow.location.href = whatsappUrl;
	// };

	return (
		<Center py={6}>
			<Stack
				borderWidth='1px'
				borderRadius='lg'
				w={{ sm: '100%', md: '400px' }}
				height={{ sm: '476px', md: '15rem' }}
				direction={{ base: 'column', md: 'row' }}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				paddingY={4}
				paddingX={2}
			>
				{/* TODO - consider add client photo */}
				{/* <Flex flex={1} bg='blue.200'>
					<Image
						objectFit='cover'
						boxSize='100%'
						src={
							'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
						}
					/>
				</Flex> */}
				<Stack
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					p={1}
				>
					<Heading fontSize={'2xl'} fontFamily={'body'}>
						{name} {lastName}
					</Heading>
					<Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
						{phone}
					</Text>
					<Stack
						align={'center'}
						justify={'space-around'}
						flexWrap='wrap'
						gap={'2'}
						direction={'row'}
						mt={6}
					>
						<Flex gap='2'>
							<Box as='span' fontWeight='bold'>
								Direcci??n:
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

						<Badge
							px={2}
							py={1}
							bg={useColorModeValue('gray.50', 'gray.800')}
							fontWeight={'400'}
						>
							{formatDate}
						</Badge>
					</Stack>

					<Stack
						width={'100%'}
						mt={'2rem'}
						direction={'row'}
						padding={2}
						justifyContent={'space-between'}
						alignItems={'center'}
					>
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
					</Stack>
				</Stack>
			</Stack>
		</Center>
	);
}
