import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
	margin-left: 8px;
`

const LoginButton = styled.button`
	color: #fff;
	background-color: rgb(195, 125, 22, 1.0);
	border-width: 0.0625rem;
	border-style: solid;
	height: 35px;
	width: 80px;
	border: 1px solid rgb(132, 85, 15);
	transition: background-color 0.3s ease;

 &:hover {
      background-color:  rgb(229, 153, 28);
  }

  &:active {
    background-color: rgb(241, 194, 125);
  }
`;

const Button = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const loginPath = () => {
		navigate('/login');
	};

	return (
		<Wrapper>
			<LoginButton className="button" onClick={loginPath}>
				{t('enter')}
			</LoginButton>
		</Wrapper>
	);
};

export default Button;	