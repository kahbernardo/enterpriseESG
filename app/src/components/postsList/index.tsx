import React from 'react';
import Posts from '../posts';
import * as S from './styles';


const PostList = ({ data }: any) => {
  return (
    <S.Container>
      {Array.isArray(data) && data.map((post:any) => (
        <Posts
          key={post.id}
          Logo={post.icon}
          title={post.title}
          content={post.content}
          images={post.images}
        />
      ))}
    </S.Container>
  );
};

export default PostList;
