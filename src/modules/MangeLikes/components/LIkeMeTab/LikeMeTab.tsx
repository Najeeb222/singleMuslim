import { COLORS } from "@muc/constants";
import { MembershipStyel } from "@muc/utils";
import { Favorite, JoinLeft, Message, Visibility } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const LikeMeTab = () => {
  const Navigate=useNavigate()
  return (
    <Stack
      sx={{
        bgcolor: "white",
        height: { md: "700px", xs: "100%" },
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
        <Stack p={2} >
          <Typography
            variant="h6"
            sx={{
              color: COLORS.primary.main,
              fontSize: { md: "23px", sm: "20px", xs: "16px" },
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
              textAlign:'center'
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
          <Button
          onClick={()=>Navigate('/membership_pakages')}
          sx={{
            fontSize: "22px",
            color: COLORS.primary.main,
            width: "100%",
            textAlign: "center",
            padding: "10px 15px",
          
          }}
        >
          UPGRADE
        </Button>
        </Stack>
       
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
