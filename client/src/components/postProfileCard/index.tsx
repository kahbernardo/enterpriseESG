import React from 'react';
import styled from 'styled-components';
import * as S from './styles';
import svg from 'assets/svg';

interface PostProfileCardProps {
  title?: string;
  address?: string;
  image?: string;
}


const PostProfileCard: React.FC<PostProfileCardProps> = ({ title, address, image }) => {
  return (
    <S.Card>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Address>{address}</S.Address>
    </S.Card>
  );
};

export default PostProfileCard;