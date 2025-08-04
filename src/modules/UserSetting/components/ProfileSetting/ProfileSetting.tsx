import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";


const ProfileSetting = () => {
  const { tab } = useParams(); 

  const renderComponent = () => {
    switch (tab) {
      case "edit-profile":
        return <Typography>edit</Typography>;
      case "edit-personal-info":
        return <Typography>edit</Typography>;
      case "notifications":
        return <Typography>edit</Typography>;
      case "edit-photos":
        return <Typography>edit</Typography>;
      case "change-password":
        return <Typography>edit</Typography>;
      default:
        return <Typography>edit</Typography>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default ProfileSetting;
