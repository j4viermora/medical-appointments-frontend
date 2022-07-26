import { Link } from 'react-router-dom';
import { Box, Heading, Tag, Flex, Button } from '@chakra-ui/react';
import { useAppSelector } from 'app/hooks';

export const HeaderSection = () => {
	const { totalDocs } = useAppSelector((state) => state.appointments);

	return (
		<>
			<Box bg='white' shadow='lg' p={5} borderRadius='lg'>
				<Heading as='h2' size='lg'>
					¿Que hay para hoy?
				</Heading>
			</Box>
			<Box
				bg='white'
				shadow='lg'
				p='5'
				borderRadius='lg'
				mt='5'
				display={'flex'}
				justifyContent='space-between'
				alignItems='center'
			>
				<Flex gap={'2'}>
					Total de citas: <Tag colorScheme={'blue'}>{totalDocs}</Tag>
				</Flex>
				<Box>
					<Button as={Link} to='/app/events' colorScheme={'green'} size='sm'>
						Ver mas
					</Button>
				</Box>
			</Box>
		</>
	);
};
