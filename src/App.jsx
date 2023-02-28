import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { EASY_DATA, MEDIUM_DATA, HARD_DATA } from './data'
import FlipCard from './components/FlipCard'

const easy = JSON.parse(EASY_DATA);
const medium = JSON.parse(MEDIUM_DATA);
const hard = JSON.parse(HARD_DATA);



function App() {
  const [data, setData] = useState(easy)
  const [questionIndex, setQuestionIndex] = useState(0)

  console.log(data);
  return (
      <div className="App">

            
        <h1>Food & Drink Quiz</h1>
        <p> This quiz has multiple questions with difficulties ranging from easy to hard. <br/>The questions and answers is from the <a href="https://the-trivia-api.com/" target="_blank">Trivia API</a></p>
        <p> Number of cards: {data.length}</p>


        {/* Difficulty Change buttons */}
        <button className="btn easy" onClick={() => setData(easy)}>Easy</button>
        <button className="btn med" onClick={() => setData(medium)}>Medium</button>
        <button className="btn hard" onClick={() => setData(hard)}>Hard</button>


        <FlipCard data={data[questionIndex]} key={questionIndex}/>
        
        {questionIndex > 0 && <button onClick={() => setQuestionIndex((questionIndex-1)%12)}>←</button>}
        <button onClick={() => setQuestionIndex((questionIndex+1)%12)}>→</button>
      </div>
  )
}

export default App
