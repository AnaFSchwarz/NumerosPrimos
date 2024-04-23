import React,  { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import axios from 'axios';

const Historical = (props) => {
    //const { result } = props;
    const [historical, setHistorical] = useState([]);

    useEffect(() => {
        const fetchHistorical = async () => {
            try {
                const response = await axios.get('http://localhost:5000/historical');
                setHistorical(response.data);
                console.log('result', response.data)
            } catch (error) {
                console.error(error);
                alert('Erro ao buscar primos.');
            }
        };

        fetchHistorical();
    }, [historical]);


    return(
        <Paper style={{ minHeight: 'calc(100vh - 64px)', backgroundColor: '#2196f3', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant="body1" style={{ color: '#fff', marginBottom: '50px' }}>
            Esta aplicação permite calcular o número de números primos menores que um número inteiro k.
            </Typography>  
            <Typography variant="h5" style={{  marginBottom: '20px' }}>
                Histórico das ultimas 10 consultas:
            </Typography>
            <ul>
                {historical && historical.map((consult, index) => (
                <li key={index}>
                    <Typography variant="body1">
                    Números primos menores que {consult.k} são: {consult.primeCount.join(', ')}
                    </Typography>
                </li>
                ))}
            </ul>

        </Paper>
    )
}

export default Historical;