import { Flex, Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { LoginForm } from 'components/login/LoginForm';
// import { Link } from 'react-router-dom';

export function LoginPage() {
	return (
		<Flex
			direction='column'
			h='100vh'
			justifyContent='center'
			alignItems='center'
			bg={useColorModeValue('gray.50', 'gray.800')}
			paddingX='10px'
		>
			<Box
				maxW={'600px'}
				minW='320px'
				rounded={'lg'}
				bg={useColorModeValue('white', 'gray.700')}
				boxShadow={'lg'}
				p={5}
			>
				<Heading textAlign='center' fontSize={'3xl'}>
					Inicio de sesión
				</Heading>
				<LoginForm />
			</Box>
		</Flex>
	);
}

export default LoginPage;
