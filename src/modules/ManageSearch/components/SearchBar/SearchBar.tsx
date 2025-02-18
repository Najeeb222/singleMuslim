import { CustomButton, CustomTextField } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Close } from "@mui/icons-material";
import { Icon, Stack, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const SearchBar = () => {
  const methods = useForm();
  return (
    <React.Fragment>
      <Stack
        bgcolor={COLORS.white.main}
        justifyContent={"space-between"}
        py={2}
        gap={'16px'}
        direction={{ sm: "row", xs: "column" }}
      >
        <Stack
          direction={"row"}
          sx={{
            backgroundColor: "#007399",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "5px 12px",
            clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
            fontWeight: "bold",
            fontSize: "14px",
            height: "25px",
            width: "153px",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <Typography>text alingen</Typography>
          <Icon>
            <Close />
          </Icon>
        </Stack>
        <FormProvider {...methods}>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"366px"}
            >
              <CustomTextField
                type="text"
                placeholder="search here"
                name="search"
                height="34px"
              />
              <CustomButton
                title="Save Search"
                variant="contained"
                height="34px"
                background={COLORS.secondary.main}
                color={COLORS.white.main}
              />
            </Stack>
            <Stack direction={"row"} mt={2}>
              <CustomButton
                width="80%"
                variant="contained"
                title="Refine search"
                background={COLORS.secondary.main}
                color={COLORS.white.main}
              />
              <CustomButton
                variant="contained"
                title="Reset search"
                width="80%"
                background={COLORS.secondary.main}
                color={COLORS.white.main}
              />
            </Stack>
          </Stack>
        </FormProvider>
      </Stack>
    </React.Fragment>
  );
};

export default SearchBar;
