const express = require('express');

const router = express.Router();

const calculatePrimes = require('./primeCount');


let queryHistoric = [];

router.post('/calculate', async (req, res) => {
  const k = req.body.k;

  if (!k || isNaN(k) || k <= 0) {
    return res.status(400).send({ error: 'Valor de k inválido.' });
  }

  const primeCount = calculatePrimes(k);

  const result = {
    k: k,
    primeCount: primeCount
  };

  queryHistoric.push(result);

  // Mantém apenas as últimas 10 consultas no histórico
  if (queryHistoric.length > 10) {
    queryHistoric = queryHistoric.slice(-10);
  }

  res.json(result);
});

router.get('/historical', (req, res) => {
    res.json(queryHistoric);
  });

module.exports = router;
