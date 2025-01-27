import { COLORS } from "@muc/constants";
import { Box, Stack, Typography } from "@mui/material";
import IncomingChat from "../IncomingChat/IncomingChat";
import SendingChat from "../SendingChat/SendingChat";

const ChatBox = () => {
  return (
    <>
      <Stack
        sx={{
          bgcolor: COLORS.gray.whiteGray,
          height: "400px",
          overflowY: "auto",
          padding: "10px 16px 26px",
          width: "100%",
          display: "flex",

          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: COLORS.dark.lightblack,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: COLORS.gray.darkGray,
          },
        }}
      >
        <IncomingChat />
        <Typography
          sx={{
            bgcolor: COLORS.dark.grayblack,
            color: COLORS.white.main,
            marginY: "20px",
            width: "125px",
            mx: "auto",
            textAlign: "center",
            fontSize: "10px",
            borderRadius: "10px",
            padding: "2px",
          }}
        >
          Today
        </Typography>
        <Box sx={{ display: "flex", alignSelf: "end" }}>
          <SendingChat />
        </Box>
      </Stack>
    </>
  );
};

export default ChatBox;
