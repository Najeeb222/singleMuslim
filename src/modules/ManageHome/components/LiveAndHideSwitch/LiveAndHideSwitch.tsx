import { useState } from "react";
import Switch from "@mui/material/Switch";
import { COLORS } from "@muc/constants";

const LiveAndHiddenSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
    checked={checked}
    onChange={handleToggle}
    disableRipple
    sx={{
      width: 80,
      height: 25,
      padding: 0,
      
      "& .MuiSwitch-switchBase": {
        padding: '2px',
        "&.Mui-checked": {
          transform: "translateX(55px)",
          color: "white",
          "& + .MuiSwitch-track": {
            backgroundColor: "green",
            "&:before": {
              content: '"Live"',
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight:'30px',
              fontSize: "12px",
              color: "white",
            },
          },
        },
      },
      
      "& .MuiSwitch-thumb": {
        width: 20,
        height: 20,
      },
      
      "& .MuiSwitch-track": {
        backgroundColor: COLORS.red.main,
        borderRadius: 30,
        position: "relative",
        opacity: 1,
        "&:before": {
          content: '"Hidden"',
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          fontSize: "12px",
          paddingLeft: "30px",
          color: "white",
        },
      },
      
    //   "& .MuiSwitch-input": {
    //     width: "100%",
    //     height: "100%",
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     opacity: 0,
    //     zIndex: 1,
    //     cursor: "pointer",
    //   }
    }}
  />
  );
};

export default LiveAndHiddenSwitch;