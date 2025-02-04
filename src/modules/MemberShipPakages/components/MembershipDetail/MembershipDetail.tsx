import { COLORS } from "@muc/constants";
import { Favorite, JoinLeft, Message, Visibility } from "@mui/icons-material";
import { Icon, Paper, Stack, Typography } from "@mui/material";

const MembershipDetail = () => {
  return (
    <Stack
      component={Paper}
      elevation={1}
      sx={{ paddingX: "39px", paddingY: "20px", gap: "12px" }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "30px", color: COLORS.secondary.main, fontWeight: 500 }}
      >
        Upgrade to Gold membership
      </Typography>
      <Typography sx={{ fontSize: "17px", color: COLORS.gray.lightGray }}>
        Select one of the packages below and pay using the payment method of
        your choice.
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        {membershipBenefit.map((item) => (
          <Stack
            direction={"row"}
            sx={{
              maxWidth: "250px",
              textAlign: "center",
              color: COLORS.secondary.main,
              gap: "10px",
            }}
          >
            <Icon>{item.icon}</Icon>
            <Typography sx={{ fontSize: "18px" }}>{item.title}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default MembershipDetail;

const membershipBenefit = [
  {
    icon: <Message />,
    title: "Instantly Send, read and reply to messages",
  },
  {
    icon: <Favorite />,
    title: "View who liked you",
  },
  {
    icon: <JoinLeft />,
    title: "View your matches",
  },
  {
    icon: <Visibility />,
    title: "Instantly Send, read and reply to messages",
  },
];
