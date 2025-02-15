import { COLORS } from "@muc/constants";
import { Box, Stack, Typography } from "@mui/material";

const SuccessStoriesCard = () => {
  return (
    <Stack>
      <Box component={"img"} src="/assets/images/video_pic_4.jpg" />
      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={"20px"}
        fontSize={"40px"}
        lineHeight={1.4}
        alignItems={"center"}
      >
        <Typography sx={{ fontSize: "40px", color: COLORS.secondary.main }}>
          Muhammad
        </Typography>
        <span color={COLORS.gray.darkGray}>&</span>
        <Typography sx={{ fontSize: "40px", color: COLORS.primary.main }}>
          Anila
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SuccessStoriesCard;
