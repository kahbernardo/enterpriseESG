import React from 'react';
import styled from 'styled-components';

export const Bar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  font-size: 20px;
  padding: 2px;

  &:hover {
    color: #000;
  }

  & > svg {
    margin-right: 15px;
  }
`;
