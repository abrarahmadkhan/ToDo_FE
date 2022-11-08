import { Box } from "@mui/system";
import * as React from "react";
import ResponsiveAppBar from "../../components/Header/NewHeader";
import BasicTable from "../../components/Table/table";

export default function HomePage() {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     });
  //   };

  return (
    <Box>
      <ResponsiveAppBar />
      <BasicTable />
    </Box>
  );
}
