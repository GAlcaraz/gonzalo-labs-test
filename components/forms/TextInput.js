import React from "react";
import { FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react";
import { Field, useField } from "formik";

const TextInput = ({ name, label, type, placeholder, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl isInvalid={!!meta.error && meta.touched} {...props}>
      <Text mb={3} color="orange.600" fontWeight={700} fontSize={16}>
        {label}
      </Text>
      <Field
        name={name}
        as={Input}
        bg="whiteAlpha.600"
        borderColor="gray.100"
        h={50}
        focusBorderColor="orange.600"
        placeholder={placeholder}
        id={name}
        type={type}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
