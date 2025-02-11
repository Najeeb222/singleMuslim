import { COLORS, countriesWithFlags } from "@muc/constants";
import { Box, Divider, Stack, Typography } from "@mui/material";

const AskMeCommunication = () => {
  return (
    <Box>
      {countriesWithFlags.map((country, index) => (
        <>
          <Stack
          key={index}
            direction={"row"}
            gap={2}
            padding={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Box
                component={"img"}
                src={country.flag}
                sx={{ width: "20px", height: "15px" }}
              />
              <Typography>{country.name}</Typography>
            </Stack>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography fontSize={"17px"} color={COLORS.green.darkGreen}>
                Allow
              </Typography>
              <Typography fontSize={"17px"} color={COLORS.red.main}>Block</Typography>
            </Stack>
          </Stack>
          <Divider />
        </>
      ))}
    </Box>
  );
};

export default AskMeCommunication;
