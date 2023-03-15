import {useState} from 'react';

export default function FlipCard({data}) {

    
    let choices = [...data.incorrectAnswers, data.correctAnswer];
    const correctAnswer = data.correctAnswer.toLowerCase().trim();
    const [guess, setGuess] = useState("");
    const [submit, setSubmit] = useState(false);
    const [answer, setAnswer] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false)

    // Shuffle array to avoid having correct answer in the same spot
    // choices.sort(() => Math.random() - 0.5)


    function handleSubmit() {
        setSubmit(true);
        setAnswer(true);
        console.log(correctAnswer);
        setIsCorrect(guess == correctAnswer.toLowerCase());
        
      
    }

    return (
      <>
        <div className={"flip-card " + (submit ? "" : "disabled")}>

          <div className={`flip-card-inner ${(answer) ? (isCorrect ? "correct" : "wrong"): ""}`}>
            <div className="flip-card-front">
                <h2>{data.question}</h2>

                <div className="incorrectAnswers">
                    {choices.map( (answer, index) => <p key={index}>{answer}</p>)}
                </div>
            </div>

            <div className="flip-card-back">
              <p>{data.correctAnswer}</p>
            </div>

          </div>

        </div>
        <div className="guess-input">
            <input type="text" id="guess" value={guess} onChange={e => setGuess(e.target.value.trim())} placeholder="Enter Guess here..."required/>
            <button type="submit" onClick={handleSubmit}>Submit Guess</button>
        </div>
      </>
    )
}