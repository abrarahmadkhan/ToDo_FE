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
import FilterSelect from "../Button/FilterButton";
import { useCallback } from "react";
// import { UserContext } from "../Context/Context";

export default function BasicTable() {
  const [tableData, setTableData] = useState();
  // const userDetails = React.useContext (UserContext);
  // console.log("🚀 ~ file: SignIn.js ~ line 47 ~ SignIn ~ userDetails", userDetails)
  // const [employeeId, setEmployeeId] = useState();
  const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth);
  // console.log("🚀 ~ file: BasicTable.js ~ line 21 ~ BasicTable ~ user", user);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // console.log(
  //   "🚀 ~ file: BasicTable.js ~ line 23 ~ BasicTable ~ rowsPerPage",
  //   rowsPerPage
  // );
  const [page, setPage] = useState(0);
  const [Stat, setStatus] = useState([]);
  // console.log("🚀 ~ file: BasicTable.js ~ line 25 ~ BasicTable ~ Stat", Stat);
  const [totalListNum, setTotalListNum] = useState();
  // console.log(
  //   "🚀 ~ file: BasicTable.js ~ line 27 ~ BasicTable ~ totalListNum",
  //   totalListNum
  // );

  const getData = useCallback( async () => {
    if (user.Position !== "Admin") {
      console.log("if Employee");
      const allData = await axios.post(
        `http://localhost:3000/employee/job/${user.userId}`,{
          page: page,
          rows: rowsPerPage,
          Status: Stat,
        });
      console.log("allData", allData);
      setTotalListNum(allData.data[1]);
      setTableData(allData.data[0]);
    } else {
      console.log("if Admin");
      const allData = await axios.post(`http://localhost:3000/list/`, {
        page: page,
        rows: rowsPerPage,
        Status: Stat,
      });
      console.log("allData", allData);
      setTotalListNum(allData.data[1]);
      setTableData(allData.data[0]);
    }
  }, [page, rowsPerPage, Stat, user.Position, user.userId])

  useEffect(() => {
    getData();
  }, [page, rowsPerPage, Stat, getData]);
  // console.log(tableData);
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
      <FilterSelect data={Stat} setStatus={setStatus} />
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
