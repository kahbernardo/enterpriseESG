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

const ViewHome = () => {
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
        <S.Feed>
        <FeedInput icon={<svg.Profile height={122} width={122}/>}/>
        <Recommendations/>
        <Post/>
        <Post/>
        <Post/>
        </S.Feed>
      </S.Body> 
      <S.Reserved>Todos os direitos reservados </S.Reserved>
    </S.Container>
  );
};

export default ViewHome;
