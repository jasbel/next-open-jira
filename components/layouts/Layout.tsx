import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
  // children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = "Open Jira", children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      {/* Sidebar */}

      <Box sx={{ p: "10px 15px" }}>{children}</Box>
    </Box>
  );
};
