"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import PostCard from "./post-card";
import Link from "next/link";
import { styled } from "@mui/material";
import Container from "@mui/material/Container";

const BlogContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const PostsContainer = (props) => {
  const data = props.data;
  return (
    <BlogContainer maxWidth={"xl"}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        {data.map((post) => (
          <Grid item xs={1} sm={1} md={1} key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <PostCard
                title={post.post_title}
                content={post.post_content}
                image={post.keyword}
                link={post.keyword}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </BlogContainer>
  );
};

export default PostsContainer;
