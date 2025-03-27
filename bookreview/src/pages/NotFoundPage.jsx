import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "grey.100",
        textAlign: "center",
        px: 4
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: "grey.800"
        }}
      >
        404
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem",
          color: "grey.600",
          mt: 4
        }}
      >
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          mt: 6,
          px: 6,
          py: 3,
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: "8px",
          boxShadow: 2,
          "&:hover": {
            backgroundColor: "primary.dark"
          }
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}