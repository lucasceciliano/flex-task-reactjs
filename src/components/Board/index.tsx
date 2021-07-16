import { Flex } from '@chakra-ui/react'
import List from '../List'
import {loadLists} from '../../services/api'
import React, { useState } from 'react';
import BoardContext from './context';
import produce from 'immer'



const data = loadLists()

export default function Board() {
    const [lists, setLists] = useState(data);

    function move(fromList, toList, from, to) {
        setLists(produce(lists, draft => {
          const dragged = draft[fromList].cards[from];
    
          draft[fromList].cards.splice(from, 1);
          draft[toList].cards.splice(to, 0, dragged);
        }))
      }

    return(
        <BoardContext.Provider value={{List, move}}>
        <Flex display="flex" direction="row" p="7" h="calc(100% - 80px)" >
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
        </Flex>
        </BoardContext.Provider>
    )
}