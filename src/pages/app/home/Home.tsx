import { Box, Heading } from '@chakra-ui/react';
import { EventItem } from 'components/home/cards';
import { getEventByCompany } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { useEffect, useState } from 'react';
import { setEvents } from 'features/events/eventsSlice';

export const Home = () => {
	const [isLoading, setLoading] = useState(true);
	const { _id } = useSelector((state: RootState) => state.session.company);
	const { events } = useSelector((state: RootState) => state.events);
	const dispatch = useDispatch();

	useEffect(() => {
		getEventByCompany({ companyId: _id })
			.then(({ data }) => {
				dispatch(
					setEvents({
						events: data.data.docs,
						hasNextPage: data.data.hasNextPage,
						hasPrevPage: data.data.hasPrevPage,
						nextPage: data.data.nextPage,
						limit: data.data.limit,
						page: data.data.page,
						pagingCounter: data.data.pagingCounter,
						prevPage: data.data.prevPage,
						totalDocs: data.data.totalDocs,
						totalPages: data.data.totalPages,
					})
				);
			})
			.catch((err) => console.log(err.response))
			.finally(() => setLoading(false));
	}, []);

	if (isLoading) return <h2>Loading...</h2>;

	return (
		<Box>
			<Box bg='white' shadow='lg' p={5} borderRadius='lg'>
				<Heading as='h2' size='lg'>
					¿Que hay para hoy?
				</Heading>
			</Box>

			<Box>
				{events.map((item) => (
					<EventItem key={item._id} {...item}></EventItem>
				))}
			</Box>
		</Box>
	);
};
