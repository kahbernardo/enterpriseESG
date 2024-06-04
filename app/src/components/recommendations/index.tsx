import React from 'react';
import * as S from './styles';

export interface IRecommendation {
  id: number;
  src: string;
  alt: string;
}

const Recommendations = ({ data }: any) => {
  return (
    <S.RecommendationsContainer>
      <S.RecommendationsTitle>Recomendações</S.RecommendationsTitle>
      <S.RecommendationsList>
        {Array.isArray(data) && data.map((item) => (
          <S.RecommendationItem key={item.id}>
            <S.RecommendationImage source={item.src} />
          </S.RecommendationItem>
        ))}
      </S.RecommendationsList>
    </S.RecommendationsContainer>
  );
};

export default Recommendations;
