import { useState, useEffect } from "react";
import styled from "styled-components";
import FloatLabel from "../../../components/floatLabel";
import RecaptchaTerms from "../../recaptchaTerms";
import DefaultButton from '../../../components/buttons/DefaultButton';
import CheckBox from "../../checkbox";
import Card from "../card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
`;

export default function LoginCard() {
  const { t } = useTranslation();
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
      if (savedRememberMe) setRememberMe(savedRememberMe);
    }
  }, [navigate]);

  function handlePlan() {
    navigate('/', { replace: true });
  }

  function handleLogin() {
    const storedEmail = localStorage.getItem('emailRegistered');
    const storedPassword = localStorage.getItem('passwordRegistered');

    if (email === storedEmail && password === storedPassword) {
      const token = 'fake-jwt-token';

      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberMe');
      }
      localStorage.setItem('token', token);
      navigate('/movies', { replace: true });
    } else {
      alert(t('incorrect_email_or_password'));
    }
  }

  return (
    <Card
      title={t('enter')}
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
            text={t('password')}
            value={password}
            onChange={setPassword}
          />
          <DefaultButton description={t('enter')} onClick={handleLogin} color='rgb(195, 125, 22, 1.0)' />
          <Span>{t('or')}</Span>
          <DefaultButton description={t('subscribe_now')} onClick={handlePlan} color='rgb(150, 150, 150, 1)' />
          <Span href="/login-help">{t('forget_password')}</Span>
        </>
      }
      footer={
        <div>
          <CheckBox description={t('remember_me')} checked={rememberMe} onChange={setRememberMe} />
          <RecaptchaTerms />
        </div>
      }
    />
  );
}
