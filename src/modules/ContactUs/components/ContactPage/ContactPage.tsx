import { COLORS, contactData } from "@muc/constants";
import { Typography, Paper, Link, Container } from "@mui/material";

const ContactPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        align="center"
        sx={{
          paddingY: "12px",
          width: "100%",
          bgcolor: COLORS.gray.main,
          fontSize: "29px",
          color: COLORS.gray.darkGray,
        }}
      >
        {contactData.title}
      </Typography>

      {contactData.sections.map((section, index) => (
        <Paper key={index} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h6">{section.title}</Typography>
          {section.content.map((item, i) => (
            <Typography key={i} variant="body1" gutterBottom>
              {item.label && <strong>{item.label}: </strong>}
              {"link" in item ? (
                <Link href={item.link}>{item.text}</Link>
              ) : (
                item.text
              )}
            </Typography>
          ))}
        </Paper>
      ))}
    </Container>
  );
};

export default ContactPage;
