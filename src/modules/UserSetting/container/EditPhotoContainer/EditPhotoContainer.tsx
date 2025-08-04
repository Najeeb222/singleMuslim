import { CustomUploadImg } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Delete, Lock, MoreVert } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const EditPhotoContainer = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack gap={2}>
      <Box>
        <CustomUploadImg
          title="Public Gallery"
          description="Everybody can view these pictures"
        />
        <Stack gap={2} direction={"row"} position={"relative"}>
          {[12, 3, 4].map(() => (
            <Box position={"relative"}>
              <Box component={"img"} src="/assets/images/girl-img.jpg" />
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ position: "absolute", top: "0%", right: "0%" }}
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Button
                    startIcon={<Delete  />}
                    sx={{ color: COLORS.red.main }}
                  >
                    Delete
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button startIcon={<Lock />} sx={{ color: COLORS.primary.main }}>
                    Lock
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          ))}
        </Stack>
      </Box>
      <CustomUploadImg
        title="Private Gallery"
        description="Control who can view these pictures"
      />
    </Stack>
  );
};

export default EditPhotoContainer;
