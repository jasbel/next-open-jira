import { InboxOutlined, MailOutlined } from "@mui/icons-material";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UIContext } from "../../state/ui";

const menuItems: string[] = ["Home", "About", "Contact"];

export const Sidebar = () => {
  const {sidemenuOpen, closeSideMenu} = useContext(UIContext)

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={() => closeSideMenu()}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ p: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={item}>
              <ListItemIcon>{index % 2 ? <InboxOutlined /> : <MailOutlined />}</ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={item}>
              <ListItemIcon>{index % 2 ? <InboxOutlined /> : <MailOutlined />}</ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
