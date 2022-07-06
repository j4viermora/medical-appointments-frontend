import { Box, IconButton } from '@chakra-ui/react';
import { MdOutlineAdd } from 'react-icons/md';

interface IProps {
	onClick: () => void;
}

export const CustomFAB = ({ onClick }: IProps) => {
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
				onClick={onClick}
				shadow='lg'
				rounded={'full'}
				icon={<MdOutlineAdd size={30} />}
				bg='blue.400'
				colorScheme={'blue'}
				aria-label='Add event'
				size='lg'
			/>
		</Box>
	);
};
