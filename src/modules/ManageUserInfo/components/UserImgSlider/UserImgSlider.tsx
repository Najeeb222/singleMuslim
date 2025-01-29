import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { COLORS } from "@muc/constants";
import { Close,  } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ExtraImagesCard } from "@muc/components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

const UserImgSlider = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [nav1, setNav1] = React.useState<Slider | null>(null);
  const [nav2, setNav2] = React.useState<Slider | null>(null);
  let sliderRef1 = React.useRef<Slider | null>(null);
  let sliderRef2 = React.useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <Box>
      <Box onClick={handleOpen}>
        <ExtraImagesCard />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="slider-container">
            <Slider
              arrows={false}
              asNavFor={nav2 ?? undefined}
              ref={(slider) => (sliderRef1.current = slider)}
            >
              {sliderData.map((item, index) => (
                <Box
                  key={index}
                  sx={{ width: "100%", height: "400px", position: "relative" }}
                >
                  <Box
                    component={"img"}
                    src={item.img}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      width: "30px",
                      height: "30px",
                      top: "2%",
                      right: "2%",
                      border: `2px solid ${COLORS.white.darkwhite}`,
                      bgcolor: COLORS.dark.main,
                      ":hover": {
                        bgcolor: COLORS.red.main,
                      },
                    }}
                  >
                    <Close
                      sx={{ color: COLORS.white.darkwhite, fontSize: "22px" }}
                    />
                  </IconButton>
                </Box>
              ))}
            </Slider>

            <Slider
              arrows={false}
              asNavFor={nav1 ?? undefined}
              ref={(slider) => (sliderRef2.current = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              beforeChange={(_, newIndex) => setActiveIndex(newIndex)}
            >
              {sliderData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "100px",
                    border:
                      activeIndex === index
                        ? `2px solid ${COLORS.primary.main}`
                        : "2px solid transparent",
                    transition: "border 0.3s ease-in-out",
                    height: "100px",
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.img}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserImgSlider;

const sliderData = [
  {
    img: "/assets/images/girl-img.jpg",
  },
  {
    img: "/assets/images/userSliderImg_1.jpg",
  },
  {
    img: "/assets/images/userSliderImg_2.jpg",
  },
];
