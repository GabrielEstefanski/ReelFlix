import { useEffect } from 'react';
import styled from "styled-components"
import LoginCard from '../../components/cards/loginCard';

import icon from '../../images/icon.png'

const Image = styled.div`
  justify-content: center;
  width: 100%;
  padding: 20px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`

export default function Login() {

  useEffect(() => {
    document.body.style.backgroundImage = 'url("https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
    };
  }, []);

  return (
    <Container>
        <Image>
          <img src={icon} alt="" />
        </Image>
      <LoginCard />
    </Container>
  )
}