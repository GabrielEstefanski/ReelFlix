import { useEffect, useState } from 'react';
import styled from "styled-components"

import icon from '../../images/icon.png'
import Card from '../../components/cards/card';
import LinkButton from '../../components/LinkButton';
import FloatLabel from '../../components/floatLabel';
import RecaptchaTerms from '../../components/recaptchaTerms';
import { useTranslation } from 'react-i18next';
import DefaultButton from '../../components/buttons/DefaultButton';
import { useLocation } from 'react-router-dom';

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

export default function LoginHelp() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const location = useLocation();
  const [isEmailForgotten, setIsEmailForgotten] = useState(location.hash === '#forgot-email');

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

  useEffect(() => {
    const handleHashChange = () => {
      setIsEmailForgotten(window.location.hash === '#forgot-email');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  function handleSendEmail() {
    if (email){
      alert('Email sended!');
    }
  }

  return (
    <Container>
        <Image>
          <img src={icon} alt="" />
        </Image>
        <Card
          title={t('login_help.recover_password')}
          inputField={
            <>
              {!isEmailForgotten ? (
               <>
                  <div>{t('login_help.description_reset_password')}</div>
                  <FloatLabel
                    type="email"
                    id="email"
                    text={t('enter_your_email')}
                    value={email}
                    onChange={setEmail}
                  />
                  <DefaultButton description={t('email_me')} onClick={handleSendEmail} color='rgb(195, 125, 22, 1.0)' />
                </>
              ) : (
                <>
                123
                  <div>{t('login_help.description_reset_password')}</div>
                    <FloatLabel
                      type="email"
                      id="email"
                      text={t('enter_your_email')}
                      value={email}
                      onChange={setEmail}
                    />
                    <DefaultButton description={t('email_me')} onClick={handleSendEmail} color='rgb(195, 125, 22, 1.0)' />
                </>
              )}
            </>
          }
          footer={
            <div>
              <LinkButton text={t('login_help.idk_email')}  access='#forgot-email'/>              
              <RecaptchaTerms/>
            </div>
          }
        />
    </Container>
  )
}