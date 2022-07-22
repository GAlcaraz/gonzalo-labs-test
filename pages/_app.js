import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import React from "react";
import theme from "styles/chakra";
import { MetaMaskProvider } from "metamask-react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import "../styles/globals.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MetaMaskProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MetaMaskProvider>
    </ChakraProvider>
  );
}

export default MyApp;
