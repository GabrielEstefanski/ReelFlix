import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Title = styled.h3`
  font-weight: 500;
  font-size: 1.25rem;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Container = styled.div`
  -webkit-flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  flex-direction: row;
  align-items: center;
  padding: 0.88rem 1.5em;
  -webkit-transition: opacity 0.5s cubic-bezier(0.33, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.33, 0, 0, 1);
`;

const Card = styled.div`
  background: linear-gradient(127deg, #6d3a14, #9f882b);
  display: flex;
  overflow: hidden;
  z-index: 0;
  border-radius: 20px;
  color: #f5f5f5;
  background-position: center;
  height: auto;
  position: relative;
  transition: transform 0.5s ease, opacity 0.5s ease;
  padding: 1rem;

  &:hover {
    opacity: 1;
    content: '';
    transform: scale(1.03);
    width: 100%;
    height: 100%;
    background: linear-gradient(127deg, #8b4410, #e0b609);
    z-index: 1;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente o conteúdo no meio */
  justify-content: space-between;
  width: 100%;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding-top: 10px;
  margin: 0;
`;

const LinkPlans = styled(Link)`
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  fill: currentColor;
  margin-left: 1rem;
  border: 0;
  font-weight: 500;
  font-size: 1rem;
  min-height: 2.5rem;
  padding: 0.375rem 1rem;
  background: rgb(0 0 0 / 40%);
  text-decoration: none;
  transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
`;

export default function PlanCard() {
  const { t } = useTranslation();

  return (
    <Container>
      <Card>
        <Item>
          <TitleContainer>
            <Title>{t('subscribe_now')}</Title>
            <Description>{t('choose_plan')}</Description>
          </TitleContainer>
          <LinkPlans to="plan-form">{t('learn_more')}</LinkPlans>
        </Item>
      </Card>
    </Container>
  );
}
