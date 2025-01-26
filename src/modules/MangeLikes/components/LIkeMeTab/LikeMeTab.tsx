import { COLORS } from "@muc/constants";
import { MembershipStyel } from "@muc/utils";
import { Favorite, JoinLeft, Message, Visibility } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

const LikeMeTab = () => {
  return (
    <Stack
      component={Paper}
      sx={{
        // justifyContent: "center",
        // alignItems: "center",
        bgcolor: "white",
        height: "700px",
        padding: "20px",
        mb: "20px",
      }}
    >
      <Typography
        variant="h6"
        component={"h3"}
        sx={{ color: COLORS.gray.lightGray, padding: "8px 16px" }}
      >
        Members that have liked my profile
      </Typography>
      <Box
        component={Paper}
        elevation={3}
        width={"85%"}
        mx={"auto"}
        my={"93px"}
      >
        <Box p={2}>
          <Typography
            variant="h6"
            sx={{
              color: COLORS.primary.main,
              fontSize: "23px",
              pb: "32px",
              textAlign: "center",
            }}
          >
            Gold Membership Benefits
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {membershipData.map((item) => (
              <Stack
                sx={{
                  width: "228px",
                  height: "170px",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingX: "18px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: COLORS.secondary.lightblue,
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "10px",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography>{item.title}</Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {item.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
        <Button
          sx={{
            fontSize: "22px",
            color: COLORS.primary.main,
            mx: "auto",
            width: "100%",
            padding: "10px 15px",
          }}
        >
          UPGRADE
        </Button>
      </Box>
    </Stack>
  );
};

export default LikeMeTab;

const membershipData = [
  {
    title: "INSTANT MESSAGING",
    description: "Instantly Send,read and replay to messages",
    icon: <Message sx={MembershipStyel} />,
  },
  {
    title: "LIKES",
    description: "View who liked you",
    icon: <Favorite sx={MembershipStyel} />,
  },
  {
    title: "MATCH",
    description: "View your match",
    icon: <JoinLeft sx={MembershipStyel} />,
  },
  {
    title: "VISITORS",
    description: "See Who's view your profile",
    icon: <Visibility sx={MembershipStyel} />,
  },
];
