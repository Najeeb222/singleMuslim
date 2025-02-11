import { COLORS } from "@muc/constants";
import { Typography, Paper, Container, Box } from "@mui/material";

interface Section {
  title: string;
  content: string[];
}

interface TermsAndConditionsData {
  title: string;
  sections: Section[];
}

const TermsAndConditionsCompo = ({
  termAndConditionsData,
}: {
  termAndConditionsData: TermsAndConditionsData;
}) => {
  return (
    <Box sx={{width: "100%", bgcolor:COLORS.gray.lightDarkGray}}>
      <Container disableGutters sx={{ width: "100%", bgcolor: "background.paper", }}>
        <Typography
          variant="h5"
          align="center"
          bgcolor={COLORS.gray.main}
          paddingY={2}
          fontSize={"24px"}
          color={COLORS.gray.darkGray}
        >
          {termAndConditionsData.title}
        </Typography>

        {termAndConditionsData.sections.map((section, index) => (
          <Paper key={index} sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            {section.content.map((paragraph: string, i: number) => (
              <Typography key={i} variant="body1" gutterBottom>
                {paragraph}
              </Typography>
            ))}
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default TermsAndConditionsCompo;
