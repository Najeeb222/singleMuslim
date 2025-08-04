import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useAuth } from "@muc/context";
import { LoginDialogBox } from "@muc/components";

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
}: UserProfielCardProps) => {
  const { user, } = useAuth(); 
  const [dialogOpen, setDialogOpen] = useState(false);
  const [intendedAction, setIntendedAction] = useState<"like" | "message" | null>(null);

  const handleProtectedClick = (action: "like" | "message") => {
    if (!user) {
      setIntendedAction(action);
      setDialogOpen(true);
    } else {
      if (action === "like") {
        // perform like logic
        console.log("liked");
      } else if (action === "message") {
        // open messaging
        console.log("message");
      }
    }
  };

  const handleLoginSuccess = () => {
  // if login exists
    // replay intended action if any
    if (intendedAction === "like") {
      console.log("liked after login");
    } else if (intendedAction === "message") {
      console.log("message after login");
    }
    setIntendedAction(null);
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
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
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box display="flex" gap={1}>
              <IconButton
                sx={{ color: "#fff", bgcolor: "rgba(0,0,0,0.3)" }}
                onClick={() => handleProtectedClick("message")}
                aria-label="message"
              >
                <ChatBubbleOutlineIcon />
              </IconButton>

              <IconButton
                sx={{ color: "#fff", bgcolor: "rgba(0,0,0,0.3)" }}
                onClick={() => handleProtectedClick("like")}
                aria-label="like"
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Box>

            <Typography fontWeight={700} fontSize={20}>
              {age}
            </Typography>
          </Box>
        </Box>
      </Paper>

      <LoginDialogBox
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setIntendedAction(null);
        }}
        onLoginSuccess={() => {
          handleLoginSuccess();
          setDialogOpen(false);
        }}
      />
    </>
  );
};

export default UserProfileCard;
