import styled from "styled-components"
import Quiz from "./Quiz"
import backgroundImage from "../assets/background.png"
import { useState } from "react"

const QuizList = () => {
  const optionsArray = [
    {
      firstQuestion: "Kuala lumpur is the capital of?",
      firstOptions: ["Vietnam", "Malaysia", "Sweden", "Austria"],
    },
  ]

  const [options, setOptions] = useState(optionsArray)

  const Container = styled.main`
    min-height: 100vh;
    width: 100%;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `

  return (
    <Container>
      <Quiz options={options} />
    </Container>
  )
}

export default QuizList
