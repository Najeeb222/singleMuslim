import { Box, Stack } from "@mui/material";
import LogingWithEmail from "../../components/LogingWithEmail/LogingWithEmail";
import LoginwithNumber from "../../components/LoginwithNumber/LoginwithNumber";
import { CustomSlider } from "@muc/components";

const LogingContainer = () => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <CustomSlider />
        <Stack
          direction={"row"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LogingWithEmail />
          <LoginwithNumber />
        </Stack>
      </Box>
    </Box>
  );
};

export default LogingContainer;
