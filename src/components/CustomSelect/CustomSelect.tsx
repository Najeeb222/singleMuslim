import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { useFormContext, useController } from "react-hook-form";
import { COLORS } from "@muc/constants";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  name: string;
  options: Option[];
  dependsOn?: string;
  borderColor?: string;
  iconColor?: string;
  width?: string;
  labelOutside?: boolean;
  isSteric?: boolean;
  searchBarPlaceHolderName?: string;
  onChange?: (value: any | string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  options,
  dependsOn,
  width,
  iconColor = COLORS.blue.main,
  labelOutside = false,
  // searchBarPlaceHolderName,
  onChange,
  // isSteric,
}) => {
  const { control, watch } = useFormContext();
  const {
    field: { value, onChange: formOnChange },
  } = useController({ name, control });
  // const { pathname } = useLocation();

  const [disabled, setDisabled] = useState(!!dependsOn);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  // const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // console.log(searchQuery);

  const dependencyValue = dependsOn ? watch(dependsOn) : null;

  useEffect(() => {
    if (dependsOn && dependencyValue) {
      setDisabled(false);
    }
  }, [dependsOn, dependencyValue]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleSelectChange = (selectedValue: string) => {
    formOnChange(selectedValue);
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (onChange && selectedOption) {
      onChange(selectedOption.id || selectedValue);
    }
  };

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const query = event.target.value.toLowerCase();
  //   setSearchQuery(query);
  //   setFilteredOptions(
  //     options.filter((option) => option.label.toLowerCase().includes(query))
  //   );
  // };

  return (
    <Stack
      direction={"row"}
      width={width}
      sx={{
        opacity: disabled ? 0.5 : 1,
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {labelOutside && (
        <Typography
          variant="h6"
          sx={{
            pb: 1,
            display: "flex",
            gap: "10px",
            width: "185px",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          {label}:
        </Typography>
      )}

      {/* <Typography
        variant="h6"
        component={InputLabel}
        sx={{
          pb: 1,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {label}
      </Typography> */}

      <Select
        sx={{ height: "30px", flexGrow: "1" }}
        value={value || ""}
        onChange={(event) => handleSelectChange(event.target.value)}
        displayEmpty
        disabled={disabled}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        renderValue={(selected) => {
          if (!selected || (Array.isArray(selected) && selected.length === 0)) {
            return <em style={{ color: COLORS.dark.main }}>Select any</em>;
          }
          if (Array.isArray(selected)) {
            return selected.join(", ");
          }
          return selected;
        }}
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={{
          disableAutoFocusItem: true,
          PaperProps: {
            sx: {
              maxHeight: 300,
              borderRadius: "20px",
              overflowY: "auto",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                width: "0px",
                height: "0px",
              },
            },
          },
        }}
        IconComponent={(props) => (
          <Box
            component="svg"
            {...props}
            viewBox="0 0 24 24"
            width="24px"
            mt={-0.5}
          >
            <path
              d="M7 10l5 5 5-5"
              fill="none"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Box>
        )}
      >
        {filteredOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={value === option.value}
            sx={{
              py: "10px",
              width: "90%",
              mx: "auto",
              borderBottom: `1px solid ${COLORS?.gray.lightGray}`,
              "&:last-of-type": {
                border: "none",
              },
              "&:hover": {
                bgcolor: COLORS?.gray.main,
              },
              "&.Mui-selected": {
                bgcolor: COLORS?.secondary.main,
                color: COLORS.white.main,
                "&:hover": {
                  bgcolor: COLORS?.gray.main,
                  color: COLORS.dark.main,
                },
              },
              fontSize: "13px",
            }}
          >
            {option.label}
          </MenuItem>
        ))}

        {filteredOptions.length === 0 && (
          <MenuItem disabled>
            <Typography variant="body2" color="text.secondary">
              No options found
            </Typography>
          </MenuItem>
        )}
      </Select>
    </Stack>
  );
};

export default CustomSelect;
