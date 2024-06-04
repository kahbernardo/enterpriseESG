import { useContext, useEffect, useState } from 'react';
import * as S from './styles';

import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';

import Recommendations, { IRecommendation } from '@components/recommendations';
import PostList from '@components/postsList';
import svg from '@assets/svg';

const recommendations: IRecommendation[] = [
  { id: 1, src: require('../../assets/images/rec01.png'), alt: 'Sitiolândia' },
  { id: 2, src: require('../../assets/images/rec02.png'), alt: 'UNESCO' },
  { id: 3, src: require('../../assets/images/rec03.png'), alt: 'Liga Ventures' },
  { id: 4, src: require('../../assets/images/rec04.png'), alt: 'AILOS' },
];

const posts = [
  {
    id: 1,
    icon: svg.IconBand,
    title: 'TodosPelaEducação',
    content: 'A Educação só é de qualidade se for para todos. E isso significa assegurar o desenvolvimento pleno e garantir o acesso incondicional para todas as crianças e jovens em suas diversidades.',
    images: [
      require('../../assets/images/imgMeninaAutista.png'),
      require('../../assets/images/imgMeninaBasquete.png'),
    ],
  },
  {
    id: 2,
    icon: svg.Group2,
    title: 'GEduc',
    content: 'O GEduc é o evento de gestão educacional realizado pela Humus, empresa que atua com capacitação de instituições de ensino e desenvolvimento humano. Em 2024, o tema do encontro será “Educação por essência: construindo trajetórias”.',
    images: [
      require('../../assets/images/imgMeninaBasquete.png'),
    ],
  },
];

const ViewHome = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  return (
    <S.Container themeSelected={theme}>
      <S.Content themeSelected={theme}>
        <Recommendations data={recommendations}  />
        <PostList data={posts}  />
      </S.Content>
      
    </S.Container>
  );
};

export default ViewHome;
