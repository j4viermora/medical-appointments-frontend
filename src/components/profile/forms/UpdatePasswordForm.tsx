import {
	Button,
	ButtonGroup,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import { Card } from 'components/shared';
import { FC } from 'react';

interface IProps {
	onCancel: () => void;
}

export const UpdatePasswordForm: FC<IProps> = ({ onCancel }) => {
	return (
		<Card>
			<FormControl mb='4'>
				<FormLabel>Contrasena actual</FormLabel>
				<Input />
			</FormControl>
			<FormControl mb='4'>
				<FormLabel>Nueva contrase;a</FormLabel>
				<Input />
			</FormControl>
			<FormControl mb='4'>
				<FormLabel>Repite la nueva contrasena</FormLabel>
				<Input />
			</FormControl>
			<ButtonGroup>
				<Button onClick={onCancel} colorScheme='red'>
					Cancelar
				</Button>
				<Button type='submit' colorScheme={'blue'}>
					Cambiar
				</Button>
			</ButtonGroup>
		</Card>
	);
};
