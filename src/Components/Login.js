import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login(props) {
  return (
    <Box
      sx={{
        // height: "200px",
        display: "grid",
        justifyContent: "center",
        marginTop: "120px",
        gap: "20px",
      }}
    >
      <TextField label="Username"></TextField>
      <TextField label="Password"></TextField>
      <Button variant="contained" onClick={() => props.handleClick(true)}>
        Login
      </Button>
    </Box>
  );
}
