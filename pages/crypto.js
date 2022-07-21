import React from "react";
import { Flex, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MetamaskDashboard from "components/MetamaskDashboard";

export default function Layout({ ...props }) {
  const router = useRouter();
  const toast = useToast();

  return (
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
  );
}
