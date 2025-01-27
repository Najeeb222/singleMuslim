import { COLORS } from "@muc/constants";
import { Done } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const SendingChat = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Stack
            sx={{
              bgcolor: COLORS.blue.bluelight,
              color: COLORS.white.main,
              padding: "5px 10px",
              borderRadius: "10px",
              margin: "10px",
            }}  >
            <Typography>How can i help you</Typography>
            <Done sx={{ fontSize: "15px", ml: "auto" }} />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default SendingChat;
