import React from "react";
import image from '../../images/banner-photo.jpg';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const BannerContainer = styled.div`
	position: relative;
	background-size: cover;
	background-position: center center;
	object-fit: cover;
	color: rgb(255, 255, 255);
	height: 30rem;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
	}
`;

const Title = styled.h1`
	position: relative;
	font-size: 60px;
	top: 20%;
	color: #fff;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	font-family: 'Montserrat', sans-serif; 
	-webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
`;

const Description = styled.h2`
	position: relative;
	margin-top: 15vh;
	font-size: 30px;
	font-weight: normal;
	color: #fff;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
	font-family: 'Roboto', sans-serif;
`;

const Contents = styled.div`
	text-align: center;
	align-items: center;
	height: 100%;
`;

const FadeBottom = styled.div`
	height: 1vh;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 10vh;
	background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`;

const Banner = () => {
	const { t } = useTranslation();

	return (
		<BannerContainer style={{ backgroundImage: `url(${image})` }}>
			<Contents>
				<Title>REELFLIX</Title>
				<Description>
					{t('reelflix_description')}
				</Description>
			</Contents>
			<FadeBottom />
		</BannerContainer>
	);
}

export default Banner;
