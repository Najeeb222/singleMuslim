import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { COLORS } from "@muc/constants";
import { Box, Rating, Stack } from "@mui/material";
interface OnlineUserCardProps {
  img: string;
  extraPics?: string;
  name: string;
  age: number;
  profession: string;
  religon?: string;
  location?: string;
  countryFlag?: string;
  rating?: number;
}

const OnlineUserCard = (props: OnlineUserCardProps) => {
  return (
    <Card
      sx={{
        width: "320px",
        ":hover": {
          scale: "1.1",
          transition: "all ease 0.5s",
        },
      }}
    >
      <CardActionArea sx={{ display: "flex", width: "100%" }}>
        <CardMedia
          component="img"
          image={props.img}
          alt="green iguana"
          sx={{
            position: "relative",
            objectFit: "cover",
            width: "158px",
            height: "158px",
          }}
        />
        {props.extraPics && (
          <Box
            position={"absolute"}
            right={"5%"}
            top={"55%"}
            bgcolor={"red"}
            width={"37px"}
            height={"20px"}
            sx={{
              bgcolor: COLORS.white.darkwhite,
              opacity: ".8",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              {props.extraPics}
            </Typography>
          </Box>
        )}
        <CardContent
          sx={{ padding: " 10px 10px 6px", gap: "10px", width: "50%" }}
        >
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", pb: "5px" }}
          >
            <Typography sx={{ color: COLORS.primary.main, fontSize: "17px" }}>
              {props.name}
            </Typography>
            <Typography sx={{ color: COLORS.primary.main, fontSize: "17px" }}>
              {props.age}
            </Typography>
          </Stack>
          <Typography variant="body2" color={COLORS.gray.lightGray} pt={"12px"}>
            {props.profession}
          </Typography>
          <Typography pt={"7px"} color={COLORS.gray.lightGray}>
            {props.religon}
          </Typography>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", py: "7px" }}
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
              sx={{ color: COLORS.primary.main, pt: "18px" }}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default OnlineUserCard;
