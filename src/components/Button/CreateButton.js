import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function CreateButton() {
  

    const history = useNavigate();

  const createNew = () => {
    // window.sessionStorage.clear(); 
    // console.log(id);
     history(`/form`);
  };

  return (
    <Button variant="contained" size="large" endIcon={<NoteAddIcon />} onClick={createNew}>
      Create New Job
    </Button>
  );
}