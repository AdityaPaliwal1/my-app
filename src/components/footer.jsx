import React from "react";
import { Box, Flex, Text, Link, Icon, Stack } from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg={"linear-gradient(270deg, #011228 -21.91%, rgba(1, 18, 40, 0.83) 100.84%, rgba(1, 18, 40, 0.77) 101.34%, rgba(1, 18, 40, 0.77) 102.73%, rgba(1, 18, 40, 0.00) 105.07%, rgba(1, 18, 40, 0.79) 105.07%)"}>
      <Flex
        align={"flex-start"}
        justify={"center"}
        wrap={"wrap"}
        w={{ base: "100%", sm: "30%", md: "80%" }}
        color={"white"}
        p={5}
        mt={"7"}
        mx={"auto"}
        gap={6}
      >
        <Text>Copy Right Reserved</Text>
        <Icon
          as={FaGithub}
          w={6}
          h={6}
          _hover={{
            color: "#29C9FB",
            transition: "0.3s",
            cursor: "pointer",
          }}
        />
        <Icon
          as={FaLinkedin}
          w={6}
          h={6}
          _hover={{
            color: "#29C9FB",
            transition: "0.3s",
            cursor: "pointer",
          }}
        />
        <Icon
          as={FaTwitter}
          w={6}
          h={6}
          _hover={{
            color: "#29C9FB",
            transition: "0.3s",
            cursor: "pointer",
          }}
        />
        <Icon
          as={FaInstagram}
          w={6}
          h={6}
          _hover={{
            color: "#29C9FB",
            transition: "0.3s",
            cursor: "pointer",
          }}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
