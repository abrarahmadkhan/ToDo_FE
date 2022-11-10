import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
// import Form from "../Pages/Form/Form";
// import useHistory from "use-history";
//import UpdateForm from "../Pages/Form/updateForm";

export default function EditButton(props) {
  const id = props.id;

  const history = useNavigate();

  const edited = () => {
    // <Form/>
    console.log(id);
    history("/form", { id: id });
  };

  return (
    <Link to={`/form/${id}`}>
    <Button
      variant="contained"
      endIcon={<EditIcon />}
      onClick={() => {
        props.onClick(edited);
      }}
    >
      Edit
    </Button>
     </Link>
  );
}