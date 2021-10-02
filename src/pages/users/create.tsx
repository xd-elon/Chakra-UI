import { Box, Button, Divider, Flex, Heading,  HStack,  SimpleGrid, VStack} from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_Confitmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('E-mail obrigatorio'),
  email: yup.string().required('E-mail obrigatorio').email('E-email inválido'),
  password: yup.string().required('Senha obrigatoria').min(6, 'no minimo 6 caracteres'),
  password_Confitmation: yup.string().oneOf([
      null, yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
    const {register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values)
    }


    return (
        <Box>
            <Header/>

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box 
                 as="form" 
                 flex="1" 
                 borderRadius={8} 
                 bg="gray.800" 
                 p={["6","8"]}
                 onSubmit={handleSubmit(handleCreateUser)}
                 >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
                            <Input 
                            name="name" 
                            label="Nome completo" 
                            {...register('name')} 
                            error={errors.name}
                            />

                            <Input 
                            name="email" 
                            type="email" 
                            label="E-mail" 
                            {...register('email')} 
                            error={errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" w="100%" spacing={["6","8"]}>
                            <Input 
                            name="password"
                            type="password"
                            label="Senha"
                            {...register('password')}
                            error={errors.password}
                            />
                            <Input 
                            name="confirmaçao"
                            type="password"
                            label="Confirmação da senha"
                            {...register('confirmaçao')}
                            error={errors.password_Confitmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users">
                              <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button 
                            type="submit" 
                            colorScheme="pink"
                            isLoading={isSubmitting}
                            >
                              Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}