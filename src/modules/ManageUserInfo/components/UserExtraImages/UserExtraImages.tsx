import { Box, Paper, Stack } from "@mui/material";

const UserExtraImages = () => {
  return (
    <Stack component={Paper} elevation={3} p={2} direction={"row"} flexWrap={"wrap"} gap={2} mb={2}>
      {sliderData.map((item, i) => (
   
          <Box
          component={"img"}
          src={item.img}
          key={i}
          alt="user-extra-image"
          sx={{
            width: 150,
            height: 150,
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "3px 10px 24px 1px rgba(0,0,0,0.45)",
            // border: "1px solid white",
          }}
        />
 
      ))}
    </Stack>
  );
};

export default UserExtraImages;

const sliderData = [
  {
    img: "/assets/images/girl-img.jpg",
  },
  {
    img: "/assets/images/userSliderImg_2.jpg",
  },
  {
    img: "/assets/images/girl-img.jpg",
  },
  {
    img: "/assets/images/userSliderImg_2.jpg",
  },
  {
    img: "/assets/images/girl-img.jpg",
  },
  {
    img: "/assets/images/userSliderImg_2.jpg",
  },
];
