import styled from "styled-components";

const Title = styled.h2`
  font-weight: 400;
`

const Container = styled.div`
text-align: center;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 3vh 10vw;
`

const Card = styled.div`
  background: radial-gradient(51.39% 511.66% at 47.68% -217.91%, rgb(195, 125, 22) 0%, 
  rgb(195, 125, 22) 17.27%, #ef8e00 79.44%, #fe7301 100%);
  color: #f5f5f5;
  background-position: center;
  border-radius: 4px;
  height: 10rem;
  padding-top: 20px;
`

const Description = styled.p`
  padding-top: 20px;
`

const LinkPlans = styled.a`
  color: #448ef4;
`

export default function PlanCard() {
  return (
    <Container>
      <Card>
        <Title>Assine agora</Title>
        <Description>
          Escolha o plano que mais se adeque a você a partir de R$ 19,99
        </Description>
        <Description>
          <LinkPlans href="/plan-form">Saiba Mais</LinkPlans>
        </Description>
      </Card>
    </Container>
  )
}