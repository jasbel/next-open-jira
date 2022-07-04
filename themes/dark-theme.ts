import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.background,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
  },
  components: {},
});
