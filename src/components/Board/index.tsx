import { Flex } from '@chakra-ui/react'
import List from '../List'

export default function Board() {
    return(
        <Flex display="flex">
            <List />
            <List />
            <List />
            <List />
        </Flex>
    )
}