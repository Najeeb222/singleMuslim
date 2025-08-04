import { Paper, Box, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type UserProfielCardProps = {
  img: string;
  name: string;
  location?: string;
  age: number;

  countryFlag?: string;
};

const UserProfileCard = ({
  img,
  name,
  location,
  age,

  // countryFlag,
}: UserProfielCardProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        // width: 280,
        height: 420,
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "#fff",
          p: 2,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontWeight={600} fontSize={18}>
            {name}
          </Typography>
          <CheckCircleIcon fontSize="small" sx={{ color: "#3EA6FF" }} />
        </Box>

        <Box display="flex" alignItems="center" gap={0.5} mt={0.5}>
          <LocationOnIcon fontSize="small" />
          <Typography fontSize={13}>{location}</Typography>
                 {/* <IconButton sx={{ color: "#fff", bgcolor: "rgba(0,0,0,0.3)" }}>
              <Box
                component={"img"}
                src={countryFlag}
                alt={location}
                sx={{ width: 24, height: 24, borderRadius: "50%" }}
              />
            </IconButton> */}
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Box display="flex" gap={1}>
            <IconButton sx={{ color: "#fff", bgcolor: "rgba(0,0,0,0.3)" }}>
              <ChatBubbleOutlineIcon />
            </IconButton>
     
            <IconButton sx={{ color: "#fff", bgcolor: "rgba(0,0,0,0.3)" }}>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>

          <Typography fontWeight={700} fontSize={20}>
            {age}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserProfileCard;
