import { CustomButton, CustomSelect, CustomTextField } from "@muc/components";
import {
  COLORS,
  Countries,
  dateOfBirth,
  monthsOfBirth,
  pakistanStates,
  yearsOfBirth,
} from "@muc/constants";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const UpdateProfile = () => {
  const methods = useForm();
  return (
    <>
      <Stack>
        <Typography
          variant="h6"
          sx={{ fontSize: "22px", color: COLORS.gray.darkGray, mb: "21px" }}
        >
          Update your Profile
        </Typography>
        <Divider />
        <Stack paddingY={"44px"}>
          <FormProvider {...methods}>
            <Stack gap={"20px"}>
              <CustomTextField
                label="First Name"
                type="text"
                name="firstname"
              />
              <CustomTextField label="last Name" type="text" name="lastname" />
              <CustomTextField label="Address" type="text" name="address" />
              <CustomTextField label="City" type="text" name="city" />
              <CustomSelect
                name="Country"
                label="Country"
                labelOutside={true}
                options={Countries.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <CustomSelect
                name="Area/State"
                label="Area/State"
                labelOutside={true}
                options={pakistanStates.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <CustomTextField
                label="*Post/Zip Code"
                type="text"
                name="*Post/Zip Code"
              />
              <Stack direction={"row"} gap={"16px"}>
                <Typography
                  sx={{ width: "151px" }}
                  variant="h6"
                  textAlign={"end"}
                >
                  Date of Birth
                </Typography>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  gap={"20px"}
                  justifyContent={"center"}
                >
                  <CustomSelect
                    name="date"
                    width="30%"
                    label="Date of birth"
                    options={dateOfBirth.map((item) => ({
                      label: String(item),
                      value: String(item),
                    }))}
                  />
                  <CustomSelect
                    name="month"
                    width="30%"
                    options={monthsOfBirth.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                  />
                  <CustomSelect
                    width="30%"
                    name="year"
                    options={yearsOfBirth.map((item) => ({
                      label: String(item),
                      value: String(item),
                    }))}
                  />
                </Stack>
              </Stack>
              <Box sx={{ alignSelf: "end" }}>
                <CustomButton
                  title="Update"
                  variant="contained"
                  background={COLORS.secondary.main}
                  color={COLORS.white.main}
                />
              </Box>
            </Stack>
          </FormProvider>
        </Stack>
      </Stack>
    </>
  );
};

export default UpdateProfile;
