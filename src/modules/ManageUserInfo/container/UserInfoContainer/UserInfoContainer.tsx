import { CustomPersonalDetailCard, CustomReadMoreCard } from "@muc/components";
import { COLORS, sections } from "@muc/constants";
import { Box, Container, Grid, Stack } from "@mui/material";

import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import { AppLayout } from "@muc/layout";
import UserProfileDetail from "../../components/UserProfileDetail/UserProfileDetail";


import ExtraImgDialog from "../../components/ExtraImgDialog/ExtraImgDialog";


const UserInfoContainer = () => {
  return (
    <AppLayout>
      <Box sx={{ bgcolor: COLORS.gray.lightDarkGray }}>
        <Container
          maxWidth={"lg"}
          sx={{ bgcolor: COLORS.white.darkwhite, padding: 2 }}
        >
          <Grid container spacing={2} gap={2}>
            <Grid item md={3} xs={12}>
              <Stack
                direction={{ md: "column", xs: "column", sm: "row" }}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { md: "0", xs: "20px" },
                }}
              >
                <UserInfoCard />

                <UserProfileDetail />
              </Stack>
            </Grid>
            <Grid item md={8.5} xs={12}>
              <ExtraImgDialog />

              <Stack gap={2} mb={2}>
                {[1, 2].map((_item) => (
                  <CustomReadMoreCard
                    title="A Little Bit About Me"
                    description="Welllll its quite difficult to explain myself.i dont believe prasing myself with my own tongue..u should judge me by urself :) that what am discribing here is wether rite or wrong "
                  />
                ))}
              </Stack>

              <Stack direction={"row"} flexWrap={"wrap"} gap={"15px"}>
                {sections.map((section, index) => (
                  <Box width={{ md: "49%", sm: "47%", xs: "100%" }} key={index}>
                    <CustomPersonalDetailCard
                      title={section.title}
                      data={section.data}
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppLayout>
  );
};

export default UserInfoContainer;
