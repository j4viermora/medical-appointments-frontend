import { MdOutlineAdd } from 'react-icons/md';
import { Box, IconButton } from '@chakra-ui/react';

export const FABcreateEvent = () => {
	return (
		<div>
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
					shadow='lg'
					rounded={'full'}
					icon={<MdOutlineAdd size={30} />}
					bg='blue.400'
					colorScheme={'blue'}
					aria-label='Add event'
					size='lg'
				/>
			</Box>
		</div>
	);
};
