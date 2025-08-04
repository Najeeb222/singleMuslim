
import { Divider, Typography } from "@mui/material";

type DeepSearchTitleHighLightProps = {
  title: string;
  icon: React.ReactNode;
};

const DeepSearchTitleHighLight = ({
  title,
  icon,
}: DeepSearchTitleHighLightProps) => {
  return (
    <>
      <Typography
        
        sx={{
      
        fontSize: "20px",
          display: "flex",
          alignItems: "center",
          padding: " 12px",
          borderRadius: "6px",
          gap:'12px',
          fontWeight: "500",
          
    
        }}
      >
        {icon}
        {title}
      </Typography>
      <Divider sx={{mb:2}}/>
    </>
  );
};

export default DeepSearchTitleHighLight;
