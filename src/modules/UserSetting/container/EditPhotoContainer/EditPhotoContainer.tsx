import { CustomUploadImg } from "@muc/components";
import { Stack } from "@mui/material";

const EditPhotoContainer = () => {
  return (
      <Stack gap={2}>
        <CustomUploadImg
          title="Public Gallery"
          description="Everybody can view these pictures"
        />
        <CustomUploadImg
          title="Private Gallery"
          description="Control who can view these pictures"
        />
      </Stack>
   
  );
};

export default EditPhotoContainer;
