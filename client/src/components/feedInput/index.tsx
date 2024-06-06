import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

interface FeedInputProps {
    icon: React.ReactNode;
    placeholder?: string;
  }


const FeedInput: React.FC<FeedInputProps> = ({ icon, placeholder }) => {
    return (
      <S.InputWrapper>
        <S.IconWrapper>
          {icon}
        </S.IconWrapper>
        <S.Input type="text" placeholder={placeholder || 'No que você está pensando?'} />
      </S.InputWrapper>
    );
  };
  
  export default FeedInput;