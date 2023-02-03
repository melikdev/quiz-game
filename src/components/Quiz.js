import styled from "styled-components"
import image from "../assets/right_image.svg"

const Quiz = ({ options }) => {
  const Container = styled.main`
    min-height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  `
  const Wrapper = styled.section`
    position: relative;
  `

  const Header = styled.section`
    font-weight: 700;
    font-size: 36px;
    color: #fff;
  `

  const Image = styled.div`
    position: absolute;
    left: 300px;
    top: -20px;
  `

  const QuestionBox = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: #fff;
    width: 464px;
    height: 515px;
    border-radius: 24px;
  `
  const Question = styled.article`
    color: #2f527b;
    font-weight: 700;
    font-size: 24px;
  `
  const Options = styled.article`
    ul {
      display: flex;
      gap: 10px;
      flex-direction: column;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        color: #2f527b;
        font-weight: 500;
        font-size: 18px;
        height: 56px;
        width: 400px;
        border: 2px solid rgba(96, 102, 208, 0.7);
        border-radius: 12px;
      }
    }
  `

  return (
    <Container>
      <Wrapper>
        <Header>COUNTRY QUIZ</Header>
        <Image>
          <img src={image} alt="" />
        </Image>
        {options.map((option) => (
          <QuestionBox key={Math.random() * 100}>
            <Question>{option.firstQuestion}</Question>
            <Options>
              <ul>
                <li>A {option.firstOptions[0]}</li>
                <li>B {option.firstOptions[1]}</li>
                <li>C {option.firstOptions[2]}</li>
                <li>D {option.firstOptions[3]}</li>
              </ul>
            </Options>
          </QuestionBox>
        ))}
      </Wrapper>
    </Container>
  )
}

export default Quiz
