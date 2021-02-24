import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const AnecdoteOfTheDay = ({ selected, votes }) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

const MostPopularAnecdote = ({ votes }) => {
  if (Math.max(...votes) < 1) {
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <p>No votes have been submited yet.</p>
      </div>
    )
  }

  let indexOfMaxValue = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[indexOfMaxValue]}</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const setRandomAnectode = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    return (
      setSelected(randomNumber)
    )
  }

  const updateVotes = () => {

    let votesCopy = [...votes]
    votesCopy[selected] += 1

    return (
      setVotes(votesCopy)
    )
  }

  return (
    <div>
      <AnecdoteOfTheDay selected={selected} votes={votes} />
      <Button handleClick={updateVotes} text="vote" />
      <Button handleClick={setRandomAnectode} text="next anecdote" />
      <MostPopularAnecdote votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)