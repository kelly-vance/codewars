// The following coding challenge is from: 
//      https://www.codewars.com/kata/5a045fee46d843effa000070/train/javascript

// The aim of the kata is to decompose n! (factorial n) into its prime factors.

// Examples:

// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes

// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
// factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
function isPrime(n){
    for(let i = 2; i <= n**0.5; i++){
      if(n % i === 0){
        return false
      }
    }
    return true
  }
  
  function primeFactorization(num){
    // return array of prime factors
    let primeFactors = []
    while(num > 1){
      let factor
      if(isPrime(num)){
        factor = num
      }
      else{
        let i = 2
        while(num % i != 0){
          i++
        }
        factor = i
      }
      num = num / factor
      primeFactors.push(factor)
    }
    return primeFactors
  }
  
  function decomp(n) {
    let primeFactorCounts = {}
    
    for(let i = n; i > 1; i--){
      let primeFactors = primeFactorization(i)
      for(let i = 0; i < primeFactors.length; i++){
        if(primeFactors[i] in primeFactorCounts){
          primeFactorCounts[primeFactors[i]]++
        }
        else{
          primeFactorCounts[primeFactors[i]] = 1
        }
      }
    }
    
    let resultTerms = []
    for(factor in primeFactorCounts){
      if(primeFactorCounts[factor] == 1){
        resultTerms.push(factor.toString())
      }
      else{
        resultTerms.push(`${factor.toString()}^${primeFactorCounts[factor].toString()}`)
      }
    }
    
    return resultTerms.join(' * ')
  }