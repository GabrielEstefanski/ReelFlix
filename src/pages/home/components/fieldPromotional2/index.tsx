import styled from "styled-components"
import promotionalImage from '../../../../images/promotional-image2.png'

const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  height: 30rem;
  margin: 0 5%;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0 20%;
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

export default function FieldPromotional2() {
  return (
    <Conteiner>
      <DescriptionField>
        <Title>Baixe para assistir quando e onde quiser</Title>
        <Description>Assista offline no app Prime Video ao baixar títulos em seu iPhone, iPad, tablet ou dispositivo Android.</Description>
      </DescriptionField>
      <Photo>
        <img src={promotionalImage} alt="promotional"/>
      </Photo>
    </Conteiner>
  )
}