// components/FullScreenLoader.tsx
import { Box, CircularProgress } from "@mui/material";

const FullScreenLoader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        backgroundColor: "#FFFAF6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ color: "#7C8772" }} />
    </Box>
  );
};

export default FullScreenLoader;
