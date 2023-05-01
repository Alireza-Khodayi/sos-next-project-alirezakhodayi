"use client";
import Navbar from "../navbar";
import { Typography, Stack, styled } from "@mui/material";
import AddTask from "./components/add-task";
import TasksList from "./components/tasks-list";

const Main = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function TodoList() {
  return (
    <>
      <Navbar />
      <Main>
        <Typography
          onClick={() => {
            console.log(tasks);
          }}
          variant="h5"
          color="primary"
          fontWeight="bold"
          textAlign="center"
          mb={8}
          mt={8}
        >
          Todo List
        </Typography>
        <Stack direction="column" spacing={4}>
          <AddTask />
          <TasksList />
        </Stack>
      </Main>
    </>
  );
}
