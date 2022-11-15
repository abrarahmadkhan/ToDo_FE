import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';


export default function LogoutButton() {
  

    const history = useNavigate();

  const logout = () => {
    window.sessionStorage.clear(); 
    // console.log(id);
     history(`/`);
  };

  return (
    <Button variant="text" endIcon={<LogoutIcon />} onClick={logout}>
      Logout
    </Button>
  );
}