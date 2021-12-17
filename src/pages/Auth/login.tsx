import React from 'react'
import { Box, Flex, Input, FormControl, FormLabel, Button } from '@chakra-ui/react'
const login = () => {
    return (
        <Box bg='tomato' height="100vh" w='100%' p={4} color='white'>
            <Flex height="100%" justifyContent={'center'} alignItems={'center'}>
                <Box p={6} borderRadius='lg' bg="white" height="400" width={500}>
                    <Flex color="red" fontSize={'6xl'} justifyContent={'center'}>Login</Flex>
                    <FormControl id='email'>
                        <FormLabel>Email address</FormLabel>
                        <Input color={'black'} type='email' placeholder="Enter your email" />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    </FormControl>

                    <FormControl id='password'>
                        <FormLabel>Password</FormLabel>
                        <Input color={'black'} type='password' placeholder="Enter your password" />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    </FormControl>

                    <Flex justifyContent={'center'}>
                        <Button marginTop={3} colorScheme='teal' size='lg'>
                            Sign in
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default login
