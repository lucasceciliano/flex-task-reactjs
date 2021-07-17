import { Flex} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import Board from "../components/Board/index";
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'




export default function Dashboard() {
    return (
        <DndProvider  backend={HTML5Backend}>
        <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
            <SideBar />
            <Board />
        </Flex>
        </Flex>
        </DndProvider>
        
        
    
        
    )
}