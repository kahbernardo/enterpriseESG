import React from 'react';
import { View, Text, Image } from 'react-native';
import * as S from './styles';

const events = [
  {
    id: 1,
    title: 'GEduc',
    description: 'Em 2024, o tema do encontro será “Educação por essência: construindo trajetórias”. O evento ocorre entre os dias 3 e 5 de abril, no Centro de Convenções Rebouças, em São Paulo.',
    image: 'path-to-image/geduc.png'
  },
  {
    id: 2,
    title: 'Bett Brasil',
    description: 'A Bett Brasil é uma conferência e exposição de tecnologia educacional. Em 2024, a programação ocorrerá entre os dias 23 e 26 de abril, no Expo Center Norte, em São Paulo.',
    image: 'path-to-image/bett-brasil.png'
  },
  {
    id: 3,
    title: 'CBESP',
    description: 'CBESP é um evento promovido pelo Fórum das Entidades de Ensino Superior Particular. O tema central das discussões será “Políticas públicas educacionais: soluções criativas e inovadoras para um novo Brasil”.',
    image: 'path-to-image/cbesp.png'
  },
  {
    id: 4,
    title: 'Futuro Expo',
    description: 'A 2ª Edição do evento será dedicada a debater sobre o futuro do ensino brasileiro e ocorre entre os dias 14 e 17 de agosto no Distrito Anhembi, em São Paulo (SP).',
    image: 'path-to-image/futuro-expo.png'
  },
  {
    id: 5,
    title: 'FNESP',
    description: 'O 26º Fnesp irá ocorrer nos dias 18 e 19 de setembro de 2024, em São Paulo (SP). Acompanhe as atualizações do evento.',
    image: 'path-to-image/fnesp.png'
  },
  {
    id: 6,
    title: 'CIAED',
    description: 'Em 2023, o evento aconteceu no Rio de Janeiro (RJ), com o tema “Educação híbrida e hibridização da educação”. Neste ano o Ciaed ocorre em Brasília (DF), entre os dias 15 e 18 de setembro.',
    image: 'path-to-image/ciaed.png'
  }
];

const EventList = () => {
  return (
    <S.Container>
      <S.Title>Principais Eventos</S.Title>
      {events.map(event => (
        <S.EventContainer key={event.id}>
          <S.EventImage source={{ uri: event.image }} />
          <S.EventDetails>
            <S.EventTitle>{event.title}</S.EventTitle>
            <S.EventDescription>{event.description}</S.EventDescription>
          </S.EventDetails>
        </S.EventContainer>
      ))}
    </S.Container>
  );
};

export default EventList;
