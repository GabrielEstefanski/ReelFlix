import FloatLabel from "../../../../components/floatLabel";
import BandedRows from "../../../../components/bandedRow";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginField = styled.div`
  display: flex;
  height: 600px;
`

const LoginStructural = styled.ul`
  padding: 0;
  width: 100%;
`

const LoginContainer = styled.div`
  margin: 16px 0 20px;
`

const ButtonNext = styled.button`
  width: 100%;
  background: rgb(255, 124, 0);
  margin: 0;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  min-height: 3.5rem;
`

const FieldWrapper = styled.li`
  list-style: none;
  margin-bottom: 10px;
  margin-left: 0;
`

const ButtonNextContainer = styled.div`
  margin: 20px auto;
  max-width: 440px;
`

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

export default function LoginFieldPlan () {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [attemptedLogin, setAttemptedLogin] = useState(false);

  const handleEmailBlur = () => {
    setIsEmailValid(validateEmail(email))
    setEmailTouched(true)
  }

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  const handleLogin = () => {
    setAttemptedLogin(true);
    setIsEmailValid(validateEmail(email));

    if (isEmailValid && email && password) {
      localStorage.setItem('emailRegistered', email);
      localStorage.setItem('passwordRegistered', password);
      navigate('/success-plan', { replace: true });
    }
  };

  return (
    <>
     <LoginField>
        <LoginStructural>
          <LoginContainer>
            <FieldWrapper >
              <div onBlur={handleEmailBlur}>
                <FloatLabel
                  type="email"
                  id="email"
                  text="Email"
                  value={email}
                  onChange={setEmail}
                  invertColors
                />
              </div>
              {!isEmailValid && email && (
                <BandedRows content="Email inválido" />
              )}
               {attemptedLogin && !email && (
                <BandedRows content="Email é obrigatório" />
              )}
            </FieldWrapper>
            <FieldWrapper>
              <FloatLabel
                type="password"
                id="password"
                text="Insira sua senha"
                value={password}
                onChange={setPassword}
                invertColors
                hideShowPasswordButton
              />
              {attemptedLogin && !password && (
                <BandedRows content="A senha é obrigatória" />
              )}
            </FieldWrapper>
            <ButtonNextContainer>
            <div onBlur={handlePasswordBlur}>
              <ButtonNext 
                className="button"
                onClick={handleLogin}
              >
                Próximo
              </ButtonNext>
            </div>
            </ButtonNextContainer>
          </LoginContainer>
        </LoginStructural>
      </LoginField>
    </>
  )
}