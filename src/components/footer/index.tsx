import styled from "styled-components"

const Footer = styled.div`
  border-top: 2px solid #fff;
  padding: 20px;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  left: 0;
  bottom: 0;
`

export default function PageFooter() {
  return (
    <Footer>
      &copy; 2024 ReelsFlix. Todos os direitos reservados.
    </Footer>
  )
}