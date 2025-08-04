import * as React from "react";

import { Box, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";
import { COLORS } from "@muc/constants";
import MessageCard from "../../components/MessageCard/MessageCard";
import ShowUserDetailPath from "../../components/ShowUserDetailPath/ShowUserDetailPath";
import ChatBox from "../../components/ChatBox/ChatBox";
import SendingChatTextField from "../../components/SendingChatTextField/SendingChatTextField";

const MessageContainer = () => {
  // const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  // const handleClickOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {/* <Stack
        justifyContent={"space-evenly"}
        alignItems={"center"}
        p={"10px"}
        height={"65px"}
        onClick={handleClickOpen}
      >
        <IconButton sx={{ padding: 0, minHeight: "0", height: "33px" }}>
          <MessageOutlined
            sx={{ fontSize: "33px", color: COLORS.secondary.main }}
          />
        </IconButton>
        <Typography color={COLORS.secondary.main} fontSize={"10px"}>
          Messages
        </Typography>
      </Stack> */}
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      > */}
      <Box sx={{ 
      
         width: "100%", display: "flex" }}>
        {/* <DialogContent sx={{ display: "flex", padding: 0 }}> */}
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Message Dialog Tabs"
            centered
            sx={{
              width: "300px",
              pt: "30px",
              background: "linear-gradient(to bottom,#f5f5f5 0,#e8e8e8 100%)",
              ".MuiTabs-indicator": {
                top: 0,
                bottom: "auto",
                color: COLORS.secondary.main,
              },
            }}
          >
            <Tab
              label="All Messages"
              sx={{
                border: "1px solid #ccc",
                bgcolor: value === 0 ? "white" : "inherit",
                width: "140px",
                fontSize: "12px",
                color: COLORS.secondary.main,
                padding: "5px",
              }}
            />
            <Tab
              label="Unread"
              sx={{
                border: "1px solid #ccc",
                bgcolor: value === 1 ? "white" : "inherit",
                width: "140px",
                fontSize: "12px",
                color: COLORS.secondary.main,
                padding: "5px",
              }}
            />
          </Tabs>
          <Box
            sx={{
              bgcolor: COLORS.gray.whiteGray,

              color: COLORS.secondary.main,
              padding: "10px",
              textAlign: "end",
            }}
          >
            <Typography sx={{ cursor: "pointer" }}>Edit</Typography>
          </Box>
          {value === 0 && (
            <>
              <MessageCard />
            </>
          )}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: COLORS.gray.main, height: "602px" }}
        />
        <Stack
          width={"100%"}
          // height={"100vh"}
          // sx={{ justifyContent: "space-between", position: "relative" }}
        >
          <ShowUserDetailPath />
          
          <ChatBox />
        
            <SendingChatTextField />
        </Stack>
        {/* </DialogContent> */}
      </Box>
      {/* <DialogActions sx={{ position: "absolute", top: "0", right: "0" }}>
          <IconButton onClick={handleClose}>
            <Close sx={{ color: COLORS.gray.darkGray, fontSize: "20px" }} />
          </IconButton>
        </DialogActions> */}
      {/* </Dialog> */}
    </React.Fragment>
  );
};

export default MessageContainer;
