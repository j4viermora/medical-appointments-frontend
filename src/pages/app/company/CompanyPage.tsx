import { Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { Card } from 'components/shared';
import { Helmet } from 'react-helmet';

export const CompanyPage = () => {
	return (
		<>
			<Helmet>
				<title>Consultorio | Clinica</title>
			</Helmet>
			<Card>
				<Heading size={'lg'}>Tu consultorio</Heading>
			</Card>
			<Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap='4'>
				<GridItem>
					<Card>
						<Heading mb='2' size='md'>
							Tasa de cambio
						</Heading>
						<Text>Tasa actual: 1 USD = 5.80BsS</Text>
						<Button mt='2' size={'sm'} colorScheme='blue'>
							Acutalizar tasa de cambio
						</Button>
					</Card>
				</GridItem>
				<GridItem>
					<Card>
						<Heading mb='2' size='md'>
							Informacion de la empresa
						</Heading>
						<Text>Nombre: Consultiorio 2</Text>
						<Button mt='2' size={'sm'} colorScheme='blue'>
							Ver informacion avanzada
						</Button>
					</Card>
				</GridItem>
				<GridItem>
					<Card>
						<Heading mb='2' size='md'>
							Usuarios
						</Heading>
						<Text>Consulta los usuarios </Text>
						<Button mt='2' size={'sm'} colorScheme='blue'>
							Consultar usuarios
						</Button>
					</Card>
				</GridItem>
				<GridItem>
					<Card>
						<Heading mb='2' size='md'>
							Metodos de pagos
						</Heading>
						<Text>Administra tus metodos de pago </Text>
						<Button mt='2' size={'sm'} colorScheme='blue'>
							Ir a metodos de pago
						</Button>
					</Card>
				</GridItem>
				<GridItem>
					<Card>
						<Heading mb='2' size='md'>
							Tus mensjaes predeterminados
						</Heading>
						<Text>Agrega mensajes predeterminados </Text>
						<Button mt='2' size={'sm'} colorScheme='blue'>
							Ir mensajes
						</Button>
					</Card>
				</GridItem>
			</Grid>
		</>
	);
};
