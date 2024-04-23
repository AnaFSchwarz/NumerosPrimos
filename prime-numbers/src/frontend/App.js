import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Box, ThemeProvider, Container, Grid, Paper } from '@mui/material';

import FormPage from './components/form';
import Historical from './components/historical';

function App() {

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 20 }}></Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={7}> 
            <Historical/>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>          
            <FormPage/>
          </Grid>          
        </Grid>
      <Container/>
    </>
  );
}

export default App;
