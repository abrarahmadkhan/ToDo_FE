import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Radio, RadioGroup, Snackbar } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("Employee");
  const [employee_name, setName] = useState("");
  console.log(
    "🚀 ~ file: Signup.js ~ line 40 ~ SignUp ~ employee_name",
    employee_name
  );
  const [phone, setPhone] = useState("");
  console.log("🚀 ~ file: Sigup.js ~ line 43 ~ SignUp ~ Phone", phone);
  const [username, setEmail] = useState("");
  console.log("🚀 ~ file: Sigup.js ~ line 45 ~ SignUp ~ userName", username);
  const [password, setPassword] = useState("");
  console.log("🚀 ~ file: Sigup.js ~ line 47 ~ SignUp ~ Password", password);
  console.log("🚀 ~ file: Sigup.js ~ line 35 ~ SignUp ~ Position", position);
  const access_token = "null";
  const history = useNavigate();
  console.log(
    "🚀 ~ file: Sigup.js ~ line 49 ~ SignUp ~ access_token",
    access_token
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // setName(data.get("Name"));
    // setPhone(data.get("Phone"));
    // setEmail(data.get("email"));
    // setPassword(data.get("password"));
    console.log({
      employee_name: data.get("Name"),
      phone: data.get("Phone"),
      username: data.get("email"),
      password: data.get("password"),
      position: position,
      access_token: access_token,
    });
    const response = await axios.put(`http://localhost:3000/employee/`, {
      employee_name,
      position,
      phone,
      username,
      password,
      access_token,
    });
    console.log(
      "🚀 ~ file: Signup.js ~ line 83 ~ handleSubmit ~ response",
      response.data.message
    );
    if (response.data.message !== "User Name already Exist") {
      history(`/`);
    } else {

      setOpen(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="Phone"
                  label="Phone Number"
                  name="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  id="email"
                  label="Email Address/User Name"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <RadioGroup row name="Status" defaultValue="Employee">
                <FormControlLabel
                  value="Employee"
                  control={<Radio />}
                  label="Employee"
                  onChange={(e) => setPosition(e.target.value)}
                />
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="Admin"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </RadioGroup>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          User Name Already Exist or Incomplete Values
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
