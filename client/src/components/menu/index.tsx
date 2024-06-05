import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import SearchInput from 'components/searchInput';
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
        <svg.Globo height={65} width={65}/>
      </S.MenuItem>
      <S.MenuItem><svg.IconHome height={115} width={115}/></S.MenuItem>
      <S.MenuItem><svg.IconSchedule height={65} width={65}/></S.MenuItem>
      <S.MenuItem><svg.IconOnu height={75} width={75}/></S.MenuItem>
      <S.SearchWrapper>
        <SearchInput  icon={<svg.Search />} placeholder="Pesquisar"/>
      </S.SearchWrapper>
      <S.ProfileItem>
        <svg.Profile></svg.Profile>
      </S.ProfileItem>
    </S.MenuWrapper>
    </S.Container>
  );
};

export default Menu;
