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
      align="center"
      width="100%"
    >
      <Flex mb={3}>
        <Flex mx={[2, 2, 3]}>
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
