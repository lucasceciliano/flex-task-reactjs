import { Flex, Input, Button, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" flexDir="column">
      <Text fontSize="6xl" fontWeight="bold" mb="2rem">Faça login</Text>
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          focusBorderColor="orange.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size="lg"
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          focusBorderColor="orange.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size="lg"
        />
        </Stack>

        <Button type="submit" mt="6" colorScheme="orange">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
