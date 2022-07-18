import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { MetamaskStateProvider } from "use-metamask";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MetamaskStateProvider>
        <Component {...pageProps} />
      </MetamaskStateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
