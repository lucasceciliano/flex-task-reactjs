import { useRef, useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Container as ContainerStyled } from "./styles";
import { useDrag, useDrop } from "react-dnd";
import BoardContext from "../Board/context";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref));

  return (
    <ContainerStyled ref={ref} isDragging={isDragging}>
      <Flex as="header" position="absolute" top="-15px" left="15px">
        {data.labels.map((label) => (
          <Box
            as="label"
            key={label}
            w="2.5"
            h="2.5"
            borderRadius="0,5"
            display="inline-block"
            bg={label}
            boxShadow="0 1px 2px 0 rgba(105, 105, 105, 0.8)"
          />
        ))}
      </Flex>

      <Text fontSize="sm" color="black" lineHeight="5">
        {" "}
        {data.content}{" "}
      </Text>
      {data.user && <img src={data.user} alt="avatar" />}
    </ContainerStyled>
  );
}
