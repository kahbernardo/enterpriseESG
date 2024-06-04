import React from 'react';
import * as S from './styles';

interface EventItemProps {
  image: string;
  title: string;
  description: string;
}

const EventItem: React.FC<EventItemProps> = ({ image, title, description }) => {
  return (
    <S.EventItemContainer>
      <S.EventImage source={{ uri: image }} />
      <S.EventDetails>
        <S.EventTitle>{title}</S.EventTitle>
        <S.EventDescription>{description}</S.EventDescription>
      </S.EventDetails>
    </S.EventItemContainer>
  );
};

export default EventItem;
