import React from 'react'
import { useState, useEffect } from 'react'
import Main from './components/Main'





const App = () => {
  const [currencyData, setCurrencyData] = useState([])
 let currencyName = Object.keys(currencyData)
 let currencyValue = Object.values(currencyData)
 const [amount, setAmount] = useState("")
 const [rate, setRate] = useState("")
 const [showOperation, setShowOperation] = useState([])

 



useEffect(() => {
 
  fetch('https://redterrex.onrender.com/users/finance')
  .then(response => response.json())
	.then(response => setCurrencyData(response.finance))
	.catch(err => console.error(err))
      
    }, [])
    const operations = [
      { type: "Income", amount: amount, rate: rate },
      { type: "Expense", amount: amount, rate: rate },
      
    ];
   



console.log(showOperation)
    
  return (
    <div style={{minHeight: '100vh'}}>
   
    <Main 
    currencyName={currencyName}
    currencyValue={currencyValue}
    operations={operations}
    
    showOperation={showOperation}
    setShowOperation={setShowOperation}
    
    />
    </div>
  
  )
}

export default App