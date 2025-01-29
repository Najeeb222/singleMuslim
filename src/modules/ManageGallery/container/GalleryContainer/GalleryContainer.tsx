import { AppLayout } from "@muc/layout";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import { RecomendedForYou } from "../../components/RecomendedForYou/RecomendedForYou";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import { Box, Container } from "@mui/material";
import { COLORS } from "@muc/constants";
import MemberShipForRecommended from "../../components/MemberShipForRecommended/MemberShipForRecommended";

const GalleryContainer = () => {
  return (
    <AppLayout>
      <Box sx={{ bgcolor: COLORS.gray.lightDarkGray, width: "100%" }}>
        <Container
          maxWidth={"lg"}
          disableGutters
          sx={{ bgcolor: COLORS.gray.main }}
        >
          <SearchFilter />
          <MemberShipForRecommended />
          {/* <RecomendedForYou /> */}
          <GalleryCard />
          <Box sx={{ height: 400, width: "500px" }}></Box>
        </Container>
      </Box>
    </AppLayout>
  );
};

export default GalleryContainer;
