import {
  Button,
  Flex,
  Text,
  Icon,
  List as CardList,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { BiPlus } from "react-icons/bi";
import Card from "../Card";

export default function List({ data, index: listIndex }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  //Salvando dados do form
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    const data = {title, description}
    
  }

  return (
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
        <Text fontSize="1xl" fontWeight="500" p="2.5">
          {data.title}
        </Text>

        {data.creatable && (
          <Button
            type="button"
            mr="20"
            w="10"
            h="10"
            borderRadius="16"
            boder="0"
            cursor="pointer"
            colorScheme="orange"
            onClick={onOpen}
          >
            <Icon as={BiPlus} fontSize="20" />
          </Button>
        )}

        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent onSubmit={handleCreateNewTransaction}>
            <ModalHeader color="gray.800" fontSize="24">
              Adicione uma tarefa:
            </ModalHeader>

            <ModalBody>
              <Text color="gray.700" fontSize="1xl" fontWeight="bold">
                Título
              </Text>
              <Textarea
                color="gray.700"
                placeholder="Título"
                _placeholder={{ color: "gray.400" }}
                fontSize="sm"
                mt="2.5"
                mb="4"
                bg="gray.50"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />

              <Text color="gray.700" fontSize="1xl" fontWeight="bold">
                Descrição:
              </Text>
              <Textarea
                color="gray.700"
                placeholder="Pesquisar"
                _placeholder={{ color: "gray.400" }}
                fontSize="sm"
                mt="2.5"
                bg="gray.50"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="green" mr={3} type="submit">
                Adicionar
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <CardList paddingTop="4" mt="9">
        <Stack spacing="5">
          {data.cards.map((card, index) => (
            <Card
              key={card.id}
              listIndex={listIndex}
              index={index}
              data={card}
            />
          ))}
        </Stack>
      </CardList>
    </Flex>
  );
}
