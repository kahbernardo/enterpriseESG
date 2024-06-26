import React from 'react';
import styled from 'styled-components';
import * as S from './styles';
import svg from 'assets/svg';

interface ProfileCardProps {
  image: string;
  name: string;
  profession: string;
  location: string;
}


const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, profession, location }) => {
  return (
    <S.Container>
    <S.Card>
      <S.ImageWrapper>
        <S.Image src={image} alt={name} />
      </S.ImageWrapper>
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Profession>{profession}</S.Profession>
        <S.Location>
          <S.LocationIcon>📍</S.LocationIcon>
          {location}
        </S.Location>
        <S.Button>Conexões</S.Button>
      </S.Info>
    </S.Card>
    <svg.Edu/>
    </S.Container>
  );
};

export default ProfileCard;