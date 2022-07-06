import { ReactElement } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const Card = ({ children, ...props }: BoxProps) => {
	return (
		<Box shadow={'lg'} rounded='lg' bg='white' p='4' mb='4' {...props}>
			{children}
		</Box>
	);
};
