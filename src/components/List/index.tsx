import { Button, Flex, Text, Icon, List as CardList, Stack, } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'
import Card from '../Card'


export default function List({data}) {
    return(
        <Flex
        direction="column"
        //borderLeft=" 1px solid #f37915"
        flex=" 0 0 320px"
        grow={0}
        basis="80"
        paddingX="4"
        >
            <Flex
            as="header"
            display="flex"
            align="center"
            justifyContent="space-between"
            h="10"
            >
            <Text fontSize="1xl" fontWeight="500" p="2.5" >{data.title}</Text>

            {data.creatable && (
                <Button
                type="button"
                mr="20"
                w="10"
                h="10"
                borderRadius="16"
                boder="0"
                cursor="pointer"
                bg="orange.500"
                
                >
                <Icon as={BiPlus} fontSize="20" />
                </Button>
            )}

            </Flex>

            <CardList paddingTop="4" mt="9">
                <Stack spacing="5">
                {data.cards.map(card => <Card key={card.id} data={card} />)}
                </Stack>
            </CardList>
        </Flex>
    )
}