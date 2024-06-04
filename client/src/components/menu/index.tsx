import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import InputDefault from 'components/inputDefault';
import * as S from './styles';
import svg from 'assets/svg';
type TProps = {
  active?: EActiveView;
};

type TTypeMenu = {
  label: string;
  active: EActiveView;
};

const Menu = ({ active = EActiveView.home }: TProps) => {
  const navigate = useNavigate();

  const data: TTypeMenu[] = [
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
      <svg.HomeHeader />
    <S.MenuWrapper>
      <S.MenuItem>
        <svg.Globo height={87} width={87}/>
      </S.MenuItem>
      <S.MenuItem><svg.IconHome/>Home</S.MenuItem>
      <S.MenuItem><svg.IconSchedule/>Eventos</S.MenuItem>
      <S.MenuItem><svg.IconOnu/>ONU</S.MenuItem>
      <S.SearchWrapper>
        <input type="text" placeholder="Pesquisar" />
      </S.SearchWrapper>
      <S.MenuItem>
        <svg.Profile></svg.Profile>
      </S.MenuItem>
    </S.MenuWrapper>
    </S.Container>
  );
};

export default Menu;
