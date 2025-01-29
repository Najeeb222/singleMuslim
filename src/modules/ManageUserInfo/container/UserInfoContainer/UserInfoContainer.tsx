import { CustomPersonalDetailCard, CustomReadMoreCard } from "@muc/components";
import { COLORS, sections, userData } from "@muc/constants";
import { Box, Container, Grid, Stack } from "@mui/material";
import { useParams } from "react-router";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";
import { AppLayout } from "@muc/layout";

const UserInfoContainer = () => {
  const { id } = useParams();

  const filteredUser = userData.filter((item) => item.id === Number(id));
  console.log(filteredUser, ".,,.,.,.,,,,,,,");

  return (
    <AppLayout>
      <Box sx={{ bgcolor: COLORS.gray.lightDarkGray }}>
        <Container
          maxWidth={"lg"}
          sx={{ bgcolor: COLORS.white.darkwhite, padding:2}}
        >
          <Grid container spacing={2} gap={2}>
            <Grid item md={3}>
              <UserInfoCard />
            </Grid>
            <Grid item md={8.5}>
              <Stack gap={2} mb={2}>
                {[1, 2].map((_item) => (
                  <CustomReadMoreCard
                    title="A Little Bit About Me"
                    description="Welllll its quite difficult to explain myself.i dont believe prasing myself with my own tongue..u should judge me by urself :) that what am discribing here is wether rite or wrong :D
"
                  />
                ))}
              </Stack>

              <Stack direction={"row"} flexWrap={"wrap"} gap={"15px"}>
                {sections.map((section, index) => (
                  <Box width={"49%"} key={index}>
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
