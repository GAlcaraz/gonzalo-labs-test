import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const navItems = [
    {
      label: "Numbers Test",
      href: "/test",
    },
    {
      label: "Crypto",
      href: "/crypto",
    },
  ];

  return (
    <Box w="100%">
      <Flex
        minH={"70px"}
        px={4}
        borderBottom={1}
        align="center"
        justify="space-between"
        width="100%"
        bg="white"
        boxShadow="md"
      >
        <Flex justify="start">
          <Link href="/">
            <Flex
              direction="row"
              align="center"
              justify="center"
              cursor="pointer"
            >
              <Icon
                as={FontAwesomeIcon}
                color="orange.400"
                icon={faBitcoin}
                size="2x"
              />
              <Text
                color={router.pathname === "/" ? "orange.900" : "orange.500"}
                _hover={{
                  color: "orange.700",
                }}
                _after={{
                  content: '""',
                  height: "1px",
                  display: router.pathname === "/" ? "block" : "none",
                  backgroundColor: "orange.900",
                }}
                ml={3}
              >
                Home
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Flex display={{ base: "none", sm: "flex" }} ml={10}>
          <DesktopNav navItems={navItems} />
        </Flex>
        <Flex
          display={{ base: "flex", sm: "none" }}
          justify={{ base: "center", sm: "end" }}
          float="right"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            colorScheme="orange"
            aria-label={"Toggle Navigation"}
            variant={"ghost"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen}>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
};

const DesktopNav = ({ navItems }) => {
  const router = useRouter();

  return (
    <Stack justify="space-between" align="center" direction={"row"} spacing={4}>
      {navItems.map((item) => (
        <Box cursor="pointer" key={item.label}>
          <Link href={item.href ?? "#"}>
            <Text
              color={
                Boolean(router.pathname.match(`^${item.href}/[^/]+$`)) ||
                router.pathname === `${item.href}`
                  ? "orange.900"
                  : "orange.500"
              }
              transition="ease-in-out"
              transitionDuration="300ms"
              _hover={{
                color: "orange.700",
              }}
              _after={{
                content: '""',
                height: "1px",
                display:
                  Boolean(router.pathname.match(`^${item.href}/[^/]+$`)) ||
                  router.pathname === `${item.href}`
                    ? "block"
                    : "none",
                backgroundColor: "orange.900",
              }}
              fontWeight={500}
            >
              {item.label}
            </Text>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ navItems }) => {
  const router = useRouter();

  return (
    <Stack
      justify="center"
      align="center"
      p={4}
      bg="orange.600"
      borderBottomRadius="md"
      display={{ base: "flex", sm: "none" }}
    >
      {navItems.map((navItem) => (
        <Flex
          cursor="pointer"
          key={navItem.label}
          py={2}
          justify="space-between"
          align="center"
        >
          <Link href={navItem.href}>
            <Text
              fontWeight={600}
              transition="ease-in-out"
              transitionDuration="300ms"
              color={
                Boolean(router.pathname.match(`^${navItem.href}/[^/]+$`)) ||
                router.pathname === `${navItem.href}`
                  ? "black"
                  : "orange.100"
              }
              _after={{
                content: '""',
                height: "1px",
                display:
                  Boolean(router.pathname.match(`^${navItem.href}/[^/]+$`)) ||
                  router.pathname === `${navItem.href}`
                    ? "block"
                    : "none",
                backgroundColor: "orange.900",
              }}
            >
              {navItem.label}
            </Text>
          </Link>
        </Flex>
      ))}
    </Stack>
  );
};

export default Header;
