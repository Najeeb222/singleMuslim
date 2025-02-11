import { Box, Typography, IconButton, Stack } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import EditIcon from "@mui/icons-material/Edit";
import { Circle } from "@mui/icons-material";
import { COLORS } from "@muc/constants";

const DeviceCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        maxWidth: "600px",
        width: "100%",
        gap:'20px',
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
       <Box position={'relative'}>
       <ComputerIcon fontSize="large" />
       <Circle sx={{fontSize:'8px',color:COLORS.green.darkGreen,position:'absolute',top:'2%',right:'5%'}}/>
       </Box>
      <Box sx={{ display: "flex", gap: 1,flexDirection:'column' }}>
        <Stack direction={"row"} gap={1}>
          <Typography fontSize={'18px'}>Windows Chrome</Typography>
          <Typography color="green">Current</Typography>
        </Stack>
        <Typography variant="caption" color="gray">
          <Box component={'img'} src="/assets/images/pak-flag.png" sx={{height:'12px',width:'16px'}}/> Other - Last seen at Monday 10th February 2025
        </Typography>
      </Box>
      <IconButton sx={{ marginLeft: "auto" }}>
        <EditIcon />
      </IconButton>
    </Box>
  );
};

export default DeviceCard;
