import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { colors } from "./colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
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
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '',
        },
      }
    }
  },
});
