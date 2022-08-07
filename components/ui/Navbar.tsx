import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UIContext } from "../../state/ui";

export const Navbar = () => {
  const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="medium" edge="end" onClick={() => openSideMenu()}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6" color="inherit">
          OpenKira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
