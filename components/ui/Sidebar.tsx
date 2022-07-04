import { InboxOutlined, MailOutlined } from "@mui/icons-material";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";

const menuItems: string[] = ["Home", "About", "Contact"];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log("close")}>
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
