import { useState } from 'react'

const App = () => {
  const headers = {
    feedbackHeader: "Give Feedback",
    statisticsHeader: "Statistics",
  };

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Display = ({ counter }) => <div><p>good {good}</p><p>neutral {neutral}</p><p>bad {bad}</p></div>
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
      <h1>{headers.statisticsHeader}</h1>
      <Display counter={Display} />
    </div>
  )
}

export default App