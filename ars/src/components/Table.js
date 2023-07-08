import React from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { Stack } from '@mui/material';

const Table = ({ columnNames }) => {
  return (
    <Stack direction='column'>
      <TableHeader columnNames={columnNames} />
      <TableRow length={columnNames.length()} />
    </Stack>
  );
};

export default Table;
