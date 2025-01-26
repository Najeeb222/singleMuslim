{
  /* Conditionally render content based on selected tab */
}
import { CustomCard } from "@muc/components";
import { COLORS, userData } from "@muc/constants";
import { Button, Paper, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { AvTimer, Language, WhereToVote } from "@mui/icons-material";

const ProfileCard = () => {
  const [value, setValue] = useState<string>("one");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          component={Stack}
          direction={"row"}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
            justifyContent: "center",
            bgcolor: "red",
            display: "flex",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <Tab
            value="one"
            label={<Button startIcon={<Language />}>Online</Button>}
          />
          <Tab
            value="two"
            label={<Button startIcon={<WhereToVote />}>Near ME</Button>}
          />
          <Tab
            value="three"
            label={<Button startIcon={<AvTimer />}>Latest</Button>}
          />
        </Tabs>
      </Box>

      {value === "one" && (
        <Stack
          direction={"row"}
          sx={{
            flexWrap: "wrap",
            mx: "auto",
            bgcolor: COLORS.gray.main,
            gap: "16px",
            padding: "40px",
            justifyContent: "center",
          }}
        >
          {userData.slice(0, 12).map((item) => (
            <CustomCard
              key={item.name}
              name={item.name}
              age={item.age}
              img={item.img}
              location={item.location}
              countryFlag={item.countryflag}
            />
          ))}
        </Stack>
      )}

      {value === "two" && <div>Content for Item Two</div>}
      {value === "three" && <div>Content for Item Three</div>}
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          fontSize: "21px",
          padding: "10px 15px",
        }}
      >
        View all
      </Button>
    </Paper>
  );
};

export default ProfileCard;
