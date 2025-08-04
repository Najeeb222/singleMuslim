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
              // borderRadius: "10px",
                  borderRadius: "12px 12px 0px 12px",
              margin: "10px",
              maxWidth: "60%",
              ml: "auto",
            }}  >
            <Typography
            >How can i help you
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste dolore maxime autem sunt nesciunt facilis et reiciendis corrupti asperiores esse, quasi magnam eos a possimus repellendus eveniet vitae ipsum.

            </Typography>
            <Done sx={{ fontSize: "15px", ml: "auto" }} />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default SendingChat;
