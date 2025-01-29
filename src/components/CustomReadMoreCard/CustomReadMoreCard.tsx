import { COLORS } from "@muc/constants";
import { Button, Paper, Stack, Typography } from "@mui/material";
interface ReadCardType {
  title: string;
  description: string;
}

const CustomReadMoreCard = ({title,description}:ReadCardType) => {
  return (
    <>
      <Stack component={Paper} sx={{ padding: "20px 20px 10px" }}>
        <Typography
          variant="h2"
          sx={{ color: COLORS.primary.main, fontWeight: "500", pb: "10px" }}
        >
        {title}
        </Typography>
        <Typography color={COLORS.gray.darkGray} pb="20px">
       {description}
        </Typography>
        <Button
          sx={{
            alignSelf: "center",
            fontSize: "14px",
            color: COLORS.primary.main,
            width: "100%",
            padding: "10px",
          }}
        >
          Read More
        </Button>
      </Stack>
    </>
  );
};

export default CustomReadMoreCard;
