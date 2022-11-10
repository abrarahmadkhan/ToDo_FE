import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
// import EditButton from "../../../component/Edit";
// import DButton from "../../../component/Delete";
// import UserService from "../../../services/userService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditButton from "../Button/EiditButton";
import DeleteButton from "../Button/DeleteButton";

export default function BasicTable(props) {

  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  async function getData() {
    const allData= axios.get(`http://localhost:3000/employee/job/3`)
    setTableData(allData);
  }

  useEffect(() => {
    getData();
  }, []);

  const dataDeleted = () => {
    getData();
  };

  console.log(tableData );
  // const tableData1=tableData.json()
  // console.log("🚀 ~ file: BasicTable.js ~ line 36 ~ BasicTable ~ tableData1", tableData1)
  // tableData.then((value) => {
  //   console.log(value);
  //   // expected output: 123
  // });
  
  // const { foo, bar } = Promise.then(tableData => tableData.data);
  // console.log("🚀 ~ file: BasicTable.js ~ line 38 ~ BasicTable ~ bar", bar)
  // console.log(foo);
  const edit = (id) => {
    console.log(id);
    navigate("/form", { state: { id: id } });
  };
function createData(name, id, Email, Phone){
    return { id, name, Email, Phone };
  }
  
  // const row = [
  //   createData('id', 159, 6.0, 24, 4.0),
  //   createData('name', 237, 9.0, 37, 4.3),
  //   createData('Email', 262, 16.0, 24, 6.0),
  //   createData('Phone', 305, 3.7, 67, 4.3),
  // ];
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
            {tableData.map((row) => (
              <TableRow
                key={row.employee_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                <TableCell align="right">{row.List_Id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.job_Title}
                </TableCell>
                <TableCell align="right">{row.job_Description}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.createData}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <EditButton onClick={() => edit(row.id)} id={row.id} />
                    <DeleteButton onDelete={dataDeleted} id={row.id} />
                  </Stack>
                </TableCell>
               </TableRow>
            ))} 
          </TableBody>
        </Table>
      </Grid>
    </TableContainer>
  );
}
