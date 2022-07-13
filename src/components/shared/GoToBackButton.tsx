import { Box, IconButton } from '@chakra-ui/react';
import { MdArrowBack } from 'react-icons/md';

export const GoToBackButton = () => {
	const goBack = () => {};
	return (
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
				onClick={goBack}
				shadow='lg'
				rounded={'full'}
				icon={<MdArrowBack size={30} />}
				bg='blue.400'
				colorScheme={'blue'}
				aria-label='Add event'
				size='lg'
			/>
		</Box>
	);
};
