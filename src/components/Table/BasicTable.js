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
import axios from "axios";
import EditButton from "../Button/EditButton";
import DeleteButton from "../Button/DeleteButton";

export default function BasicTable() {
  const [tableData, setTableData] = useState();
  const [employeeId, setEmployeeId] = useState();

  async function getData() {
    const allData = await axios.get(`http://localhost:3000/employee/job/3`);
    console.log("allData", allData);
    setEmployeeId(allData.data[0].employee_id);
    setTableData(allData.data[0].List);
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(employeeId);
  console.log(tableData);
  if (tableData !== undefined) {
    console.log(tableData);
  } else {
    return;
  }

  return (
    <TableContainer component={Paper}>
      <Grid container justifyContent="center">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">List Id</TableCell>
              <TableCell align="left">Job Title</TableCell>
              <TableCell align="left">Job Description</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="right">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.list_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.list_id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.Job_Title}
                </TableCell>
                <TableCell align="left">{row.Description}</TableCell>
                <TableCell align="left">{row.Status}</TableCell>
                <TableCell align="left">{row.created_at}</TableCell>
                <TableCell>
                  <Stack direction="row-reverse" spacing={1}>
                    <DeleteButton id={row.list_id} getData={getData} />
                    <EditButton id={row.list_id} />
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
