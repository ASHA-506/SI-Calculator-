
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  // create state to store data
  const [interest, setInterest] = useState(0)
  const [Principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [principleAmountValid, setPrincipleAmountValid] = useState(true)
  const [rateAmountValid, setRateAmountValid] = useState(true)
  const [yearAmountValid, setYearAmountValid] = useState(true)


  console.log(Principle);
  const handleReset = () => {
    // reset all states
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }

  const handleValidation = (tag) => {
    console.log("Inside handle validation");
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))
    // valid
    if (!!value.match(/^\d*.?\d+$/)) {
      if (name == "Principle") {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      }
      else if (name == "rate") {
        setRate(value)
        setRateAmountValid(true)
      }
      else {
        setYear(value)
        setYearAmountValid(true)
      }
    }
    // invalid
    else {
      if (name == "Principle") {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }
      else if (name == "rate") {
        setRate(value)
        setRateAmountValid(false)
      }
      else {
        setYear(value)
        setYearAmountValid(false)
      }
    }
  }


const handleCalculate = () => {
  if (Principle && rate && year) {
    setInterest(Principle*year*rate/100)
  }
  else {
    alert("Please fill the form completely")
  }
}

return (
  <div style={{ width: "100%", height: "100vh" }} className='d-flex justify-content-center
    align-items-center bg-dark'>nom
    <div style={{ width: "600px" }} className='bg-light p-5 rounded shadow'>
      <h3>SIMPLE INTEREST APP</h3>
      <p>Calculate Your Simple Interest Easily</p>
      <div className="d-flex justify-content-center align-items-center bg-warning rounded shadow flex-column text-light">
        <h1>₹ {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
      </div>
      <form className='mt-5'>
        <div className='mb-3'>
          <TextField className="w-100" id="outlined-basic" label="₹ Principle Amount" variant="outlined" value={Principle || ""}
            name='Principle' onChange={e => handleValidation(e.target)} />
        </div>
        {!principleAmountValid && <div className="text-danger mb-3">*Invalid User Input</div>}
        <div className='mb-3'>
          <TextField className="w-100" id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" value={rate || ""}
            name='rate' onChange={e => handleValidation(e.target)} />

        </div>
        {!rateAmountValid && <div className="text-danger mb-3">*Invalid Rate Input</div>}
        <div className='mb-3'>
          <TextField className="w-100" id="outlined-basic" label="Time Period (yr)" variant="outlined" value={year || ""}
            name='year' onChange={e => handleValidation(e.target)} />

        </div>
        {!yearAmountValid && <div className="text-danger mb-3">*Invalid Year</div>}


        <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid}
            style={{ width: "50%", height: "70px" }} className='bg-dark' variant="contained">CALCULATE</Button>
          <Button onClick={handleReset} style={{ width: "50%", height: "70px" }} variant="outlined">RESET</Button>
        </Stack>
      </form>

    </div>



  </div>
)
}

export default App
