import { AppLayout } from "@muc/layout";
import { OnlineUserCard } from "@muc/components";
import { COLORS, userData } from "@muc/constants";
import { Box, Container, Stack, Typography } from "@mui/material";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchResultContainer = () => {
  return (
    <>
      <AppLayout>
        <Box sx={{ bgcolor: COLORS.gray.lightDarkGray }}>
          <Container
            disableGutters
            sx={{
              py:2,
              maxWidth: "lg",
              mx: "auto",
              bgcolor: COLORS.gray.whiteGray,
            }}
          >
            <SearchBar />
            <Typography
              sx={{
                fontSize: {md:'32px',sm:'20px',xs:'17px'},
                textAlign: "center",
                color: COLORS.gray.lightGray,
                padding: "20px",
              }}
            >
              1000+ matches found, we suggest you refine your search
            </Typography>
            <Stack
              direction={"row"}
              sx={{ flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
            >
              {userData.map((item) => (
                <OnlineUserCard
                  age={item.age}
                  img={item.img}
                  profession={item.profession}
                  location={item.location}
                  countryFlag={item.countryflag}
                  religon={item.religon}
                  rating={item.rating}
                  name={item.name}
                />
              ))}
            </Stack>
          </Container>
        </Box>
      </AppLayout>
    </>
  );
};

export default SearchResultContainer;
