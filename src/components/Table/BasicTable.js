import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, Stack, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import EditButton from "../Button/EditButton";
import DeleteButton from "../Button/DeleteButton";
import jwt from "jwt-decode";

export default function BasicTable() {
  const [tableData, setTableData] = useState();
  // const [employeeId, setEmployeeId] = useState();
  const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth);
  console.log("🚀 ~ file: BasicTable.js ~ line 21 ~ BasicTable ~ user", user);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [Stat, setStatus] = useState();
  console.log("🚀 ~ file: BasicTable.js ~ line 25 ~ BasicTable ~ Stat", Stat);
  const [tableUpdate, setTableUpdate] = useState(false);
  console.log(
    "🚀 ~ file: BasicTable.js ~ line 27 ~ BasicTable ~ tableUpdate",
    tableUpdate
  );
  async function getData() {
    if (user.Position !== "Admin") {
      const allData = await axios.get(
        `http://localhost:3000/employee/job/${user.userId}`
      );
      console.log("allData", allData);
      setTableData(allData.data[0].List);
    } else {
      const allData = await axios.get(`http://localhost:3000/list/`);
      console.log("allData", allData);
      setTableData(allData.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(tableData);
  if (tableData !== undefined) {
    console.log(tableData);
  } else {
    return;
  }
  if (Stat === "New" && tableUpdate === false) {
    console.log(tableData);
    const filteredTable = tableData.filter(filterTable);
    console.log(
      "🚀 ~ file: BasicTable.js ~ line 56 ~ BasicTable ~ filteredTable",
      filteredTable
    );
    if (filteredTable !== tableData) {
      console.log("if Filtered Table == to Table Data");
      setTableUpdate(true);
      setTableData(filteredTable);
    }
  }
  if (Stat === "Pending" && tableUpdate === false) {
    console.log(tableData);
    const filteredTable = tableData.filter(filterTable);
    console.log(
      "🚀 ~ file: BasicTable.js ~ line 56 ~ BasicTable ~ filteredTable",
      filteredTable
    );
    console.log("if Filtered Table == to Table Data");
    setTableUpdate(true);
    setTableData(filteredTable);
  }
  if (Stat === "On Hold" && tableUpdate === false) {
    console.log(tableData);
    const filteredTable = tableData.filter(filterTable);
    console.log(
      "🚀 ~ file: BasicTable.js ~ line 56 ~ BasicTable ~ filteredTable",
      filteredTable
    );
    if (filteredTable !== tableData) {
      console.log("if Filtered Table == to Table Data");
      setTableUpdate(true);
      setTableData(filteredTable);
    }
  }
  if (Stat === "In Processes" && tableUpdate === false) {
    console.log(tableData);
    const filteredTable = tableData.filter(filterTable);
    console.log(
      "🚀 ~ file: BasicTable.js ~ line 56 ~ BasicTable ~ filteredTable",
      filteredTable
    );
    if (filteredTable !== tableData) {
      console.log("if Filtered Table == to Table Data");
      setTableUpdate(true);
      setTableData(filteredTable);
    }
  }
  if (Stat === "Completed" && tableUpdate === false) {
    console.log(tableData);
    const filteredTable = tableData.filter(filterTable);
    console.log(
      "🚀 ~ file: BasicTable.js ~ line 56 ~ BasicTable ~ filteredTable",
      filteredTable
    );
    if (filteredTable !== tableData) {
      console.log("if Filtered Table == to Table Data");
      setTableUpdate(true);
      setTableData(filteredTable);
    }
  }

  function filterTable(table) {
    return table.Status === Stat;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer component={Paper}>
          <Grid container justifyContent="center">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ fontSize: "medium" }}>
                    List Id
                  </TableCell>
                  <TableCell align="left" sx={{ fontSize: "medium" }}>
                    Job Title
                  </TableCell>
                  <TableCell align="left" sx={{ fontSize: "medium" }}>
                    Job Description
                  </TableCell>
                  <TableCell align="left" sx={{ fontSize: "medium" }}>
                    Status
                  </TableCell>
                  <TableCell align="left" sx={{ fontSize: "medium" }}>
                    Date
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "medium" }}>
                    Option
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? tableData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : tableData
                ).map((row) => (
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
                <TableCell colSpan={6} />
              </TableBody>
            </Table>
            {/* </DataGrid> */}
          </Grid>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
