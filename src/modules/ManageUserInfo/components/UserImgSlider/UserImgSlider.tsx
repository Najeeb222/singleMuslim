import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const sliderData = [
  { img: "/assets/images/girl-img.jpg" },
  { img: "/assets/images/userSliderImg_2.jpg" },
  { img: "/assets/images/girl-img.jpg" },
  { img: "/assets/images/userSliderImg_2.jpg" },
  { img: "/assets/images/girl-img.jpg" },
  { img: "/assets/images/userSliderImg_2.jpg" },
];

const UserImgSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "95%",
        mx: "auto",
        justifyContent:'center',
        
        position: "relative",
       
        ".slick-prev, .slick-next": {
          zIndex: 2,
          width: "40px",
          height: "40px",
          top: "50%",
          transform: "translateY(-50%)",
        },
        ".slick-prev": {
          left: "-1%", 
        },
        ".slick-next": {
          right: "-1%", 
        },
        ".slick-prev:before, .slick-next:before": {
          fontSize: "32px",
          color: "#fff",
        },
      }}
    >
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Box key={index} sx={{ px: 1 }}>
            <Box
              component="img"
              src={item.img}
              sx={{
                height: { md: "70vh", xs: "60vh" },
                width: "100%",
                objectFit: "cover",
                borderRadius: 2,
                outline: "none",
                border: "none",
                display: "block",
              }}
              draggable={false}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default UserImgSlider;
