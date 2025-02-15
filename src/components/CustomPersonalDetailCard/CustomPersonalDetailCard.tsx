import { COLORS } from "@muc/constants";
import { Box, Paper, Stack, Typography } from "@mui/material";

interface CustomPersonalDetailCardProps {
  title?: string;
  data: { [key: string]: React.ReactNode };
}

const CustomPersonalDetailCard = ({
  title,
  data,
}: CustomPersonalDetailCardProps) => {
  return (
    <>
      <Stack
        component={Paper}
        sx={{ padding: "20px", width: "100%", height: "100%" }}
      >
        <Box sx={{ paddingX: { sm: "16px", xs: 0 } }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "500", color: COLORS.primary.main, pb: "10px" }}
          >
            {title}
          </Typography>
          {Object.entries(data).map(([key, value]) => (
            <Stack direction={"row"} gap={"30px"} pb={"10px"}>
              <Typography color={COLORS.primary.main} width={"50%"}>
                {key}
              </Typography>
              <Typography color={COLORS.dark.main}>{value}</Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </>
  );
};

export default CustomPersonalDetailCard;
