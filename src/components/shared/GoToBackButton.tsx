import { Box, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const GoToBackButton: FC<any> = ({
	w = '50px',
	h = '50px',
	bottom = 5,
	right = 50,
}) => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
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
