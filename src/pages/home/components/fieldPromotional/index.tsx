import styled from "styled-components"
import fieldPromotional from "../../../../images/promotional-image.png"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  height: 30rem;
  border-bottom: 5px solid rgba(255, 255, 255, 0.1);
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 20%;
  }
`
const DescriptionField = styled.div`
  margin: 2rem 0 0;
  display: flex;
  margin: 0 auto;
  width: 100%;
  color: #fff;
  align-content: center;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  width: 650px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 650;
  }
`

const Description = styled.div`
  font-size: 1.5rem;
  padding-top: 1rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 90%;
  }
`

const Photo = styled.div`
  display: flex;
  margin: 2rem auto 0;
  width: 100%;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`

export default function FieldPromotional() {
  return (
    <Container>
      <DescriptionField>
        <Title>Assista a qualquer momento</Title>
        <Description>Baixe seus filmes e séries e assista offline na sua casa, no elevador, submarino ou espaço</Description>
      </DescriptionField>
      <Photo>
        <img src={fieldPromotional} alt="promotional"/>
      </Photo>
    </Container>
  )
}