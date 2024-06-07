import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import SearchInput from 'components/searchInput';
import * as S from './styles';
import svg from 'assets/svg';
import RecomendationCard from 'components/recomendationCard';

type TProps = {
  active?: EActiveView;
};

type TTypeEventItem = {
  title?: string;
  text?: string;
  image?: string;
  active?: EActiveView;
};

const EventItem = ({
  title,
  text,
  image,
  active = EActiveView.home,
}: TTypeEventItem) => {
  const navigate = useNavigate();

  const Button = ({
    label,
    routePath,
    active = false,
  }: {
    routePath: string;
    label?: string;
    active?: boolean;
  }) => (
    <S.Button active={active} onClick={() => navigate(`/${routePath}`)}>
      {label}
    </S.Button>
  );

  return (
    <S.Container>
      <S.InnerContainer>
        {image && <RecomendationCard image={image} />}
        <S.PostWrapper>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
          <S.Link>Saiba mais...</S.Link>
        </S.PostWrapper>
      </S.InnerContainer>
    </S.Container>
  );
};

export default EventItem;
