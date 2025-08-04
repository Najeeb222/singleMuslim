import { COLORS, footerTypography } from "@muc/constants";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: COLORS.dark.main, color: COLORS.white.main }}>
        <Container maxWidth={"lg"}>
          <Grid container>
            {footerTypography.map((item, i) => (
              <Grid
                item
                md={4}
                sm={4}
                xs={6}
                key={i}
                sx={{
                  margin: "40px 0px 10px",

                  padding: { sm: "0 20px 0 60px", xs: "0 10px 0px 20px" },
                  whiteSpace: "nowrap",
                  color: COLORS.white.main,
                }}
              >
                <Typography variant="h4">{item.title}</Typography>
                <Divider
                  sx={{
                    my: "10px",
                    bgcolor:
                      i === 0 || i === 3
                        ? COLORS.primary.main
                        : COLORS.secondary.main,
                    height: "2px",
                  }}
                />
                <Box sx={{ color: COLORS.white.main }}>
                  <Typography variant="body2" sx={{ color: "red" }}>
                    <Link to={"/"} style={{ color: COLORS.white.main }}>
                      {" "}
                      {item.link_1}
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"} style={{ color: COLORS.white.main }}>
                      {item.link_2}{" "}
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"} style={{ color: COLORS.white.main }}>
                      {item.link_3}{" "}
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"} style={{ color: COLORS.white.main }}>
                      {item.link_4}{" "}
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"} style={{ color: COLORS.white.main }}>
                      {item.link_5}{" "}
                    </Link>
                  </Typography>
                  {/* <Typography variant="body2" color="error">
                    <Link to={"/"} style={{ color: COLORS.white.main }}>
                      {item.link_6}{" "}
                    </Link>
                  </Typography> */}
                </Box>
              </Grid>
            ))}
          </Grid>
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent={"space-between"}
            px={"15px"}
            mt={"20px"}
          >
            <Typography variant="body1" p={2}>
              Copyright © 2025 Single Muslim. All rights reserved. All third
              party logos are for illustration only and are copyright of their
              respective owners.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
