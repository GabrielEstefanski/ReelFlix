import styled from "styled-components"
import HeaderPlan from "../components/headerPlan"
import StepTitle from "../components/stepTitle"

const Container = styled.div`
  max-width: 1100px;
  padding: 24px 38px;
  margin: 0px auto;
  box-size: border-box;
`

export default function SuccessPlan () {
  return (
    <>
      <HeaderPlan />
      <Container>
      <StepTitle description="Tudo certo! Você terá acesso a milhares de filmes e séries" />
        123
      </Container>
    </>
  )
}