import React from "react";
import { Flex } from "@chakra-ui/react";
import MetamaskDashboard from "components/MetamaskDashboard";
import { NextSeo } from "next-seo";

export default function Layout({ ...props }) {
  return (
    <>
      <NextSeo
        title="Gonzalo's Labs - Crypto"
        description="Metamask connection showcase."
      />
      <Flex
        flex={1}
        direction="column"
        align="center"
        justify="center"
        m="0 auto"
        px={6}
        {...props}
      >
        <MetamaskDashboard />
      </Flex>
    </>
  );
}
