import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const CustomSwithButton = () => {
  const [isYes, setIsYes] = useState(true);

  return (
    <>
      <ButtonGroup>
        <Button
          variant={isYes ? "contained" : "outlined"}
          sx={{
            width: "52px",
            height: "40px",
            bgcolor: isYes
              ? "#5cb85c"
              : "linear-gradient(to bottom,#fff,#e6e6e6)",
          }}
          onClick={() => setIsYes(true)}
        >
          Yes
        </Button>
        <Button
          variant={!isYes ? "contained" : "outlined"}
          sx={{
            width: "52px",
            height: "40px",
            background: !isYes
              ? "#d43f3a"
              : "linear-gradient(to bottom,#fff,#e6e6e6)",
          }}
          onClick={() => setIsYes(false)}
        >
          No
        </Button>
      </ButtonGroup>
    </>
  );
};

export default CustomSwithButton;
