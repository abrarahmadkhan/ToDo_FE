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
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useState } from "react";
import jwt from "jwt-decode";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function JobSubmitForm() {
  const [Job_Title, setJobTitle] = useState("");
  const [Description, setJobDescription] = useState("");
  const [list_id, setListId] = useState(null);
  const [Status, setStatus] = useState("New");
  const history = useNavigate();
  const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth);
  const employeeListId = user.userId;
  const param = useParams();
  const listId = parseInt(param.id);
  if (isNaN(listId) !== true) {
    if (list_id == null) {
      setListId(listId);
    }
  }
  useEffect(() => {
    async function getData() {
      if (list_id !== null) {
        const allData = await axios.get(
          `http://localhost:3000/list/${list_id}`
        );
        console.log("allData", allData.data.Description);
        setJobTitle(allData.data.Job_Title);
        setJobDescription(allData.data.Description);
      }
    }
    getData();
  }, [list_id]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setJobTitle(data.get("JobTitle"));
    setJobDescription(data.get("Description"));
    console.log({
      JobTitle: Job_Title,
      Description: Description,
      Status: Status,
      EmployeeListId: employeeListId,
    });
    if (list_id == null) {
      await axios.put(`http://localhost:3000/list/`, {
        Job_Title,
        Description,
        Status,
        employeeListId,
      });
      history(`/home`);
    } else if (list_id !== null) {
      await axios.post(`http://localhost:3000/list/${list_id}`, {
        list_id,
        Job_Title,
        Description,
        Status,
      });
      history(`/home`);
    }
   
  };


  return (
    <div>
      <ResponsiveAppBar />
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              defaultValue={Job_Title}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
              id="Job Title"
              label="Job Title"
              name="JobTitle"
              multiline
              onChange={(e) => setJobTitle(e.target.value)}
              maxRows={4}
            />
            <TextField
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
              multiline
              rows="6"
              name="Description"
              label="Description"
              type="string"
              id="Description"
              onChange={(e) => setJobDescription(e.target.value)}
              defaultValue={Description}
            />
            <RadioGroup row name="Status" defaultValue="New">
              <FormControlLabel
                value="New"
                control={<Radio />}
                label="New"
                onChange={(e) => setStatus(e.target.value)}
              />
              <FormControlLabel
                value="On Hold"
                control={<Radio />}
                label="On Hold"
                onChange={(e) => setStatus(e.target.value)}
              />
              <FormControlLabel
                value="In Processes"
                control={<Radio />}
                label="In Processes"
                onChange={(e) => setStatus(e.target.value)}
              />
              <FormControlLabel
                value="Pending"
                control={<Radio />}
                label="Pending"
                onChange={(e) => setStatus(e.target.value)}
              />
              <FormControlLabel
                value="Completed"
                control={<Radio />}
                label="Completed"
                onChange={(e) => setStatus(e.target.value)}
              />
            </RadioGroup>
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
