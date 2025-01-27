import { COLORS } from "@muc/constants";
import { Box, Rating, Stack, Typography } from "@mui/material";

const UserInfoCard = () => {
  return (
    <Box sx={{ height: "316px", width: "316px", position: "relative" }}>
      <Box
        component={"img"}
        src="/assets/images/girl-img.jpg"
        alt="Profile Pic"
        sx={{ width: "100%", height: "100%" }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "2%",
          right: "2%",
          bgcolor: COLORS.green.darkGreen,
          color: COLORS.white.main,
          padding: "2px 10px ",
          borderRadius: "5px",
        }}
      >
        Online
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          position: "absolute",
          justifyContent: "space-between",
          bottom: "0",
          color: COLORS.white.main,
          padding: "10px 15px",
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        <Box>
          <Typography fontSize={"20px"}>Name</Typography>
          <Typography variant="body2" component={"h2"}>
            Lorem ipsum
          </Typography>
        </Box>
        <Box>
          <Stack
            direction={"row"}
            gap={"10px"}
            justifySelf={"end"}
            alignItems={"center"}
          >
            <Typography>age</Typography>
            <Box
              component={"img"}
              src="/assets/images/pak-flag.png"
              sx={{ width: "20px", height: "15px" }}
            />
          </Stack>
          <Rating sx={{ color: COLORS.white.main, fontSize: "14px" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default UserInfoCard;
