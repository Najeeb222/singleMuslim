import { Footer } from "@muc/layout";
import { Box } from "@mui/material";
import { Children } from "react";
import LandingNavbar from "../LandingNavbar/LandingNavbar";

const LandingLayout = ({ children }: any) => {
  return (
    <>
      <LandingNavbar />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default LandingLayout;
