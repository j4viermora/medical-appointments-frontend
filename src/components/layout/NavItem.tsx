import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  to: string;
}
export const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  return (
    <NavLink to={to}>
      <Flex
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
