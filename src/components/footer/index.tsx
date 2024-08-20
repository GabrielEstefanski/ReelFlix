import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const Footer = styled.div`
  border-top: 2px solid #fff;
  padding: 20px;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  left: 0;
  bottom: 0;
`;

export default function PageFooter() {
  const { t } = useTranslation();

  return (
    <Footer>
      &copy; {t('footer_text')}
    </Footer>
  );
}
