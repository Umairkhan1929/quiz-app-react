import { useState } from "react"

function App() {
    
  const [currentQuestion, SetCurrentQueston] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const question = [
    {
      
      question: 'Q1:  Where dose sun rise?',
      options: ['East', 'West', 'North', 'South'],
      correctAnswer: 'East'
    },

    {
      question: 'Q2: Capital of Pakistan?',
      options: ['Peshawar', 'Islamabad', 'Karachi', 'Lahore'],
      correctAnswer: 'Islamabad'
    },

    {
      question: 'Q3: How many times human heart beat in one minute?',
      options: [64,83,72,78],
      correctAnswer: 72
    },

    {
      question: 'Q4: Who discovered the first computer?',
      options: ['Charles Babbage','Ada Lovelace','Konrad Zuse','Zlan Turing'],
      correctAnswer: 'Charles Babbage'
    },

    {
      question: 'Q5: who discovered React.js?',
      options: ['Brendan Eich','Mark Zuckerberg','John Resig','Jordan Walke'],
      correctAnswer: 'Jordan Walke'
    },
  ]

  function handleOptionClick(selectedOption){
    if(selectedOption === question[currentQuestion].correctAnswer){
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if(nextQuestion < question.length){
      SetCurrentQueston(nextQuestion)
    }else{
      setShowScore(true)
    }
  }
  
  return (
    <div className="root-container">
      <h1 className="main-heading">Quiz Application</h1>

      {showScore ? (
        <p>You got {score} questions right out of {question.length}.</p>
        ):(
          <>

      <h3 className="current-question">{question[currentQuestion].question}</h3>

      <div className="option-container">
      {question[currentQuestion].options.map((option,index)=>{return <button key={index} onClick={()=>handleOptionClick(option)}>{option}</button>
      })}

      </div>
      </>
      )}
    </div>
  )
}

export default App
