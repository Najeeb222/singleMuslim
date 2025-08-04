import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { COLORS } from "@muc/constants";
import {
  CloseRounded,
  Info,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

interface CustomTextFieldProps {
  name: string;
  label?: string;
  rules?: RegisterOptions;
  type: string;
  placeholder?: string;
  width?: string;
  height?: string;
  defaultValue?: string;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  showHelperText?: boolean;
  readOnly?: boolean;
  isSteric?: boolean;
  autoComplete?: string;
  multiline?: any;
  maxLength?: number;
  allowOnly?: "numeric" | "alphabetic" | "alphanumeric";
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  rules,
  type,
  placeholder,
  width,
  height,
  defaultValue,
  onBlur,
  showHelperText = true,
  onFocus,
  readOnly = false,
  autoComplete,
  multiline,
  maxLength,
  allowOnly,
  isSteric,
  ...props
}) => {
  const { control, formState } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (allowOnly === "numeric") {
      e.target.value = value.replace(/[^0-9]/g, ""); // Allow only digits
    } else if (allowOnly === "alphabetic") {
      e.target.value = value.replace(/[^a-zA-Z]/g, ""); // Allow only alphabets
    } else if (allowOnly === "alphanumeric") {
      e.target.value = value.replace(/[^a-zA-Z0-9]/g, ""); // Allow alphanumeric
    }

    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
  };

  return (
    <Stack
      direction={"row"}
      width={{ md: width, sm: width, xs: "100%" }}
      gap={"16px"}
    >
      {label && (
        <Typography
          component={InputLabel}
          variant="h6"
          sx={{
            width: { md: "185px", xs: "35%" },
            textAlign: "end",
            justifyContent: "end",
            pb: 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: COLORS.gray.darkGray,
            fontSize: { md: "16px", sm: "14px", xs: "12px" },
          }}
        >
          {label}
          {isSteric && (
            <Typography component={"span"} color={COLORS?.red.main}>
              {formState?.errors[name] && (
                <CloseRounded
                  sx={{
                    bgcolor: COLORS?.red.main,
                    color: "white",
                    width: 13,
                    height: 13,
                    borderRadius: "50%",
                    mr: 0.5,
                  }}
                />
              )}
              *
            </Typography>
          )}
        </Typography>
      )}
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <TextField
            sx={{
              minHeight: 34,
              "& .MuiOutlinedInput-root": {
              
              },
              "& .MuiOutlinedInput-input": {
                padding: "6px 12px",
                height: height ? height : "100%",
                width:'100%'
              },
              width: { md: "100%", xs: "100%", sm: "100%" },
            }}
            variant="outlined"
            {...field}
            placeholder={placeholder}
            {...props}
            defaultValue={defaultValue || ""}
            multiline={multiline}
            error={!!fieldState.error}
            helperText={
              showHelperText && fieldState.error?.message ? (
                <Typography
                  component="span"
                  variant="caption"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: COLORS.red.main,
                    marginLeft: -2,
                    textTransform: "none",
                  }}
                >
                  <InputAdornment position="start">
                    <Info
                      sx={{
                        color: COLORS.red.main,
                        rotate: "180deg",
                        width: 16,
                      }}
                    />
                  </InputAdornment>
                  {fieldState.error.message.toString()}
                </Typography>
              ) : (
                ""
              )
            }
            type={showPassword ? "text" : type}
            inputProps={{
              maxLength,
              onInput: handleInputChange,
            }}
            InputProps={{
              endAdornment: type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                      padding: "4px", // Reduce padding to keep icon inside
                      fontSize: "18px",
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOff
                        sx={{
                          color: COLORS.gray.lightGray,
                          fontSize: "20px",
                        }}
                      />
                    ) : (
                      <Visibility
                        sx={{
                          color: COLORS.gray.lightGray,
                          fontSize: "20px",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              readOnly: readOnly,
              autoComplete: autoComplete,
            }}
            onBlur={(event) => {
              field.onBlur();
              if (onBlur) onBlur(event);
            }}
            onFocus={(event) => {
              if (onFocus) onFocus(event);
            }}
          />
        )}
      />
    </Stack>
  );
};

export default CustomTextField;
