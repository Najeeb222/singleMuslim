import { COLORS } from "@muc/constants";
import { Favorite, JoinLeft, Message, Visibility } from "@mui/icons-material";
import { Icon, Paper, Stack, Typography } from "@mui/material";

const MembershipDetail = () => {
  return (
    <Stack
      component={Paper}
      elevation={1}
      sx={{
        paddingX: { sm: "39px", xs: "20px" },
        paddingY: "20px",
        gap: "12px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "30px", color: COLORS.secondary.main, fontWeight: 500 }}
      >
        Upgrade to Gold Membership
      </Typography>
      <Typography sx={{ fontSize: "17px", color: COLORS.gray.lightGray }}>
        Select one of the packages below and pay using the payment method of
        your choice.
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          flexWrap:'wrap',
          gap: { md: "60px", sm: "30px", xs: "20px" },
        }}
      >
        {membershipBenefit.map((item, i) => (
          <Stack
            key={i}
            direction={"row"}
            sx={{
              width: { sm: "250px", xs: "auto" },
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
