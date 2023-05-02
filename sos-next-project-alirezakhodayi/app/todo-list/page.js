"use client";
import Navbar from "../navbar";
import AddTask from "./components/add-task";
import TasksList from "./components/tasks-list";
import PageTitle from "../blog/components/title";
import Container from "./components/container";
import { supabase } from "@/utils/supabase";
import { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import NoTask from "../../public/images/no-tasks.jpg";
import Image from "next/image";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const Main = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    const { data } = await supabase.from("todos").select();
    setTasks(data);
    setIsLoading(false);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("any")
      .on("postgres_changes", { event: "*", schema: "*" }, (payload) => {
        console.log("Change received!", payload);
        fetchTasks();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const NoTaskImage = () => {
    return (
      <Main>
        <Image alt="No Tasks" src={NoTask} width={300} />
        <Typography variant="subtitle1" textAlign="center">
          Nice, You done all your tasks...
        </Typography>
      </Main>
    );
  };

  const tasksList = () => {
    if (tasks.length === 0) {
      return <NoTaskImage />;
    } else {
      return <TasksList tasks={tasks} />;
    }
  };
  return (
    <>
      <Navbar />
      <PageTitle>Todo List</PageTitle>
      <Container>
        <AddTask />
        {isLoading ? (
          <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        ) : (
          tasksList()
        )}
      </Container>
    </>
  );
}
