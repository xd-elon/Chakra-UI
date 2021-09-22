import { Box, Button, Divider, Flex, Heading,  HStack,  SimpleGrid, VStack} from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header/>

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
                            <Input name="name" label="Nome completo"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="confirmaçao" type="password" label="Confirmação da senha"/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users">
                              <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}