import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

interface PostProps {
  Logo: any;
  title: string;
  content: string;
  images: string[];
}

const Post: React.FC<PostProps> = ({ Logo, title, content, images }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo>{Logo && <Logo />}</S.Logo>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Content>{content}</S.Content>
      <S.ImagesContainer>
        {images.map((image: any, index) => {
          return (
            <Image
              key={index}
              source={image}
              resizeMode="contain"
            />
          );
        })}
      </S.ImagesContainer>
      <S.Footer>
        <S.FooterButton>
          <Icon name="thumbs-up" size={16} color="#888" />
          <S.FooterText>Curtir</S.FooterText>
        </S.FooterButton>
        <S.FooterButton>
          <Icon name="comment" size={16} color="#888" />
          <S.FooterText>Comentar</S.FooterText>
        </S.FooterButton>
        <S.FooterButton>
          <Icon name="share" size={16} color="#888" />
          <S.FooterText>Compartilhar</S.FooterText>
        </S.FooterButton>
      </S.Footer>
    </S.Container>
  );
};

export default Post;
