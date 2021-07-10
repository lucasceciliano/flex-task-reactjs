import { Button, Flex, Text, Icon, List as CardList, Stack, } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'
import Card from '../Card'


export default function List() {
    return(
        <Flex p="4" direction="column"  >
            <Flex as="header" grow={0} basis="80" >
            <Text fontSize="2xl" >Tarefas</Text>
            <Button type="button">
            <Icon as={BiPlus} fontSize="20" />
            </Button>
            </Flex>

            <CardList paddingTop="4">
                <Stack spacing="4">
                <Card />
                <Card />
                <Card />
                <Card />
                </Stack>
            </CardList>
        </Flex>
    )
}