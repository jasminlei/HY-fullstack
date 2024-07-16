import { useState } from 'react'

const Title = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ stat, value }) => {
  return (
    <tr>
      <td>{stat}</td>
      <td>{value}</td>
    </tr>

  )
}

const Statistics = ({ good, neutral, bad, all, average, positivePercent }) => {

  if (good + neutral + bad === 0) {
    return <div>No statistics</div>
  }
  return (
    <table>
      <tbody>
        <StatisticLine stat="good" value={good} />
        <StatisticLine stat="neutral" value={neutral} />
        <StatisticLine stat="bad" value={bad} />
        <StatisticLine stat="all" value={all} />
        <StatisticLine stat="average" value={average} />
        <StatisticLine stat="positive" value={`${positivePercent} %`} />
      </tbody>
    </table>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averageValue, setAverageValue] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercent, setPositivePercent] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedAll = all + 1
    setAll(updatedAll)
    const updatedAverageValue = averageValue + 1
    setAverageValue(updatedAverageValue)
    setAverage(updatedAverageValue / updatedAll)
    setPositivePercent(updatedGood / updatedAll * 100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    const updatedAll = all + 1
    setAll(updatedAll)
    const updatedAverageValue = averageValue
    setAverageValue(updatedAverageValue)
    setAverage(updatedAverageValue / updatedAll)
    setPositivePercent(good / updatedAll * 100)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    const updatedAll = all + 1
    setAll(updatedAll)
    const updatedAverageValue = averageValue - 1
    setAverageValue(updatedAverageValue)
    setAverage(updatedAverageValue / updatedAll)
    setPositivePercent(good / updatedAll * 100)
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positivePercent={positivePercent} />
    </div >
  )
}

export default App