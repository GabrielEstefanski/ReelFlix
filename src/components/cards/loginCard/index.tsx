import { useState, useEffect } from "react";
import styled from "styled-components";
import LinkButton from "../../LinkButton";
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

const RecaptchaTermsOfUse = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 13px;
  margin-top: 11px;
`

const RecaptchaButton = styled.button`
  color: #0071eb;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
`

const ContainerReCaptcha = styled.p`
  display: bock;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
`

const TermsOfUseDisclosure = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: height .5s ease, opacity .5s ease;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  height: ${({ isVisible }) => (isVisible ? 'auto' : '0')};
`

export default function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(false);

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

  function toggleTermsVisibility() {
    setIsTermsVisible(prev => !prev);
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
      footer={
        <div>
          <CheckBox description="Lembre-se de mim" checked={rememberMe} onChange={setRememberMe} />
          <RecaptchaTermsOfUse>
            <ContainerReCaptcha>
              <span>
                Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. {' '}
                <RecaptchaButton onClick={toggleTermsVisibility}>Saiba mais.</RecaptchaButton>
              </span>
            </ContainerReCaptcha>
            <TermsOfUseDisclosure isVisible={isTermsVisible}>
              As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <LinkButton text="Política de Privacidade" access="https://policies.google.com/privacy"/> {' '}
              e <LinkButton text="Termos de Uso" access="https://policies.google.com/terms"/>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).
            </TermsOfUseDisclosure>
          </RecaptchaTermsOfUse>
        </div>
      }
    />
  )
}
