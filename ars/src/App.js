import React from 'react';
import GHTable from './components/GHTable';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <GHTable />
    </Stack>
  );
}

export default App;
