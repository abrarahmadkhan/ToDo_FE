import { Box } from "@mui/system";
import * as React from "react";
import ResponsiveAppBar from "../../components/Header/NewHeader";
import AccountTable from "../../components/Table/AccountTable";

export default function AccountPage() {
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
      <AccountTable/>
    </Box>
  );
}
