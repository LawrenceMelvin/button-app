import React,{ useState } from 'react'
import './Formstyle.css'

const PrimeorNot = () => {
  const[number, setNumber] = useState()
  const getNumber = (e) => {
    const num = e.target.value
    setNumber(num)
  }
  function isPrime(n){
    // Corner case
    if (n <= 1)
        return false;
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
  }
  return (
    <div>
      <form className="formDetails">
        Enter the number<input type="number" maxLength='5' onChange={getNumber} />
        <h3>{isPrime(number) ? "Prime" : "Not Prime"}</h3>
      </form>
    </div>
  )
}

export default PrimeorNot
