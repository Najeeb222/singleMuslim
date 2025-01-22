import { AppLayout } from "@muc/layout";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import { RecomendedForYou } from "../../components/RecomendedForYou/RecomendedForYou";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import { Container } from "@mui/material";
import { COLORS } from "@muc/constants";

const GalleryContainer = () => {
  return (
    <AppLayout>
      <Container
        maxWidth={"lg"}
        disableGutters
        sx={{ bgcolor: COLORS.gray.main }}
      >
        <SearchFilter />
        <RecomendedForYou />
        <GalleryCard />
      </Container>
    </AppLayout>
  );
};

export default GalleryContainer;
