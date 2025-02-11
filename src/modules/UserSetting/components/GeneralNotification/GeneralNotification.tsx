import { CustomSwithButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Divider, Stack, Typography } from "@mui/material";

const GeneralNotification = () => {
  return (
    <>
      <Stack>
        <Typography
          variant="h6"
          sx={{ fontSize: "22px", color: COLORS.gray.darkGray, mb: "21px" }}
        >
          Notifications / Preferences
        </Typography>
        <Divider />
        <Stack padding={"45px"}>
          <Stack gap={"10px"} color={COLORS.gray.darkGray}>
            <Typography variant="h3" sx={{ fontWeight: 500, fontSize: "24px" }}>
              General Preferences
            </Typography>
            <Typography>
              Change general options here, such as whether your profile is live
              or hidden.
            </Typography>
            <Stack
              sx={{ justifyContent: "space-between" }}
              mt={2}
              direction={"row"}
            >
              <Typography>Profile status</Typography>
              <CustomSwithButton />
            </Stack>
            <Divider />
            <Stack sx={{ justifyContent: "space-between" }} direction={"row"}>
              <Typography>Show Picture Guidelines</Typography>
              <CustomSwithButton />
            </Stack>
            <Divider />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default GeneralNotification;
