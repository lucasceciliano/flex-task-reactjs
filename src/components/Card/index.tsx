import { Avatar, Box, Flex, Text } from '@chakra-ui/react'


export default function Card({data}) {
    return(
        <Flex
        w="64"
        mr="4"
        position="relative"
        bg="gray.50"
        borderRadius="4"
        mb="2.5"
        p="4"
        boxShadow="0 1px 4px 0 rgba(0, 0, 0, 0.8)"
        borderTop=" 20px solid rgba(206, 208, 211, 0.4)"
        cursor="grab"
        >
            <Flex as="header" position="absolute" top="-15px" left="15px" > 
                {data.labels.map(label =>
                <Box
                as="label"
                key={label}
                w="2.5"
                h="2.5"
                borderRadius="0,5"
                display="inline-block"
                bg={label}
                boxShadow="0 1px 2px 0 rgba(105, 105, 105, 0.8)"
                /> )}
            </Flex>
            
            <Text fontSize="sm" color="black" lineHeight="5" > {data.content} </Text>
            {data.user && <Avatar size="sm" name="Lucas Ceciliano" m="2.5" left="2.5" src={data.user} /> }
        </Flex>
    )
}