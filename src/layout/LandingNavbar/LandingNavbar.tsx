import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { COLORS } from "@muc/constants";
import {} from "@mui/icons-material";
const drawerWidth = 320;
const navItems = [
  {
    title: "Search",
    path: "/search",
  },
  {
    title: "LOGING",
    path: "/loging",
  },
  {
    title: "REGISTER",
    path: "/register",
  },
];
export default function LandingNavbar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      bgcolor={"black"}
      padding={"30px"}
      justifyContent={"center"}
      height={"100%"}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <NavLink
              to={item.path}
              style={{
                textDecoration: "none",
                width: "100%",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Fira Sans",
                padding: "10px 20px",
              }}
            >
              <ListItemText primary={item.title} />
              <Divider />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: COLORS.white.main,
          height: 65,
          alignItems: "center",
          transition: "allow-discrete",
        }}
      >
        <Box width={{ lg: 1200, md: 900, xs: "100%" }} mx={"auto"}>
          <Toolbar sx={{ height: 65 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                component={"img"}
                src="/assets/images/single-muslim-logo.png"
                alt="Logo"
                width={252}
                sx={{ height: "100%", width: "193px" }}
              />

              <Box
                sx={{
                  display: { xs: "none", sm: "flex", alignItems: "center" },
                }}
              >
                {navItems.map((item, ) => (
                  <NavLink
                    to={item.path}
                    key={item.title}
                    style={{
                      textDecoration: "none",
                      padding: " 20px",
                      border: "none",
                    }}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </NavLink>
                ))}
              </Box>
            </Box>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: COLORS.primary.main }} />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            bgcolor: "transparent",
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
