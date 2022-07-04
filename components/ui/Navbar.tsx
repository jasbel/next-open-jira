import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="medium" edge="end">
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6" color="inherit">
          OpenKira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
