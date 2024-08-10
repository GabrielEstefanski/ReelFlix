import styled from "styled-components";
import HeaderPlan from "../components/headerPlan";
import StepIndicator from "../components/stepIndicator";
import StepTitle from "../components/stepTitle";
import LoginFieldPlan from "../components/loginFieldPlan";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 1100px;
  padding: 24px 38px;
  margin: 0px auto;
  box-size: border-box;
`

const ContextRow = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  padding-top: 1rem;
`

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 440px;
  text-align: left;
`
  
const SelectedPlanText = styled.span`
  font-weight: bold;
  color: #fff;
`

export default function LoginPlan() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const plan = localStorage.getItem('selectedPlan');
    setSelectedPlan(plan);
  }, []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderPlan />
      <Container>
        <form onSubmit={handleFormSubmit}>
        <FormContainer>
          <StepIndicator description="PASSO 2 DE 3" />
          <StepTitle description="Crie uma senha para iniciar sua assinatura" />
            <ContextRow>
              <p>Você selecionou o plano <SelectedPlanText>{selectedPlan}</SelectedPlanText>.</p>
              <p>Falta pouco agora!</p>
            </ContextRow>
          <LoginFieldPlan/>
        </FormContainer>
        </form>
      </Container>
    </>
  )
}