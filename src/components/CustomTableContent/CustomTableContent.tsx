import { COLORS } from "@muc/constants";
import { Divider, Stack, Typography } from "@mui/material";

const TabContent = ({ title, TabContent }: any) => {
  return (
    <Stack gap={"44px"}>
      <Stack gap={"20px"}>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontSize: "22px", color: COLORS.gray.darkGray }}
        >
          {title}
        </Typography>
        <Divider />
      </Stack>
      <Stack
        direction={"column"}
        sx={{
          maxWidth: "740px",
          width: "100%",
          gap: "20px",
        }}
      >
        {TabContent}
      </Stack>
    </Stack>
  );
};
export default TabContent;
