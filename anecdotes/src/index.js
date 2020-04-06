import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Anecdote from './components/anecdote.component'
import Button from './components/Button.component'


const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(6));
  const [maxVoteIndex, setMaxVoteIndex] = useState(0);

  const setRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    setSelected(randomIndex);
  }

  const handleVote = () => {
    let copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    const maxIndex = copy.indexOf(Math.max(...copy));
    setMaxVoteIndex(maxIndex);
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdotes={anecdotes} selected={selected} points={points} />
      <Button text="vote" handleClick={handleVote}/>
      <Button text="next anecdotes" handleClick={setRandomIndex}/>
      <Anecdote title="Anecdote with most votes" anecdotes={anecdotes} selected={maxVoteIndex} points={points} />
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