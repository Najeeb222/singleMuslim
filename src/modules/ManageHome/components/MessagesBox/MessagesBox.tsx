import { COLORS } from "@muc/constants";
import { Box, Paper, Stack, Typography } from "@mui/material";

const MessagesBox = () => {
  return (
    <>
      <Box component={Paper} sx={{ width: "100%", mb: "30px" ,height:'380px' }}>
        <Paper>
          <Typography variant="h4" sx={{ padding: "16px" }}>
            Messages
          </Typography>
          <Stack
            sx={{
              bgcolor: COLORS.gray.main,
              height: "280px",
              padding: "122px 0 127px ",
              alignItems: "center",
              justifyContent: "center",
              overflowY: "auto",
            }}
          >
            <Typography sx={{ fontSize: "28px" }}>
              You have no messages.
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              padding: "16px",
              textAlign: "center",
              color: COLORS.secondary.main,
            }}
          >
            View all
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default MessagesBox;
