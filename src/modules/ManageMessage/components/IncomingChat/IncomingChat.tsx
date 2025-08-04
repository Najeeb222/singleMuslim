import { Box, Paper, Typography } from "@mui/material";

const IncomingChat = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      px={2}
      py={1}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: "60%",
          padding: "8px 12px",
          borderRadius: "12px 12px 12px 0px",
          whiteSpace: "pre-line",
        }}
      >
        <Typography variant="body2">
          Salaam, How may I help you today? Would you like to take out a Gold Membership package? ...
        </Typography>
      </Paper>
    </Box>
  );
};

export default IncomingChat;
