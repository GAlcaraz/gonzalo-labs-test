import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout(props) {
  return (
    <Flex direction="column" align="center" maxW="1280px" m="0 auto" {...props}>
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
