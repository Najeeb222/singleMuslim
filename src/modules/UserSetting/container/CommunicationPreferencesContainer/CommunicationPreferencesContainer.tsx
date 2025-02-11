import AskMeCommunication from "../../components/AskMeCommunication/AskMeCommunication";
import { Divider, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "@muc/constants";

const CommunicationPreferencesContainer = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{ fontSize: "22px", color: COLORS.gray.darkGray, mb: "21px" }}
      >
        Communication / Preferences
      </Typography>
      <Divider />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Ask Me" wrapped />
        <Tab value="two" label="Allow" />
        <Tab value="three" label="BLock" />
      </Tabs>
      {value === "one" && <AskMeCommunication />}
    </>
  );
};

export default CommunicationPreferencesContainer;
