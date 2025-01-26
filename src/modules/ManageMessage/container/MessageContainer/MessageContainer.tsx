import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Close, MessageOutlined } from "@mui/icons-material";
import {
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { COLORS } from "@muc/constants";
import MessageCard from "../../components/MessageCard/MessageCard";

const MessageContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Stack
        justifyContent={"space-evenly"}
        alignItems={"center"}
        p={"10px"}
        height={"65px"}
        onClick={handleClickOpen}
      >
        <IconButton sx={{ padding: 0, minHeight: "0", height: "33px" }}>
          <MessageOutlined
            sx={{ fontSize: "33px", color: COLORS.secondary.main }}
          />
        </IconButton>
        <Typography color={COLORS.secondary.main} fontSize={"10px"}>
          Messages
        </Typography>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <Container maxWidth={"md"} sx={{ height: "602px", width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Message Dialog Tabs"
            centered
          >
            <Tab label="All Messages" />
            <Tab label="Unread" />
          </Tabs>
          {value === 0 && <MessageCard />}
        </Container>

        <DialogActions>
          <Button onClick={handleClose}>
            <Close />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default MessageContainer;
