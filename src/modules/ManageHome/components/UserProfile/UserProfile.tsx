import { COLORS } from "@muc/constants";
import {
  AccountBox,
  NotificationAdd,
  PhotoAlbum,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Rating,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Box
        component={Paper}
        width={"380px"}
        sx={{ padding: "21px 0", height: "385px", mb: "10px" }}
      >
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            px: "20px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              minWidth: 0,
              minHeight: 0,
              paddingX: "9px",
              height: "25px",
              borderRadius: "32px",
              fontSize: "13px",
              color: COLORS.red.main,
              borderColor: COLORS.red.main,
              ":hover": {
                bgcolor: COLORS.red.main,
                color: COLORS.white.main,
              },
            }}
          >
            Logout
          </Button>
          <Box display="flex" alignItems="center" gap={2}>
            <Switch />
          </Box>
        </Stack>

        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <Box
            component={"img"}
            src="/assets/images/UserImg.jpg"
            alt="UserProfile"
            sx={{ width: "140px", height: "140px", borderRadius: "50%" }}
          />
          <Typography
            sx={{ color: COLORS.secondary.main, pt: "23px", fontSize: "24px" }}
          >
            UserName.........23
          </Typography>
          <Rating
            size="medium"
            sx={{ color: COLORS.secondary.main, pb: "15px", pt: "8px" }}
          />
        </Stack>

        <Stack direction={"row"} justifyContent={"space-around"}>
          {UserData.map((item) => (
            <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
              <IconButton onClick={() => Navigate(item.path)}>
                {item.icon}
              </IconButton>
              <Typography fontSize={"10px"}>{item.title}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default UserProfile;

const UserData = [
  {
    icon: (
      <AccountBox sx={{ color: COLORS.secondary.main, fontSize: "32px" }} />
    ),
    title: "Edit profile",
    path: "/user_setting/edit-profile",
  },
  {
    icon: (
      <PhotoAlbum sx={{ color: COLORS.secondary.main, fontSize: "32px" }} />
    ),
    title: "My Photos",
    path: "/user_setting/edit-profile",
  },
  {
    icon: <Settings sx={{ color: COLORS.secondary.main, fontSize: "32px" }} />,
    title: "Preferences",
    path: "/user_setting/preferences",
  },
  {
    icon: (
      <NotificationAdd
        sx={{ color: COLORS.secondary.main, fontSize: "32px" }}
      />
    ),
    title: "Notifications",
    path: "/user_setting/notifications",
  },
];
