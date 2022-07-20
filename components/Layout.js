import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout(props) {
  return (
    <Flex
      bg="gray.200"
      direction="column"
      align="center"
      minH="100vh"
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
