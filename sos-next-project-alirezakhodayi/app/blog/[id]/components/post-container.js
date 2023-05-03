"use client";
import React from "react";
import { Container } from "@mui/material";

const PostContainer = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

export default PostContainer;
