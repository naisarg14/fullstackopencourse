import { useState } from 'react'

const Heading = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick} >{text}</button>
    )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good == 0 & neutral == 0 & bad == 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="All" value={good+neutral+bad}/>
        <StatisticLine text="Average" value={(good-bad)/(good+neutral+bad)}/>
        <StatisticLine text="Positive %" value={(good*100)/(good+neutral+bad)}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text="Give Feedback" />
      <Button text="Good" handleClick={() => {return setGood(good+1)}} />
      <Button text="Neutral" handleClick={() => {return setNeutral(neutral+1)}} />
      <Button text="Bad" handleClick={() => {return setBad(bad+1)}} />
      <Heading text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App