function primeCount(k) {
    const prime = [];
    
    // Verifica se um número é primo
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    
    // Itera de 2 até k e adiciona os primos ao array 'primos'
    for (let i = 2; i < k; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }
    
    return prime;
}

module.exports = primeCount;
