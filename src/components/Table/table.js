import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Stack } from "@mui/material";
// import { useEffect, useState } from "react";
// import EditButton from "../../../component/Edit";
// import DButton from "../../../component/Delete";
// import UserService from "../../../services/userService";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export default async function BasicTable() {
  const List= await axios.get('http://localhost:3000/list/3')
  console.log("🚀 ~ file: table.js ~ line 19 ~ BasicTable ~ List", List)

/**
     */

//   const [tableData, setTableData] = useState([]);

//   const navigate = useNavigate();

//   async function getData() {
//     const allData = await UserService.getAllUsers();
//     setTableData(allData);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   const dataDeleted = () => {
//     getData();
//   };

//   console.log(tableData);

//   const edit = (id) => {
//     console.log(id);
//     navigate("/form", { state: { id: id } });
//   };
function createData(name, id, Email, Phone){
    return { id, name, Email, Phone };
  }
  
  const row = [
    createData('id', 159, 6.0, 24, 4.0),
    createData('name', 237, 9.0, 37, 4.3),
    createData('Email', 262, 16.0, 24, 6.0),
    createData('Phone', 305, 3.7, 67, 4.3),
  ];
  return (
    <TableContainer component={Paper}>
      <Grid container justifyContent="center">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">List Id</TableCell>
              <TableCell align="right">Job Title</TableCell>
              <TableCell align="right">Job Description</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {tableData.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }} */}
        
                <TableCell align="center">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Address}</TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    {/* <EditButton onClick={() => edit(row.id)} id={row.id} /> */}
                    {/* <DButton onDelete={dataDeleted} id={row.id} /> */}
                  </Stack>
                </TableCell>
              {/* </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </Grid>
    </TableContainer>
  );
}
