import { CustomCard } from "@muc/components";
import { userData } from "@muc/constants";
import { Grid } from "@mui/material";

const GalleryCard = () => {
  return (
    <>
      <Grid container>
        {userData.slice(0, 20).map((item) => (
          <Grid md={3} p={2}>
            <CustomCard
              key={item.id}
              id={item.id}
              // height={'350px'}
              name={item.name}
              age={item.age}
              img={item.img}
              rating={item.rating}
              location={item.location}
              countryFlag={item.countryflag}
              profession={item.profession}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GalleryCard;
