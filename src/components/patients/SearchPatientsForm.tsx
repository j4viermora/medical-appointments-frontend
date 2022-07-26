import {
	Input,
	FormControl,
	InputGroup,
	InputLeftAddon,
	FormLabel,
	Button,
	IconButton,
} from '@chakra-ui/react';
import { SearchIcon, RepeatIcon } from '@chakra-ui/icons';
import { Card } from 'components/shared';
import { usePatients } from 'hooks';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
export const SearchPatientsForm = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { searchPatients, getPatiens } = usePatients();

	const queryHandler = (event: any) => {
		handleChange(event);
		setSearchParams({
			q: event.target.value,
		});
	};

	const queryParams = searchParams.get('q');

	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			search: queryParams ? `${queryParams}` : '',
		},
		onSubmit: ({ search }) => {
			search !== '' ? searchPatients(search) : getPatiens();
		},
	});

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Card
					display={{ md: 'flex', sm: 'block' }}
					gap='4'
					alignItems='flex-end'
				>
					<FormControl
						placeholder='buscar'
						mb={['10px', '0px']}
						width={{ sm: '100%', md: '40%' }}
					>
						<FormLabel>Buscar por cedula de identidad</FormLabel>
						<InputGroup>
							<InputLeftAddon children={<SearchIcon />} />
							<Input
								type='number'
								name='search'
								onChange={(event) => queryHandler(event)}
								value={values.search}
							/>
						</InputGroup>
					</FormControl>
					<Button
						colorScheme={'blue'}
						type='submit'
						leftIcon={<SearchIcon />}
						mr='4'
					>
						Buscar
					</Button>
					<IconButton
						aria-label='Search database'
						icon={<RepeatIcon />}
						onClick={getPatiens}
					/>
				</Card>
			</form>
		</>
	);
};
