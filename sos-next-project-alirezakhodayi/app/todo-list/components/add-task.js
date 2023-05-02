"use client";
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import { useState } from "react";
import { supabase } from "@/utils/supabase";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Container = styled("div")({
  height: "100px",
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled(TextField)({
  minWidth: "auto",
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddTask = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [added, setAdded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    const { data, error } = await supabase.from("todos").insert([{ text }]);
    setIsSending(false);
    setAdded(true);
    setText("");
  };
  const handleCloseNotif = () => {
    setAdded(false);
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
      <Snackbar open={added} autoHideDuration={6000} onClose={handleCloseNotif}>
        <Alert
          onClose={handleCloseNotif}
          severity="success"
          sx={{ width: "100%" }}
        >
          Task Added Successfully...
        </Alert>
      </Snackbar>
    </form>
  );
};

export default AddTask;
