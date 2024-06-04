// EventDetails.tsx
import React from 'react';
import { Linking } from 'react-native';
import * as S from './styles';

interface EventDetailsProps {
  image: string;
  imageCaption: string;
  title: string;
  description: string;
  link: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ image, imageCaption, title, description, link }) => {
  return (
    <S.Container>
      <S.Title>Detalhes do Evento</S.Title>
      <S.EventImage source={{ uri: image }} />
      <S.ImageCaption>{imageCaption}</S.ImageCaption>
      <S.EventTitle>{title}</S.EventTitle>
      <S.EventDescription>{description}</S.EventDescription>
      <S.EventLink onPress={() => Linking.openURL(link)}>aqui</S.EventLink>
    </S.Container>
  );
};

export default EventDetails;
