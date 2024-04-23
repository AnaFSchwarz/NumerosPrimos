import * as React from 'react';
import { TextField, Typography, Button } from '@mui/material';

export default function Form(props) {
  const {k, handleInputChange, handleCalculatePrimes} = props

    return (
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Números Primos
        </Typography>
        <TextField variant="outlined"
          fullWidth style={{ marginBottom: '20px' }} 
          label="Valor de k" 
          value={k}
          onChange={handleInputChange}
          />        
        <Button variant="contained" onClick={handleCalculatePrimes} style={{ marginRight: '10px' }}>
          Calcular
        </Button>
      </div>
    );
  }