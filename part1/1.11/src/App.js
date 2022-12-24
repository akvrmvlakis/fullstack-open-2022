import { useState } from 'react'

const Header = props => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = props => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Feedback = props => {
  return (
    <div>
      <h1>{props.feedback}</h1>
    </div>
  )
}

const StatisticLine = props => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = props => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <td><StatisticLine text="good" value={props.good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="neutral" value={props.neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad" value={props.bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="all" value={props.all} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="average" value={props.average} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="positive" value={props.positive} /></td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header
        header="Give feedback"
      />
      <Button
        onClick={increaseGood}
        text='Good'
      />
      <Button
        onClick={increaseNeutral}
        text='Neutral'
      />
      <Button
        onClick={increaseBad}
        text='Bad'
      />
      <Feedback
        feedback="Statistics"
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good - bad) / (good + bad + neutral)}
        positive={good / (good + neutral + bad) * 100}
      />
    </div>
  )
}

export default App