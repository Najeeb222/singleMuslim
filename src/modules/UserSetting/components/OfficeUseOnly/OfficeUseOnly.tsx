import { COLORS } from "@muc/constants";
import { Box, Divider, Stack, Typography } from "@mui/material";

const OfficeUseOnly = () => {
  return (
    <Stack>
      <Typography
        variant="h6"
        sx={{ fontSize: "22px", color: COLORS.gray.darkGray, mb: "21px" }}
      >
        Edit Personal Info - Office Use Only
      </Typography>
      <Divider />
      <Box py={"44px"} mx={"auto"}>
        {personalDetails.map((item, index) => (
          <>
            <Stack direction={"row"} gap={"30px"} padding={"10px"} key={index}>
              <Typography width={{ sm: "188px", xs: "80px" }}>
                <b> {Object.keys(item)[0]}</b>
              </Typography>
              <Typography width={{ md: "300px", sm: "200px", xs: "130px" }}>
                {Object.values(item)[0]}
              </Typography>
            </Stack>
            <Divider sx={{ width: "100%" }} />
          </>
        ))}
      </Box>
    </Stack>
  );
};

export default OfficeUseOnly;

const personalDetails = [
  { Name: "Najeeb Ullah" },
  { Address: "m●●●●" },
  { City: "Swat" },
  { County: "Peshawar" },
  { Country: "Pakistan" },
  { PostZipCode: "●●●●●" },
  { DateOfBirth: "September 2001 (age 23)" },
];
