import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export const TableHeader = ({ columnNames }) => {
  return (
    <Stack direction='row'>
      {columnNames.map((columnName, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid black',
            padding: '0.5rem 1rem 0.5rem 1rem',
            width: '14rem',
          }}
        >
          <Typography>
            <strong>{columnName}</strong>
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default TableHeader;
