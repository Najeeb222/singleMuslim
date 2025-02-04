import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

const PriceCard = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
          paddingTop: "65px",
          paddingX: "20px",
        }}
      >
        {cards.map((card, i) => (
          <Card
            sx={{
              maxWidth: "360px",
              maxHeight: "309px",
              position: "relative",
              overflow: "visible",
              ":hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            {i === 2 && (
              <Box
                sx={{
                  position: "absolute",
                  textAlign: "center",
                  top: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#0077A2",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  width: "211px",
                  clipPath:
                    "polygon(100% 0%, 100% 75%, 50% 100%, 0% 75%, 0% 0%)",
                  minWidth: "150px",
                }}
              >
                <Typography>Most Popular</Typography>
              </Box>
            )}
            <CardActionArea>
              <CardContent sx={{ height: "100%", textAlign: "center" }}>
                <Typography fontSize={"24px"} padding={"10px 16px"}>
                  {card.Duration}
                </Typography>
                <Box
                  sx={{
                    color: COLORS.secondary.main,
                    paddingY: "15px",
                    bgcolor: COLORS.gray.lightDarkGray,
                  }}
                >
                  <Typography
                    sx={{
                      color: COLORS.secondary.main,
                      fontSize: "34px",
                    }}
                  >
                    <span style={{ fontSize: "15px" }}>(PKR) </span> ₨571.43 Per
                    Day
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  padding={"8px 60px"}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <Box padding={"10px 15px"}>
                <CustomButton
                  title="Select"
                  variant="contained"
                  background={"#5cb85c"}
                  color={COLORS.white.main}
                  width="100%"
                />
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
      <Typography
        sx={{ textAlign: "center", paddingY: "16px", color: "#C5573B" }}
      >
        <b>Please Note:</b> Auto renewal discounts are only available for
        payments made via credit/debit cards, Paypal, Stripe and In-App
        Purchases.
      </Typography>
    </Box>
  );
};

export default PriceCard;

const cards = [
  {
    id: 1,
    Duration: " 1 week",
    description: " 1 week membership for (PKR) ₨4,000.00 ",
  },
  {
    id: 2,
    Duration: " 1 month",
    description: " 1 week membership for (PKR) ₨10,000.00 ",
  },
  {
    id: 3,
    Duration: "3 months",
    description: " 1 week membership for (PKR) ₨20,000.00 ",
  },
  {
    id: 3,
    Duration: "12 months",
    description: " 1 week membership for (PKR) ₨40,000.00 ",
  },
];
