import React from "react";
import image from '../../../../images/yellowjackets.jpg';
import styled from "styled-components";

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
`

const Title = styled.div`
		position: relative;
		font-size: 60px;
		top: 20%;
`

const Description = styled.h1`
	position: relative;
	margin-top: 15vh;
	font-size: 30px;
	font-weight: normal;
	color: #fff
}
`

const Contents = styled.div`
	text-align: center;
	align-items: center;
	height: 100%;
`

const FadeBottom = styled.div`
	height: 1vh;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 10vh;
	background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`

class Banner extends React.Component {
	render() {

		return (
			<BannerContainer style={{ backgroundImage: `url(${image})` }}>
				<Contents>
					<Title> REELFLIX </Title>
					<Description>
						Milhões de filmes, series e muito mais em um só lugar
					</Description>
				</Contents>
				<FadeBottom></FadeBottom>
			</BannerContainer>
		)
	}
}

export default Banner;