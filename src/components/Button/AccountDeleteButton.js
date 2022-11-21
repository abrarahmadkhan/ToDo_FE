import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AccountDeleteButton(props) {
  const [change, setChange]=useState()
  async function handleDeleteClick(){
    console.log("i am deleted");
    const response = await axios.delete(`http://localhost:3000/employee/${props.id}`);
    setChange(response.statusText)
    
  };
  useEffect(() => {
    if(change === 'OK'){
      console.log("use effect if getData")
    props.getData()
    }
  }, [change]);
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => {
          handleDeleteClick();
        }}
      >
        Delete
      </Button>
    </div>
  );
}
