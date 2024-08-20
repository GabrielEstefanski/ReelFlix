import React from "react";
import icon from '../../images/icon.png';
import PlanButton from "../buttons/PlanButton";
import LoginButton from "../buttons/LoginButton";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
	background-color: #000;
	display: flex;
	justify-content: space-between;
	height: 55px;
	padding: 10px 2%;
	object-fit: cover;
	z-index: 100;
`

const Actions = styled.div`
	display: flex;
	align-items: center;
`

const Text = styled.div`
	color: #fff;
	padding-right: 20px;

	@media (max-width: 768px) {
		display: none;
	}
`

const Header = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<img src={icon} alt="icon"></img>
			<Actions>
				<Text>{t('watch_anytime')}</Text>
				<PlanButton />
				<LoginButton />
			</Actions>
		</Container>
	);
};

export default Header;