import { useState } from 'react'
import './App.css'

const cardArr = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library used to build fast and interactive user interfaces.",
    isFlip: false,
  },
  {
    id: 2,
    question: "HTML stands for?",
    answer: "Hyper Text Markup Language.",
    isFlip: false,
  },
  {
    id: 3,
    question: "CSS stands for?",
    answer: "Cascading Style Sheets.",
    isFlip: false,
  },
  {
    id: 4,
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to make web pages interactive.",
    isFlip: false,
  },
  {
    id: 5,
    question: "What is JSX in React?",
    answer: "JSX is a syntax extension that allows writing HTML inside JavaScript.",
    isFlip: false,
  },
  {
    id: 6,
    question: "What is a component in React?",
    answer: "A component is a reusable piece of UI in a React application.",
    isFlip: false,
  },
  {
    id: 7,
    question: "What is useState in React?",
    answer: "useState is a React Hook used to manage state in functional components.",
    isFlip: false,
  },
  {
    id: 8,
    question: "What is props in React?",
    answer: "Props are used to pass data from one component to another.",
    isFlip: false,
  },
  {
    id: 9,
    question: "What is the purpose of useEffect?",
    answer: "useEffect is used to handle side effects like API calls and updating the DOM.",
    isFlip: false,
  },
];

const card = {
  width: "33%",
  height: "183px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

function App() {
  const [flashCardArr, setflashCardArr] = useState(cardArr);
  const [isFlip, setIsFlip] = useState(false);

  const flipHandler = (id) => {
    console.log(id, "==> id")

    const newCardArr = flashCardArr.map((element) => {
      if (element.id == id) {
        return {
          ...element,
          isFlip: !element.isFlip
        }
      }
      return {
        ...element,
        isFlip: false,
      }
    })
    setflashCardArr(newCardArr)
  }

  return (
    <div id='mainContainer'>
      {
        flashCardArr.map((element) => {
          return (
            <div className="flashCard" style={{
              ...card,
              backgroundColor: element.isFlip ? "red" : "lightgray",
              color: element.isFlip ? "white" : "black",

            }} key={element.id} onClick={() => flipHandler(element.id)}>
              <h4>{element.isFlip ? element.answer : element.question}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default App