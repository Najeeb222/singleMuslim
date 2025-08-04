import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { COLORS } from "@muc/constants";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    borderRadius: 4,
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: COLORS.primary.main,
      color: theme.palette.primary.contrastText,
    },
    "&.Mui-selected": {
      backgroundColor: COLORS.primary.main,
      color: theme.palette.common.white,
   
    },
  },
}));

const HomePagination = () => {
  const [page, setPage] = useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} alignItems="center" mt={4}>
      <Typography variant="h6" color="text.secondary">
        Current Page: <strong>{page}</strong>
      </Typography>
      <StyledPagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default HomePagination;
