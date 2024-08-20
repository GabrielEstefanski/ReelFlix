import { useTranslation } from 'react-i18next';
import icon from '../../../../images/icon.png';
import styled from "styled-components";

const Container = styled.div`
	background-color: #000000;
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

const LinkPath = styled.a`
	color: #fff;
	font-size: 19px;
	padding-right: 20px;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`

export default function Header (){
	const { t } = useTranslation();

	const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('token');
		window.location.href = '/';
	}

		return (
			<Container>
				<img src={icon} alt="icon"></img>
				123
				<Actions>
					<LinkPath onClick={handleLogout}>
						{t('exit')}
					</LinkPath>
				</Actions>
			</Container>
		)
}
