import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { COLORS } from "@muc/constants";
import { Box, Rating, Stack } from "@mui/material";
import { useNavigate } from "react-router";

const CustomCard = (props: any) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: { xs: "45%", sm: "180px", md: "195px" }, 
        ":hover": {
          transform: "scale(1.1)", 
          transition: "all ease 0.5s",
        },
        cursor: "pointer",
      }}
      onClick={() => navigate(`/user_info/${props?.id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          width={"100%"}
          image={props.img}
          alt={props.name} 
          sx={{ position: "relative", objectFit: "cover" }}
        />
        {props.extraPics && (
          <Box
            position={"absolute"}
            right={"5%"}
            top={"55%"}
            width={"37px"}
            height={"20px"}
            sx={{
              bgcolor: COLORS.white.darkwhite,
              opacity: ".8",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              {props.extraPics}
            </Typography>
          </Box>
        )}
        <CardContent sx={{ padding: "10px", gap: "10px" }}>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", pb: "5px" }}
          >
            <Typography
              sx={{
                color: COLORS.primary.main,
                fontSize: { xs: "14px", md: "18px" },
              }}
            >
              {props.name}
            </Typography>
            <Typography
              sx={{
                color: COLORS.primary.main,
                fontSize: { xs: "14px", md: "18px" },
              }}
            >
              {props.age}
            </Typography>
          </Stack>
          <Typography variant="body2" color={COLORS.gray.lightGray}>
            {props.profession}
          </Typography>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", py: "3px" }}
          >
            <Typography variant="body2" color={COLORS.gray.lightGray}>
              {props.location}
            </Typography>
            <Box
              component={"img"}
              src={props.countryFlag}
              sx={{ width: "20px", height: "14px" }}
            />
          </Stack>
          {props.rating && (
            <Rating
              value={props.rating}
              size="small"
              sx={{ color: COLORS.primary.main }}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
