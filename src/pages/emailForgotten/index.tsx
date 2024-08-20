import styled from "styled-components"
import Card from "../../components/cards/card"
import FloatLabel from "../../components/floatLabel"
import { useTranslation } from "react-i18next"
import { useState } from "react";

export default function EmailForgotten() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  return(
    <>
      <Card
        title="Teste"
        inputField={
          <>
            <div>Please provide this information to help us find your account (all fields required):</div>
            <FloatLabel 
              type="email"
              id="email"
              text={t('enter_your_email')}
              value={email}
              onChange={setEmail}
            />
          </>
        }
        footer={
          <></>
        }
      />
    </>
  )
}