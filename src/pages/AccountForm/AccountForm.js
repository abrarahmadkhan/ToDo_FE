import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, Radio, RadioGroup, Switch } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ResponsiveAppBar from "../../components/Header/NewHeader";
import { useEffect } from "react";

const theme = createTheme();

export default function AccountForm() {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState("Employee");
  const [employee_name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const history = useNavigate();
  const param = useParams();
  const employee_id = parseInt(param.id);

  useEffect(() => {
    async function getData() {
      if (employee_id !== null) {
        const allData = await axios.get(
          `http://localhost:3000/employee/${employee_id}`
        );
        console.log("allData", allData.data);
        setName(allData.data.employee_name);
        setPhone(allData.data.phone);
        setPosition(allData.data.position);
        setIsActive(allData.data.isActive);
      }
    }
    getData();
  }, [employee_id]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      employee_name: data.get("Name"),
      phone: data.get("Phone"),
      position: position,
    });
    await axios.post(
      `http://localhost:3000/employee/${employee_id}`,
      {
        employee_name,
        position,
        phone,
        employee_id,
      }
    );


    history(`/account`);

  };
  
  const handleChange = (event) => {
    setIsActive(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
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
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Account Detail
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
                value={employee_name}
                  autoComplete="given-name"
                  InputLabelProps={{ shrink: true }}
                  name="Name"
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                value={phone}
                InputLabelProps={{ shrink: true }}
                  fullWidth
                  type="number"
                  id="Phone"
                  label="Phone Number"
                  name="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="mobile"
                />
              </Grid>


              <RadioGroup row name="Status" defaultValue="Employee" value={position}>
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
              <FormControl component="fieldset">
              <FormControlLabel
                control={<Switch color="primary" checked={isActive} onChange={handleChange}/>}
                label="User is Active?"
                labelPlacement="start"
              />
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              UpDate
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
