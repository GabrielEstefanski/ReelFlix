import { useState, useEffect } from "react";
import styled from "styled-components";
import FloatLabel from "../../../../components/floatLabel";
import DefaultButton from '../../../../components/buttons/DefaultButton';
import CheckBox from "../../../../components/checkbox";
import Card from "../../../../components/cards/card";
import { useNavigate } from "react-router-dom";

const Span = styled.a`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export default function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');
      const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

      if (savedEmail) setEmail(savedEmail);
      if (savedPassword) setPassword(savedPassword);
      if (savedRememberMe) setRememberMe(savedRememberMe)
    }
  }, [])

  function handlePlan() {
    navigate('/login-plan', {replace: true});
  }

  function handleLogin() {
    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('rememberMe');
    }
    navigate('/movies', { replace: true});
  }

  return (
    <Card
      title="Recuperar senha"
      inputField={
        <>
          <FloatLabel
            type="email"
            id="email"
            text="Email"
            value={email}
            onChange={setEmail}
          />
          <FloatLabel
            type="password"
            id="password"
            text="Senha"
            value={password}
            onChange={setPassword}
          />
          <DefaultButton description='Entrar' onClick={handleLogin} color='rgb(0, 0, 0, 1)' />
          <Span>OU</Span>
          <DefaultButton description='Cadastrar' onClick={handleLogin} color='rgb(150, 150, 150, 1)' />
          <Span href="/login-help" style={{ color: "rgba(0, 0, 0, 1)" }}>Esqueceu a senha?</Span>
        </>
      }
      footer={< CheckBox description="Lembre-se de mim" checked={false} onChange={setRememberMe} />}
    />
  )
}