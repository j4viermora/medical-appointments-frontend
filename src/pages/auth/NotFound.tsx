import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
	return (
		<Box textAlign='center' py={10} px={6}>
			<Heading
				display='inline-block'
				as='h2'
				size='2xl'
				bgGradient='linear(to-r, blue.400, blue.600)'
				backgroundClip='text'
			>
				404
			</Heading>
			<Text fontSize='18px' mt={3} mb={2}>
				Pagina no encontrada
			</Text>
			<Text color={'gray.500'} mb={6}>
				La pagina que estas buscando no existe
			</Text>

			<Button
				as={RouterLink}
				to='/login'
				colorScheme='blue'
				color='white'
				variant='solid'
			>
				Ir al inicio
			</Button>
		</Box>
	);
}
