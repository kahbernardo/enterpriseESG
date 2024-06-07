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
import Post from 'components/post'

const ViewEventDetail = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<IMovie[]>();

  const onLoad = async () => {
    const data = await serviceMovies.onMovies();
    setList(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <S.Container>
        <Menu/>
       <S.Body>
        <ProfileCard         
        image="/path/to/image.png"
        name="Abigail Lima"
        profession="Educadora"
        location="São Paulo"/>
        <S.Col>
        <S.Header>Detalhes do Evento</S.Header>
        <S.Image/>
        <S.Title>GEduc</S.Title>
        <S.Text>{`O GEduc é um evento de gestão educacional realizado pela Humus, empresa que atua com capacitação de instituições de ensino e desenvolvimento humano. Em 2024, o tema do encontro será “Educação por essência: construindo trajetórias.
O evento ocorre entre os dias 3 e 5 de abril, no Centro de Convenções Rebouças, em São Paulo, com a presença de diversos palestrantes da área da educação, além de estandes, mentorias e outras atividades. As inscrições podem ser feitas aqui.`}</S.Text>
        </S.Col>
      
      </S.Body> 
      <S.Reserved>Todos os direitos reservados </S.Reserved>
    </S.Container>
  );
};

export default ViewEventDetail;
