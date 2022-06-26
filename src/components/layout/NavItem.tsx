import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  to: string;
}
export const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        setActive(isActive);
        return {};
      }}>
      <Flex
        bg={isActive ? 'cyan.400' : ''}
        color={isActive ? 'white' : ''}
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
};
