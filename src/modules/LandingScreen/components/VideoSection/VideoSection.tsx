import { COLORS, videoPic } from "@muc/constants";
import { PlayCircleFilled } from "@mui/icons-material";
import { Box, Container, Paper, Stack } from "@mui/material";

const VideoSection = () => {
  return (
    <>
      <Box sx={{ padding: "80px 0", bgcolor: COLORS.white.grayWhite }}>
        <Container
          maxWidth={"lg"}
          component={Stack}
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {videoPic.map((item) => (
            <Paper
              elevation={2}
              sx={{
                position: "relative",
                bgcolor: "red",
                width: "255px",
                height: "144px",
              }}
            >
              <Box
                component={"img"}
                key={item.id}
                src={item.img}
                sx={{ width: "255px", height: "144px" }}
                alt="video_pic_1"
              />
              <PlayCircleFilled
                sx={{
                  color: COLORS.secondary.main,
                  fontSize: "40px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            </Paper>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default VideoSection;
