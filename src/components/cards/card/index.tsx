import styled from "styled-components";

interface Props {
  title?: string;
  inputField?: JSX.Element;
  footer?: JSX.Element;
}

const Container = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
  min-height: 650px;
  max-width: 450px;
  box-sizing: border-box;
  width: 100%;
`

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700; 
  color: #000000;
  padding: 15px 68px;
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 68px;
  gap: 16px;
`

const Footer = styled.span`
  display: flex;
  padding: 30px 68px;
`

export default function Card({ title, inputField, footer }: Props) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {inputField && <InputField>{inputField}</InputField>}
      {footer && <Footer>{footer}</Footer>}
    </Container>
  )
}