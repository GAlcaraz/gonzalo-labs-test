import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <>
      <NextSeo title="Gonzalo's Labs - 404" description="Page Not Found" />
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Box mx={3}>
          <Flex
            flex={1}
            align="center"
            justify="center"
            flexDirection={"column"}
          >
            <Text fontSize={["xl", "3xl", "5xl"]} fontWeight={700} mb={4}>
              Oops! The page you&apos;re looking for can&apos;t be found.
            </Text>
            <Flex mt={8} justifyContent="center">
              <Link href="/">
                <Button colorScheme="orange" size="lg" fontWeight={600}>
                  Take me Home
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
