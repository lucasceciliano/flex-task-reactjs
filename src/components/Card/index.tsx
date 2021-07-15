import {useRef} from 'react'
import { Box,  Flex, Text} from '@chakra-ui/react'
import {Container as ContainerStyled} from './styles' 
import {useDrag, useDrop} from 'react-dnd'




export default function Card({data, index }) {
    const ref = useRef()

    const [{isDragging}, dragRef] = useDrag({
        type: 'CARD',
        item: { type: 'CARD', index, },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            monitor.isOver({shallow:true})
        }
    })

    dragRef(dropRef(ref))

    return(
        <ContainerStyled ref={ref} isDragging={isDragging} >
        
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
            {data.user && <img src={data.user} alt="avatar"/> }
        
        </ContainerStyled>
    )
}