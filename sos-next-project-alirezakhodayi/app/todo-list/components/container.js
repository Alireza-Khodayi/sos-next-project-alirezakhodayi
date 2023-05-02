"use client";
import React from "react";
import { styled } from "@mui/material";
const MainDiv = styled("div")({
  display: "flex",
  justifyContent: "center",

  width: "100vw",
});
const SecondDiv = styled("div")({
  width: "20%",
});

const Container = ({ children }) => {
  return (
    <MainDiv>
      <SecondDiv>{children}</SecondDiv>
    </MainDiv>
  );
};

export default Container;
