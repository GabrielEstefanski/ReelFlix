import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "../../../../interfaces";

interface Props {
    category: string;
    image: Image[];
}

const Wrapper = styled.div`
    max-width: 20vw;
    overflow: hidden;

    .img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        max-width: 100vw; 
        height: 30vh;
      }
`
const Title = styled.div`
    color: #ffffff;
    display: block;
    text-align: center;
    margin-top: 1vw;
`

const ImageSlider: React.FC<Props> = ({ image, category }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        slideMargin: 40,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {image.map((image, _) => (
                <Wrapper>
                    <img src={image.url} alt={ category } />
                    {image.title && <Title>{ image.title }</Title>}
                </Wrapper>
            ))}
        </Slider>
    );
};

export default ImageSlider;