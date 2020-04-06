import React from 'react'
const Anecdote = (props) => {
    const { title, anecdotes, points, selected } = props;
    return (
      <div> <h1>{title}</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        </div>
    )
  }

export default Anecdote;
