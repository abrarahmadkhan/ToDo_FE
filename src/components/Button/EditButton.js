import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";


export default function EditButton(props) {
  const id = props.id;

  const history = useNavigate();

  const edited = () => {
    console.log(id);
    history(`/form/${id}`);
  };

  return (
    <Button variant="contained" endIcon={<EditIcon />} onClick={edited}>
      Edit
    </Button>
  );
}
