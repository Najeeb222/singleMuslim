import { COLORS } from "@muc/constants";
import { Box, Rating, Stack, Typography } from "@mui/material";

interface userInfoType {
  status: string;
  extraImgs: React.ReactNode;
  name: string;
  age: string;
  flage: string;
}
const CustomUserInfoCard = (props: userInfoType) => {
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
        {props.status}
      </Typography>
      <Stack
        direction={"column"}
        sx={{ position: "absolute", bottom: "0", width: "100%" }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignSelf: "end",
            m: "5px",
            width: "51px",
            height: "51px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          {/* <Box
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
          </Typography> */}
    <Box position={'absolute'} bottom={0}>
    {props.extraImgs}
    </Box>
        </Box>

        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            justifyContent: "space-between",
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
              {props.name}
            </Typography>
          </Box>
          <Box>
            <Stack
              direction={"row"}
              gap={"10px"}
              justifySelf={"end"}
              alignItems={"center"}
            >
              <Typography>{props.age}</Typography>
              <Box
                component={"img"}
                src="/assets/images/pak-flag.png"
                sx={{ width: "20px", height: "15px" }}
              />
            </Stack>
            <Rating
              sx={{
                color: COLORS.white.main,
                fontSize: "14px",
                "& .MuiRating-icon": {
                  color: COLORS.white.main,
                },
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CustomUserInfoCard;
