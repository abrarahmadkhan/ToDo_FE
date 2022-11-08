import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../../components/Header/NewHeader";
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function JobSubmitForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
        <ResponsiveAppBar/>
    <Container component="main" maxWidth="xs">
        
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AddTaskIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Job Submit Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Job Title"
            label="Job Title"
            name="JobTitle"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline={true}
            name="Discription"
            label="Discription"
            type="Discription"
            id="Discription"

          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>
    </Container>
    </div>
  );
}
