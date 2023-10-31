import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function BasicRating() {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
    
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={value} readOnly />

    </Box>
  );
}

export {BasicRating};