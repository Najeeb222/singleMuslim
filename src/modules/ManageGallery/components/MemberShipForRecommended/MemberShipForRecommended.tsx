import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, Stack, Typography } from "@mui/material";
import { RecomendedForYou } from "../RecomendedForYou/RecomendedForYou";
import { COLORS } from "@muc/constants";
import { Close, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router";

const MemberShipForRecommended = () => {
  const navigate = useNavigate();
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

            padding: "10px",
          }}
        >
          <Box onClick={handleClose} sx={{ cursor: "pointer" }}>
            <Close sx={{ color: COLORS.white.main }} />
          </Box>
          <DialogContent sx={{ padding: " 10px 10px" }}>
            <DialogContentText id="alert-dialog-description">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <StarBorder
                  sx={{
                    fontSize: "60px",
                    color: COLORS.white.main,
                    padding: "8px",
                    textAlign: "center",
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      color: COLORS.white.main,
                      fontSize:{sm:'20px',xs:'16px'},
                      textAlign: "center",
                    }}
                  >
                    19{" "}
                    <span style={{ fontWeight: 600, lineHeight: "24px" }}>
                      Recommended <br />
                      Matches{" "}
                    </span>
                    <span>
                      {" "}
                      selected daily for <br /> you and access to all{" "}
                    </span>
                    <br />
                    <span style={{ fontWeight: 600 }}>premium</span>
                  </Typography>
                </Box>
              </Box>
              <Stack
                sx={{
                  mt: 1,
                  color: COLORS.white.main,
                  justifyContent: "space-between",
                  height: {sm:'200px',xs:'150px'},
                  alignItems: "center",
                  padding: "8px",
                }}
              >
                <Typography>from only</Typography>
                <Typography sx={{whiteSpace:'nowrap', fontSize: {md:'48px',sm:'40px',xs:'25px'} }}>
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
              onClick={() => navigate("/membership_pakages")}
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
