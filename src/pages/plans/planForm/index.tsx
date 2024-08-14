import styled from "styled-components";
import HeaderPlan from "../components/headerPlan";
import DefaultCache from "../components/defaultCache";
import StepIndicator from "../components/stepIndicator";
import DefaultButton from "../../../components/buttons/DefaultButton";
import StepTitle from "../components/stepTitle";
import FormPlanSelection from "../components/formPlanSelection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  max-width: 1100px;
  padding: 24px 38px;
  margin: 0px auto;
  box-sizing: border-box;
`

const ButtonNextContainer = styled.div`
  margin: 20px auto;
  max-width: 440px;
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
        <DefaultCache>
          <StepIndicator description="PASSO 1 DE 3" />
          <StepTitle description="Escolha o melhor plano para você" />
          <FormPlanSelection setSelectedPlan={setSelectedPlan} />
          <>
            <ButtonNextContainer>
              <DefaultButton 
                description="Próximo"
                color="rgb(255, 124, 0)"
                style={{ fontSize: '1.5em', fontWeight: 700,  minHeight: '3.5rem'}}
                onClick={planPath}
              />
            </ButtonNextContainer>
          </>
        </DefaultCache>
      </Container>
    </>
  )
}
