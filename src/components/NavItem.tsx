import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'

type NavItemProps = {
    navSize: string;
    title: string;
    icon: any;
    active?: boolean;
}

const NavItem = ({ navSize, icon, title, active }: NavItemProps) => {
    const history = useHistory()

    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    onClick={() => history.push(`/${title.toLowerCase()}`)}
                    backgroundColor={`${active && "#AEC8CA"}`}
                    p={3} borderRadius={8} width={`${navSize === "large" && "100%"}`}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}>
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                {/* <MenuList
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={5}
                >
                </MenuList> */}
            </Menu>
        </Flex>
    )
}

export default NavItem
