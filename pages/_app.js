import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import React from "react";
import theme from "styles/chakra";
import { MetamaskStateProvider } from "use-metamask";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import "../styles/globals.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MetamaskStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MetamaskStateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
