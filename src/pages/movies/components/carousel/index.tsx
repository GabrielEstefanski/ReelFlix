import React from "react";
import ImageSlider from "../imageSlider";
import styled from "styled-components";

import { Image } from "../../../../interfaces";

const CarouselContainer = styled.div`
    width: 80%;
    margin-left: 10vw;
    color: rgba(255, 255, 255, 1);
    
`

const TitleCategory = styled.div`
    margin-top: 5vw;
    margin-left: 0.5vw;
    margin-bottom: 1vw;
    font-size: 25px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`

interface Props {
    images: Image[];
    category: string;
}

class Carousel extends React.Component<Props> {
    render() {
        const { category, images } = this.props;
        const filteredImages = images.filter(image => image.category.includes(category));
        return (
            <CarouselContainer>
                <TitleCategory>
                    {category}
                </TitleCategory>
                <ImageSlider category={category} image={filteredImages} />
            </CarouselContainer>
        )
    }
}

export default Carousel;