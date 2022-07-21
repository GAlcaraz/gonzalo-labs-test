import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import NoSsrWrapper from "./NoSsrWrapper";
import { Button, Flex, Icon, Stack, Text, useToast } from "@chakra-ui/react";
import { addNetwork, switchToNetwork } from "lib/metamask/networks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { connect, metaState } = useMetamask();
  const toast = useToast();
  const [buttonAddLoading, setButtonAddLoading] = useState(false);
  const [buttonSwitchLoading, setButtonSwitchLoading] = useState(false);

  useEffect(() => {
    if (!metaState.isConnected && metaState.isAvailable) {
      (async () => {
        try {
          await connect(ethers.providers.Web3Provider, "any");
        } catch (e) {
          toast({
            title: e.message,
            status: "error",
            isClosable: true,
            position: "top",
          });
        }
      })();
    }
  }, [metaState.isAvailable, connect, metaState, toast]);

  const addTestnet = useCallback(async () => {
    setButtonAddLoading(true);
    try {
      await addNetwork([
        {
          chainId: "0x13881",
          rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
          chainName: "Polygon Testnet Mumbai",
          nativeCurrency: {
            name: "tMATIC",
            symbol: "tMATIC",
            decimals: 18,
          },
          blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        },
      ]);
      toast({
        title: "Network added to Metamask",
        status: "success",
        isClosable: true,
        position: "top",
      });
    } catch (e) {
      toast({
        title: e.message,
        status: e.code == 4001 ? "info" : "error",
        isClosable: true,
        position: "top",
      });
    }
    setButtonAddLoading(false);
  }, [toast]);

  const switchToRinkeby = useCallback(async () => {
    setButtonSwitchLoading(true);
    try {
      await switchToNetwork("0x4");
      toast({
        title: "Network switched to Rinkeby",
        status: "success",
        isClosable: true,
        position: "top",
      });
    } catch (e) {
      toast({
        title: e.message,
        status: e.code == 4001 ? "info" : "error",
        isClosable: true,
        position: "top",
      });
    }
    setButtonSwitchLoading(false);
  }, [toast]);

  return (
    <Flex direction="column" align="center" justify="center">
      <Text
        textAlign="center"
        fontSize={{ base: "lg", sm: "2xl", md: "4xl" }}
        color="black"
        mb={12}
        px={6}
        overflow="hidden"
        maxW="80vw"
      >
        {metaState.account[0]}
      </Text>
      <Stack direction="column" spacing={2}>
        <Button
          size={["sm", "md", "lg"]}
          colorScheme="orange"
          borderRadius="md"
          type="submit"
          onClick={() => {
            if (metaState.isConnected) {
              console.log(metaState.web3);
            }
          }}
        >
          {metaState.isAvailable ? "Connected" : "Connect Wallet"}
        </Button>
        <Stack direction={["column", "row"]} spacing={2}>
          <Button
            leftIcon={
              <Icon as={FontAwesomeIcon} icon={faArrowsRotate} size="lg" />
            }
            size={["sm", "md", "lg"]}
            colorScheme="orange"
            borderRadius="md"
            type="submit"
            onClick={switchToRinkeby}
            isLoading={buttonSwitchLoading}
            w={["100%", "50%"]}
          >
            Switch to Rinkeby
          </Button>
          <Button
            leftIcon={
              <Icon as={FontAwesomeIcon} icon={faSquarePlus} size="lg" />
            }
            size={["sm", "md", "lg"]}
            colorScheme="orange"
            borderRadius="md"
            type="submit"
            onClick={addTestnet}
            isLoading={buttonAddLoading}
            w={["100%", "50%"]}
          >
            Add Network
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

const MetamaskDashboard = () => {
  return (
    <NoSsrWrapper>
      <Dashboard />
    </NoSsrWrapper>
  );
};

export default MetamaskDashboard;
