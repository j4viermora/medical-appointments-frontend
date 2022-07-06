import { ReactElement } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const Card = ({ children, ...props }: BoxProps) => {
	return (
		<Box shadow={'lg'} rounded='lg' bg='white' {...props}>
			{children}
		</Box>
	);
};
