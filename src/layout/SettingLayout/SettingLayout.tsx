import { COLORS } from "@muc/constants";
import { AsideBar } from "@muc/layout";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

const SettingLayout = ({ children }: any) => {
  return (
    <Container
      maxWidth={"lg"}
      sx={{ bgcolor: COLORS.gray.lightDarkGray, height: "100%", paddingY: 2 }}
    >
      <Typography
        variant="h3"
        fontSize={"25px"}
        color={COLORS.gray.darkGray}
        textAlign={"center"}
        py={"10px"}
      >
        {" "}
        Your Settings
      </Typography>
      <Stack direction={{md:'row',xs:'column'}} py={"20px"}>
        <AsideBar />
        <Divider orientation="vertical" />
        <Box width={"100%"} bgcolor={COLORS.white.main} padding={2}>
          {children}
        </Box>
      </Stack>
    </Container>
  );
};

export default SettingLayout;
