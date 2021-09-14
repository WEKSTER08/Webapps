import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { getQuizQuestions } from './API';
import { Difficulty } from './API';
const TOTAL_NUMBER = 10;
const App = () => {
   const [loading, setloading] = useState(false);
   const [questions,setQuestions] = useState([]);
   const [number, setNumber] = useState(0);
   const [useranswers, setUseranswers] = useState([]);
   const [score, setScore] = useState(0);
   const [gameover, setGameover] = useState(true);

   console.log(getQuizQuestions(TOTAL_NUMBER,Difficulty.EASY));

  const startQuiz = async () => {}
  const verifyAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}
  const nextQuestion = () =>{}
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className = "start" onClick = {startQuiz}>
        start
      </button>
      <p className = "Score">Score :</p>
      <p>Loading up..Hold on</p>
      {/* <QuestionCard 
        questionNr = {number +1}
        totalQuestions = {TOTAL_NUMBER}
        question = {questions[number].question}
        answers = {questions[number].answers}
        userAnswer = {useranswers ? useranswers[number] : undefined}
        callback = {verifyAnswer}
      /> */}
      <button className = "Next" onClick = {nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

//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