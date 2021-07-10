import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,RiSearchLine} from "react-icons/ri";

//criando component header
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight" w="64">
        Flex Tasks
        <Text as="span" ml="1" color="orange.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Pesquisar"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="orange.300"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text color="white">Lucas Ceciliano</Text>
            <Text color="gray.300" fontSize="small">
              cecilianolucas@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Lucas Ceciliano"
            src="https://github.com/lucasceciliano.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
