import React from "react";
import ImageSlider from "../imageSlider";
import styled from "styled-components";
import { Image } from "../../../../interfaces";
import usePreloadImages from "../../../../hooks/usePreloadImages";

const CarouselContainer = styled.div`
  width: 80%;
  margin-left: 10vw;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5vw;
  }
`;

const TitleCategory = styled.div`
  margin-top: 5vw;
  margin-left: 0.5vw;
  margin-bottom: 1vw;
  font-size: 25px;
  transition: font-size 0.3s ease;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const LoadingSpinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid orange;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface Props {
  images: Image[];
  category: string;
}

const Carousel: React.FC<Props> = ({ category, images }) => {
  const filteredImages = images.filter((image) =>
    image.category.includes(category)
  );

  const imageUrls = filteredImages.map(image => image.url);
  const isLoaded = usePreloadImages(imageUrls);

  return (
    <CarouselContainer>
      <TitleCategory>{category}</TitleCategory>
      {isLoaded ? (
        <ImageSlider category={category} image={filteredImages} />
      ) : (
        <LoadingSpinner />
      )}
    </CarouselContainer>
  );
};

export default Carousel;