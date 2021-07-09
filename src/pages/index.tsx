import { Flex, Button, Stack, Text, } from "@chakra-ui/react";
import { Input } from "../components/Form/input";

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
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Senha" />

        
        </Stack>

        <Button type="submit" mt="6" colorScheme="orange">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
