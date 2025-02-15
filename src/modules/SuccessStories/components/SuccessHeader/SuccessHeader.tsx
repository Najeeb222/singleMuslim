import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Stack, Typography } from "@mui/material";

const SuccessHeader = () => {
  return (
    <Stack direction={'row'} sx={{padding:'13px 25px', justifyContent:'space-between',bgcolor:COLORS.white.main}}>
      <Typography sx={{fontSize:'26px',color:COLORS.gray.darkGray}}>Real Success Stories</Typography>
      <CustomButton
        variant="contained"
        background={COLORS.green.main}
        color="white"
        title="Register"
        width="114px"
      />
    </Stack>
  );
};

export default SuccessHeader;
