import image from '../../../../images/lacasapapel.png';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BannerContainer = styled.div`
	position: relative;
	background-size: cover;
	background-position: center center;
	object-fit: cover;
	color: rgb(255, 255, 255);
	height: 30rem;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7));
    z-index: 1;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
    z-index: 2;
`

const Button = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    z-index: 2;
`

const Description = styled.h1`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 180px;
    z-index: 2;
`

const Contents = styled.div`
    color: rgb(255, 255, 255);
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
    position: relative;
    z-index: 2;
`

const FadeBottom = styled.div`
    height: 1vh;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
    z-index: 1;
`

const Banner = () => {
    const { t } = useTranslation();

    return (
        <BannerContainer style={{ backgroundImage: `url(${image})` }}>
            <Overlay />
            <Contents>
                <Title>{t('banner.title')}</Title>
                <>
                    <Button>{t('banner.watchButton')}</Button>
                    <Button>{t('banner.myListButton')}</Button>
                </>
                <Description>{t('banner.description')}</Description>
            </Contents>
            <FadeBottom />
        </BannerContainer>
    )
}

export default Banner;
