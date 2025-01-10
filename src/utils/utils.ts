import { COLORS } from "@muc/constants";

export const searchBar = {
  bgcolor: `${COLORS.gray.darkGray}`,
  borderRadius: "5px",
  Border: "none",
  width: "100%",
  color: COLORS.dark.main,
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& input::placeholder": {
      color: COLORS.dark.main,
      opacity: 0.4,
      fontSize: "12px",
    },
    "& input": {
      color: COLORS.dark.lightDark,
    },
  },
};

export const navLink = {
  color: `${COLORS.dark.main}`,
  textDecoration: "none",
  pb: 1,
};

// here to make the style
