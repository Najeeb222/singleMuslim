import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface CustomDetailCardProps {
  icon: ReactNode;
  iconStyles: React.CSSProperties;
  backgroundColor: string;
  textColor: string;
  title: string;
  OnClick?: () => void;
}
function isReactElement(value: React.ReactNode): value is React.ReactElement {
  return React.isValidElement(value);
}

const CustomDetailCard: React.FC<CustomDetailCardProps> = (props) => {
  const { icon, iconStyles, backgroundColor, textColor, title, OnClick } =
    props || {};
  return (
    <Stack
      component={Paper}
      onClick={OnClick}
      sx={{
        cursor: "pointer",
        width: "175px",
        borderRadius: "16px",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ padding: "16px", maxHeight: "88px" }}>
        {isReactElement(icon) && React.cloneElement(icon, { sx: iconStyles })}
      </Box>
      <Typography
        variant="body1"
        sx={{
          bgcolor: backgroundColor,
          padding: " 14px 16px",
          borderRadius: "0 0 4px 4px",
          color: textColor,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default CustomDetailCard;
