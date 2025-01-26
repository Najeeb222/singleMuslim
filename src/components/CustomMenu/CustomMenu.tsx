import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { COLORS, menuItemData } from "@muc/constants";
import { Stack, Typography } from "@mui/material";

export default function BasicSelect() {
  const [data, setData] = React.useState(menuItemData[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value);
  };

  return (
    <Stack
      direction={"row"}
      sx={{ alignItems: "center", justifyContent: "center", gap: "10px" }}
    >
      <Typography sx={{ textWrap: "nowrap" }}>From :</Typography>
      <FormControl fullWidth>
        <Select
          value={data}
          onChange={handleChange}
          sx={{
            color: COLORS.dark.main,
            bgcolor: COLORS.white.grayWhite,
            height: "36px",
            width: "118px",
            backgroundImage: `linear-gradient(top to bottom,rgb(241, 234, 240),rgba(107, 105, 105, 0.07) 50%)`,
          }}
        >
          {menuItemData.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
