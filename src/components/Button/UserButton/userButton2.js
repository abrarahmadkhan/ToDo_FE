import { Button } from "@mui/material";
import jwt from "jwt-decode";

export default function HandleAdmin2() {
  console.log("in Admin2");
  const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth);
  if (user.Position === "Admin") {
    return (
      <div>
      <Button
        variant="text"
        href="/account"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Users
      </Button>
      </div>
    );
  } else {
    
  }
}
