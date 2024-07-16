import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const MostVotes = ({ votes, anecdotes }) => {
  const maxVotes = Math.max(...votes);
  const maxIndex = votes.indexOf(maxVotes);
  return (
    <div>
      <div>{anecdotes[maxIndex]}</div>
      <div>has {maxVotes} votes</div>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))


  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * 8)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Title title="Anecdote of the day" />
      <div>
        {anecdotes[selected]}
      </div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNextAnecdote} text="next anecdote" />
      <Title title="Anecdote with most votes" />
      <MostVotes votes={votes} anecdotes={anecdotes} />


    </div>

  )
}

export default App