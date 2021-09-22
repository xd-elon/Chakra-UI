import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }:ProfileProps) {
    return (
        <Flex align="center">
         {
            showProfileData && (
             <Box>
                <Text>Alan Fernades</Text>
                <Text
                color="gray.300"
                fontSize="small"
                >
                    seuEmail@gmail.com
                </Text>
             </Box>
            )
         }

        <Avatar size="md" name="Alan Fernades" src="https://github.com/xd-elon.png"/>
    </Flex>
    );
}