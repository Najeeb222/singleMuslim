import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { COLORS } from "@muc/constants";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            bgcolor: COLORS.primary.main,
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            boxShadow: 3,
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
