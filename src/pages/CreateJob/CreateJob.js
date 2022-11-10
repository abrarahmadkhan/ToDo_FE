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
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function JobSubmitForm() {
  const [Job_Title, setJobTitle] = useState("");
  const [Description, setJobDescription] = useState("");
  const [listId, setListId] = useState(null);
  const Status = "New";
  const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth);
  console.log("🚀 ~ file: CreateJob.js ~ line 24 ~ JobSubmitForm ~ user", user);
  const employeeListId = user.userId;
  const param = useParams();
  const list_Id = parseInt(param.id);
  console.log("🚀 ~ file: CreateJob.js ~ line 29 ~ JobSubmitForm ~ list_Id", list_Id)
  if (param === Object) {
    setListId(list_Id);
  }
  // async function getData() {
  //   const allData = await axios.get(`http://localhost:3000/list/${listId}`);
  //   console.log("allData", allData);
  //   setJobTitle(allData.data[0]);
  //   setJobDescription(allData.data[0]);
  // }
  console.log(
    "🚀 ~ file: CreateJob.js ~ line 28 ~ JobSubmitForm ~ params",
    param
  );
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
    if (listId == null) {
      await axios.put(`http://localhost:3000/list/`, {
        Job_Title,
        Description,
        Status,
        employeeListId,
      });
    } else {
      await axios.post(`http://localhost:3000/list/${listId}`, {
        Job_Title,
        Description,
        Status,
        employeeListId,
      });
    }
  };
  useEffect(() => {
    async function getData() {
      const allData = await axios.get(`http://localhost:3000/list/${listId}`);
      console.log("allData", allData);
      setJobTitle(allData.data[0]);
      setJobDescription(allData.data[0]);
    }
    getData();
  }, [ listId ]);
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
              rows="6"
              name="Description"
              label="Description"
              type="string"
              id="Description"
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
