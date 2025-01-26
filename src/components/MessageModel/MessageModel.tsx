import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Close, MessageOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { COLORS } from "@muc/constants";

const MessageModel = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  // Handle Dialog open/close
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle Tab Change
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabContent = [
    <Typography sx={{ padding: 2 }}>Content for Item One</Typography>,
    <Typography sx={{ padding: 2 }}>Content for Item Two</Typography>,
  ];

  return (
    <React.Fragment>
      <Stack
        justifyContent={"space-evenly"}
        alignItems={"center"}
        p={"10px"}
        height={"65px"}
        onClick={handleClickOpen}
      >
        <IconButton sx={{ padding: 0, minHeight: "0", height: "33px" }}>
          <MessageOutlined sx={{ fontSize: "33px",color:COLORS.secondary.main }} />
        </IconButton>
        <Typography color={COLORS.secondary.main} fontSize={"10px"}>
          Messages
        </Typography>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Message Dialog Tabs"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
          </Tabs>
          {tabContent[value]}
        </Box>

        <DialogActions>
          <Button onClick={handleClose}>
            <Close />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default MessageModel;
