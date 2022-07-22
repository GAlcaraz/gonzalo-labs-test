import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  createIcon,
  Icon,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container flex={1} maxW={"7xl"}>
      <Heading
        mt={12}
        align="center"
        lineHeight={1}
        fontWeight={600}
        fontSize={{ base: "4xl", sm: "6xl", lg: "8xl" }}
      >
        <Text>Glcrz Labs</Text>
      </Heading>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text>Software Engineer</Text>
            <Text as={"span"} color={"purple.500"}>
              at Kinema!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Kinema is a social cinema platform dedicated to connecting films to
            live audiences IRL and URL, and I&apos;m happy to have greatly
            contributed to it as the first engineering hire. Click below to
            check out some of what I co-created!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center", md: "unset" }}
          >
            <a href="https://kinema.com/" target="_blank" rel="noreferrer">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                colorScheme={"blue"}
                bg={"purple.400"}
                _hover={{ bg: "purple.500" }}
              >
                Kinema Site
              </Button>
            </a>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={1}
            color="purple.50"
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            zIndex={2}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://storyspaces-util.imgix.net/home-hero-2.jpg?w=1280&auto=format"
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={1}
            color="blue.50"
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            zIndex={2}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://lh3.googleusercontent.com/-xOLb6tcRkBxvat9mtGJcKtddRC3alV3Ghe6n4gYktSquT5OW8NibcsY1_QN__p2rvmVbBL7k1Xw2XOkAKXQErp06pippI6N6s5GEA"
              }
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} zIndex={2}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text>Crypto believer</Text>
            <Text as={"span"} color={"blue.400"}>
              and avid learner
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            I&apos;m a firm believer in crypto and the positive social impact it
            is having on society, and am super excited about joining the space.
            As such, I&apos;m educating myself on crypto as a whole and Web3
            development to help build the future. Click below to check out a
            couple of 1-afternoon projects!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center", md: "unset" }}
          >
            <a
              href="https://github.com/GAlcaraz/BuyMeACoffee"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"blue"}
                bg={"blue.300"}
                _hover={{ bg: "blue.400" }}
              >
                Buy me a Coffee Front repo
              </Button>
            </a>
            <a
              href="https://github.com/GAlcaraz/BuyMeACoffee-contracts"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"blue"}
                bg={"blue.300"}
                _hover={{ bg: "blue.400" }}
              >
                Coffee Contracts repo
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text>Rock climbing and</Text>
            <Text as={"span"} color={"orange.400"}>
              mountaineering fan
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Not all my life is spent in front of a computer, and I&apos;m a
            great fan of outdoor activities, especially mountaineering and rock
            climbing. If you&apos;re a climbing fan, I&apos;m more than happy to
            connect and see you at the crag!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center", md: "unset" }}
          >
            <a
              href="mailto:gonzalo.alcaraz@protonmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"orange"}
                bg={"orange.400"}
                _hover={{ bg: "orange.500" }}
              >
                Send me an email!
              </Button>
            </a>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={1}
            color="orange.50"
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            zIndex={2}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://lh3.googleusercontent.com/pw/AM-JKLWMSHolBZdEeM2kfYKJFdtLAIev06626gz7q9c1nDckPKWrUzdXyxRO-GB6XaHFLGRPsYNkC5Oxj6cs4wTEXVO7gCmWl42mq3iuHMl1FEroRssQk7zPt63UzmA1l6Kkvy4EFxWt1al6f1PENl03JBql=w900-h1600-no"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
