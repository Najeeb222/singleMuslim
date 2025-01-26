import { COLORS } from "@muc/constants";
import { Close, MoreHoriz } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const MessageCard = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "300px",
          height: "70px",
          padding: "10px",
          justifyContent: "center",
          gap: "20px",
          boxShadow: `0 5px 5px  ${COLORS.gray.darkGray}`,
        }}
      >
        <Box
          component={"img"}
          src="/assets/images/girl-img.jpg"
          sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <Stack>
          <Typography sx={{ color: COLORS.green.lightGreen, fontWeight: 600 }}>
            Najeeb Ullah
          </Typography>
          <Typography
            variant="body2"
            fontSize={"11px"}
            color={COLORS.gray.darkGray}
          >
            Salam, How may i help you, 
          </Typography>
        </Stack>
        <Stack
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Close sx={{ fontSize: "16px" }} />
          <MoreHoriz sx={{ fontSize: "20px" }} />
          <Typography sx={{ fontSize: "10px" }}>Firday</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default MessageCard;
