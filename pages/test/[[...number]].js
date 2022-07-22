import React, { useEffect, useState } from "react";
import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "components/forms/TextInput";
import { integerToWords } from "pages/api/convert";

const schema = Yup.object().shape({
  number: Yup.number()
    .required("Must enter a value")
    .integer("Must be an integer")
    .positive("Must be a positive number"),
});

export default function Layout({ number, words, ...props }) {
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (!number && router.query.number) {
      toast({
        title: "Query string is not a valid number",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  }, [number, toast, router.query.number]);

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
        fontSize={{ base: "2xl", sm: "4xl" }}
        color="black"
        mb={12}
      >
        {words}
      </Text>
      <Formik
        initialValues={{
          number: number || "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          router.push(`/test/${values.number}`, undefined, { shallow: false });
        }}
        // enableReinitialize={true}
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

export const getServerSideProps = async (ctx) => {
  const num = ctx.query.number;

  if (!num) {
    return {
      props: {},
    };
  }

  if (isNaN(num) || !Number.isInteger(parseInt(num)) || parseInt(num) < 0) {
    return {
      props: { words: null, number: null },
    };
  }
  const words = integerToWords(num);

  return {
    props: { words: words, number: num },
  };
};
