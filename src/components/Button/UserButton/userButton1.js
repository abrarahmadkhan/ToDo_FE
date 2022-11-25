import { Button, Link, MenuItem, Typography } from "@mui/material";
import jwt from "jwt-decode";

export default function HandleAdmin() {
    const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth);
    console.log('in Admin1')
    if (user.Position === "Admin") {
      return(<MenuItem>
        <Typography textAlign="center">
          <Link href="/account" color="inherit" underline="none">
            <Button >Users</Button>
          </Link>
        </Typography>
      </MenuItem>);
    } else {
      
    }
  }