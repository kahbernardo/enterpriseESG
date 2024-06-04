import styled from 'styled-components/native';

export const RecommendationsContainer = styled.View`
  padding: 16px;
  width: 100%;
`;

export const RecommendationsTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const RecommendationsList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RecommendationItem = styled.View`
  align-items: center;
  justify-content: center;  
`;

export const RecommendationImage = styled.Image`
  max-width: 100%;
  max-height: 100%;
`;
