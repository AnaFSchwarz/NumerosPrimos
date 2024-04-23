import React,  { useState } from 'react';
import { Paper } from '@mui/material';
import axios from 'axios';

import Form from './form';

const FormPage = () => {
    const [k, setK] = useState('');
    const [result, setResult] = useState(0);

    const handleInputChange = (event) => {
        setK(event.target.value);
    };

    const handleCalculatePrimes = async () => {
        if (!k || isNaN(k) || k <= 0) {
        alert('Valor de k inválido.');
        return;
        }

        try {
        const response = await axios.post('http://localhost:5000/calculate ', { k });
        setResult (response.data);
        console.log(response.data)
        } catch (error) {
        console.error(error);
        alert('Erro ao calcular primos.');
        }
    };

    return(
        <Paper style={{ minHeight: 'calc(100vh - 64px)', backgroundColor: '#fff', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Form k ={k} handleCalculatePrimes = {handleCalculatePrimes} handleInputChange={handleInputChange}/>
            {result && (
            <div className="result" style={{ textAlign: 'center' }}>
                <p>Números primos menores que {result.k} são: {result.primeCount.join(', ')}</p>
            </div>
            )}
        </Paper>
    )
}

export default FormPage;