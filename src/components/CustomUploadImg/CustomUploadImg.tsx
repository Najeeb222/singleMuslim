import React, { useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Stack,
  Divider,
  // Divider,
} from "@mui/material";
import { COLORS } from "@muc/constants";
interface CustomUploadImgProps {
  children?: React.ReactNode;
  title: string;
  description: string;
}

const CustomUploadImg: React.FC<CustomUploadImgProps> = ({
  title,
  description,
  children,
}: CustomUploadImgProps) => {
  const [_file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      uploadFile(droppedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const uploadFile = (file: File) => {
    setFile(file);
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setTimeout(() => {
        setPreview(reader.result as string);
        setLoading(false);
      }, 1500); 
    };
  };

  return (
    <Stack gap={2}>
      <Stack>
        <Stack direction={"row"} spacing={"30px"} padding={"10px"}>
          <Typography
            variant="h6"
            fontSize={"20px"}
            color={COLORS.secondary.main}
          >
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>
        <Divider />
      </Stack>
      <Stack direction={"row"} spacing={"30px"} padding={"10px"}>
        <Box
          sx={{
            width: 250,
            height: 250,
            border: "2px dashed #ccc",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#f9f9f9",
            "&:hover": { borderColor: "#888" },
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          {loading ? (
            <CircularProgress />
          ) : preview ? (
            <img
              src={preview}
              alt="Uploaded"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <>
              <Typography variant="h4" color="text.secondary">
                +
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Drop photos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Click here to upload.
              </Typography>
            </>
          )}

          <input
            id="fileInput"
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
        </Box>
        <Box>{children}</Box>
      </Stack>
      {/* <Divider /> */}
    </Stack>
  );
};

export default CustomUploadImg;
