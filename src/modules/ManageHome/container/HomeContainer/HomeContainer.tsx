import { AppLayout } from "@muc/layout";
import UserProfile from "../../components/UserProfile/UserProfile";
import MessagesBox from "../../components/MessagesBox/MessagesBox";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { CustomDetailCard } from "@muc/components";
import { COLORS, privacyData, settingData } from "@muc/constants";
import {
  PlayCircleFilledWhiteOutlined,
  QuestionAnswer,
  SmsOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

const HomeContainer = () => {
  const Navigate = useNavigate();
  return (
    <AppLayout>
      <Box sx={{ bgcolor: COLORS.gray.main }}>
        <Container
          maxWidth={"lg"}
          disableGutters
          sx={{ mx: "auto", paddingY: "18px" }}
        >
          <Grid container gap={"16px"} paddingX={{ sm: "16px", xs: "0" }}>
            <Grid item md={4} xs={12}>
              <UserProfile />
              <Stack
                direction={"row"}
                sx={{
                  flexWrap: "wrap",
                  gap: "16px",
                  padding: { md: "10px", xs: "0" },
                  mb: "23px",
                  justifyContent: "space-between",
                }}
              >
                {settingData.map((item) => (
                  <CustomDetailCard
                    title={item.title}
                    backgroundColor={item.backgroundColor}
                    textColor="white"
                    icon={item.icon}
                    iconStyles={item.iconStyles}
                    OnClick={() => {
                      if (item.path) Navigate(item.path);
                    }}
                  />
                ))}
              </Stack>
              <Box
                position={"relative"}
                sx={{ width: "100%", height: "175px", mb: "23px" }}
              >
                <Box
                  component={"img"}
                  src="/assets/images/video_pic_4.jpg"
                  alt="story"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontWeight: "400",
                    transform: "translate(-50%,-50%)",
                    color: COLORS.white.main,
                    zIndex: 99999,
                  }}
                >
                  Sonia & Abid
                </Typography>
              </Box>
              <Stack
                direction={"row"}
                sx={{
                  flexWrap: "wrap",
                  gap: "16px",
                  padding: { md: "16px", xs: "0" },
                  mb: "23px",
                  justifyContent: "space-between",
                }}
              >
                <CustomDetailCard
                  title="Help & Support"
                  icon={<QuestionAnswer />}
                  textColor="white"
                  backgroundColor={COLORS.purple.light}
                  iconStyles={{ fontSize: "60px", color: COLORS.purple.light }}
                />
                <CustomDetailCard
                  title="Contact Us"
                  icon={<SmsOutlined />}
                  textColor="white"
                  backgroundColor={COLORS.green.lightGreen}
                  OnClick={() => Navigate("/contact_us")}
                  iconStyles={{
                    fontSize: "60px",
                    color: COLORS.green.lightGreen,
                  }}
                />
              </Stack>
              <Box
                position={"relative"}
                sx={{ width: "100%", height: "268px", mb: "23px" }}
              >
                <Box
                  component={"img"}
                  src="/assets/images/service_Detail_pic.jpg"
                  alt="story"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
                <PlayCircleFilledWhiteOutlined
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: "64px",
                    color: COLORS.white.main,
                  }}
                />
              </Box>
              <Stack
                direction={"row"}
                sx={{
                  flexWrap: "wrap",
                  gap: "16px",
                  justifyContent: "space-between",
                }}
              >
                {privacyData.map((item) => (
                  <CustomDetailCard
                    title={item.title}
                    icon={item.icon}
                    iconStyles={item.iconStyles}
                    backgroundColor={item.backgroundColor}
                    textColor={item.textColor}
                    OnClick={() => {
                      if (item.path) Navigate(item.path);
                    }}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item md={7} xs={12}>
              <MessagesBox />
              <ProfileCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppLayout>
  );
};

export default HomeContainer;
