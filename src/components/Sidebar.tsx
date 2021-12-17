import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react';

import {
    FiMenu,
    FiHome,
    FiCalendar,

} from 'react-icons/fi'
import NavItem from './NavItem';

const Sidebar = () => {
    const [navSize, changeNavSize] = useState<string>("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >

            <Flex p="5%" flexDir="column" w="100%" as="nav" alignItems={navSize === "small" ? "center" : "flex-start"}>
                <IconButton
                    background="none"
                    aria-label='menu'
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Contacts" />
                <NavItem navSize={navSize} icon={FiCalendar} title="Messages" active />
            </Flex>

            <Flex p="5%" flexDir="column" w="100%" mb={4} alignItems={navSize === "small" ? "center" : "flex-start"}>
                <Divider display={navSize === "small" ? "none" : "flex"} />

                <Flex mt={4} align="center">
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Logout</Heading>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Sidebar
