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
import AccountDeleteButton from "../Button/AccountDeleteButton";
import AccountEditButton from "../Button/AccountEditButton";

export default function AccountTable() {
  const [tableData, setTableData] = useState();
  const [totalListNum, setTotalListNum] = useState();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  async function getData() {
    const allData = await axios.post(`http://localhost:3000/employee/`, {
      page: page,
      rows: rowsPerPage,
    });
    console.log("allData", allData);
    setTotalListNum(allData.data[1]);
    setTableData(allData.data[0]);
  }
  useEffect(() => {
    getData();
  }, [page, rowsPerPage]);
  // console.log(employeeId);
  console.log(tableData);
  if (tableData !== undefined) {
    console.log(tableData);
  } else {
    return;
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
                    <TableCell align="left">
                      {row.isActive ? "true" : "false"}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row-reverse" spacing={1}>
                        <AccountDeleteButton
                          id={row.employee_id}
                          getData={getData}
                        />
                        <AccountEditButton id={row.employee_id} />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalListNum}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
