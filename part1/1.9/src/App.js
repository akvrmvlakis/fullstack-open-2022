import { useState } from 'react'

const Header = props => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
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
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  )
}

const App = () => {

  const headers = {
    feedbackHeader: "Give Feedback",
  };

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>{headers.feedbackHeader}</h1>
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
      <Header
        header="Statistics"
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