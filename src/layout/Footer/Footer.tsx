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
      <Box sx={{ bgcolor: COLORS.white.main, color: COLORS.dark.lightblack }}>
        <Container maxWidth={"lg"}>
          <Grid container>
            {footerTypography.map((item, i) => (
              <Grid
                item
                md={3}
                sm={3}
                xs={6}
                key={i}
                sx={{
                  margin: "40px 0px 10px",
                  padding: "0 20px 0 60px",
                  whiteSpace: "nowrap",
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
                <Box>
                  <Typography variant="body2">
                    <Link to={"/"}> {item.link_1}</Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"}>{item.link_2} </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"}>{item.link_3} </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"}>{item.link_4} </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"}>{item.link_5} </Link>
                  </Typography>
                  <Typography variant="body2">
                    <Link to={"/"}>{item.link_6} </Link>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent={"space-between"}
            px={"15px"}
          >
            <Typography variant="body1">
              Copyright © 2025 Single Muslim. All rights reserved. All third
              party logos are for illustration only and are copyright of their
              respective owners.
            </Typography>
            <Stack
              gap={"10px"}
              direction={{ md: "column", xs: "row" }}
              justifyContent={"center"}
              mt={{ xs: 2, md: 0 }}
            >
              <Box
                component={"img"}
                src="/assets/images/app_store.png"
                sx={{ width: "115px" }}
              />
              <Box
                component={"img"}
                src="/assets/images/android_logo.png"
                sx={{ width: "115px" }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
