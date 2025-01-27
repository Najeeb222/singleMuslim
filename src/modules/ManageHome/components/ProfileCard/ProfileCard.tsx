import { CustomCard } from "@muc/components";
import { COLORS, userData } from "@muc/constants";
import { Button, Paper, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { AvTimer, Language, WhereToVote } from "@mui/icons-material";

const ProfileCard = () => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
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
          centered
        >
          {TabsLabel.map((item) => (
            <Tab
              sx={{ mx: '10px'}}
              value={item.value}
              label={
                <Button
                  sx={{
                    color: COLORS.gray.darkGray,
                    fontSize: "18px",
                  }}
                  startIcon={item.icon}
                >
                  {item.title}
                </Button>
              }
            />
          ))}
        </Tabs>
      </Box>

      {value === 1 && (
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
              id={item?.id}
            />
          ))}
        </Stack>
      )}

      {value === 2 && <div>Content for Item Two</div>}
      {value === 3 && <div>Content for Item Three</div>}
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

const TabsLabel = [
  {
    icon: <Language />,
    title: "Online",
    value: 1,
  },
  {
    icon: <WhereToVote />,
    title: "Online",
    value: 2,
  },
  {
    icon: <AvTimer />,
    title: "Latest",
    value: 3,
  },
];
