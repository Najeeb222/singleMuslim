import { CustomButton, CustomTextField } from "@muc/components";
import { COLORS } from "@muc/constants";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,

  Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router";

const LogingWithEmail = () => {
  const methods = useForm();
  return (
    <Stack
      sx={{
        bgcolor: "#1a7ea638",
        width: "585px",
        gap: "50px",
        alignItems: "center",
        paddingY: "36px",
        boxShadow:
          "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)",
        minHeight: "604px",
      }}
    >
      <Typography variant="h3" color={COLORS.white.main}>
        Email or Username
      </Typography>
      <Stack direction={"column"} sx={{ gap: "20px" }}>
        <FormProvider {...methods}>
          <CustomTextField type="email" placeholder="Username/Email" name="email" height="40px" />
          <CustomTextField type="password" placeholder="password" name="password" height="40px" />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
            sx={{ color: "white" }}
          />
          <Box component={'img'} src="/assets/images/captcha.png" sx={{ width: '250px', alignSelf: 'center' }} />
          <CustomButton
            variant="contained"
            title="LOGIN"
            background={COLORS.secondary.main}
            color="white"
            width="350px"
            height="56px"
          />
          <Link to={"/"} style={{ color: COLORS.white.main }}>Forgotten Password</Link>
        </FormProvider>
      </Stack>
    </Stack>
  );
};

export default LogingWithEmail;
