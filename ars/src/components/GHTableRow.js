import React from 'react';
import { Box, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const GHTableRow = ({ index, rows, setRows }) => {
  const row = rows[index];

  const setStartDate = (newValue) => {
    setRows((previousState) => {
      const newState = [...previousState];
      newState[index].startDate = newValue;
      return newState;
    });
  };

  const setEndDate = (newValue) => {
    setRows((previousState) => {
      const newState = [...previousState];
      newState[index].endDate = newValue;
      return newState;
    });
  };

  const handleChange = (event) => {
    setRows((previousState) => {
      const newState = [...previousState];
      newState[index].quality = event.target.value;
      return newState;
    });
  };

  return (
    <Stack direction='row'>
      <DatePicker
        label=''
        value={row.startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        label=''
        value={row.endDate}
        onChange={(date) => setEndDate(date)}
      />
      <FormControl sx={{ width: '16rem' }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={row.quality}
          label=''
          onChange={handleChange}
        >
          <MenuItem value={'good'}>Good</MenuItem>
          <MenuItem value={'fair'}>Fair</MenuItem>
          <MenuItem value={'poor'}>Poor</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default GHTableRow;
