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

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

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
        borderStyle="solid"
        align="center"
        justify="space-between"
        width="100%"
        bg="white"
      >
        <Flex justify="start">
          <Icon
            as={FontAwesomeIcon}
            color="orange.400"
            icon={faBitcoin}
            size="2x"
          />
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
  return (
    <Stack justify="space-between" align="center" direction={"row"} spacing={4}>
      {navItems.map((item) => (
        <Box cursor="pointer" key={item.label}>
          <Link href={item.href ?? "#"}>
            <Text
              color="orange.500"
              transition="ease-in-out"
              transitionDuration="300ms"
              _hover={{
                color: "orange.700",
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
              color="orange.100"
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