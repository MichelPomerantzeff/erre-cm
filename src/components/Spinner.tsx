import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress className="max-w-7 max-h-7" color="inherit" />
    </Box>
  );
}
