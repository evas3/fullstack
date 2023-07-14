import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value} </td>
    </tr>
  )
}

const Statistics = (props) => {
  if ((props.good+props.bad+props.neutral) > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.good+props.bad+props.neutral} />
          <StatisticLine text="average" value={(props.good*1+props.bad*(-1))/(props.good+props.bad+props.neutral)} />
          <StatisticLine text="positive" value={props.good/(props.good+props.bad+props.neutral)*100 + " %"} />
        </tbody>
      </table>
    )
  }
  return (
    <div>
        <p>No feedback given</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
