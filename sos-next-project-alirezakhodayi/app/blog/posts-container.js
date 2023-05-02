"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import PostCard from "./post-card";
import { styled } from "@mui/material";
import Container from "@mui/material/Container";

const BlogContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PostsContainer = (props) => {
  const data = props.data;
  return (
    <BlogContainer dir="rtl" maxWidth={"xl"}>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {data.map((post) => (
          <Grid item xs={1} sm={1} md={1} key={post.id}>
            <PostCard
              title={post.post_title}
              content={post.post_content}
              image={post.keyword}
              link={post.id}
            />
          </Grid>
        ))}
      </Grid>
    </BlogContainer>
  );
};

export default PostsContainer;
