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
// import jwt from "jwt-decode";

export default function AccountTable() {
  const [tableData, setTableData] = useState();
  async function getData() {
      const allData = await axios.get(
        `http://localhost:3000/employee` 
      );
      console.log("allData", allData);
      // setEmployeeId(allData.data[0].employee_id);
      setTableData(allData.data);
    }
  useEffect(() => {
    getData();
  }, []);
  // console.log(employeeId);
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
              <TableCell align="left" sx={{ fontSize: "medium" }}>
              Employee Id
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "medium" }}>
              Employee Name
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "medium" }}>
              Position
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "medium" }}>
              Phone
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "medium" }}>
              Username
              </TableCell>
              <TableCell align="left" sx={{ fontSize: "medium" }}>
              IsActive
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "medium" }}>
                Option
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.employee_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.employee_id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.employee_name}
                </TableCell>
                <TableCell align="left">{row.position}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.isActive}</TableCell>
                <TableCell>
                  <Stack direction="row-reverse" spacing={1}>
                    {/* <DeleteButton id={row.employee_id} getData={getData} />
                    <EditButton id={row.employee_id} /> */}
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