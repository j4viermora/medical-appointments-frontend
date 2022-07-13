import {
	Container,
	Grid,
	GridItem,
	Heading,
	Button,
	Text,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

import { Card } from 'components/shared';
import { useState } from 'react';
import { UpdatePasswordForm } from 'components/profile/forms/UpdatePasswordForm';
import { UpdateProfileInfo } from 'components/profile/forms/UpdateProfileInfo';

export const Profile = () => {
	const [isChangePassword, updateIsChangePassoword] = useState(false);

	const showUpdatePasswordForm = () => {
		updateIsChangePassoword(true);
	};

	const hideUpdatePasswordForm = () => {
		updateIsChangePassoword(false);
	};

	return (
		<>
			<Helmet>
				<title>Perfil de usuario</title>
			</Helmet>
			<Container>
				<Card>
					<Heading size={'lg'}>Mi perfil</Heading>
				</Card>
				<Grid>
					<GridItem>
						<UpdateProfileInfo />
					</GridItem>

					{isChangePassword ? (
						<UpdatePasswordForm onCancel={hideUpdatePasswordForm} />
					) : (
						<Card
							display={'flex'}
							justifyContent='space-between'
							alignItems={'center'}
						>
							<Heading size={'md'} mb='1'>
								Seguridad
							</Heading>
							<Button colorScheme={'gray'} onClick={showUpdatePasswordForm}>
								Cambiar contraseña
							</Button>
						</Card>
					)}

					<Card>
						<Heading size='md'>Informacion de la cuenta</Heading>
						<Text mt='2' fontSize={'sm'}>
							<Text as='span' fontWeight={'bold'} marginRight='1'>
								Plan:
							</Text>
							Free
						</Text>
						<Text mt='2' fontSize={'sm'}>
							<Text as='span' fontWeight={'bold'}>
								Fecha de pago:
							</Text>{' '}
							24 de cada mes
						</Text>
					</Card>
				</Grid>
			</Container>
		</>
	);
};
