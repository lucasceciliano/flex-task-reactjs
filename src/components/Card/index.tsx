import { Avatar, Box, Flex, Text } from '@chakra-ui/react'


export default function Card() {
    return(
        <Flex w="64" mr="4" >
            <Flex as="header">
                <Box as="label" color="gray.600" />
            </Flex>
            
            <Text fontSize="sm" > Arte - Carrosel para instagram.</Text>
            <Avatar size="sm" name="Lucas Ceciliano" src="https://github.com/lucasceciliano.png" />
        </Flex>
    )
}