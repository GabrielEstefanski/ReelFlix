import styled from "styled-components";
import DefaultButton from "../../../components/buttons/DefaultButton";
import DefaultCache from "../components/defaultCache";
import HeaderPlan from "../components/headerPlan";
import StepTitle from "../components/stepTitle";
import Popcorn from "../../../images/popcorn.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  max-width: 600px;
  padding: 24px 28px;
  margin: 80px auto;
  box-size: border-box;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div`
  padding: 50px;
`

export default function SuccessPlan () {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handleMovies() {
    navigate('/movies', {replace: true});
  }
  return (
    <>
      <HeaderPlan />
      <Container>
        <DefaultCache>
          <StepTitle description={t('success_plan.title')} />
          <div>
            <ImageContainer>
              <img src={Popcorn} alt="A popcorn"/>
            </ImageContainer>
            <ButtonContainer>
              <DefaultButton
                description={t('success_plan.access')}
                onClick={handleMovies} 
                color='rgb(255, 124, 0)'
                style={{ fontSize: '1.5em', fontWeight: 700,  minHeight: '3.5rem'}}
              />
            </ButtonContainer>
          </div>
        </DefaultCache>
      </Container>
    </>
  )
}