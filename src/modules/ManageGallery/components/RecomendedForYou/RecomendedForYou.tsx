import { COLORS } from "@muc/constants";
import { ArrowForwardIos, Favorite } from "@mui/icons-material";
import { Badge, Box, Paper, Stack, Typography } from "@mui/material";

export const RecomendedForYou = () => {
  return (
    <>
      <Stack
        direction={"row"}
        component={Paper}
        elevation={3}
        
        sx={{
          cursor:'pointer',
          justifyContent: "space-between",
          padding: "16px",
          width: "620px",
          marginTop: "16px ",
          mx: "auto",
          backgroundColor: COLORS.white.main,
          alignItems: "center",
          backgroundImage: `linear-gradient(330deg,rgba(194,70,160,.16),rgba(0,126,165,.07) 50%)`,
        }}
      >
        <Stack direction={"row"} sx={{ alignItems: "center", gap: "16px" }}>
          <Badge badgeContent={20} color="error">
            <Box
              component={"img"}
              src="/assets/images/girl-img.jpg"
              alt="User"
              sx={{ width: 45, height: 45, borderRadius: "50%" }}
            />
          </Badge>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontFamily: "cursive",
            }}
          >
            Recommended for you
            <Favorite sx={{ color: "red" }} />
          </Typography>
        </Stack>
        <ArrowForwardIos
          sx={{ fontSize: "30px", color: COLORS.secondary.main }}
        />
      </Stack>
    </>
  );
};
