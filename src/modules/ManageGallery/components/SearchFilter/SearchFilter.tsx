import { CustomMenu, GenderFilter } from "@muc/components";
import { COLORS } from "@muc/constants";

import { Slider, Stack, Typography } from "@mui/material";
import React from "react";

function valuetext(value: number) {
  return `${value}`;
}

const SearchFilter = () => {
  const [value, setValue] = React.useState<number[]>([18, 29]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
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
        <GenderFilter />
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
