

export default function FlipCard({data}) {
    
    let choices = [...data.incorrectAnswers, data.correctAnswer]

    // Shuffle array to avoid having correct answer in the same spot
    choices.sort(() => Math.random() - 0.5)

    return (
      <>
        <div className="flip-card">

          <div className="flip-card-inner">
            <div className="flip-card-front">
                <h2>{data.question}</h2>

                <div className="incorrectAnswers">
                    {choices.map( answer => <p>{answer}</p>)}
                </div>
            </div>

            <div className="flip-card-back">
              <p>{data.correctAnswer}</p>
            </div>

          </div>

        </div>
      </>
    )
}