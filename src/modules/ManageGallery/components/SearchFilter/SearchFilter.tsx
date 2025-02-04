import { CustomMenu, CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Female, Male, Transgender } from "@mui/icons-material";

import { ButtonGroup, Slider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function valuetext(value: number) {
  return `${value}`;
}

const SearchFilter = () => {
  const [active, setActive] = useState<number | null>(null);
  const [value, setValue] = React.useState<number[]>([18, 29]);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleActive = (i: number): void => {
    setActive(i);
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          color: COLORS.dark.grayblack,
          fontWeight: 500,
          padding: "5px",
          textAlign: "center",
          marginTop: "6px",
        }}
      >
        Gallery Search
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          padding: "20px 10px 18px 19px",
          justifyContent: "space-between",
          bgcolor: COLORS.white.main,
        }}
      >
        <Stack direction={"row"} sx={{gap:'10px',alignItems:'center'}}>
          <Typography>Show Me :</Typography>
          <ButtonGroup>
            {GenderButton.map((item, i) => (
              <CustomButton
                onClick={() => handleActive(i)}
                title={item.title}
                variant="contained"
                endIcon={item.icon}
                background={
                  i === active
                    ? "#5cb85c"
                    : " linear-gradient(to bottom, #fff, #e6e6e6)"
                }
                width="149px"
                height="34px"
              />
            ))}
          </ButtonGroup>
        </Stack>
        <CustomMenu />
        <Stack direction={"row"} sx={{ alignItems: "center", gap: "20px" }}>
          <Typography>Age : </Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={18}
            max={100}
            getAriaValueText={valuetext}
            sx={{ width: "253px" }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default SearchFilter;

const GenderButton = [
  {
    title: "any Gender",
    icon: <Transgender />,
  },
  {
    title: "Male",
    icon: <Male />,
  },
  {
    title: "Female",
    icon: <Female />,
  },
];
