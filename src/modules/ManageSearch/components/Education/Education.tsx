import { CustomButton, CustomSelect } from "@muc/components";
import {
  COLORS,
  CurrentIncome,
  EducationLevel,
  Languages,
  Professions,
} from "@muc/constants";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const Education = () => {
  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <CustomSelect
          name="First Language(s)"
          label="First Language(s)"
          labelOutside={true}
          options={Languages.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <CustomSelect
          name="Second Language(s)"
          label="Second Language(s)"
          labelOutside={true}
          options={Languages.map((item) => ({
            label: item,
            value: item,
          }))}
        />

        <CustomSelect
          name="Education Level"
          label="Education Level"
          labelOutside={true}
          options={EducationLevel.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <CustomSelect
          name="Current Income"
          label="Current Income"
          labelOutside={true}
          options={CurrentIncome.map((item) => ({
            label: item,
            value: item,
          }))}
        />

        <CustomSelect
          name="Profession"
          label="Profession"
          labelOutside={true}
          options={Professions.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <Box sx={{ alignSelf: "end" }}>
          <CustomButton
            title="Search Now"
            variant="contained"
            background="#5cb85c"
            color={COLORS.white.main}
          />
        </Box>
      </FormProvider>
    </>
  );
};

export default Education;
