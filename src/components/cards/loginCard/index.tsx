import { useState, useEffect } from "react";
import styled from "styled-components";
import FloatLabel from "../../../components/floatLabel";
import DefaultButton from '../../../components/buttons/DefaultButton';
import CheckBox from "../../checkbox";
import Card from "../card";
import { useNavigate } from "react-router-dom";

const Span = styled.a`
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.85);
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
    navigate('/', {replace: true});
  }

  function handleLogin() {
    const storedEmail = localStorage.getItem('emailRegistered');
    const storedPassword = localStorage.getItem('passwordRegistered');

    if (email === storedEmail && password === storedPassword) {
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberMe');
      }
      navigate('/movies', { replace: true });
    } else {
      alert('Email ou senha incorretos');
    }
  }


  return (
    <Card
      title="Entrar"
      inputField={
        <>
          <FloatLabel
            type="email"
            id="email"
            text="Email ou número de celular"
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
          <DefaultButton description='Entrar' onClick={handleLogin} color='rgb(195, 125, 22, 1.0)' />
          <Span>OU</Span>
          <DefaultButton description='Assine agora' onClick={handlePlan} color='rgb(150, 150, 150, 1)' />
          <Span href="/login-help">Esqueceu a senha?</Span>
        </>
      }
      footer={< CheckBox description="Lembre-se de mim" checked={rememberMe} onChange={setRememberMe} />}
    />
  )
}