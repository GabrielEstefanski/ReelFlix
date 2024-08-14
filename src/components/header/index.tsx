import React from "react";
import icon from '../../images/icon.png';
import PlanButton from "../buttons/PlanButton";
import LoginButton from "../buttons/LoginButton";
import styled from "styled-components";

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

export default class Header extends React.Component {
	render() {
		return (
			<Container>
				<>
					<img src={icon} alt="icon"></img>
				</>
				<Actions>
					<Text>Assista onde e quando quiser</Text>
					<PlanButton />
					<LoginButton />
				</Actions>
			</Container>
		)
	}
}
