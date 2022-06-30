import { Box, Heading, Progress, Icon } from '@chakra-ui/react';
import { EventItem } from 'components/home/cards';
import { useEvents } from 'hooks/useEvents';
import { MdOutlineAdd } from 'react-icons/md';
import { IconButton } from '@chakra-ui/react';

export const Home = () => {
	const { isLoading, events } = useEvents();
	if (isLoading) return <Progress size='xs' isIndeterminate />;

	return (
		<Box>
			<Box bg='white' shadow='lg' p={5} borderRadius='lg'>
				<Heading as='h2' size='lg'>
					¿Que hay para hoy?
				</Heading>
			</Box>

			<Box display='flex' flexWrap={'wrap'} gap='5' justifyContent='center'>
				{events.map((item) => (
					<EventItem key={item._id} {...item}></EventItem>
				))}
			</Box>

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
		</Box>
	);
};
