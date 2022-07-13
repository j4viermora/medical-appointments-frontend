import {
	Box,
	BoxProps,
	CloseButton,
	Flex,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

import { NavItem } from './NavItem';
import {
	AiOutlineCalendar,
	AiOutlineContacts,
	AiOutlineUser,
	AiOutlineUsergroupAdd,
} from 'react-icons/ai';

interface LinkItemProps {
	name: string;
	icon: IconType;
	to: string;
}
const LinkItems: Array<LinkItemProps> = [
	{ name: 'Inicio', icon: FiHome, to: '/app/' },
	{ name: 'Citas', icon: AiOutlineCalendar, to: 'events' },
	{ name: 'Pacientes', icon: AiOutlineContacts, to: 'patients' },
	{ name: 'Doctores', icon: AiOutlineUsergroupAdd, to: 'products' },
	{ name: 'Consultorio', icon: FiSettings, to: 'company' },
	{ name: 'Perfil', icon: AiOutlineUser, to: 'profile' },
];

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			transition='3s ease'
			bg={useColorModeValue('white', 'gray.900')}
			borderRight='1px'
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos='fixed'
			h='full'
			{...rest}
		>
			<Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
				<Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
					Logo
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem
					key={link.name}
					to={link.to}
					icon={link.icon}
					onClick={onClose}
				>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};
