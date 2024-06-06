import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import SearchInput from 'components/searchInput';
import * as S from './styles';
import svg from 'assets/svg';
import RecomendationCard from 'components/recomendationCard'

const mock = [
  {
    "title": "Sitiolandia",
    "address": "https://www.google.com/",
    "image": "/images/abigail-lima.png"
  },
  {
    "title": "Unesco",
    "address": "https://www.unesco.org/en",
    "image": "/images/carlos-silva.png"
  },
  {
    "title": "Liga Ventures",
    "address": "https://liga.ventures/",
    "image": "/images/mariana-souza.png"
  },
  {
    "title": "Ailos",
    "address": "https://www.ailos.coop.br/",
    "image": "/images/joao-pereira.png"
  },
  {
    "title": "Instituto Claro",
    "address": "https://www.institutoclaro.org.br/educacao/?utm_source=google&utm_medium=search&utm_campaign=always-on_trafego&utm_content=palavras-chave__educacao&gad_source=1&gclid=CjwKCAjwvIWzBhAlEiwAHHWgvchzB2GTnT5BCd4VcKjJSUTSLXELSYNd3gczQyLT51Yt4QoSuYimuRoCWY4QAvD_BwE",
    "image": "/images/ana-clara.png"
  }
]

type TProps = {
  active?: EActiveView;
};

type TTypeRecomendations = {
  label?: string;
  active?: EActiveView;
};

const Recommendations = ({ active = EActiveView.home }: TTypeRecomendations) => {
  const navigate = useNavigate();

  const data: TTypeRecomendations[] = [
    {
      label: 'About',
      active: EActiveView.about,
    },
  ];

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
      <S.Title>{'Recomendações'}</S.Title>
    <S.MenuWrapper>
      {mock.map((item, index) => (
        <RecomendationCard
          key={index}
          title={item.title}
          address={item.address}
          image={item.image}
        />
      ))}
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Recommendations;
