import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import { supabase } from "@/utils/supabase";
import { useState } from "react";
const DeleteTask = (props) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .eq("id", props.id);
    console.log(data, error);
    setLoading(false);
  };
  return (
    <LoadingButton
      loading={loading}
      aria-label="delete"
      size="large"
      onClick={handleDelete}
    >
      <DeleteIcon fontSize="inherit" />
    </LoadingButton>
  );
};

export default DeleteTask;
