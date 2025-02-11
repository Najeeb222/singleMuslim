import {  Divider, Stack, Typography } from "@mui/material";
import DeviceCard from "../../components/DeviceShow/DeviceShow";
import { COLORS } from "@muc/constants";
import { CustomButton } from "@muc/components";

const DeviceContainer = () => {
  return (
    <Stack>
      <Typography
        variant="h6"
        sx={{
          fontSize: "22px",
          color: COLORS.gray.darkGray,
          mb: "21px",
          textAlign: "left",
        }}
      >
        Devices
      </Typography>
      <Divider/>
      <Stack alignItems={'center'} gap={2} paddingTop={'44px'}>
        {[1, 2, 3, 4].map((_item) => (
          <DeviceCard />
        ))}
      </Stack>
      <Stack gap={2} sx={{ width: "100%", alignItems: "center" ,mt:3}}>
        <CustomButton
          title="Logout form all devices"
          variant="contained"
          background={COLORS.red.main}
          color={COLORS.white.main}
        />
        <Typography variant="body2">
          (This will log you out from all singlemuslim applications)
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DeviceContainer;
