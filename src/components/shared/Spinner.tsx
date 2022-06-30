import { Spinner as ChakraSpinner, Box } from '@chakra-ui/react';

export const Spinner = () => {
	return (
		<Box
			w='100vw'
			h='100vh'
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<ChakraSpinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='blue.500'
				size='xl'
			/>
		</Box>
	);
};
