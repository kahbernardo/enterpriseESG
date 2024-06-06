import React from 'react';
import styled from 'styled-components';
import * as S from './styles';
import svg from 'assets/svg';

interface RecomendationCardProps {
  title?: string;
  address?: string;
  image?: string;
}


const RecomendationCard: React.FC<RecomendationCardProps> = ({ title, address, image }) => {
  return (
    <S.Card>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Address>{address}</S.Address>
    </S.Card>
  );
};

export default RecomendationCard;