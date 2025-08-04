import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, DialogActions, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import UserExtraImages from "../UserExtraImages/UserExtraImages";
import UserImgSlider from "../UserImgSlider/UserImgSlider";
import { COLORS } from "@muc/constants"; // Make sure COLORS is defined

const ExtraImgDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box onClick={handleClickOpen}>
        <UserExtraImages />
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.8)",
        }}
        PaperProps={{
          sx: {
            bgcolor: "rgba(0, 0, 0, 0.9)",
            borderRadius: 2,
            height: { md: "90vh", xs: "80vh" },
            overflow: "hidden",
            px: { xs: 1, md: 3 },
            pt: 1,
          },
        }}
      >
        <DialogActions sx={{ justifyContent: "flex-end", pr: 1 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              bgcolor: COLORS?.dark?.darkblack || "#333",
              "&:hover": { bgcolor: COLORS.gray.darkGray },
            }}
          >
            <Close sx={{ color: COLORS.white.main }} />
          </IconButton>
        </DialogActions>

        <DialogContent sx={{ p: 0, }}>
          <UserImgSlider />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ExtraImgDialog;
