import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import svg from 'assets/svg';
import { useEffect, useState } from 'react';
import serviceMovies from 'services/serviceMovies';
import ListMovies from 'components/listMovies';
import { IMovie } from 'domains/interfaces/api';
import ButtonGo from 'components/buttonGo';
import Menu from 'components/menu';
import FeedInput from 'components/feedInput';
import Recommendations from 'components/recommendations';
import ProfileCard from 'components/profileInfo';
import EventItem from 'components/eventItem';

const ViewEventList = () => {
  const navigate = useNavigate();

  const mock = [
    {
      title: 'GEduc',
      address: 'https://www.google.com/',
      text: 'Em 2024, o tema do encontro será “Educação por essência: construindo trajetórias”.O evento ocorre entre os dias 3 e 5 de abril, no Centro de Convenções Rebouças, em São Paulo',
      image: '/images/abigail-lima.png',
    },
    {
      title: 'Bett Brasil',
      address: 'https://www.unesco.org/en',
      text: 'A Bett Brasil é uma conferência e exposição de tecnologia educacional. Em 2024, a programação ocorrerá entre os dias 23 e 26 de abril, no Expo Center Norte, em São Paulo.',
      image: '/images/carlos-silva.png',
    },
    {
      title: 'CBESP',
      address: 'https://liga.ventures/',
      text: 'CBESP é um evento promovido pelo Fórum das Entidades do Ensino Superior Particular.O tema central das discussões será “Políticas públicas educacionais: soluções criativas e inovadoras para um novo Brasil',
      image: '/images/mariana-souza.png',
    },
    {
      title: 'Futuro Expo',
      address: 'https://www.ailos.coop.br/',
      text: 'A 2° Edição do evento será dedicada a debater sobre o futuro do ensino brasileiro e ocorre entre os dias 14 e 17 de agosto no Distrito Anhembi, em São Paulo (SP).',
      image: '/images/joao-pereira.png',
    },
    {
      title: 'FNESP',
      address:
        'https://www.institutoclaro.org.br/educacao/?utm_source=google&utm_medium=search&utm_campaign=always-on_trafego&utm_content=palavras-chave__educacao&gad_source=1&gclid=CjwKCAjwvIWzBhAlEiwAHHWgvchzB2GTnT5BCd4VcKjJSUTSLXELSYNd3gczQyLT51Yt4QoSuYimuRoCWY4QAvD_BwE',
      text: 'O 26º Fnesp irá ocorrer nos dias 18 e 19 de setembro de 2024, em São Paulo (SP). Acompanhe as atualizações do evento.',
      image: '/images/ana-clara.png',
    },
  ];

  const onLoad = async () => {
    // const data = await serviceMovies.onMovies();
    // setList(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <S.Container>
      <Menu />
      <S.Body>
        <ProfileCard
          image="/path/to/image.png"
          name="Abigail Lima"
          profession="Educadora"
          location="São Paulo"
        />
        <S.Col>
          <S.Header>Os Principais eventos educacionais</S.Header>
          {mock.map((item, index) => (
            <EventItem
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          ))}
        </S.Col>
      </S.Body>
      <S.Reserved>Todos os direitos reservados </S.Reserved>
    </S.Container>
  );
};

export default ViewEventList;
