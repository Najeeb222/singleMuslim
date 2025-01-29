import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";
const ExtraImagesCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignSelf: "end",
        m: "5px",
        width: "51px",
        height: "51px",
        borderRadius: "50%",
        border: `2px solid ${COLORS.white.main}`,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
        component={"img"}
        src="/assets/images/girl-img.jpg"
      />
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: COLORS.white.main,
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.4)",
          fontSize: "18px",
        }}
      >
        +4
      </Typography>
    </Box>
  );
};

export default ExtraImagesCard;
