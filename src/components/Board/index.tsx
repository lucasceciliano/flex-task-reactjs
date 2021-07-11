import { Flex, list } from '@chakra-ui/react'
import List from '../List'
import {loadLists} from '../../services/api'



const Lists = loadLists()

export default function Board() {
    return(
        <Flex display="flex" direction="row" p="7" h="calc(100% - 80px)" >
            {Lists.map(list => <List key={list.title} data={list}/> )}

            
            
        </Flex>
    )
}