import { Flex, Box, Stack, Heading, useColorModeValue } from '@chakra-ui/react';
import { LoginForm } from 'components/login/LoginForm';

export function LoginPage() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Inicio de sesión</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={5}>
          <LoginForm />
        </Box>
      </Stack>
    </Flex>
  );
}
