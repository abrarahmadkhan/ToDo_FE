import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import CreateButton from "../../components/Button/CreateButton";
import ResponsiveAppBar from "../../components/Header/NewHeader";
import BasicTable from "../../components/Table/BasicTable";

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
      <Box sx={{ my: 2, px: 2 }}>
        <Typography textAlign="right">
          <CreateButton />
        </Typography>
      </Box>
      <BasicTable />
    </Box>
  );
}
