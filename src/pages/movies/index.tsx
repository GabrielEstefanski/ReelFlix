import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from './components/carousel';
import images from '../../data/imgs.json';
import Header from './components/header';
import Banner from './components/banner';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Bottom = styled.div`
  padding: 5rem;
`;

export default function Movies() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const categoryKeys = [
    'comedy',
    'action_adventure',
    'thriller',
    'action',
    'animation',
    'horror',
    'romance'
  ];
  
  const categories = categoryKeys.reduce((acc, key) => {
    acc[key] = {
      original: key,
      translated: t(`categories.${key}`)
    };
    return acc;
  }, {} as Record<string, { original: string, translated: string }>);

  const categoryArray = Object.values(categories);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Banner />
      {categoryArray.map(category => (
        <Carousel key={category.original} category={category} images={images.images}/>
      ))}
      <Bottom />
    </>
  );
}
