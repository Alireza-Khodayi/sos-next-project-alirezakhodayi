"use client";
import React from "react";
import { styled, Typography } from "@mui/material";
const Center = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const PageTitle = ({ children }) => {
  return (
    <Center>
      <Typography
        variant="h5"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        mb={8}
        mt={8}
      >
        {children}
      </Typography>
    </Center>
  );
};

export default PageTitle;
