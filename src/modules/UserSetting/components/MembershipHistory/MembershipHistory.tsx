import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Alert, Divider, Stack, Typography } from "@mui/material";

const MembershipHistory = () => {
  return (
    <Stack>
      <Typography
        variant="h6"
        fontSize={"24px"}
        color={COLORS.gray.darkGray}
        mb={"21px"}
      >
        Membership History
      </Typography>
      <Divider />

      <Stack alignItems={"center"} gap={"16px"} mt={"44px"}>
        <Stack
          sx={{
            width: "706px",
            padding: "16px",
            borderRadius: "5px",
            border: "1px solid #ecbc2c",
            bgcolor: "rgba(255, 183, 77, 0.5)",
            gap: "16px",
            minHeight: "50px",
          }}
        >
          <Typography fontSize={"23px"} color="#8A6D3B">
            Upgrade to Gold membership
          </Typography>
          <Divider />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="caption" color="#757474">
              select one of the packages and pay by using the payment method of
              your choice
            </Typography>
            <CustomButton
              title="Upgrade Now"
              variant="contained"
              background="#f0ad4e"
              color={COLORS.white.main}
            />
          </Stack>
        </Stack>
        <Alert severity="success" icon={false} sx={{ width: "706px" }}>
          There is not membership
        </Alert>
      </Stack>
    </Stack>
  );
};

export default MembershipHistory;
