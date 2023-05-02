"use client";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import { useState } from "react";
import { supabase } from "@/utils/supabase";

const Container = styled("div")({
  height: "100px",
  width: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled(TextField)({
  width: "350px",
});

const AddTask = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    const { data, error } = await supabase.from("todos").insert([{ text }]);
    setIsSending(false);
  };
  const changeHandler = (event) => setText(event.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Stack direction="row" spacing={2}>
          <Input
            id="outlined-basic"
            label="What task you want to add?"
            variant="outlined"
            error={false}
            value={text}
            onChange={changeHandler}
          />
          <LoadingButton type="submit" loading={isSending} variant="contained">
            Add Task
          </LoadingButton>
        </Stack>
      </Container>
    </form>
  );
};

export default AddTask;
