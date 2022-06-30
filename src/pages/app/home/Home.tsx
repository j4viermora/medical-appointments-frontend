import { Box, Progress } from '@chakra-ui/react';
import { EventItem } from 'components/home/cards';
import { HeaderSection } from 'components/home/sections';
import { FABcreateEvent } from 'components/home/buttons';

import { useEvents } from 'hooks/useEvents';

export const Home = () => {
	const { isLoading, events } = useEvents();
	if (isLoading) return <Progress size='xs' isIndeterminate />;

	return (
		<Box>
			<HeaderSection />
			<Box display='flex' flexWrap={'wrap'} gap='5' justifyContent='center'>
				{events.map((item) => (
					<EventItem key={item._id} {...item}></EventItem>
				))}
			</Box>
			<FABcreateEvent />
		</Box>
	);
};
