import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import SearchInput from 'components/searchInput';
import * as S from './styles';
import svg from 'assets/svg';
import PostProfileCard from 'components/postProfileCard'
import PostBar from 'components/postBar'

const mock = 
  {
    title: "Todos Pela Educação",
    text: "A Educação só é de qualidade se for para todos. E isso significa assegurar o desenvolvimento pleno e garantir o acesso incondicional para todas as crianças e jovens em suas diversidades.",
    images: [
      "/images/parque1.png",
      "/images/parque2.png",
    ]
  }


type TProps = {
  active?: EActiveView;
};

type TTypePost = {
  title?: string;
  text?:string;
  images?:string[];
  active?: EActiveView;
};

const Post = ({ active = EActiveView.home }: TTypePost) => {
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
      <PostProfileCard/>
    <S.PostWrapper>
      <S.Title>
          {mock.title} 
      </S.Title>
      <S.Text>
          {mock.text} 
      </S.Text>
      <S.ImageContainer>
        {mock.images.map((image, index) => (
          <S.Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </S.ImageContainer>
      </S.PostWrapper>
      </S.InnerContainer>
      <PostBar/>
    </S.Container>
  );
};

export default Post;
