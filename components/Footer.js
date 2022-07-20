import React from "react";

import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      py={6}
      borderTop={1}
      borderStyle="solid"
      bg="white"
      align="center"
      width="100%"
      boxShadow="0 1px 1px #c8c8c8"
    >
      <Flex mb={3}>
        <Flex
          mx={[2, 2, 3]}
          sx={{
            a: {
              transition: "ease-in-out",
              transitionDuration: "300ms",
              color: "black",
              _hover: {
                color: "orange.500",
              },
            },
          }}
        >
          <a
            href="https://github.com/GAlcaraz"
            target="_blank"
            rel="noreferrer"
          >
            <Stack direction="row" align="center">
              <Icon as={FontAwesomeIcon} icon={faGithub} size="2x" />
              <Text>GAlcaraz</Text>
            </Stack>
          </a>
        </Flex>
      </Flex>
      <Box>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} {"Glcrz Labs"}
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
