import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack, Typography } from "@mui/material";
import { RecomendedForYou } from "../RecomendedForYou/RecomendedForYou";
import { COLORS } from "@muc/constants";
import { Close, Star, StarBorder } from "@mui/icons-material";

const MemberShipForRecommended = () => {
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
        <RecomendedForYou />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            bgcolor: "#02908e",
            width: "471px",
            height: "612px",
            padding: "10px",
          }}
        >
          <Box onClick={handleClose} sx={{ cursor: "pointer" }}>
            <Close sx={{ color: COLORS.white.main }} />
          </Box>
          <DialogContent sx={{ padding: " 10px 10px" }}>
            <DialogContentText id="alert-dialog-description">
              <Box>
                <StarBorder
                  sx={{
                    fontSize: "55px",
                    color: COLORS.white.main,
                    padding: "8px",
                  }}
                />
                <Box>
                  <Typography>
                    19 <span>Recommended Matches </span>
                    <span> selected daily for you and access to all </span>
                    <span>premium</span>
                  </Typography>
                </Box>
              </Box>
              <Stack
                sx={{
                  color: COLORS.white.main,
                  justifyContent: "space-between",
                  height: "240px",
                  alignItems: "center",
                  padding: "8px",
                }}
              >
                <Typography>from only</Typography>
                <Typography sx={{ fontSize: "48px" }}>
                  (PKR) ₨4,000.00
                </Typography>
                <Typography variant="body2">
                  for 1 membership for (PKR) ₨4,000
                </Typography>
              </Stack>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              onClick={handleClose}
              sx={{ color: "#ffffff80", fontSize: "21px", fontWeight: 300 }}
            >
              Maybe later
            </Button>
            <Button
              onClick={handleClose}
              autoFocus
              sx={{
                bgcolor: COLORS.white.main,
                color: COLORS.blue.main,
                boxShadow: "1px 1px 10px 0 rgba(0,0,0,.39)",
                width: "270px",
                padding: "10px 20px",
                borderRadius: "32px",
              }}
            >
              Upgrade Me Now
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default MemberShipForRecommended;
