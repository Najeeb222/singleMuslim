import { COLORS } from "@muc/constants";
import { Box } from "@mui/material";

const LandingScreenBanner = () => {
  return (
    <>
      <Box sx={{ bgcolor: COLORS.primary.main }}>
        <img
          src="/assets/images/middle_banner.png"
          width={"100%"}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          alt=""
        />
      </Box>
    </>
  );
};

export default LandingScreenBanner;
