import React from 'react';
import styled from 'styled-components';
import * as S from './styles';
import svg from 'assets/svg';

const PostBar: React.FC = () => {
  return (
    <S.Bar>
      <S.Button>
        <svg.Like height={32} width={32}/>
        Curtir
      </S.Button>
      <S.Button>
      <svg.Comment height={32} width={32}/>
        Comentar
      </S.Button>
      <S.Button>
      <svg.Share height={32} width={32}/>
        Compartilhar
      </S.Button>
    </S.Bar>
  );
};

export default PostBar;