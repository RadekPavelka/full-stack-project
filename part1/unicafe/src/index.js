import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({text, count}) => {  
  return (
    <div>{text} {count}</div>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const getTotal = () => (good + neutral + bad)
  const getAverage = () => (good*1 + neutral*0 + bad*-1) / getTotal()
  const getPositivePercentage = () =>  `${good / getTotal() * 100} %`

  return (
  <div>
    <h2>Statistics</h2>
    <Display text="good" count={good} />
    <Display text="neutral" count={neutral} />
    <Display text="bad" count={bad} />
    <Display text="all" count={getTotal()} />
    <Display text="average" count={getAverage()} />
    <Display text="positive" count={getPositivePercentage()} />
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  

  //const addGood = () => setGood(good + 1) 
  //const addNeutral = () => setNeutral(neutral + 1) 
  //const addBad = () => setBad(bad + 1) 

  return (
    <div>
      <h2>Give feedback</h2>
     <Button handleClick={()=> setGood(good + 1)} text="good" />
     <Button handleClick={()=> setNeutral(neutral + 1)} text="neutral" />
     <Button handleClick={()=> setBad(bad + 1)} text="bad" />
     <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>


  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)