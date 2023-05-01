import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";

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
  return (
    <form>
      <Container>
        <Stack direction="row" spacing={2}>
          <Input
            id="outlined-basic"
            label="What task you want to add?"
            variant="outlined"
            error={false}
          />
          <LoadingButton loading={false} variant="contained">
            Add Task
          </LoadingButton>
        </Stack>
      </Container>
    </form>
  );
};

export default AddTask;
