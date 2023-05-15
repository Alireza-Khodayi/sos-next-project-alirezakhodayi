import React from "react";
import { useState } from "react";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { supabase } from "@/utils/supabase";

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

const EditTaskForm = ({ id }) => {
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updated, setUpdated] = useState(false);

  const changeHandler = (event) => setText(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUpdating(true);

    const { data, error } = await supabase
      .from("todos")
      .update({ text: text })
      .eq("id", id);

    setIsUpdating(false);
    setUpdated(true);
    setText("");
  };

  const handleCloseNotif = () => {
    setUpdated(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Stack direction="row" spacing={2}>
          <Input
            id="outlined-basic"
            size="small"
            label="Enter new task title:"
            variant="outlined"
            error={false}
            value={text}
            onChange={changeHandler}
          />
          <LoadingButton
            type="submit"
            size="small"
            loading={isUpdating}
            variant="outlined"
          >
            Edit
          </LoadingButton>
        </Stack>
      </Container>
      <Snackbar
        open={updated}
        autoHideDuration={6000}
        onClose={handleCloseNotif}
      >
        <Alert
          onClose={handleCloseNotif}
          severity="info"
          sx={{ width: "100%" }}
        >
          Task Updated ...
        </Alert>
      </Snackbar>
    </form>
  );
};

export default EditTaskForm;
