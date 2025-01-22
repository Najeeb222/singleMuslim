import { CustomCard } from "@muc/components";
import { userData } from "@muc/constants";
import { Stack } from "@mui/material";

const GalleryCard = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          flexWrap: "wrap",
          gap: "21px",
          justifyContent: "center",
          mt: "25px",
          padding: "16px",
        }}
      >
        {userData.map((item) => (
          <CustomCard
            name={item.name}
            age={item.age}
            img={item.img}
            rating={item.rating}
            location={item.location}
            countryFlag={item.countryflag}
            profession={item.profession}
          />
        ))}
      </Stack>
    </>
  );
};

export default GalleryCard;
