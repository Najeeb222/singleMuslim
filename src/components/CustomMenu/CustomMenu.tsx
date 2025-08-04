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
      sx={{ alignItems: "center", justifyContent: "center",gap:'16px' }}
    >
      <Typography sx={{width:'80px',textAlign:'end'}}>From :</Typography>
      <FormControl >
        <Select
          value={data}
          onChange={handleChange}
          sx={{
            color: COLORS.dark.main,
            background: "linear-gradient(to bottom, #fff, #e6e6e6)",
            height: "36px",
            
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
