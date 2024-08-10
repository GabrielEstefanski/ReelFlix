import styled from "styled-components";
import HeaderPlan from "../components/headerPlan";
import StepIndicator from "../components/stepIndicator";
import StepTitle from "../components/stepTitle";
import FormPlanSelection from "../components/formPlanSelection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  max-width: 1100px;
  padding: 24px 38px;
  margin: 0px auto;
  box-size: border-box;
`

const ButtonNextContainer = styled.div`
  margin: 20px auto;
  max-width: 440px;
`

const ButtonNext = styled.button`
  width: 100%;
  background: rgb(255, 124, 0);
  margin: 0;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  min-height: 3.5rem;
`


export default function Plans() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');

  const planPath = () => { 
    navigate('/login-plan', { replace: true, state: { selectedPlan } });
  };
 
  return (
    <>
      <HeaderPlan />
      <Container>
        <StepIndicator description="PASSO 1 DE 3" />
        <StepTitle description="Escolha o melhor plano para você" />
        <FormPlanSelection setSelectedPlan={setSelectedPlan} />
        <>
          <ButtonNextContainer>
            <ButtonNext className="button" onClick={planPath}>Próximo</ButtonNext>
          </ButtonNextContainer>
        </>
      </Container>
    </>
  )
}