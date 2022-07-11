import { useState } from 'react';
import {
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightAddon,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { login } from 'api';
import { ILoginResponse } from 'interfaces';
import { AxiosResponse } from 'axios';
import { setSession } from 'features/session/sessionSlice';
import { useDispatch } from 'react-redux';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const LoginForm = () => {
	//delete email, only development
	const isPrevEmail = window.localStorage.getItem('email') || 'javier@mora.com';
	const [email, setEmail] = useState(isPrevEmail);
	const [password, setPassword] = useState('12345678');
	const [remember, setRemember] = useState(false);
	const { isOpen, onToggle } = useDisclosure();
	const dispatch = useDispatch();

	function onSubmit(e: any) {
		e.preventDefault();

		if (remember) {
			window.localStorage.setItem('email', email);
		} else {
			window.localStorage.removeItem('email');
		}

		const sucessFunc = ({ data }: AxiosResponse<ILoginResponse, any>) => {
			localStorage.setItem('auth-token', data.token);
			dispatch(
				setSession({
					company: data.company,
					user: data.user,
					isLogged: true,
				})
			);

			location.href = '/#/app';
			return 'Login exitoso';
		};

		const errorFunc = ({ response: { data } }: any): string => {
			return data.msg;
		};

		toast.promise(login({ email, password }), {
			loading: 'Iniciando sesion',
			error: (e) => errorFunc(e),
			success: (resp) => sucessFunc(resp),
		});
	}

	return (
		<Stack as={'form'} onSubmit={onSubmit} spacing={4}>
			<FormControl id='email'>
				<FormLabel>Email</FormLabel>
				<Input
					type='email'
					value={email}
					onChange={({ target: { value } }) => setEmail(value)}
				/>
			</FormControl>
			<FormControl id='password'>
				<FormLabel>Contraseña</FormLabel>
				<InputGroup>
					<Input
						type={isOpen ? 'text' : 'password'}
						value={password}
						onChange={({ target: { value } }) => setPassword(value)}
					/>
					<InputRightAddon
						onClick={onToggle}
						children={isOpen ? <AiFillEyeInvisible /> : <AiFillEye />}
					/>
				</InputGroup>
			</FormControl>
			<Stack spacing={10}>
				<Stack
					direction={{ base: 'column', sm: 'row' }}
					align={'start'}
					justify={'space-between'}
				>
					<Checkbox
						onChange={({ target: { checked } }) => setRemember(checked)}
					>
						Recuerdame
					</Checkbox>
					<Link to={'/restore-password'}>¿Olvido su contraseña?</Link>
				</Stack>
				<Button
					type='submit'
					bg={'blue.400'}
					color={'white'}
					_hover={{
						bg: 'blue.500',
					}}
				>
					Iniciar sesion
				</Button>
			</Stack>
		</Stack>
	);
};
