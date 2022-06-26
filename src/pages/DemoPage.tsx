import { Heading, Text, Button, Flex, Container, Box } from '@chakra-ui/react';
import { useCounter } from 'store';

export const DemoPage = () => {
	const { counter, incrementCounter } = useCounter();
	return (
		<Container>
			<Flex justifyContent='center' height='100vh' alignItems={'center'}>
				<Box display={'grid'} placeItems='center'>
					<Heading>Demo page counter</Heading>
					<Text>{counter}</Text>
					<Button onClick={() => incrementCounter()}>Counter</Button>
				</Box>
			</Flex>
		</Container>
	);
};
export default DemoPage;
