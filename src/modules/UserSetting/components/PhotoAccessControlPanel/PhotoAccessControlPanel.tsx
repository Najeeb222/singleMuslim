import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { COLORS } from "@muc/constants";

const PhotoAccessControlPanel: React.FC = () => {
  const menuItems = [
    "User Access",
    "User Requests",
    "My Access",
    "My Requests",
  ];

  return (
    <Card
      sx={{
        width: "430px",
        borderRadius: "19px 3px 3px 3px",
        border: "1px solid #ccc",
        padding: 0, 
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0077A3",
          gap: "16px",
          color: COLORS.white.main,
          borderRadius: "18px 3px 0 22px",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            height: "45px",
            width: "45px",
            bgcolor: "transparent",
            border: "2px solid transparent",
            borderRightColor: "white",
            borderBottomColor: "white",
            rotate: "315deg",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <LockIcon sx={{ rotate: "45deg" }} />
        </Box>

        <Typography variant="subtitle1" fontWeight="bold" padding={"7px"}>
          Photo Access Control Panel
        </Typography>
      </Box>

      <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  padding: "8px",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: COLORS.white.grayWhite },
                }}
              >
                <ListItemText primary={item} />
                <ListItemIcon sx={{justifyContent: "end"}}>
                  <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#888" }} />
                </ListItemIcon>
              </ListItem>
              {index !== menuItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PhotoAccessControlPanel;
