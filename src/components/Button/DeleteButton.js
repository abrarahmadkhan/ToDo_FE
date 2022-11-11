import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteButton(props) {

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={(e) => {
          props.handleDeleteClick(props.id);
        }}
      >
        Delete
      </Button>
    </div>
  );
}
