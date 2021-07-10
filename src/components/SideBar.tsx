import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { BiArchive, BiBuoy, BiChat, BiDoorOpen, BiTask } from "react-icons/bi";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.500" fontSize="small">
            DASHBOARD
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={BiTask} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Tarefas
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={BiChat} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Conversas
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={BiArchive} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Pastas
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.500" fontSize="small">
            CONFIGURAÇÕES
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={BiBuoy} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Suporte
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={BiDoorOpen} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Conta
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
