import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    cssVarPrefix: "glcrz",
  },
  colors: {
    primary: {
      50: "gray.50",
      100: "#D6D6D6",
      200: "#C2C2C2",
      300: "#ADADAD",
      400: "#8F8F8F",
      500: "#707070",
      600: "#5C5C5C",
      700: "#474747",
      800: "#292929",
      900: "#0A0A0A",
    },
  },
});

export default theme;
