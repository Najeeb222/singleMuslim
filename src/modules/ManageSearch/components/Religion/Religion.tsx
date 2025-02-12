import { CustomButton, CustomSelect } from "@muc/components";
import {
  COLORS,
  KeepsHalal,
  PerformsSalaah,
  PreferHijab,
  Religiousness,
  SecData,
} from "@muc/constants";
import { Box, ButtonGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Religion = () => {
  const [active, setActive] = useState<number | null>(0);
  const [activeTwo, setActiveTwo] = useState<number | null>(0);
  const Navigate = useNavigate();
  const handleActiveTwo = (i: number) => {
    setActiveTwo(i);
  };
  const handleActive = (i: number) => {
    setActive(i);
  };

  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <CustomSelect
          name="Sec"
          label="Sec"
          labelOutside={true}
          options={SecData.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <CustomSelect
          name="Religiousness"
          label="Religiousness"
          labelOutside={true}
          options={Religiousness.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <CustomSelect
          name="Prefer Hijab/Niqab"
          label="Prefer Hijab/Niqab"
          labelOutside={true}
          options={PreferHijab.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <Stack direction={"row"} gap={"16px"}>
          <Typography
            sx={{
              fontSize: "16px",
              width: 185,
              textAlign: "end",
              alignSelf: "center",
              whiteSpace: "nowrap",
            }}
          >
            Prefer Beard
          </Typography>
          <ButtonGroup
            sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}
          >
            {ButtonData.map((item, i) => (
              <CustomButton
                title={item}
                variant="contained"
                onClick={() => handleActiveTwo(i)}
                color={i === activeTwo ? COLORS.white.main : COLORS.dark.main}
                background={
                  i === activeTwo
                    ? "#5cb85c"
                    : " linear-gradient(to bottom, #fff, #e6e6e6)"
                }
              />
            ))}
          </ButtonGroup>
        </Stack>
        <Stack direction={"row"} gap={"16px"}>
          <Typography
            sx={{
              fontSize: "16px",
              width: 185,
              textAlign: "end",
              alignSelf: "center",
              whiteSpace: "nowrap",
            }}
          >
            Is a Revert
          </Typography>
          <ButtonGroup
            sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}
          >
            {ButtonData.slice(0, 3).map((item, i) => (
              <CustomButton
                title={item}
                variant="contained"
                onClick={() => handleActive(i)}
                color={i === active ? COLORS.white.main : COLORS.dark.main}
                background={
                  i === active
                    ? "#5cb85c"
                    : " linear-gradient(to bottom, #fff, #e6e6e6)"
                }
              />
            ))}
          </ButtonGroup>
        </Stack>
        <CustomSelect
          name="Keeps Halal"
          label="Keeps Halal"
          labelOutside={true}
          options={KeepsHalal.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <CustomSelect
          name="Performs Salaah"
          label="Performs Salaah"
          labelOutside={true}
          options={PerformsSalaah.map((item) => ({
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
            onClick={() => Navigate("/search/search_result ")}
          />
        </Box>
      </FormProvider>
    </>
  );
};

export default Religion;
const ButtonData = ["Any", "Yes", "No", "Prefer not to say"];
