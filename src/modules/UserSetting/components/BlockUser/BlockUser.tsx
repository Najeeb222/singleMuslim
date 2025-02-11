import { COLORS } from "@muc/constants";
import { Divider, Stack, Typography } from "@mui/material";

const BlockUser = () => {
  return (
    <Stack>
      <Typography
        variant="h6"
        fontSize={"24px"}
        color={COLORS.gray.darkGray}
        mb={"21px"}
      >
        Blocked User
      </Typography>
      <Divider />
      <Stack
        sx={{
          width: "100%",
          bgcolor: COLORS.gray.whiteGray,
          minHeight:'100vh'
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography textAlign="center">You have no blocked users.</Typography>
      </Stack>
    </Stack>
  );
};

export default BlockUser;
