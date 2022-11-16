import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  // const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    props.setTableUpdate(false);
    props.setStatus(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.Stat}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"New"}>New</MenuItem>
          <MenuItem value={"Pending"}>Pending</MenuItem>
          <MenuItem value={"On Hold"}>On Hold</MenuItem>
          <MenuItem value={"In Processes"}>In Processes</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}