import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UIProvider } from "../state/ui";
import { EntriesProvider } from "../state/entries";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
