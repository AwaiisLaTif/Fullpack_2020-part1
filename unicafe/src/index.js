import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const { text, handleClick } = props;
  return (<button onClick={handleClick}>{text}</button>);
}

const Statistic = (props) => {
  const { text, value } = props;
  return (<tr><td>{text}</td><td>{value}</td></tr>)
}

const Statistics = (poprs) => {
  const { good, bad, neutral, all, average, positive } = poprs;
  if (all === 0) {
    return (<div>
      <h1>Statistics</h1>
      <p>No feedback is given</p>
    </div>);
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>)

}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral;


  const handleGood = () => {
    let good_ = good + 1;
    setGood(good_);

  }
  const handleNeutral = () => {
    let neutral_ = neutral + 1;
    setNeutral(neutral_);
  }
  const handleBad = () => {
    let bad_ = bad + 1;
    setBad(bad_);

  }
  const getPositivePercentage = () => {
    if (all === 0) {
      return 0 + '%';
    }
    let percentage = (good / all) * 100 + '%';
    return percentage;
  }
  const getAverage = () => {
    if (all === 0) {
      return 0;
    }
    let average = (good - bad) / all;
    return average
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={getAverage()} positive={getPositivePercentage()} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)