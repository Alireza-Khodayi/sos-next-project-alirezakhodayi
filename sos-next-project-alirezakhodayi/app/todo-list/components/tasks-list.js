import { Stack } from "@mui/material";
import SingleTask from "./single-task";
import { styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import ClearAllTasks from "./clear-tasks";
import NoTask from "../../../public/images/no-tasks.jpg";
import { Typography } from "@mui/material";
import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { useState } from "react";

const Container = styled("div")({
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 3px 10px 1px rgba(0,0,0,0.1)",
  padding: "15px 15px",
});

const Main = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const NoTaskImage = () => {
  return (
    <Main>
      <Image src={NoTask} width={300} />
      <Typography variant="subtitle1" textAlign="center">
        Nice, You done all your tasks...
      </Typography>
    </Main>
  );
};

const TasksList = ({ tasks }) => {
  const isThereTasks = () => {
    if (false) {
      return <NoTaskImage />;
    } else {
      return (
        <div>
          <Container>
            <Stack
              spacing={2}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <SingleTask key={1} text={"test"} />
            </Stack>
          </Container>
          <ClearAllTasks />
        </div>
      );
    }
  };

  return <div>{isThereTasks()}</div>;
};

export default TasksList;
