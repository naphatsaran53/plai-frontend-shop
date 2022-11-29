import { extendTheme } from "@chakra-ui/react";

import customComponentTheme from "./components";

export const theme = extendTheme({
  colors: {
    dark: { 500: "#302f2f" },
    gold: { 500: "gold" },
  },
  fonts: {
    body: `'Kanit', sans-serif`,
  },
  components: customComponentTheme,
});
