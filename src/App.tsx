import React from 'react';
import './App.css';

import ChartComponent from './components/chart';
import TableComponent from './components/agtable';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Container sx={{mt: 5}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <ChartComponent />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <TableComponent />
        </Grid>
       </Grid>
    </Container>
  );
}

export default App;
