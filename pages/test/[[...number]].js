import React, { useEffect, useState } from "react";
import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "components/forms/TextInput";

const schema = Yup.object().shape({
  number: Yup.number()
    .required("Must enter a value")
    .integer("Must be an integer")
    .positive("Must be a positive number"),
});

export default function Layout(props) {
  const router = useRouter();
  const [number, setNumber] = useState();
  const [words, setWords] = useState();
  const toast = useToast();

  useEffect(() => {
    const num = router.query.number;
    if (!num) {
      return;
    }

    const getNumberToWords = async () => {
      if (isNaN(num) || !Number.isInteger(parseInt(num)) || parseInt(num) < 0) {
        toast({
          title: "Query string is not a valid number",
          status: "error",
          isClosable: true,
          position: "top",
        });
        return null;
      } else {
        // @ts-ignore
        setNumber(num);
      }
      const response = await fetch(`/api/test/${num}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const res = await response.json();
      console.log(res);
      setWords(res?.number);
    };

    getNumberToWords();
  }, [router.query.number, toast]);

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
      <Text
        textAlign="center"
        justify="center"
        fontSize={{ base: "2xl", sm: "4xl" }}
        color="black"
        mb={12}
      >
        {words}
      </Text>
      <Formik
        initialValues={{
          number,
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          router.push(`/test/${values.number}`, undefined, { shallow: true });
        }}
        enableReinitialize={true}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Flex direction="column">
                <TextInput
                  name="number"
                  label="Enter your positive integer"
                  type="number"
                  placeholder=""
                  mb={3}
                />
                <Button
                  size="lg"
                  colorScheme="orange"
                  borderRadius="md"
                  type="submit"
                >
                  Convert
                </Button>
              </Flex>
            </form>
          );
        }}
      </Formik>
    </Flex>
  );
}
