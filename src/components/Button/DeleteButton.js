import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function DeleteButton(props) {
  const userId = props.id;

  async function deleteUserData() {
    const response = await axios.delete(
      `http://localhost:3000/list/${userId}`
    );

    console.log(response);
  }



  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => {
          deleteUserData();
        }}
      >
        Delete
      </Button>
    </div>
  );
}