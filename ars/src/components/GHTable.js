import React, { useState, useEffect } from 'react';
import GHTableRow from './GHTableRow';
import { Stack, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TableHeader from './TableHeader';
import dayjs from 'dayjs';

const GHTable = () => {
  const defaultRow = {
    startDate: dayjs(Date.now()),
    endDate: dayjs(Date.now()),
    quality: 'good',
  };

  const [rows, setRows] = useState([defaultRow]);

  const addRow = () => {
    setRows((previousState) => {
      return [...previousState, defaultRow];
    });
  };

  useEffect(() => {
    console.log(rows);
  }, [rows]);

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ marginTop: '1rem' }}
    >
      <Box>
        <TableHeader columnNames={['Start Date', 'End Date', 'Quality']} />
        {rows.map((row, index) => (
          <GHTableRow key={index} index={index} rows={rows} setRows={setRows} />
        ))}
      </Box>
      <Button
        variant='contained'
        color='primary'
        startIcon={<AddIcon sx={{ marginLeft: '0.75rem' }} />}
        onClick={() => addRow()}
        sx={{ marginTop: '1rem' }}
      />
    </Stack>
  );
};

export default GHTable;
