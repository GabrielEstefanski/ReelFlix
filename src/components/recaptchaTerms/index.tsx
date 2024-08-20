import { Trans, useTranslation } from 'react-i18next';
import LinkButton from "../LinkButton";
import { useState } from "react";
import styled from "styled-components";

const RecaptchaTermsOfUse = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 13px;
  margin-top: 11px;
`;

const RecaptchaButton = styled.button`
  color: #0071eb;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
`;

const ContainerReCaptcha = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
`;
const TermsOfUseDisclosure = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'visible'
})<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: height .5s ease, opacity .5s ease;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  height: ${({ visible }) => (visible ? 'auto' : '0')};
`;

export default function RecaptchaTerms () {
  const { t } = useTranslation();
  const [isTermsVisible, setIsTermsVisible] = useState(false);

  function toggleTermsVisibility() {
    setIsTermsVisible(prev => !prev);
  }

  return (
    <>
      <RecaptchaTermsOfUse>
        <ContainerReCaptcha>
          <span>
            {t('recaptcha_description')} {' '}
            <RecaptchaButton onClick={toggleTermsVisibility}>{t('learn_more')}</RecaptchaButton>
          </span>
        </ContainerReCaptcha>
        <TermsOfUseDisclosure visible={isTermsVisible}>
          <Trans i18nKey="recaptcha_terms_disclosure" components={{
            1: <LinkButton text={t('privacy_policy')} access="https://policies.google.com/privacy" target="_blank"/>,
            3: <LinkButton text={t('terms_of_use')} access="https://policies.google.com/terms" target="_blank"/>
          }} />
        </TermsOfUseDisclosure>
      </RecaptchaTermsOfUse>
    </>
  )
}
