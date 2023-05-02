import { Stack } from "@mui/material";
import SingleTask from "./single-task";
import { styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import ClearAllTasks from "./clear-tasks";

import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

const Container = styled("div")({
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 3px 10px 1px rgba(0,0,0,0.1)",
  padding: "15px 15px",
});

const TasksList = ({ tasks }) => {
  const todos = tasks;

  const todoList = () => {
    return (
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {todos.map((todo) => {
          return <SingleTask key={todo.id} text={todo.text} id={todo.id} />;
        })}
        <ClearAllTasks />
      </Stack>
    );
  };

  return (
    <div>
      <Container>{todoList()}</Container>
    </div>
  );
};

export default TasksList;
