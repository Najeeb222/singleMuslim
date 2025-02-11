import GeneralNotification from "../../components/GeneralNotification/GeneralNotification";
import AllNotifications from "../../components/AllNotifications/AllNotifications";
import { Stack } from "@mui/material";

const Notifications_PreferencesContainer = () => {
  return (
    <>
      <Stack>
        <GeneralNotification />
        <AllNotifications />
      </Stack>
    </>
  );
};

export default Notifications_PreferencesContainer;
