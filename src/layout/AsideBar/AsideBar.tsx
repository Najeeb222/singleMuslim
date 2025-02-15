import { Link } from "react-router-dom";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Stack,
  Divider,
  Breadcrumbs,
  Drawer,
  IconButton,
} from "@mui/material";
import {
  Edit,
  AccountCircle,
  Notifications,
  Photo,
  Lock,
  Email,
  Phone,
  History,
  Block,
  Settings,
  Delete,
} from "@mui/icons-material";
import { COLORS } from "@muc/constants";
import React, { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState<{
    section: number | null;
    item: number | null;
  }>({
    section: null,
    item: null,
  });

  const handleActive = (sectionIndex: number, itemIndex: number) => {
    setActive({ section: sectionIndex, item: itemIndex });
  };

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {sidebarItems.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ width: "314px" }}>
          <Typography
            variant="h6"
            sx={{
              bgcolor: COLORS.gray.lightDarkGray,
              padding: "15px",
              color: COLORS.gray.darkGray,
            }}
          >
            {section.title}
          </Typography>
          <List>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <ListItem
                  onClick={() => handleActive(sectionIndex, itemIndex)}
                  component={Link}
                  to={`/user_setting/${item.path}`}
                  sx={{
                    p: 2,
                    bgcolor:
                      active.section === sectionIndex &&
                      active.item === itemIndex
                        ? COLORS.gray.main
                        : COLORS.white.main,
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
  return (
    <>
      <Stack component={Paper} sx={{ display: { md: "block", xs: "none" } }}>
        <Box role="presentation" onClick={handleClick} sx={{ padding: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="body2">Home</Typography>
            </Link>
            <Link
              to="/user_setting/edit-profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body2">Settings</Typography>
            </Link>
            {active.section !== null && active.item !== null && (
              <Typography color="text.primary" variant="body2">
                {sidebarItems[active.section].items[active.item].text}
              </Typography>
            )}
          </Breadcrumbs>
        </Box>

        {sidebarItems.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ width: "314px" }}>
            <Typography
              variant="h6"
              sx={{
                bgcolor: COLORS.gray.lightDarkGray,
                padding: "15px",
                color: COLORS.gray.darkGray,
              }}
            >
              {section.title}
            </Typography>
            <List>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <ListItem
                    onClick={() => handleActive(sectionIndex, itemIndex)}
                    component={Link}
                    to={`/user_setting/${item.path}`}
                    sx={{
                      p: 2,
                      bgcolor:
                        active.section === sectionIndex &&
                        active.item === itemIndex
                          ? COLORS.gray.main
                          : COLORS.white.main,
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </Box>
        ))}
      </Stack>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <IconButton onClick={toggleDrawer(true)}>
          <Settings />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;

const sidebarItems = [
  {
    title: "Profile",
    items: [
      { text: "Edit My Profile", icon: <Edit />, path: "edit-profile" },
      {
        text: "Edit Personal Info",
        icon: <AccountCircle />,
        path: "edit-personal-info",
      },
      {
        text: "Notifications / Preferences",
        icon: <Notifications />,
        path: "notifications",
      },
    ],
  },
  {
    title: "Photos",
    items: [
      { text: "Edit My Photos", icon: <Photo />, path: "edit-photos" },
      { text: "Photo Access", icon: <Photo />, path: "photo-access" },
    ],
  },
  {
    title: "Account & Security",
    items: [
      {
        text: "Change Username",
        icon: <AccountCircle />,
        path: "change-username",
      },
      { text: "Change Email", icon: <Email />, path: "change-email" },
      { text: "Change Password", icon: <Lock />, path: "change-password" },
      { text: "Change Phone", icon: <Phone />, path: "change-phone" },
      {
        text: "Memberships History",
        icon: <History />,
        path: "membership-history",
      },
      { text: "Blocked Users", icon: <Block />, path: "blocked-users" },
      {
        text: "Communication Preferences",
        icon: <Settings />,
        path: "communication",
      },
      { text: "Devices", icon: <Settings />, path: "devices" },
    ],
  },
  {
    title: "Delete Profile",
    items: [
      {
        text: "Delete Profile",
        icon: <Delete sx={{ color: "red" }} />,
        path: "delete-profile",
      },
    ],
  },
];
