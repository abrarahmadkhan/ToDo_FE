import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
// import Form from "../Pages/Form/Form";
// import useHistory from "use-history";
//import UpdateForm from "../Pages/Form/updateForm";

export default function EditButton(props) {
  const id = props.id;

  const history = useNavigate();

  const edited = () => {
    // <Form/>
    console.log(id);
    history(`/form/${id}`);
  };

  return (
    <Button variant="contained" endIcon={<EditIcon />} onClick={edited}>
      Edit
    </Button>
  );
}
