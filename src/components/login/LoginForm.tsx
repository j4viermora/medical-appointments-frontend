import { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { login } from 'api';
import { useSession } from 'store/sessionAtom';
import { ILoginResponse } from 'interfaces/routes.interfaces';
import { AxiosResponse } from 'axios';

export const LoginForm = () => {
  //delete email, only development
  const isPrevEmail = window.localStorage.getItem('email') || 'javier@mora.com';
  const [email, setEmail] = useState(isPrevEmail);
  const [password, setPassword] = useState('12345678');
  const [remember, setRemember] = useState(false);
  const { setSession, session } = useSession();

  function onSubmit(e: any) {
    e.preventDefault();

    if (remember) {
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('email');
    }

    const sucessFunc = ({ data }: AxiosResponse<ILoginResponse, any>) => {
      window.localStorage.setItem('auth-token', data.token);
      setSession({
        company: data.company,
        user: data.user,
        token: data.token,
        isLogged: true,
      });
      return 'Login exitoso';
    };

    toast.promise(login({ email, password }), {
      loading: 'Iniciando sesion',
      error: () => 'Ops algo salio mal',
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
        <Input
          type='password'
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </FormControl>
      <Stack spacing={10}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}>
          <Checkbox
            onChange={({ target: { checked } }) => setRemember(checked)}>
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
          }}>
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};
