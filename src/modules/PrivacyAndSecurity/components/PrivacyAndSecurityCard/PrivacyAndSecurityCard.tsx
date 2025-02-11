
import { Box, Typography, Paper, Container } from "@mui/material";

interface Section {
  title: string;
  content: string[];
}

interface PrivacyAndSecurityData {
  title: string;
  sections: Section[];
}

const PrivacyAndSecurityCompo = ({ data }: { data: PrivacyAndSecurityData }) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "grey.100", }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ bgcolor: "grey.300", py: 2 }}
        >
          {data.title}
        </Typography>

        {data.sections.map((section, index) => (
          <Paper key={index} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            {section.content.map((paragraph, i) => (
              <Typography key={i} variant="body1" paragraph>
                {paragraph}
              </Typography>
            ))}
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default PrivacyAndSecurityCompo;
