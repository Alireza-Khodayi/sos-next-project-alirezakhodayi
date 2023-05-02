import { Stack } from "@mui/material";
import SingleTask from "./single-task";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";

const TasksList = ({ tasks }) => {
  const todos = tasks;

  const todoList = () => {
    return (
      <Stack
        sx={{ marginTop: "20px" }}
        spacing={4}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {todos.map((todo) => {
          return <SingleTask key={todo.id} text={todo.text} id={todo.id} />;
        })}
      </Stack>
    );
  };

  return (
    <div>
      <Container maxWidth="xs">{todoList()}</Container>
    </div>
  );
};

export default TasksList;
