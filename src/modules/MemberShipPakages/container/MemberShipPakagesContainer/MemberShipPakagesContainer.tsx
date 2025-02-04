import { AppLayout } from "@muc/layout";
import PriceCard from "../../components/PriceCard/PriceCard";
import { Container, Typography } from "@mui/material";
import { COLORS } from "@muc/constants";
import MembershipDetail from "../../components/MembershipDetail/MembershipDetail";

const MemberShipPakagesContainer = () => {
  return (
    <AppLayout>
      <Container
        disableGutters
        maxWidth={"lg"}
        sx={{ bgcolor: COLORS.gray.lightDarkGray }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            fontSize: "25px",
            color: COLORS.gray.darkGray,
            textAlign: "center",
            paddingY: "16px",
          }}
        >
          Membership Packages
        </Typography>
        <MembershipDetail />
        <PriceCard />
      </Container>
    </AppLayout>
  );
};

export default MemberShipPakagesContainer;
