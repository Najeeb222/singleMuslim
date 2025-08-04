import { Telegram } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";

const SendingChatTextField = () => {
  const [value, setValue] = useState("");
  const OnChangeValue = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };
  const submitHandle = () => {
    console.log(value);
    setValue("");
  };

  return (
    <Box
      sx={{
        border: "1px solid #d3d3d3",
      
        height: "80px",
        borderRadius:'8px',
        px: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      
      }}
    >
      <TextField
        required
        value={value}
        onChange={OnChangeValue}
        sx={{
          width: "87%",
        }}
      />
      <Button
        onClick={submitHandle}
        startIcon={<Telegram />}
        sx={{
          minWidth: "13%",
          paddingX: "10px",
          height: "59px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default SendingChatTextField;
