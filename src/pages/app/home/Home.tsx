import { Box, Grid, GridItem, Progress } from '@chakra-ui/react';
import { addAppointment } from 'components/appointment/modals/addAppointment';
import { AppointmentItem } from 'components/home/cards';
import { HeaderSection } from 'components/home/sections';
import { CustomFAB } from 'components/shared';

import { useAppointments } from 'hooks';

export const Home = () => {
	const { appointments, isLoading } = useAppointments();
	if (isLoading) return <Progress size='xs' isIndeterminate />;

	return (
		<Box>
			<HeaderSection />
			<Grid
				mt='4'
				templateColumns={{
					sm: '1fr',
					md: 'repeat(2,1fr)',
					lg: 'repeat(3, 1fr)',
				}}
				gap='4'
			>
				{appointments.map((item) => (
					<GridItem key={item._id}>
						<AppointmentItem {...item} />
					</GridItem>
				))}
			</Grid>
			<CustomFAB onClick={addAppointment} />
		</Box>
	);
};
