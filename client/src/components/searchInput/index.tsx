import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

interface SearchInputProps {
    icon: React.ReactNode;
    placeholder?: string;
  }


const SearchInput: React.FC<SearchInputProps> = ({ icon, placeholder }) => {
    return (
      <S.InputWrapper>
        <S.IconWrapper>
          {icon}
        </S.IconWrapper>
        <S.Input type="text" placeholder={placeholder || 'Pesquisar'} />
      </S.InputWrapper>
    );
  };
  
  export default SearchInput;