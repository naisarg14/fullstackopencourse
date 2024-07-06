import { useState } from 'react'


const Heading = ({text}) => {
  return (
      <h1>{text}</h1>
  )
}


const Button = ({text, handleClick}) => {
  return (
      <div>
        <button onClick={handleClick} >{text}</button>
      </div>
  )
}

const DisplayVote = ({votes}) => {
  return (
    <div>
      Has {votes} Votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allClicks, setAll] = useState(Array(anecdotes.length).fill(0))

  const randValue = () => {
    let x = Math.floor(Math.random() * (anecdotes.length))
    setSelected(x)
  }

  const voteAnecdote = () => {
    const copy = [...allClicks]
    copy[selected] += 1
    setAll(copy)
  }

  const bestQuote = () => {
    let max = allClicks[0];
    let maxIndex = 0;

    for (let i = 0; i < allClicks.length; i++) {
        if (allClicks[i] > max) {
            maxIndex = i;
            max = allClicks[i];
        }
    }
    return maxIndex;
  }

  return (
    <div>
      <Heading text="Anecdote of the Day" />
      {anecdotes[selected]}
      <DisplayVote votes={allClicks[selected]} />
      <Button text="Vote Anecdote" handleClick={() => {voteAnecdote()}} />
      <Button text="Next Anecdote" handleClick={() => {randValue()}} />

      <Heading text="Anecdote with most Votes" />
      {anecdotes[bestQuote()]}
      <DisplayVote votes={allClicks[bestQuote()]} />
    </div>
  )
}

export default App